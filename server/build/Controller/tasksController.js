"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMySharedTask = exports.sharedMyTask = exports.deleteTask = exports.updateTask = exports.getAllCommentsTask = exports.getTask = exports.createTask = exports.getAlltasks = void 0;
const asyncHandler_1 = __importDefault(require("./../helpers/asyncHandler"));
const tasks_1 = __importDefault(require("./../db/repository/tasks"));
exports.getAlltasks = (0, asyncHandler_1.default)(async (req, res) => {
    const tasks = await tasks_1.default.getAllTasks();
    res.status(200).json({ status: 'success', data: tasks });
});
exports.createTask = (0, asyncHandler_1.default)(async (req, res) => {
    const madeById = req.user.id;
    const newTask = await tasks_1.default.createTask({ ...req.body, madeById });
    console.log(newTask);
    res.status(201).json({ status: 'success', data: newTask });
});
exports.getTask = (0, asyncHandler_1.default)(async (req, res) => {
    const { id } = req.params;
    const task = await tasks_1.default.getTask(id);
    res.status(200).json({ status: 'success', data: task });
});
exports.getAllCommentsTask = (0, asyncHandler_1.default)(async (req, res) => {
    const { id } = req.params;
    const taskComments = await tasks_1.default.getAllCommentsTask(id);
    res.status(200).json({ status: 'success', data: { taskComments } });
});
exports.updateTask = (0, asyncHandler_1.default)(async (req, res) => {
    const { id } = req.params;
    const task = req.body;
    const newTask = await tasks_1.default.updateTask(id, { ...task });
    res.status(201).json({ status: 'success', data: newTask });
});
exports.deleteTask = (0, asyncHandler_1.default)(async (req, res) => {
    const { id } = req.params;
    await tasks_1.default.deleteTask(id);
    res.status(204).json({ status: 'success', data: null });
});
exports.sharedMyTask = (0, asyncHandler_1.default)(async (req, res) => {
    const taskId = req.params.id;
    const userId = req.user.id;
    console.log({ taskId, userId });
    const task = await tasks_1.default.getTask(taskId);
    console.log({ task });
    const { sharedWith, title, description, comments, madeById } = task;
    const updatedTask = await tasks_1.default.updateTask(taskId, {
        sharedWith: sharedWith.concat(userId),
        title,
        description,
        comments,
        madeById,
    });
    res.status(200).json({ status: 'success', task: updatedTask });
});
exports.getMySharedTask = (0, asyncHandler_1.default)(async (req, res) => {
    const myselfId = req.user.id;
    const userSharedTasksWith = await tasks_1.default.getTaksSharedWith(myselfId);
    console.log({
        tasks: await tasks_1.default.getTaksSharedWith('6453deca02218d74b0f546db'),
    });
    res.status(200).json({
        status: 'success',
        data: {
            tasks: userSharedTasksWith,
        },
    });
});
