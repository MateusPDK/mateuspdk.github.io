import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import ListUsers from "./pages/ListUsers";
import EditUser from "./pages/EditUser";

import "bootstrap/dist/css/bootstrap.css";
import "./assets/scss/main.scss";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={ListUsers} />
        <Route exact path={`${process.env.PUBLIC_URL}/edit-user`} component={EditUser} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
