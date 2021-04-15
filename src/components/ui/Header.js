import React, {useContext} from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GoSearch } from "react-icons/go";
import { RiArrowDropDownFill } from "react-icons/ri";
import { CgShoppingCart } from "react-icons/cg";
import { Link } from "react-router-dom";
import {AppContext} from '../../AppContext'

const Header = () => {
  // const [selected, setSelected] = useState(false)
  const {products} = useContext(AppContext)
 
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

          <select name='departments' style={{display: 'none'}}id='departments'>
          <option value='all-departments'>All Departments</option>
          <option value='arts-crafts'>Arts & Crafts</option>
          <option value='arts-crafts'>Automotive</option>
          <option value='arts-crafts'>Baby</option>
          <option value='arts-crafts'>Beauty & Personal Care</option>
          <option value='arts-crafts'>Books</option>
          <option value='arts-crafts'>Computers</option>
          <option value='arts-crafts'>Digital Music</option>
          <option value='arts-crafts'>Electronics</option>
          <option value='arts-crafts'>Kindle Store</option>
          <option value='arts-crafts'>Prime Video</option>
          <option value='arts-crafts'>Women's Fashion</option>
          <option value='arts-crafts'>Men's Fashion</option>
          <option value='arts-crafts'>Girls' Fashion</option>
          <option value='arts-crafts'>Boys' Fashion</option>
          <option value='arts-crafts'>Deals</option>
          <option value='arts-crafts'>Health & Household</option>
          <option value='arts-crafts'>Home & Kitchen</option>
          <option value='arts-crafts'>Industrial & Scientific</option>
          <option value='arts-crafts'>Luggage</option>
          <option value='arts-crafts'>Movies & TV</option>
          <option value='arts-crafts'>Music, CDs & Vinyl</option>
          <option value='arts-crafts'>Pet Supplies</option>
          <option value='arts-crafts'>Software</option>
          <option value='arts-crafts'>Sports & Outdoors</option>
          <option value='arts-crafts'>Tools & Home Improvement</option>
          <option value='arts-crafts'>Video Games</option>

        </select>

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
          <span>{products.length}</span>
          <CgShoppingCart className="cart" />
        </div>
      </Link>
    </nav>
  );
};

export default Header;
