import Employe from "../models/employe.schema.js"
const createEmploye = async function (req, res) {

  const { name, email, mobileNo, gender, course, designation } = req.body
  const files = req.files

  if (!name || !email || !mobileNo || !gender || !course || !designation) {
     return res.status(400).json({
      msg:"Every Field Is required"
     })
  }

   const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   emailValidator.test(email)
   if(!emailValidator){

    return res.status(400).json({
      msg:"Please Provide a valid email address"
    })
   }
  let findEmploye = await Employe.findOne({email})
  if(findEmploye){
    return res.status(400).json({
      msg:"email id is already registred"
    })
  }
  findEmploye = await Employe.findOne({mobileNo})  
  if(findEmploye){
    return res.status(400).json({
      msg:"mobile no. is  already registred"
    })
  }

  let newEmp = new Employe({
    name,
    mobileNo,
    email,
    gender,
    designation,
    course,
    img:"undefined"
  })
  
  await newEmp.save()

  return res.status(201).json({
    msg:"successfully emp created",
    data:newEmp
  })
}

export default createEmploye;