import React from 'react'
import imagesDoctor from "../assets/images/loginDoctorimg.jpeg"
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section 
      className='min-h-screen flex items-center justify-center font-mono bg-cover bg-center
 bg-no-repeat'
      style={{ backgroundImage: `url(${imagesDoctor})` }}
    >

      <div className='flex shadow-2xl bg-white bg-opacity-80 rounded-2xl'>
        <div className='flex flex-col items-center justify-center text-center p-20 gap-8'>

          <h1 className='text-5xl font-bold'>Login</h1>

          <div className='flex flex-col text-2xl text-left gap-1'>
            <span>Email</span>
            <input 
              type='email'
              className='rounded-md p-1 border-2 outline-none focus:border-green-400'
            />
          </div>

          <div className='flex flex-col text-2xl text-left gap-1'>
            <span>Password</span>
            <input 
              type='password' 
              className='rounded-md p-1 border-2 outline-none focus:border-green-400'
            />
          </div>

          <div>
            <button className='px-10 py-2 text-2xl rounded-md bg-gradient-to-tr from-gray-400 to-blue-500 hover:from-red-400 hover:to-yellow-500 text-white'>
              Login
            </button>

            <p className='font-semibold py-5'>
              Don't have an account? <Link to="/register" className='text-blue-400 hover:underline'>Register</Link>
            </p>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Login
