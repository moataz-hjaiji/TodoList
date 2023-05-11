"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
exports.default = joi_1.default.object({
    title: joi_1.default.string().min(2).required(),
    description: joi_1.default.string().min(2).required(),
    comments: joi_1.default.array().optional(),
    sharedWith: joi_1.default.array().optional(),
});
