import React from "react";

interface Props {
  users: any;
}

const Users: React.FC<Props> = ({ users }) => {
  return (
    <>
      {
        //@ts-ignore
        users.map(({ id, name, username, email }) => (
          <div key={id}>
            <h1>{name}</h1>
            <p>{username}</p>
            <small>{email}</small>
          </div>
        ))
      }
    </>
  );
};

export default Users;
