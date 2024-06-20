import mongoose from "mongoose";

const connectDB = async function () {


  let uri = process.env.MONGODB_URI
  try {
    const connectionDetails = await mongoose.connect(`${uri}`)
    console.log("successfully db connected", connectionDetails.connection.host)
  } catch (error) {
    console.log("error while connecting data base", error)
    process.exit(1)
  }
}

export default connectDB;