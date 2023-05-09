import asyncHandler from './../helpers/asyncHandler';
import UserRepo from '../db/repository/user';

export const getUser = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const user = await UserRepo.findById(userId);
  if (!user)
    res
      .status(401)
      .json({ status: 'failed', message: 'There no user with this id' });
  res.status(200).json({
    status: 'success',
    data: {
      user,
    },
  });
});
export const createUser = asyncHandler(async (req, res) => {
  const userData = req.body;
  const newUser = await UserRepo.createUser({
    ...userData,
  });
  res.status(201).json({
    status: 'success',
    data: { newUser },
  });
});
