import React from "react";

import Header from "../includes/Header";
import Table from "../components/Table";

const ListUsers = () => (
  <>
    <Header />
  
    <div className="default-wrapper">
      <div className="card">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <Table headers={["Photo", "Name", "Age", "Street", "UF", "Actions"]} data="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default ListUsers;