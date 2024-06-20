import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs"
const adminSchema = new Schema({
  fullName: {
    type: String,
    lowercase: true,
    required: [true, "full Name is required"],

  },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true
  },
  userName: {
    type: String,
    required: [true, "a username is required"],
    trim: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "a password is required"],
  }
}, {
  timestamps: true
})



adminSchema.methods.checkPassword = async function (password) {

  return await bcrypt.compare(password, this.password)

}
const Admin = new mongoose.model("Admin", adminSchema)

export default Admin  