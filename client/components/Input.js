import React from 'react';
import { PropTypes } from 'prop-types';

const Input = ({ 
  onChange, 
  value, 
  placeholder, 
  className = '',
  block
}) => {
  className += ' input';
  if (block) className += ' __block';
  return (
    <input 
      className={className}
      type='text' 
      onChange={onChange} 
      value={value} 
      placeholder={placeholder} 
    />
  )
}

Input.propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.string,
  block: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])
}


export default Input;