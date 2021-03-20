import React from "react";

import ButtonIcon from "./ButtonIcon";

import "../assets/scss/components/_table.scss";

const dummyUsers = [
  {
    id: "1",
    img: "",
    name: "Walter White",
    age: "50",
    street: "Lorem ipsum...",
    uf: "NY"
  },
  {
    id: "2",
    img: "",
    name: "Anakin Skywalker",
    age: "31",
    street: "Lorem ipsum...",
    uf: "TI"
  },
  {
    id: "3",
    img: "",
    name: "Jeff",
    age: "27",
    street: "Lorem ipsum...",
    uf: "SP"
  },
];

const UserRow = ({
  id,
  img,
  name,
  age,
  street,
  uf,
  editUser,
  deleteUser
}) => (
  <tr>
    <td><div className="user-img" style={{backgroundImage: `url(${img ? img : "../assets/img/icons/user.svg"})`}} /></td>
    <td>{name && name}</td>
    <td>{age && age}</td>
    <td>{street && street}</td>
    <td>{uf && uf}</td>
    <td className="actions">
      <ButtonIcon edit name="Edit" onclick={() => editUser(id)} />
      <ButtonIcon remove name="Delete" onclick={() => deleteUser(id)} />
    </td>
  </tr>
);

const Table = ({ headers }) => {
  const editUserHandler = id => {
    console.log(`Edit User ${id}`);
  };

  const deleteUserHandler = id => {
    console.log(`Delete User ${id}`);
  };

  const renderUsers = users => {
    return users.map(({ id, name, age, street, uf }) => (
      <UserRow
        key={id}
        name={name}
        age={age}
        street={street}
        uf={uf}
        editUser={editUserHandler}
        deleteUser={deleteUserHandler}
      />
    ));
  };
  
  return (
    <table className="table-default">
      <thead>
        <tr>
          {headers.map((header, index) => <th key={index}>{header.toString()}</th>)}
        </tr>
      </thead>

      <tbody>
        {renderUsers(dummyUsers)}
      </tbody>
    </table>
  );
}

export default Table;