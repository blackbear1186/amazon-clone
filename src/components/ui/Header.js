import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GoSearch } from "react-icons/go";
import { RiArrowDropDownFill } from "react-icons/ri";
import { CgShoppingCart } from "react-icons/cg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <Link to="/">
        <div className="logo-box">
          <img
            className="amazon_logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
            alt="amazon"
          ></img>
        </div>
      </Link>
      <div className="deliver-box">
        <div className="loc-marker">
          <HiOutlineLocationMarker className="location-marker" />
        </div>
        <div className="deliver-text-box">
          <span className="deliver-text">Deliver to</span>
          <span className="address-text">Japan</span>
        </div>
      </div>
      <div className="search-box">
        <div className="all">
         <span>All</span>
          <RiArrowDropDownFill className="drop-down-arrow" />
        </div>
        <input className="search-input" type="text"></input>
        <div className="search-icon-div">
          <GoSearch className="search-icon" />
        </div>
      </div>
      <Link style={{textDecoration:'none'}}to="/login">
        <div className="login-box">
          <span className="log">Hello, Sign In</span>
          <span>Account & Lists</span>
        </div>
      </Link>

      <Link style={{textDecoration:'none'}} to="/login">
        <div className="order-box">
          <span>Returns</span>
          <span>& Orders</span>
        </div>
      </Link>
      <Link style={{textDecoration:'none'}} to="/check-out">
        <div className="cart-box">
          <span>0</span>
          <CgShoppingCart className="cart" />
        </div>
      </Link>
    </nav>
  );
};

export default Header;
