import mongoose from "mongoose"
import Admin from "../models/admin.schema.js"
import bcrypt from "bcryptjs"
const createAdmin = async function (req, res) {

  const { fullName, email, userName, password, confirmPassword } = req.body
  if (!fullName || !email || !userName || !password || !confirmPassword) {
    return res.status(400).json({
      msg: "Everry field is required"
    })
  }

  const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let result = emailValidator.test(email);

  if (!result) {
    return res.status(400).json({
      msg: "Please provide an valid email"
    })
  }


  let newAdminByEmail = await Admin.findOne({ email })

  if (newAdminByEmail) {
    return res.status(400).json({
      msg: "email id is already used"
    })
  }

  let newAdminByUserName = await Admin.findOne({  userName})

  if (newAdminByUserName) {
    return res.status(400).json({
      msg: "user name is already registered"
    })
  }
  if (password !== confirmPassword) {
    return res.status(400).json({
      msg: "password and confirm_Passwrod are not matching"
    })
  }
  let hashPassword = await bcrypt.hash(confirmPassword, 10)
  let newUser;

  try {
    newUser =await Admin.create({
      fullName: fullName,
      email: email,
      userName: userName,
      password: hashPassword
    })
    return res.status(201)
      .cookie("admin_userName", newUser.userName, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        path: "/",
      })
      .json({
        msg: "Admin Account created Successfully",
        UserName: newUser.userName
      })
  } catch (error) {
    console.log(error)
    return res.status(500).json({

      msg: "error while creating account"
    })
  }
}


export default createAdmin;