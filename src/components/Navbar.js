import React from 'react';
import { Link } from 'react-router-dom';
import { IoManOutline } from 'react-icons/io5';
import { FaBars, FaTime } from 'react-icons/fa';

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo">
            <IoManOutline className="navbar-icon" />
            ADAM
          </Link>
          <div className="menu-icon">{}</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
