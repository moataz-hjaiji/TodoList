"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasksModel = void 0;
const mongoose_1 = require("mongoose");
const tasksSchema = new mongoose_1.Schema({
    title: String,
    description: String,
    comments: Array,
    madeById: String,
    sharedWith: Array,
}, { timestamps: true });
exports.tasksModel = (0, mongoose_1.model)('tasks', tasksSchema);
