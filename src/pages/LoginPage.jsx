import React from "react";

import Input from "../components/Input";
import Button from "../components/Button";
import logo from "../assets/img/logo.png";
import "../assets/scss/pages/_login.scss";

const Login = () => (
  <div className="login-wrapper">
    <div className="card card-login">
      <img src={logo} className="logo" alt="CondoConta" title="CondoConta" />
      
      <form>
        <Input label="Username" />
        <Input label="Password" />

        <Button type="submit">
          Login
        </Button>
      </form>
    </div>
  </div>
);

export default Login;