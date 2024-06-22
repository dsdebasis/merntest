import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
const Login = () => {

  const [userData, setUserData] = useState({})
  const [loading, setLoading] = useState(false)
  let navigate = useNavigate()
  const config = {
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
    withCredentials: true,
  };

  const handleLogin = async function (e) {
    e.preventDefault()
    console.log(userData)
    setLoading(true)
    axios.post("http://localhost:7000/api/v1/login",
      userData, config)
      .then((data) => {
        toast(data.data.msg)
       navigate("/wellcome")
      }).catch((error) => {
        console.log(error.response.data.msg)
        toast.error(error.response.data.msg)
      }).finally(() => {
        setLoading(false)
      })

  }
  const hadleChange = function (e) {
    e.preventDefault()
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }
  return (
    <section className='h-screen w-screen bg-gradient-to-b from-slate-800 to-slate-600 flex justify-center items-center'>

      <form className=' text-white flex flex-col rounded-md lg:w-[40vw] border-2 px-3 py-10 gap-y-5' onSubmit={handleLogin}>

        <h1 className='text-center'>Please Login</h1>
        <label htmlFor='userName'>User Name</label>
        <input className='bg-transparent border-2 rounded-md p-2' name='userName' id='userName' type='text' required onChange={hadleChange}/>

        <label htmlFor='password'>Password</label>
        <input className='bg-transparent  border-2 rounded-md p-2' name='password' id='password' type='password' required onChange={hadleChange} />

        <button disabled={loading} type='submit' className=' h-14 hover:bg-red-500 rounded-md bg-blue-800 '>Log in</button >
      </form>
      <ToastContainer />
    </section>
  )
}

export default Login
