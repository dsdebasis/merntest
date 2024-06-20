import "dotenv/config"

import express from "express"
import routes from "./routes/admin.js";
import connectDB from "./db/db.config.js";
import cookieParser from "cookie-parser";
import cors from "cors"
const app = express()

const PORT = process.env.PORT;

let options = {
  origin: process.env.FRONTEND_ORIGIN,
  credentials: true, 
}

app.use(express.json())
app.use(express.urlencoded({
  extended: true,
  limit: "16kb"
}))
app.use(cors(options))
app.use(cookieParser())
app.get("/server",(req,res)=>{
  return res.status(200).json({
    message:"success "
  })
})
app.use("/api/v1",routes)

connectDB().then(()=>{

  app.on("error",()=>{
    console.log("error in express at index.js file at the root")
  })

  app.listen(PORT,()=>{
    console.log(`server is connected at ${PORT}`)
  })
})

