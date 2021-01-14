import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoManOutline } from 'react-icons/io5';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo">
            <IoManOutline className="navbar-icon" />
            ADAM
          </Link>
          <div onClick={handleClick} className="menu-icon">
            {click ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
