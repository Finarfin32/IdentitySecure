import { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: String,
  token: String,
});
const UserModel = model("UserModel", userSchema);
export default UserModel;
