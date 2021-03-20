import React from "react";

import "../assets/scss/components/_input.scss";

const Select = ({ label, name, value, options, onchange }) => (
  <div className="default-select">
    <label htmlFor={name}>{label}</label>

    <select name={name} value={value} onChange={onchange}>
      {options.map((option, i) => <option key={option.id || i} value={option.value}>{option.label}</option>)}
    </select>
  </div>
);

export default Select;