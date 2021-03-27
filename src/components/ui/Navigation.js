import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'

const Navigation = () => {
  return (
    <nav className='navbar'>
      <div className='ham-div'>
      <GiHamburgerMenu className='hamburger-menu'/>
      <span>All</span>
      </div>
      <span className='second-nav-text'>Books</span>
      <span className='second-nav-text'>Computers</span>
      <span className='second-nav-text'>Find a Gift</span>
      <span className='second-nav-text'>Shopper Toolkit</span>
      <span className='second-nav-text'>Home Improvement</span>
      <span className='second-nav-text'>Amazon Home</span>
      <span className='second-nav-text'>Subscribe & Save</span>
      <span className='second-nav-text'>Automotive</span>
    </nav>
  )
}

export default Navigation
