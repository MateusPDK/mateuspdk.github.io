import React, { useState, useEffect } from "react";

import Header from "../includes/Header";
import Loader from "../components/Loader";
import Table from "../components/Table";
import Button from "../components/Button";

const ListUsers = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://stoplight.io/mocks/nelsojost/dojo-cc-api/8271856/users")
      .then(async response => {
        const data = await response.json();
        
        if (response.ok) {
          setUsers(data.results);
        } else {
          
        }
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
                
                <a href={`${process.env.PUBLIC_URL}/add-user`}>
                  <Button classes="mt-30">Adicionar Usuário</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListUsers;