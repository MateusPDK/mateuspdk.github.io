import React, { useState } from "react";
import classNames from "classnames";

import { Hamburguer, Close } from "../components/Icons";
import logo from "../assets/img/logo.png";
import "../assets/scss/includes/_header.scss";

const routes = [
  {
    name: "Usuários",
    path: `${process.env.PUBLIC_URL}/users`,
  },
  {
    name: "CEP's",
    path: `${process.env.PUBLIC_URL}/ceps`,
  },
];

const Header = () => {
  const [menuMobile, setMenuMobile] = useState(false);

  const menuMobileClasses = classNames("menu-mobile", menuMobile && "menu-open");

  const populateMenuHandler = () => routes.map(({ path, name }, i) => (
    <li key={i} className="menu-item">
      <a href={path} title={name}>
        {name}
      </a>
    </li>
  ));

  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="menu">
              <a href={`${process.env.PUBLIC_URL}/`} className="logo" title="CondoConta">
                <img src={logo} alt="CondoConta" title="CondoConta" />
              </a>
  
              <ul role="navigation" className="routes">
                {populateMenuHandler()}
              </ul>

              <div>
                <button
                  className="btn-hamburguer"
                  onClick={() => setMenuMobile(!menuMobile)}
                >
                  <Hamburguer />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={menuMobileClasses}>
        <div className="container-fluid">
          <div className="row justify-content-end">
            <div className="col-12">
              <a href={`${process.env.PUBLIC_URL}/`} className="logo" title="CondoConta">
                <img src={logo} alt="CondoConta" title="CondoConta" />
              </a>

              <button
                className="btn-close"
                onClick={() => setMenuMobile(!menuMobile)}
              >
                <Close color="#fff" />
              </button>

              <ul role="navigation" className="routes">
                {populateMenuHandler()}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
