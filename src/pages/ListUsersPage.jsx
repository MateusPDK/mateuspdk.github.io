import React, { useState, useEffect } from "react";

import Header from "../includes/Header";
import Loader from "../components/Loader";
import Table from "../components/Table";

const ListUsers = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://stoplight.io/mocks/nelsojost/dojo-cc-api/8271856/users")
      .then(async response => {
        const data = await response.json();
        
        if (!response.ok) {
          console.log(response);
        }

        setUsers(data.results);
      })
      .finally(() => setLoading(false))
  }, []);

  return (
    <>
      <Header />
    
      <div className="default-wrapper">
        <div className="card">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                {loading ? <Loader /> : (
                  <Table
                    headers={["Foto", "Nome", "CEP", "Logradouro", "Bairro", "Cidade", "UF", "Ações"]}
                    data={users}
                    loading={loading}
                  />
                )}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListUsers;