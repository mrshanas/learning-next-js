import type { NextPage } from "next";
import { useRouter } from "next/router";

const Company: NextPage = () => {
  const { company } = useRouter().query;

  return <h1>{company}</h1>;
};

export default Company;
