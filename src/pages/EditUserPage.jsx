import React, { useState, useEffect } from "react";
import queryString from "query-string";
import Swal from "sweetalert2";

import Header from "../includes/Header";
import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";
import Loader from "../components/Loader";
import states from "../utils/states";
import "sweetalert2/src/sweetalert2.scss";
import "../assets/scss/pages/_user_page.scss";

const EditUser = props => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({});

  const userId = queryString.parse(props.location.search);

  useEffect(() => {
    fetch(`https://stoplight.io/mocks/nelsojost/dojo-cc-api/8271856/user/${userId.id}`)
      .then(async response => {
        const user = await response.json();
        
        if (!response.ok) {
          console.log(response);
        }

        setCurrentUser(user);
        console.log(user);
      })
      .finally(() => setLoading(false))
  }, [userId.id]);

  const changeFieldHandler = (event) => {
    const { name, value } = event.target;
    
    setCurrentUser({ ...currentUser, [name]: value });
  };

  const changeAddressFieldHandler = (event) => {
    const { name, value } = event.target;

    setCurrentUser({ ...currentUser, address: { ...currentUser.address, [name]: value } });
  };

  const changeCepHandler = (event) => {
    const { name, value } = event.target;

    console.log(name, value);
  }

  const saveUserHandler = () => {
    Swal.fire("Success!", JSON.stringify(currentUser, null, 4), "success")
  }

  const { imgBase64, name, address } = currentUser;

  return (
    <>
      <Header />
    
      <div className="default-wrapper">
        <div className="card">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                {loading ? <Loader /> : (
                  <>
                    <h1 className="title">Edit User</h1>
                    
                    <form>
                      <div className="collumn">
                        <Input
                          label="Name"
                          name="name"
                          value={name}
                          onchange={changeFieldHandler}
                        />

                        <Input
                          label="Street"
                          name="streetName"
                          value={address.streetName}
                          onchange={changeAddressFieldHandler}
                        />

                        <Input
                          label="Number"
                          name="streetNumber"
                          value={address.streetNumber}
                          onchange={changeAddressFieldHandler}
                        />

                        <Input
                          label="Additional Info"
                          name="additionalInfo"
                          value={address.additionalInfo}
                          onchange={changeAddressFieldHandler}
                        />
                      </div>

                      <div className="collumn">
                        <Input
                          label="Neighborhood"
                          name="neighborhood"
                          value={address.neighborhood}
                          onchange={changeAddressFieldHandler}
                        />

                        <Input
                          label="City"
                          name="city"
                          value={address.city}
                          onchange={changeAddressFieldHandler}
                        />

                        <Select
                          label="UF"
                          name="uf"
                          value={address.uf}
                          options={states}
                          onchange={changeAddressFieldHandler}
                        />

                        <Input
                          label="CEP"
                          name="cep"
                          value={address.cep}
                          onchange={changeCepHandler}
                        />
                      </div>

                      <div className="collumn">
                        <div className="image-preview">

                        </div>
                      </div>
                    </form>

                    <Button type="submit" onclick={saveUserHandler}>
                      Save
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditUser;