import React from 'react';
import { PropTypes } from 'prop-types';

const MenuItem = ({children, onClick, active}) => {
  let className = 'menu-item';
  if (active) className += ' __active'
  return (
    <div
      onClick={onClick}
      className={className}
    >
      {children}
    </div>
  )
}

MenuItem.propTypes = {
  onClick: PropTypes.func,
  active: PropTypes.bool,
}

export default MenuItem;