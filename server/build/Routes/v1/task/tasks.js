"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validator_1 = __importDefault(require("./../../../helpers/validator"));
const schema_1 = __importDefault(require("./schema"));
const tasksController_1 = require("../../../Controller/tasksController");
const router = express_1.default.Router();
router.get('/', tasksController_1.getAlltasks);
router.post('/', (0, validator_1.default)(schema_1.default), tasksController_1.createTask);
router.get('/:id', tasksController_1.getTask);
router.put('/:id', tasksController_1.updateTask);
router.put('/:id/comment', tasksController_1.getAllCommentsTask);
router.patch('/:id/share', tasksController_1.sharedMyTask);
router.get('/shared/me', tasksController_1.getMySharedTask);
exports.default = router;
