import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Shanas App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Shanas App</h1>
      <button>
        <Link href="/hello">
          <a>Hello</a>
        </Link>
      </button>
    </main>
  );
};

export default Home;
