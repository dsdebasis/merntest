import Employe from "../models/employe.schema.js"
const empDetails =async function(req,res){

  let emp = await Employe.find({})

  return res.status(200).json({
    empData:emp
  })
}

export default empDetails;