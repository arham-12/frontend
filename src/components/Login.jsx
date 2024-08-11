import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Login = () => {
  return (
 <>
 <div className="login w-full h-screen flex flex-col justify-center items-center bg-green-50">

  <div className="login-form px-5 w-full lg:w-[25%] flex flex-col bg-white justify-center border border-primary rounded-lg py-5 items-center">

  <div className="heading text-2xl lg:text-4xl font-bold py-5">Login</div>
  <form className="form w-full px-5 flex flex-col gap-3 justify-center items-center">
    <input className='px-3 py-2 border text-lg border-primary rounded-lg w-full' placeholder='Enter email' type="text" />
    <input className='px-3 py-2 border text-lg border-primary rounded-lg w-full' placeholder='Enter password' type="text" />
    <button className='w-full rounded-lg py-2 bg-primary text-white'>Login</button>
  </form>
  <p className='my-2 text-lg'>Want account ? <Link to={'/signup'} className='text-primary' >SignUp</Link></p>
  </div>
  
 </div>
 </>
  )
}

export default Login