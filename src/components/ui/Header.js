import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {GoSearch} from 'react-icons/go'
import {RiArrowDropDownFill} from 'react-icons/ri'
import {CgShoppingCart} from 'react-icons/cg'

const Header = () => {
  return (
    <nav className="header">
      <img
        className="amazon_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
        alt="amazon"
      ></img>
      <HiOutlineLocationMarker className="location-marker" />
      <div className="deliver-text-box">
        <span className="deliver-text">Deliver to Berlin</span>
        <span className="address-text">Yokohama-Shi 245-0063</span>
      </div>
      <div className='search-box'>
        <div className='all'>
          <span>
          All
          </span>
          <RiArrowDropDownFill className='drop-down-arrow'/>
          </div>
        <input type='text'></input>
        <div className='search-icon-div'>
        <GoSearch className='search-icon'/>
        </div>
      </div>
      <div>
        <span>Hello, Berlin</span>
        <span>Account & Lists</span>
      </div>
      <div>
        <span>Returns</span>
        <span>& Orders</span>
      </div>
      <div>
        <CgShoppingCart />
      </div>
    </nav>
  );
};

export default Header;
