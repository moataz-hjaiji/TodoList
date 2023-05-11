"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentModel = void 0;
const mongoose_1 = require("mongoose");
const commentSchemma = new mongoose_1.Schema({
    createdBy: String,
    content: String
});
exports.commentModel = (0, mongoose_1.model)('comment', commentSchemma);
