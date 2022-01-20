import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import { useEffect } from "react";
import CanvasBg from "../components/utils/canvas";

const Home: NextPage = () => {
  useEffect(() => {
    CanvasBg();
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Web3 Conference Tokyo</title>
        <meta name="description" content="Web3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout />
      <canvas id="canvas"></canvas>
    </div>
  );
};

export default Home;
