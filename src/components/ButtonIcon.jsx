import React from "react";
import classNames from "classnames";

import { Edit, Delete } from "./Icons";
import "../assets/scss/components/_buttons.scss";

const icons = { Edit, Delete }

const ButtonIcon = ({
  name,
  color,
  onclick,
  classes,
  edit,
  remove
}) => {
  const btnArrowClasses = classNames("btn-icon", edit && "edit", remove && "remove", classes);

  const Icon = icons[name];

  return (
    <button
      type="button"
      className={btnArrowClasses}
      onClick={onclick}
    >
      <Icon color={color} />
    </button>
  );
};

export default ButtonIcon;