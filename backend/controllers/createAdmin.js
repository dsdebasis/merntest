import mongoose from "mongoose"
import Admin from "../models/admin.schema.js"
import bcrypt from "bcryptjs"
const createAdmin = async function (req, res) {

  const { full_name, email, user_Name, password, confirmPassword } = req.body
  if (!full_name || !email || !user_Name || !password || !confirmPassword) {
    return res.status(400).json({
      message: "Everry field is required"
    })
  }

  const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let result = emailValidator.test(email);

  if(!result ) {
    return res.status(400).json({
      msg:"Please provide an valid email"
    })
  }
  if (password !== confirmPassword) {
    return res.status(400).json({
      message: "password and confirm_Passwrod are not matching"
    })
  }

  let newAdminByEmail = await Admin.findOne({ email })

  if (newAdminByEmail) {
    return res.status(400).json({
      msg: "email id is already used"
    })
  }

  let newAdminByUserName = await Admin.findOne({ user_Name })

  if (newAdminByUserName) {
    return res.status(400).json({
      msg: "user name is already registered"
    })
  }

  let hashPassword =await bcrypt.hash(confirmPassword,10)
  let newUser =new Admin({
    fullName: full_name,
    email: email,
    userName: user_Name,
    password: hashPassword
  })
 
  try {
    await newUser.save()
    return res.status(201)
      .cookie("admin_userName", newUser.userName, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        path: "/",
      })
      .json({
        message: "Admin Account created Successfully",
        UserName: newUser.userName
      })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      error,
      msg:"error while creating account"
    })
  }
}


export default createAdmin;