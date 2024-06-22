import jwt from "jsonwebtoken"

const authenticate = async function (req, res, next) {


  let cookies = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
  // console.log(cookies)
  let verify

  if (cookies) {
    verify = jwt.verify(cookies, process.env.ACCESS_TOKEN_SECRET)
  } else{
    return res.status(400).json({
      msg:"No Cookies found to verify"
    })
  }
  if (!verify) {
    return res.status(400).json({
      msg: "please login"
    })
  } else {
    next()
  }
}

export default authenticate;