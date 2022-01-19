import type { NextPage } from "next";
import style from "../styles/Topbar.module.css";
import LangImg from "../assets/lang.svg";
import LogoImg from "../assets/Logo.svg";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import React from "react";
import i18next from "i18next";

const menuMap = [
  { text: "Schedule", ref: "#1" },
  { text: "Speaker", ref: "#2" },
  { text: "Partner", ref: "#3" },
];
const Topbar: NextPage = () => {
  const ctx = useRef() as any;
  const [LangText, setLangText] = useState("日本語");
  const [activeTopbar, setActiveTopbar] = useState(false);

  // const [activeMenuItem, setActiveMenuItem] = useState("");

  const [curHref, setCurHref] = useState("");
  const toggleLang = () => {
    if (LangText === "English") {
      i18next.changeLanguage("ja");
      setLangText('日本語')
    } else {
      i18next.changeLanguage("en");
      setLangText("English");
    }
  };

  const getTopbarStyle = () => {
    if (ctx && ctx.current && ctx.current.offsetTop > 1) {
      setActiveTopbar(true);
    } else {
      setActiveTopbar(false);
    }
  };
  const jumpHref = (href: string) => {
    const el = document.getElementById(href);
    el?.scrollIntoView({ behavior: "smooth" });
    setCurHref(href);
  };

  useEffect(() => {
    window.addEventListener("scroll", getTopbarStyle, true);
    return () => {
      window.removeEventListener("scroll", getTopbarStyle, true);
    };
  }, []);
  return (
    <div
      ref={ctx}
      className={
        activeTopbar
          ? `${style.container} ${style.containerActive}`
          : style.container
      }
    >
      <div className={style.logo}>
        <Image className={style.logo} src={LogoImg} alt="logo" />
      </div>
      <div className={style.rightBox}>
        <div className={style.menu}>
          {menuMap.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  curHref === item.text
                    ? `${style.ActiveMenuItem} ${style.menuItem}`
                    : style.menuItem
                }
                onClick={() => jumpHref(item.ref)}
              >
                {item.text}
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
