import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {Link} from 'react-router-dom'

const Navigation = ({setOpen}) => {
  return (
    <nav className='navbar'>
      <div className='ham-div'>
      <GiHamburgerMenu className='hamburger-menu' onClick={() => setOpen(true)}/>
      <span>All</span>
      </div>
      <Link to='/today-deal'>
      <span className='second-nav-text'>Today's Deals</span>

      </Link>
      <span className='second-nav-text'>Customer Service</span>
      <span className='second-nav-text'>Gift Cards</span>
      <span className='second-nav-text'>Sell</span>
      <span className='second-nav-text'>Registry</span>
    </nav>
  )
}

export default Navigation
