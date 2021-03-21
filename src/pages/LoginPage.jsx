import React, { useState } from "react";

import Input from "../components/Input";
import Button from "../components/Button";
import logo from "../assets/img/logo.png";
import "../assets/scss/pages/_login.scss";

const Login = props => {
  const [login, setLogin] = useState({ username: "", password: "" });

  const changeFieldHandler = (event) => {
    const { name, value } = event.target;
    
    setLogin({ ...login, [name]: value });
  };

  const loginHandler = event => {
    event.preventDefault();
    
  //   const requestOptions = {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: {...login}
  //   };
  //   fetch('https://stoplight.io/mocks/nelsojost/dojo-cc-api/8271856/login', requestOptions)
  //     .then(response => console.log(response))

    props.history.push("users");
  };

  return (
    <div className="login-wrapper">
      <div className="card card-login">
        <img src={logo} className="logo" alt="CondoConta" title="CondoConta" />

        <form>
          <Input label="Username" onchange={changeFieldHandler} />
          <Input type="password" label="Password" onchange={changeFieldHandler} />

          <Button type="submit" onclick={loginHandler}>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;