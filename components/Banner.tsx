import type { NextPage } from "next";
import Image from "next/image";
import TitleImg from "../assets/title.svg";
import style from "../styles/Banner.module.css";
const Banner: NextPage = () => {
  return (
    <div className={style.container}>
      <Image className={style.title} src={TitleImg} alt="" />
      <div>222</div>
    </div>
  );
};
export default Banner;
