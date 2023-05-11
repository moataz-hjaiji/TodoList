"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tasks_1 = __importDefault(require("./task/tasks"));
const user_1 = __importDefault(require("./user/user"));
const auth_1 = require("./../../Controller/auth");
const Auth_1 = require("./../../Middleware/Auth");
const router = express_1.default.Router();
router.post('/signup', auth_1.signup);
router.post('/login', auth_1.login);
router.use('/tasks', Auth_1.verifyToken, tasks_1.default);
router.use('/users', user_1.default);
exports.default = router;
