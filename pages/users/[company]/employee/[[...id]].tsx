import type { NextPage } from "next";
import { useRouter } from "next/router";

const Employee: NextPage = () => {
  const router = useRouter();
  const { company, id = [] } = router.query;
  console.log(router.query);

  return (
    <p>
      {company} Company with employee {id[0]}
    </p>
  );
};

export default Employee;
