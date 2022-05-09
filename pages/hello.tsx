import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const hello: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Hello Page</title>
      </Head>
      <h1>Hello Page</h1>
      <Link href="/">
        <a>Back Home</a>
      </Link>
    </main>
  );
};

export default hello;
