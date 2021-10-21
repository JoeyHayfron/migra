import React from "react";
import App from "../src/App";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Migrating from EC2 to S3</title>
      </Head>
      <App />
    </div>
  );
}
