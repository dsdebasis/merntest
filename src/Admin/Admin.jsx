import axios from 'axios';
import React from 'react'
import { useState } from 'react'
// import { ToastContainer } from 'react-toastify'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const Admin = () => {
  const [data, setData] = useState({})
  const [inputData, setInputData] = useState({
    // fullName: "",
    // email: "",
    // password: "",
    // confirmPassword: ""
  })
       
  const handleInput = function (e) {
    e.preventDefault()

    setInputData({ ...inputData, [e.target.name]: e.target.value })
  }
  const handleSubmit = function (e) {
    e.preventDefault()

    axios.post("http://localhost:7000/api/v1/admin",inputData,{
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      withCredentials: true,
    }).then((data)=>{
      console.log(data)
      toast.success(data.data.msg)
      toast.success()
    }).catch((error)=>{
      toast.error(error.response.data.msg)
      console.log(error.response.data.msg)
    })
  }
  return (
    <section className='h-screen w-screen flex justify-center items-center bg-gray-900'>
      <form className='md:min-h-[90vh] md:w-[30vw]  bg-slate-700 text-white rounded-xl  flex flex-col gap-y-3 p-10 ' onSubmit={handleSubmit}>
        <header className="text-center">Admin Registration Form </header>

        <label htmlFor='fullName'>Full Name</label>
        <input type="text" name='fullName' required placeholder='Full Name' className='outline-none px-2 py-1 bg-transparent border-2 rounded-md' onChange={handleInput} />

        <label htmlFor='email'>Email</label>
        <input type="email" name='email' placeholder='Email' className='outline-none px-2 py-1 bg-transparent border-2 rounded-md' onChange={handleInput} />

        <label htmlFor='userName'>User Name</label>
        <input type='text' name='userName' required placeholder='User Name' className='outline-none px-2 py-1 bg-transparent border-2 rounded-md' onChange={handleInput} />

        <label htmlFor='password'>Password</label>
        <input type="password" name='password' required placeholder='password' className='outline-none px-2 py-1 bg-transparent border-2 rounded-md' onChange={handleInput} />

        <label htmlFor='confirmPassword'>Confirm Password</label>
        <input type="password" name='confirmPassword' required placeholder='password' className='outline-none px-2 py-1 bg-transparent border-2 rounded-md' onChange={handleInput} />

        <h1>Already Have an Account. <span> <a href='/' className='text-sky-500'>Login</a></span></h1>

        <button type='submit' className='w-full border-2  bg-blue-500 py-2 rounded-md' >Submit</button>
      </form>
      <ToastContainer/>
    </section>
  )
}

export default Admin
