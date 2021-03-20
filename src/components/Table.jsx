import React from "react";

import ButtonIcon from "./ButtonIcon";

import "../assets/scss/components/_table.scss";

const UserRow = ({
  id,
  imgUrl,
  name,
  cep,
  city,
  streetName,
  streetNumber,
  neighborhood,
  uf,
  editUser,
  deleteUser
}) => (
  <tr>
    <td><div className="user-img" style={{backgroundImage: `url(${imgUrl ? imgUrl : "../assets/img/icons/user.svg"})`}} /></td>
    <td>{name && name}</td>
    <td>{cep && cep}</td>
    <td>{streetName && streetName} {streetNumber && `, ${streetNumber}`}</td>
    <td>{neighborhood && neighborhood}</td>
    <td>{city && city}</td>
    <td>{uf && uf}</td>
    <td className="actions">
      <a href={`${process.env.PUBLIC_URL}/editar-usuario?id=${id}`} title="Editar Usuário" alt="Editar Usuário">
        <ButtonIcon edit name="Edit" onclick={editUser} />
      </a>
      
      <ButtonIcon remove name="Delete" onclick={deleteUser} />
    </td>
  </tr>
);

const Table = ({ headers, data }) => {
  const deleteUserHandler = id => {
    console.log(`Delete User ${id}`);
  };

  const renderUsers = users => {
    return users.map(({ id, imgUrl, name, address }) => {
      const { cep, city, neighborhood, streetName, streetNumber, uf } = address;

      return (
        <UserRow
          key={id}
          id={id}
          imgUrl={imgUrl}
          name={name}
          cep={cep}
          city={city}
          streetName={streetName}
          streetNumber={streetNumber}
          neighborhood={neighborhood}
          uf={uf}
          deleteUser={() => deleteUserHandler(id)}
        />
      )
    });
  };
  
  return (
    <table className="table-default">
      <thead>
        <tr>
          {headers.map((header, index) => <th key={index}>{header.toString()}</th>)}
        </tr>
      </thead>

      <tbody>
        {renderUsers(data)}
      </tbody>
    </table>
  );
}

export default Table;