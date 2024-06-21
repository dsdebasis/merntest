import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
const AdminPage = () => {
  const navigate = useNavigate()

  useEffect(()=>{
   axios.get("")
  },[])
  return (
    <section className='h-screen w-full bg-gradient-to-br from-slate-500 to-slate-600 px-10 text-white'>
      <div className='border-2 h-20 w-full rounded-md flex justify-around items-center'>
        <Link>Home</Link>
        <Link to="/logout">Logout</Link>
      </div>
      <h1 className='text-center my-5 text-yellow-400 bg-yellow-800 rounded-md '>Dashboard</h1>

      <section className='min-h-[40vh] w-full border-2 rounded-md pt-3 px-5'>
        <h1 className='text-center lg:text-2xl'>WellCome To Admin Pannel</h1>


        <button className=' rounded-md bg-sky-800 hover:bg-sky-400 my-5 p-2 ro' onClick={() => {
          navigate("/makeemploye")
        }}>Create Employe </button>

      </section>
    </section>
  )
}

export default AdminPage
