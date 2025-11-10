import React from 'react'
import logo from '../assets/images/logo-white.png'

function Footer() {
  return (
    <footer className='bg-[#222222]  p-6 text-center'>
      <img src={logo} alt="" className='w-30 mx-auto' />
      <div className='mx-auto'>
      <ul className='flex wrap-normal text-[#79b8f3]'>
        <li className='mx-2.5'>Terms and Privacy Notice</li>
        <li className='mx-2.5'>Send us feedback</li>
        <li className='mx-2.5'>Help</li>
      </ul>
      </div>
      <p className='text-[#8197a4] pt-1.5'>© 1996-2025, Amazon.com, Inc. or its affiliates</p>
    </footer>
  )
}

export default Footer