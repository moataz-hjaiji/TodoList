"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.signup = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const asyncHandler_1 = __importDefault(require("./../helpers/asyncHandler"));
const user_1 = __importDefault(require("./../db/repository/user"));
const generateToken_1 = require("./../helpers/generateToken");
exports.signup = (0, asyncHandler_1.default)(async (req, res) => {
    const { firstName, lastName, email, password, passwordConfirm } = req.body;
    if (!firstName || !email || !password || !lastName || !passwordConfirm) {
        res.status(400).json({
            status: 'failed',
            message: 'Please provide firstName ,  email and password!',
        });
    }
    const salt = await bcrypt_1.default.genSalt();
    const passwordHash = await bcrypt_1.default.hash(password, salt);
    const newUser = await user_1.default.createUser({
        firstName,
        lastName,
        email,
        password: passwordHash,
    });
    const token = (0, generateToken_1.generateToken)(newUser._id);
    res.status(201).json({
        status: 'success',
        token,
        data: newUser,
    });
});
exports.login = (0, asyncHandler_1.default)(async (req, res) => {
    const { email, password } = req.body;
    const user = await user_1.default.findByObj({ email });
    if (!user || !user.password) {
        return res.status(400).json({
            status: 'failed',
            message: 'email or password is invalid',
        });
    }
    const isMatch = await bcrypt_1.default.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({
            status: 'failed',
            message: 'Invalid credentials',
        });
    }
    const token = jsonwebtoken_1.default.sign({ id: user._id }, 'THIS_is_0321654016545646532_VERY_strong_KEY', { expiresIn: '2d' });
    req.user = user;
    res.status(200).json({
        status: 'success',
        token,
        data: user,
    });
});
