import React from 'react';
import { PropTypes } from 'prop-types';

const NavBar = ({ authorized, toggleMenu }) => {
  return (
    <div className='navbar'>
      <div className='container'>
        { authorized &&
          <div className='navbar-toggle' onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        }
        <div className='navbar-logo'>SN</div>
      </div>
    </div>
  )
}

NavBar.propTypes = {
  toggleMenu: PropTypes.func,
  authorized: PropTypes.bool,
}

export default NavBar;