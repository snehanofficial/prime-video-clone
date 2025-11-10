import React from 'react'
import primeLogo from '../assets/images/login-logo.png'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='bg-white text-black h-screen'>
      <div className='block mx-auto ml-[29%] px-18 py-14'>
      <div className='logo mx-auto mb-4'>
        <img src={primeLogo} alt="Logo" className='pl-[25%]'/>
      </div>
      <div className='border border-[#d5d9d9] rounded-lg w-96 p-8'>
        <h1 className='text-2xl pb-4'>Sign in</h1>
        <label htmlFor="username" className='block font-bold'>Enter mobile number or email</label>
        <input id='username' type="text" className='border border-[#888c8c] w-full h-8 rounded' required/>
        <Link to='/'><button type="submit" className='bg-[#ffd814] block py-1 px-29 mt-4 w-full rounded-2xl hover:bg-[#ffce12] cursor-pointer'>Continue</button></Link>
        <div className='text-sm py-2'>By continuing, you agree to the Amazon <a href="https://www.primevideo.com/ww-av-legal-home/ref=av_auth_te" className='text-[#2162a1] underline inline'>Conditions of Use and Privacy Notice</a></div>
        <div className='text-[#1e5b97]'>
          <a className='hover:text-[#184f86]'>Need help?</a>
          <div>Forgot your password?</div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Login