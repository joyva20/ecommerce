import React from 'react'
import './Navbar.css'
import navlogo from '../Assets/nav-logo.PNG'
import navprofileIcon from '../Assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <a href="http://localhost:3001/"><img src={navlogo} className='nav-logo' alt="" /></a>
      <img src={navprofileIcon} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar
