import Employe from "../models/employe.schema.js";
import mongoose from "mongoose";
const updateEmploye = async function (req, res) {
  const { id } = req.body
  // console.log("ds")
  if (!id) {
    return res.status(400).json({
      msg: "emp id is requierd"
    })
  }
  if (id) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        msg: "Invalid ID"
      });
    }
    const { name, email, mobileNo, gender, course, designation, img } = req.body
    if (!name || !email || !mobileNo || !gender || !course || !designation) {
      return res.status(400).json({
        msg: "Every field is required for update"
      })
    }
    let updateEmp;

    let findEmp = await Employe.findById(id)

    const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValidator.test(email)) {

      return res.status(400).json({
        msg: "Please Provide a valid email address"
      })
    }
    const mobileNumberPattern = /^[789]\d{9}$/;
    if (!mobileNumberPattern.test(mobileNo)) {
      return res.status(400).json({
        msg: "Invalid Mobile Number"
      })
    }
    if (findEmp) {
      try {
        updateEmp = await Employe.findByIdAndUpdate(id, {
          $set: {
            name: name || findEmp.name,
            email: email || findEmp.email,
            mobileNo: mobileNo || findEmp.mobileNo,
            gender: gender || findEmp.gender,
            course: course || findEmp.course,
            designation: designation || findEmp.designation,
            img: img || findEmp.img

          }
        }, {
          new: true
        })
      } catch (error) {
        return res.status(500).json({
          msg: "Error while updating",
          error
        })
      }
    } else {
      return res.status(400).json({
        msg: "Invalid Employe ID"
      })
    } 
  }


  return res.status(200).json({ 
    msg: "update successfully",
    // empData: updateEmp
  })
}


const deleteEmp = async function (req, res) {
  console.log("delete ers")
  const { id } = req.body
  if (!id) {
    return res.status(400).json({
      msg: "Employe ID is required"
    })
  }
  let deleteEmp
  if (id) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        msg: "Invalid ID"
      });
    }
    let findEmp = await Employe.findById(id)
    if (findEmp) {
      try {
        deleteEmp = await Employe.findByIdAndDelete(id)
      } catch (error) {
        a
        return res.status(500).json({
          msg: "Error while deleting",
          error
        })
      }
    } else {
      return res.status(400).json({
        msg: "invalid Emp ID"
      })
    }
  }


  return res.status(200).json({
    msg: "Delete successfully",
    empData: deleteEmp
  })
}
export { updateEmploye, deleteEmp }