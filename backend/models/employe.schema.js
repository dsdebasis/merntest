import mongoose, { Schema } from "mongoose"
const employeSchema = new Schema({
  name: {
    type: String,
    required: [true, "A Name is required"],
    lowercase: true,

  },
  email: {
    type: String,
    required: [true, "A email is required"],
    lowercase: true,
    trim: true,
    unique: true,

  },
  mobileNo: {
    type: Number,
    required: [true, "A mob no. is required"],
    unique: true
  },
  designation: {
    type: String,
    required: [true, "A designation is required"],
    enum: ['HR', 'Manager', 'sales']
  },
  gender: {
    type: String,
    required: [true, "A gender is required"],
    enum: ['M', 'F']
  },
  course: {
    type:String,
    required: [true, "A Course is required"],
    enum:['MCA','BCA','BSC']
  },
  img: {
    required: [true, "A img is required"],
    type:String
  }

},{
  timestamps:true
})

const Employe = mongoose.model("Employe",employeSchema)

export default Employe;