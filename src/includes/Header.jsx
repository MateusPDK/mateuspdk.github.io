import React from "react";

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

              <div className="user">
                <div className="user-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
