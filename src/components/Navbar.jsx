import React from 'react'
import logo from '../assets/images/nav-logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='flex p-7'>
        <Link to='/'><img src={logo} alt="Prime Video Logo" className='w-25' /></Link>
        <ul className='flex'>
          <Link to='/'><li className='px-5'>Home</li></Link>
          <Link to='/movie'><li className='px-5'>Movies</li></Link>
          <Link to='/tv'><li className='px-5'>TV shows</li></Link>
          <li className='px-5'>Live TV</li>
        </ul>
    </nav>
  )
}

export default Navbar