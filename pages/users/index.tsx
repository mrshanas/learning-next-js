import type { NextPage } from "next";
import { GetStaticProps } from "next";
import User from "../../components/users";

//@ts-ignore
const Users: NextPage = ({ users }) => {
  return (
    <>
      <h1>Users</h1>
      <User users={users} />
    </>
  );
};

export default Users;

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      users: data,
    },
  };
};
