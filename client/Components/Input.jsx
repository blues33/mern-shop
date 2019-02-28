import React, { useState } from "react";
import PropTypes from "prop-types";

const Input = ({
  id,
  type,
  name,
  className,
  placeholder,
  onChange,
  onBlur
}) => {
  const [value, setValue] = useState();

  return (
    <input
      id={id}
      type={type || "text"}
      name={name}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
};

export default Input;
