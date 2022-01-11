import type { NextPage } from "next";
import Image from "next/image";
import style from "../styles/Topbar.module.css";
import LogoImg from '../assets/Logo.svg'
const Topbar: NextPage = () => {
  return <div className={style.container}>
      <div className={style.logo}>
          <Image src={LogoImg} alt="logo" />
      </div>
      <div className={style.rightBox}>
          222
      </div>
  </div>;
};
export default Topbar;
