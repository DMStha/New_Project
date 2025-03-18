import React from "react";

const Userlist = () => {
  const users = [
    { _id: 1, name: "Diom", address: "Kathmandu" },
    { _id: 2, name: "Rahul", address: "Pokhara" },
    { _id: 3, name: "Raju", address: "Pokhara" },
    { _id: 4, name: "Raja", address: "Pokhara" },
  ];
  return (
    <div className=" container mt-4">
      <h1>User List</h1>
      <ul>
        <li>
          {users.map((users) => {
            return <li key={users._id}>{users.name}</li>;
          })}
        </li>
      </ul>
    </div>
  );
};

export default Userlist;
