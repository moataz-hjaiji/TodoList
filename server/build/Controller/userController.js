"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUser = void 0;
const asyncHandler_1 = __importDefault(require("./../helpers/asyncHandler"));
const user_1 = __importDefault(require("../db/repository/user"));
exports.getUser = (0, asyncHandler_1.default)(async (req, res) => {
    const userId = req.params.id;
    const user = await user_1.default.findById(userId);
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
exports.createUser = (0, asyncHandler_1.default)(async (req, res) => {
    const userData = req.body;
    const newUser = await user_1.default.createUser({
        ...userData,
    });
    res.status(201).json({
        status: 'success',
        data: { newUser },
    });
});
