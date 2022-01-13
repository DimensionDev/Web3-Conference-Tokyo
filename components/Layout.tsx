import type { NextPage } from "next";
import style from "../styles/Layout.module.css";
import Topbar from "./Topbar";
import Banner from "./Banner";
import TimeTable from "./TImeTable";
import Roles from "./Roles";
import Sponsor from "./Sponsor";
import Footer from "./Footer";
import { useEffect, useRef } from "react";

const Layout: NextPage = () => {
 
  return (
    <div className={style.container}>
      <Topbar />
      <Banner />
      <TimeTable />
      <Roles />
      <Sponsor />
      <Footer />
    </div>
  );
};
export default Layout;
