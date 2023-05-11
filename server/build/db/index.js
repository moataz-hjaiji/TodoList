"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./repository/user"));
const tasks_1 = __importDefault(require("./repository/tasks"));
exports.default = { UserRepo: user_1.default, tasksRepo: tasks_1.default };
