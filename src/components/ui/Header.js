import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {GoSearch} from 'react-icons/go'

const Header = () => {
  return (
    <div className="header">
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
        <input type='text'></input>
        <GoSearch />

      </div>
    </div>
  );
};

export default Header;
