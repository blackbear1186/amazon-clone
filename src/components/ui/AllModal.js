import React from "react";
import { FaUserCircle } from "react-icons/fa";
import {RiArrowRightSLine} from 'react-icons/ri'

const AllModal = () => {
  return (
    <aside>
      <div className="all-modal">
        <div className="modal-container">
          <div className="modal-header">
            <div className="modal-text">
              <FaUserCircle className="user" />
              <h3>Hello, Berlin</h3>
            </div>
          </div>
          <div className="modal-row-head1">
            <div className="row-modal">
              <h3>Trending</h3>
            </div>
          </div>

          <ul>
            <div className="modal-row">
              <div class="row-modal">
                <li>Best Sellers</li>
              </div>
            </div>
            <div className="modal-row">
              <div class="row-modal">
                <li>New Releases</li>
              </div>
            </div>
            <div className="modal-row">
              <div class="row-modal">
                <li>Movers & Shakers</li>
              </div>
            </div>
           
          </ul>
          {/* Second box */}
          <div className="modal-row1">
              <div className="row-modal1">
                <h3>Digital Content & Devices</h3>
              </div>
            </div>
            <ul>
            <div className="modal-row">
              <div class="row-modal">
                <li>Prime Video</li>
                <RiArrowRightSLine className='arrow-right'/>
              </div>
            </div>
            <div className="modal-row">
              <div class="row-modal">
                <li>Amazon Music</li>
                <RiArrowRightSLine className='arrow-right'/>
              </div>
            </div>
            <div className="modal-row">
              <div class="row-modal">
                <li>Echo & Alexa</li>
                <RiArrowRightSLine className='arrow-right'/>
              </div>
            </div>
            <div className="modal-row">
              <div class="row-modal">
                <li>Fire Tablets</li>
                <RiArrowRightSLine className='arrow-right'/>
              </div>
            </div>
            <div className="modal-row">
              <div class="row-modal">
                <li>Fire TV</li>
                <RiArrowRightSLine className='arrow-right'/>
              </div>
            </div>
            <div className="modal-row">
              <div class="row-modal">
                <li>Kindle E-readers & Books</li>
                <RiArrowRightSLine className='arrow-right'/>
              </div>
            </div>
            <div className="modal-row">
              <div class="row-modal">
                <li>Audible Books & Originals</li>
                <RiArrowRightSLine className='arrow-right'/>
              </div>
            </div>
            <div className="modal-row">
              <div class="row-modal">
                <li>Appstore for Android</li>
                <RiArrowRightSLine className='arrow-right'/>
              </div>
            </div>
            </ul>
        </div>
      </div>
    </aside>
  );
};

export default AllModal;
