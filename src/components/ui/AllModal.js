import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { RiArrowRightSLine, RiArrowDropDownFill } from "react-icons/ri";
import {VscChromeClose} from 'react-icons/vsc'
import { Link } from "react-router-dom";

const BUTTON_WRAPPER_STYLES = {
  position: "absolute",
  height: "100vh",
  width: "365px",
  backgroundColor: "#FFFFFF",
  zIndex: 100,
  top: 0,
  left: 0,
  overflow: "auto",
  // transform: 'translateX(-100%)',
};

const BUTTON_OTHER_STYLES = {
  position: "fixed",
  height: "100vh",
  width: "365px",
  backgroundColor: "#FFFFFF",
  zIndex: "100",
  top: 0,
  left: 0,
  overflow: "auto",
  // transform: 'translateX(-100%)',
};
const CLOSE_BUTTON = {
  color: 'black',
  fontSize: '1.8em',
  position: 'absolute',
  top: '14px',
  left: '372px',
  zIndex: 100,
  cursor: 'pointer',
}

const OVERLAY = {
  position: 'fixed',
  top: 0, 
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: 'black',
  zIndex: 1000
}
const AllModal = ({isOpen, setOpen}) => {
  if (!isOpen) return null
  return (
    <>
    <aside>
      <div style={BUTTON_WRAPPER_STYLES}>
        <div className="modal-container">
          <Link style={{ textDecoration: "none" }} to="/login">
            <div className="modal-header">
              <div className="modal-text">
                <FaUserCircle className="user" />
                <h3>Hello, Sign In</h3>
              </div>
            </div>
          </Link>

          <div className="modal-row-head1">
            <div className="row-modal">
              <h3>Digital Content & Devices</h3>
            </div>
          </div>

          <Link style={{ textDecoration: "none" }} to="/">
            <div className="modal-row">
              <div className="row-modal">
                <span className="list-group">Amazon Music</span>
                <RiArrowRightSLine className="arrow-right" />
              </div>
            </div>
          </Link>

          <Link style={{ textDecoration: "none" }} to="/">
            <div className="modal-row">
              <div className="row-modal">
                <span className="list-group">Kindle E-readers & Books</span>
                <RiArrowRightSLine className="arrow-right" />
              </div>
            </div>
          </Link>

          <Link style={{ textDecoration: "none" }} to="/">
            <div className="modal-row">
              <div className="row-modal">
                <span>Appstore for Android</span>
                <RiArrowRightSLine className="arrow-right" />
              </div>
            </div>
          </Link>
          {/* Second box */}
          <div className="modal-row1">
            <div className="row-modal1">
              <h3>Shop By Department</h3>
            </div>
          </div>
          <Link style={{ textDecoration: "none" }} to="/"></Link>
          <div className="modal-row">
            <div className="row-modal">
              <span>Electronics</span>
              <RiArrowRightSLine className="arrow-right" />
            </div>
          </div>
          <Link style={{ textDecoration: "none" }} to="/">
            <div className="modal-row">
              <div className="row-modal">
                <span>Computers</span>
                <RiArrowRightSLine className="arrow-right" />
              </div>
            </div>
          </Link>

          <Link style={{ textDecoration: "none" }} to="/">
            <div className="modal-row">
              <div className="row-modal">
                <span>Smart Home</span>
                <RiArrowRightSLine className="arrow-right" />
              </div>
            </div>
          </Link>

          <Link style={{ textDecoration: "none" }} to="/">
            <div className="modal-row">
              <div className="row-modal">
                <span>Arts & Crafts</span>
                <RiArrowRightSLine className="arrow-right" />
              </div>
            </div>
          </Link>

          <Link style={{ textDecoration: "none" }} to="/">
            <div className="modal-row">
              <div className="row-modal">
                <span>See All</span>
                <RiArrowDropDownFill />
              </div>
            </div>
          </Link>

          <div className="modal-row1">
            <div className="row-modal1">
              <h3>Programs & Features</h3>
            </div>
          </div>
          <Link style={{ textDecoration: "none" }} to="/">
            <div className="modal-row">
              <div className="row-modal">
                <span>Gift Cards</span>
                <RiArrowRightSLine className="arrow-right" />
              </div>
            </div>
          </Link>

          <Link style={{ textDecoration: "none" }} to="/">
            <div className="modal-row">
              <div className="row-modal">
                <span>#FoundItOnAmazon</span>
              </div>
            </div>
          </Link>

          <Link style={{ textDecoration: "none" }} to="/">
            <div className="modal-row">
              <div className="row-modal">
                <span>Amazon Live</span>
                <RiArrowRightSLine className="arrow-right" />
              </div>
            </div>
          </Link>

          <Link style={{ textDecoration: "none" }} to="/">
            <div className="modal-row">
              <div className="row-modal">
                <span>Internation Shopping</span>
                <RiArrowRightSLine className="arrow-right" />
              </div>
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/">
            <div className="modal-row">
              <div className="row-modal">
                <span>See All</span>
                <RiArrowDropDownFill />
              </div>
            </div>
          </Link>
          <div className="modal-row1">
            <div className="row-modal1">
              <h3>Help & Settings</h3>
            </div>
          </div>
          <Link style={{ textDecoration: "none" }} to="/">
            <div className="modal-row">
              <div className="row-modal">
                <span>Your Account</span>
              </div>
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/">
            <div className="modal-row">
              <div className="row-modal">
                <span>Customer Servive</span>
              </div>
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/login">
            <div className="modal-row">
              <div className="row-modal">
                <span>Sign In</span>
              </div>
            </div>
          </Link>
          {/* <div className="modal-row">
              <div className="row-modal">
                <li>Kindle E-readers & Books</li>
                <RiArrowRightSLine className="arrow-right" />
              </div>
            </div>
            <div className="modal-row">
              <div className="row-modal">
                <li>Audible Books & Originals</li>
                <RiArrowRightSLine className="arrow-right" />
              </div>
            </div>
            <div className="modal-row">
              <div className="row-modal">
                <li>Appstore for Android</li>
                <RiArrowRightSLine className="arrow-right" />
              </div>
            </div> */}
        </div>
      </div>
    </aside>
    <main>
      <VscChromeClose style={CLOSE_BUTTON} onClick={() => setOpen(false)}/>
    </main>
  </>
  );
};

export default AllModal;
