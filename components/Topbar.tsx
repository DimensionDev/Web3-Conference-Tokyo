import type { NextPage } from "next";
import style from "../styles/Topbar.module.css";
import LangImg from "../assets/lang.svg";
import LogoImg from "../assets/Logo.svg";
import { useEffect, useRef, useState } from "react";
import Image from 'next/image'
import React from "react";

const menuMap = [
  { text: "タイムテーブル", ref: "test" },
  { text: "登壇者", ref: "2" },
  { text: "メディアパートナー", ref: "3" },
];
const Topbar: NextPage = () => {
  const ctx = useRef() as any;
  const [LangText, setLangText] = useState("日本語");
  const [activeTopbar, setActiveTopbar] = useState(false);

  const [activeMenuItem, setActiveMenuItem] = useState("");

  const [curHref, setCurHref] = useState("");
  const toggleLang = () => {
    if (LangText === "English") {
      setLangText("日本語");
    } else {
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
                onClick={() => jumpHref(item.text)}
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
