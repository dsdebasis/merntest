import React from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
function Logout() {
  let navigate = useNavigate()
  const config = {
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
    withCredentials: true,
  };

  const hadleLogout = function (e) {
    e.preventDefault()
    axios.post("http://localhost:7000/api/v1/logout", {}, config)
      .then((data) => {
        console.log(data)
        toast.success(data.data.msg)
        // navigate("/wellcome")
      }).catch((error) => {
        console.log(error.response.data.msg)
        toast.error(error.response.data.msg)
      })
  }
  return (
    <section className='h-screen w-full flex justify-center items-center bg-gradient-to-br from-slate-700'>
      <button onClick={hadleLogout} className='border-2  p-4 bg-red-400 rounded-lg'>Logout</button>
      <ToastContainer />
    </section>
  )
}

export default Logout
