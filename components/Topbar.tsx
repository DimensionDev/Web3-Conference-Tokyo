import type { NextPage } from "next";
import Image from "next/image";
import style from "../styles/Topbar.module.css";
import LangImg from "../assets/lang.svg";
import LogoImg from "../assets/Logo.svg";
import { useState } from "react";
const menuMap = ["タイムテーブル", "登壇者", "メディアパートナー"];
const Topbar: NextPage = () => {
  const [LangText, setLangText] = useState("English");
  const toggleLang = () => {
    if (LangText === "English") {
      setLangText("日本語");
    } else {
      setLangText("English");
    }
  };
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <Image className={style.logo} src={LogoImg} alt="logo" />
      </div>
      <div className={style.rightBox}>
        <div className={style.menu}>
          {menuMap.map((item, index) => {
            return (
              <div key={index} className={style.menuItem}>
                {item}
              </div>
            );
          })}
        </div>
        <div className={style.lang} onClick={toggleLang}>
          <Image src={LangImg} />
          <div>{LangText}</div>
        </div>
      </div>
    </div>
  );
};
export default Topbar;
