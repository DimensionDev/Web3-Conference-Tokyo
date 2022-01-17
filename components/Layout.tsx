import type { NextPage } from "next";
import style from "../styles/Layout.module.css";
import Topbar from "./Topbar";
import Banner from "./Banner";
import TimeTable from "./TImeTable";
import Roles from "./Roles";
import Sponsor from "./Sponsor";
import Footer from "./Footer";
import { useEffect } from "react";
import CanvasScript from "../components/utils/CanvasBg";


const Layout: NextPage = () => {
  useEffect(() => {
    CanvasScript(window);
  }, []);
  return (
    <div id="layout" className={style.container}>
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
