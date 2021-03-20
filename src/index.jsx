import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import ListUsersPage from "./pages/ListUsersPage";
import EditUserPage from "./pages/EditUserPage";

// import "bootstrap/dist/css/bootstrap.css";
import "./assets/scss/main.scss";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={LoginPage} />
        <Route exact path={`${process.env.PUBLIC_URL}/users`} component={ListUsersPage} />
        <Route exact path={`${process.env.PUBLIC_URL}/update-user`} component={EditUserPage} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
