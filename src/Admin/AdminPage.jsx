import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useContext } from 'react'
import EmpContext from './context.js'
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const AdminPage = () => {

  const navigate = useNavigate()
  const [empData, setEmpData] = useState([])
  const [trackData, setTrackData] = useState()

  const config = {
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
    withCredentials: true,
  };
  useEffect(() => {
    axios.get("http://localhost:7000/api/v1/getemp", {}, config)
      .then((data) => {
        console.log(data.data)
        let newdata = data.data.empData
        setEmpData(newdata)
        setTrackData("okay")
      }).catch((error) => {
        console.log(error)
        toast.error(error.response.data.msg || "Please login")
      }).finally(() => {
        // console.log(empData, "ds")
      })
  }, [trackData])

  let { emp } = useContext(EmpContext)
  // console.log()
  const handleUpdate = function (e) {
    e.preventDefault()
    axios.put("", updateData, config)
      .then(() => {

      })
      .catch((error) => {

      })
  }
  return (
    <section className='h-screen w-full bg-gradient-to-br from-slate-500 to-slate-600 px-10 text-white'>
      <div className='border-2 h-20 w-full rounded-md flex justify-around items-center'>
        <Link>Home</Link>
        <Link to="/logout">Logout</Link>
      </div>
      <h1 className='text-center my-5 text-yellow-400 bg-yellow-800 rounded-md '>Dashboard</h1>

      <section className='min-h-[40vh] w-full border-2 rounded-md pt-3 px-5'>
        <h1 className='text-center lg:text-2xl'>WellCome To Admin Pannel</h1>
        <table className='w-full'>
          <thead className='border-2 w-full '>
            <tr className=''>
              <th key={"dfj"} className='border-2 border-gray-700 p-2'>ID</th>
              <th className='border-2   border-gray-700 p-2'>Name</th>
              <th className='border-2   border-gray-700 p-2'>Email</th>
              <th className='border-2   border-gray-700 p-2'>Mob No.</th>
              <th className='border-2   border-gray-700 p-2'>Course</th>
              <th className='border-2   border-gray-700 p-2'>Designation</th>
              <th className='border-2   border-gray-700 p-2'>gender</th>
              <th className='border-2   border-gray-700 p-2'>img</th>
              <th className='border-2   border-gray-700 p-2'>Action</th>


            </tr>
          </thead>
          <tbody className='w-full border-2  '>
            {empData.map((item, index) => (
              <tr key={item._id} className='text-center'>
                <td key='1' className='border-2 border-yellow-700 p-1 text-yellow-500'>{item._id}</td>
                <td key='2' className='border-2 border-yellow-700 p-1 text-yellow-500'>{item.name}</td>
                <td key='3' className='border-2 border-yellow-700 p-1 text-yellow-500'>{item.email}</td>
                <td key='4' className='border-2 border-yellow-700 p-1 text-yellow-500'>{item.mobileNo}</td>
                <td key='5' className='border-2 border-yellow-700 p-1 text-yellow-500'>{item.course}</td>
                <td key='6' className='border-2 border-yellow-700 p-1 text-yellow-500'>{item.designation}</td>
                <td key='7' className='border-2 border-yellow-700 p-1 text-yellow-500'>{item.gender}</td>
                <td key='9' className='border-2 border-yellow-700 p-1 text-yellow-500'>{item.img}</td>
                <td key='10' className='border-2 border-yellow-700 p-1'>
                  <button
                    className='bg-sky-400 px-3  rounded-lg mx-1' key={"66"} id={item._id} onClick={function (e) {
                      e.preventDefault()
                      localStorage.setItem("id", e.target.id)
                      // console.log(emp)
                      navigate("/makeemploye")
                    }}>Edit</button >

                  <button className='bg-red-800 px-3 rounded-lg' id={item._id} key={"d"} onClick={function (e) {
                    e.preventDefault()
                    console.log("delete btn")
                    localStorage.setItem("id", e.target.id)
                   
                    axios.patch("http://localhost:7000/api/v1/createemploye", { id: localStorage.getItem("id") },
                   {
                      headers: {
                        "content-type": "application/json",
                        accept: "application/json",
                      },
                      withCredentials: true,
                    }
                  )
                      .then((data) => {
                        setTrackData("done")
                        toast.success(data.data.msg)
                        console.log(data)

                      })
                      .catch((error) => {
                        toast.error(error.response.data.msg)
                        // console.log(error.response.data.msg)
                      })
                  }}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>


        {

        }
        <button className=' rounded-md bg-sky-800 hover:bg-sky-400 my-5 p-2 ro' onClick={() => {
          navigate("/makeemploye")
        }}>Create Employe </button>

      </section>
      <ToastContainer/>
    </section>
  )
}

export default AdminPage
