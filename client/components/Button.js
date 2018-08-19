import React from 'react';
import { PropTypes } from 'prop-types';

const Button = ({
  onClick,
  type='button',
  className = '',
  children,
  block,
  primary
}) => {
  className += ' button';
  if (block) className += ' __block';
  if (primary) className += ' __primary';
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
  block: PropTypes.bool,
  primary: PropTypes.bool,
}


export default Button;