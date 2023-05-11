"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const DATABASE = process.env.DATABASE || ' ';
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || ' ';
const DB = DATABASE
    ? DATABASE.replace('<PASSWORD>', DATABASE_PASSWORD)
    : 'undefined';
const PORT = process.env.PORT || 3000;
mongoose_1.default
    .connect(DB)
    .then(() => {
    console.log('DB connection successful!');
})
    .then(() => {
    app_1.default.listen(PORT, () => {
        console.log(`App running on PORT ${PORT}...`);
    });
})
    .catch((err) => {
    console.log('Error : ', err);
});
