"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, required: true },
    password: String,
    passwordConfirm: String,
    tasks: { type: Array, default: [] },
    deleteAT: { type: Date, default: null },
});
exports.userModel = (0, mongoose_1.model)('User', userSchema);
