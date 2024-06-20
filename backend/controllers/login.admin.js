import Admin from "../models/admin.schema.js";
import jwt from "jsonwebtoken"
const login = async function (req, res) {

  const { userName, password } = req.body


  if (!userName || !password) {
    return res.status(400).json({
      msg: "every field is required"
    })
  }

  let findUser = await Admin.findOne({ userName })
  if (!findUser) {
    return res.status(400).json({
      msg: "Invalid User Name"
    })
  } else {
    let checkPassword = await findUser.checkPassword(password)
    if (!checkPassword) {
      return res.status(400).json({
        msg: "Invalid Password"
      })
    } else {
      let tokens = jwt.sign({
        id: findUser._id, email: findUser.email, userName: findUser.userName
      },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
      )

      return res.status(200).cookie("accessToken",tokens,{
        httpOnly: true,
        secure: true,
        sameSite: "none",
        path: "/",
      }).json({
        msg:"successfully logged in"
      })
    }
  }
}

export default login;