import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import ListUsersPage from "./pages/ListUsersPage";
import EditUserPage from "./pages/EditUserPage";
import AddUserPage from "./pages/AddUserPage";
import ListCepsPage from "./pages/ListCepsPage";

// import "bootstrap/dist/css/bootstrap.css";
import "./assets/scss/main.scss";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={LoginPage} />
        <Route exact path={`${process.env.PUBLIC_URL}/users`} component={ListUsersPage} />
        <Route exact path={`${process.env.PUBLIC_URL}/update-user`} component={EditUserPage} />
        <Route exact path={`${process.env.PUBLIC_URL}/add-user`} component={AddUserPage} />
        <Route exact path={`${process.env.PUBLIC_URL}/ceps`} component={ListCepsPage} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
