import mongoose from "mongoose";

//Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
  });


export default mongoose.model('User', userSchema)