"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tasks_1 = require("./../Model/tasks");
class tasksRepo {
    static async getAllTasks() {
        return await tasks_1.tasksModel.find();
    }
    static async getTask(id) {
        return tasks_1.tasksModel.findById(id);
    }
    static async createTask(task) {
        const newTask = await tasks_1.tasksModel.create(task);
        return newTask;
    }
    static async updateTask(id, task) {
        return tasks_1.tasksModel.findByIdAndUpdate({ _id: id }, { ...task }, { new: true });
    }
    static async deleteTask(id) {
        await tasks_1.tasksModel.findByIdAndDelete(id);
    }
    static async getAllCommentsTask(id) {
        const task = await this.getTask(id);
        return task?.comments;
    }
    static async getTaksSharedWith(id) {
        const tasks = await tasks_1.tasksModel.find({ sharedWith: { $in: [id] } });
        console.log({ task: tasks });
        return tasks;
    }
}
exports.default = tasksRepo;
