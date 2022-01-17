import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import i18next from "i18next";
import { useState } from "react";

const Home: NextPage = () => {
  const [lang, setLang] = useState("ja");

  i18next.on("languageChanged", () => {
    if (lang == "ja") {
      setLang("en");
    } else {
      setLang("ja");
    }
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>Web3 Conference Tokyo</title>
        <meta name="description" content="Web3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout />
    </div>
  );
};

export default Home;
