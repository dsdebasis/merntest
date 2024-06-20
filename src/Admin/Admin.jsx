import React from 'react'
import { useState } from 'react'
const Admin = () => {
  const [data, setData] = useState({})
  const [inputData, setInputData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirm_password: ""
  })

  const handleInput = function (e) {
    e.preventDefault()

    setInputData({ ...inputData, [e.target.name]: e.target.value })
  }
  const handleSubmit = function (e) {
    e.preventDefault()

    console.log(inputData)
  }
  return (
    <section className='h-screen w-screen flex justify-center items-center bg-gray-900'>
      <form className='md:h-[80vh] md:w-[30vw]  bg-slate-500 text-white rounded-xl  flex flex-col gap-y-3 p-10 ' onSubmit={handleSubmit}>
        <header className="text-center">Admin Registration Form </header>

        <label htmlFor='full_name'>Full Name</label>
        <input type="text" name='fullName' required placeholder='Full Name' className='outline-none px-2 py-1 bg-transparent border-2 rounded-md' onChange={handleInput} />

        <label htmlFor='email'>Email</label>
        <input type="email" name='email' placeholder='Email' className='outline-none px-2 py-1 bg-transparent border-2 rounded-md' onChange={handleInput} />

        <label>User Name</label>
        <input type='text' name='user_Name' required placeholder='User Name' className='outline-none px-2 py-1 bg-transparent border-2 rounded-md' onChange={handleInput} />

        <label htmlFor='password'>Password</label>
        <input type="password" name='password' required placeholder='password' className='outline-none px-2 py-1 bg-transparent border-2 rounded-md' onChange={handleInput} />

        <label htmlFor='confirm_password'>Confirm Password</label>
        <input type="password" name='confirm_password' required placeholder='password' className='outline-none px-2 py-1 bg-transparent border-2 rounded-md' onChange={handleInput} />

        <h1>Already Have an Account. <span> <a href='/login' className='text-sky-500'>Login</a></span></h1>

        <button type='submit' className='w-full border-2  bg-blue-500 py-2 rounded-md' >Submit</button>
      </form>
    </section>
  )
}

export default Admin
