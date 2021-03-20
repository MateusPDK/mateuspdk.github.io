import React from "react";

import "../assets/scss/components/_input.scss";

const Input = ({ label, name, value, onchange }) => (
  <div className="default-input">
    <label htmlFor={name}>{label}</label>

    <input type="text" name={name} value={value} onChange={onchange} />
    
    <div className="line" />
  </div>
);

export default Input;