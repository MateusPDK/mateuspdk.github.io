import React, { useState, useEffect } from "react";

import Header from "../includes/Header";
import Loader from "../components/Loader";
import Table from "../components/Table";

const ListCeps = () => {
  const [loading, setLoading] = useState(true);
  const [ceps, setCeps] = useState([]);

  useEffect(() => {
    fetch("https://stoplight.io/mocks/nelsojost/dojo-cc-api/8271856/ceps")
      .then(async response => {
        const data = await response.json();
        
        if (response.ok) {
          setCeps(data.results);
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
                    headers={["CEP", "Rua", "Número", "Complemento", "Bairro", "Cidade", "UF", "Ações"]}
                    data={ceps}
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

export default ListCeps;