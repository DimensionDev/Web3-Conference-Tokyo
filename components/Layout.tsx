import type { NextPage } from "next";
import style from "../styles/Layout.module.css";
import Topbar from "./Topbar";
import Banner from "./Banner";
import TimeTable from "./TImeTable";
import Roles from "./Roles";
import Sponsor from "./Sponsor";
import Footer from "./Footer";
import VideoAchive from "./VideoAchive";
import React, { useEffect, useState } from "react";
import i18next from "i18next";

const Layout: NextPage = () => {
  const [lang, setLang] = useState("ja");

  useEffect(() => {
    i18next.on("languageChanged", (v) => {
      if (v == "ja") {
        setLang("en");
      } else {
        setLang("ja");
      }
    });
    return () => i18next.off("languageChanged");
  }, []);

  return (
    <div id="layout" className={style.container}>
      <Topbar />
      <Banner />
      <VideoAchive />
      {/* <TimeTable /> */}
      {/* <Roles /> */}
      <Sponsor />
      <Footer />
    </div>
  );
};
export default Layout;
