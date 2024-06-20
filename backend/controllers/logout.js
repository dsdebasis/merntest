const logout = (req, res) => {
  const user = req.cookies
console.log(user)
  if(!user){
    return res.status(400).json({
      msg:"no cookies found"
    })
  }
  const options = {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: "/",
    expires:new Date(Date.now() )
  }

  return res.status(200)
    .clearCookie("accessToken", options)
    .json({msg: "successfully logout"})
}

export default logout;