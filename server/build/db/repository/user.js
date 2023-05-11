"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../Model/user");
class UserRepo {
    static async findById(id) {
        return await user_1.userModel.findById(id);
    }
    static async createUser(user) {
        const newUser = await user_1.userModel.create({
            ...user,
        });
        return newUser;
    }
    static async findByObj(obj) {
        return await user_1.userModel.findOne(obj);
    }
    static async findUserTasks(id) {
        const user = await user_1.userModel.findById(id);
        return user?.tasks;
    }
    static async deleleteUser(id) {
        const user = await user_1.userModel.findById(id);
        user.deleteAT = new Date();
    }
}
exports.default = UserRepo;
