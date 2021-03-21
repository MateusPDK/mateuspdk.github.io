import React from "react";

import "../assets/scss/components/_input.scss";

const Input = ({ label, name, value, onchange, type = "text", onblur }) => (
  <div className="default-input">
    <label htmlFor={name}>{label}</label>

    <input type={type} name={name} value={value} onChange={onchange} onBlur={onblur} />
    
    <div className="line" />
  </div>
);

export default Input;