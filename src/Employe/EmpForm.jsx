import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
function EmpForm() {

  const [formData, setData] = useState({})
  const [files, setFiles] = useState()
  const config = {
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
    withCredentials: true,
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData, files)
    axios.post("http://localhost:7000/api/v1/createemploye", formData, config)
      .then((data) => {
        console.log(data)
      }).catch((error) => {
        toast.error(error.response.data.msg)
        console.log(error)
      })
  }
  let timeerId;
  const handleInput = (e) => {
    e.preventDefault()
    clearTimeout(timeerId)
    timeerId = setTimeout(() => {
      setData({ ...formData, [e.target.name]: e.target.value })
    }, 500)
  }
  return (
    <form className='md:min-h-fit md:w-[30vw]  bg-gradient-to-bl from-slate-800 to-zinc-600 text-white rounded-xl  flex flex-col gap-y-2 py-3 px-7 ' onSubmit={handleSubmit}>
      <header className="text-center">Admin Registration Form </header>

      <label htmlFor='name'> Name</label>
      <input type="text" name='name' id='full_name' required placeholder='Full Name' className='outline-none px-2 py-1 bg-transparent border-2  rounded-md' onChange={handleInput} />

      <label htmlFor='email'>Email</label>
      <input type="email" name='email' id='email' placeholder='Email' className='outline-none px-2 py-1 bg-transparent border-2 rounded-md' onChange={handleInput} />

      <label htmlFor='mobileNo'>Mobile No</label>
      <input type='number' name='mobileNo' id='mobileNo' required placeholder='User Name' className='outline-none px-2 py-1 bg-transparent border-2 rounded-md' onChange={handleInput} />


      <label htmlFor='designation' >Designation</label>
      <select name='designation' id='designation' className='bg-transparent' onChange={handleInput}>
        <option value={"hr"} className='bg-black'>HR</option>
        <option value={"manager"} className='bg-black'>Manager</option>
        <option value={"sales"} className='bg-black'>Sales</option>
      </select >

      <div className='flex justify-evenly  py-2'>
        <label htmlFor='gender'>Gender</label>

        <label htmlFor='gender'>M</label>
        <input name='gender' value={"M"} type='radio' className='m-2' onChange={handleInput} />

        <label htmlFor='gender'>F</label>
        <input name='gender' value={"F"} type='radio' className='m-2' onChange={handleInput} />
      </div>

      <div className='flex justify-evenly  py-2 '>
        <label htmlFor='course' >Course</label>

        <label htmlFor='course'>MBA</label>
        <input name='course' value={"MBA"} id='mba' type='checkbox' onChange={handleInput} />

        <label htmlFor='course'>BCA</label>
        <input name='course' value={"BCA"} id='bca' type='checkbox' onChange={handleInput} />

        <label htmlFor='course'>BSC</label>
        <input name='course' value={"BSC"} id='bsc' type='checkbox' onChange={handleInput} />
      </div>

      <label htmlFor='image'>Image</label>
      <input name='image' id='image' type='file' onChange={(e) => {
        e.target.preventDefault()
        setFiles(e.target.files[0])

      }} />
      <button type='submit' className='w-full   bg-blue-500 py-2 rounded-md' >Submit</button>
      <ToastContainer />
    </form>
  )
}

export default EmpForm
