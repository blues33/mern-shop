import React, { useState } from "react";
import PropTypes from "prop-types";

const Input = ({ type, name, className, placeholder, onChange }) => {
  const [value, setValue] = useState();

  return (
    <input
      type={type}
      name={name}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};

export default Input;
