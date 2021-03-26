import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'

const Navigation = () => {
  return (
    <nav className='navbar'>
      <div className='ham-div'>
      <GiHamburgerMenu className='hamburger-menu'/>
      <span>All</span>
      </div>
      <span className='second-nav-text'>Today's Deals</span>
      <span className='second-nav-text'>Berlin's Amazon.com</span>
      <span className='second-nav-text'>Customer Service</span>
      <span className='second-nav-text'>Browsing History</span>
      <span className='second-nav-text'>Buy Again</span>
      <span className='second-nav-text'>Gift Cards</span>
      <span className='second-nav-text'>Sell</span>
      <span className='second-nav-text'>Amazon's Response to Covid-19</span>
    </nav>
  )
}

export default Navigation
