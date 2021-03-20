import React from "react";
import classNames from "classnames";

import "../assets/scss/components/_buttons.scss";

const Button = ({
  children,
  type = "button",
  onclick,
  classes,
}) => {
  const btnClasses = classNames("btn-default", classes);

  return (
    <button
      type={type}
      className={btnClasses}
      name={children}
      onClick={onclick}
    >
      {children}
    </button>
  );
};

export default Button;