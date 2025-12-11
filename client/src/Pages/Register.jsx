import React from 'react'
import iamgeBackground from '../assets/images/loginDoctorimg.jpeg'
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center font-mono bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${iamgeBackground})` }}
    >

      
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      <div className="relative flex shadow-2xl bg-white/80 rounded-2xl">
        
        <div className="flex flex-col items-center justify-center text-center p-20 gap-8">

          <h1 className="text-5xl font-bold text-gray-800">Register</h1>

          <div className="flex flex-col text-2xl text-left gap-1 w-full">
            <span>FULL NAME</span>
            <input 
              type="text"
              className="rounded-md p-1 border-2 outline-none focus:border-green-400"
            />
          </div>

          <div className="flex flex-col text-2xl text-left gap-1 w-full">
            <span>EMAIL</span>
            <input 
              type="email"
              className="rounded-md p-1 border-2 outline-none focus:border-green-400"
            />
          </div>

          <div className="flex flex-col text-2xl text-left gap-1 w-full">
            <span>PASSWORD</span>
            <input 
              type="password"
              className="rounded-md p-1 border-2 outline-none focus:border-green-400"
            />
          </div>

          <div>
           <button className='px-10 py-2 text-2xl rounded-md bg-gradient-to-tr from-gray-400 to-blue-500 hover:from-red-400 hover:to-yellow-500 text-white'>Register</button>
          </div>
          <p>I have allready account <Link to='/login' className='text-blue-500 hover:underline'>Login</Link></p>

        </div>

      </div>

    </section>
  )
}

export default Register
