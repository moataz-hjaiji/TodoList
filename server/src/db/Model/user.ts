import { string } from 'joi';
import { Schema, Document, model } from 'mongoose';
import Tasks from './tasks';

export default interface User extends Document {
  name: string;
  email: String;
  password: String;
  passwordConfirm: string;
  tasks?: Tasks[];
  deleteAT: Date | null;
}

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: { type: String, required: true },
  password: String,
  passwordConfirm: String,
  tasks: { type: Array, default: [] },
  deleteAT: { type: Date, default: null },
});
export const userModel = model<User>('User', userSchema);
