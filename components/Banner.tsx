import type { NextPage } from "next";
import TitleImg from "../assets/title.png";
import LaserIcon from "../assets/laser_icon.svg";
import style from "../styles/Banner.module.css";
import MobileHeroSubJa from "../assets/mobileHeroSubJa.png";
import MobileHeroSubEn from "../assets/mobileHeroSubEn.png";
import Image from "next/image";
import AstImg from "../assets/hero/ast.png";
import i18next from "i18next";
import { useEffect, useState } from "react";

const Banner: NextPage = () => {
  const { t } = i18next;
  const [screenWidth, setScreenWidth] = useState(
    (globalThis || window).innerWidth
  );
  const [curLang, setCurLang] = useState("ja");
  useEffect(() => {
    setCurLang(i18next.language);
    window.addEventListener("resize", () =>
      setScreenWidth((globalThis || window).innerWidth)
    );
    return () =>
      window.removeEventListener("resize", () =>
        setScreenWidth((globalThis || window).innerWidth)
      );
  });
  const jumpHref = (href: string) => {
    const el = document.getElementById(href);
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const renderLaser = () => {
    if (screenWidth && screenWidth > 1024) {
      return (
        <div className={style.LaserContentBox}>
          <Image src={LaserIcon} />
          <div className={style.laserContent}>
            <div className={style.LaserContentTitle}>{t("banner_1")}</div>
            <div className={style.LaserContentText}>{t("banner_2")}</div>
          </div>
        </div>
      );
    } else {
      return (
        <Image src={curLang === "ja" ? MobileHeroSubJa : MobileHeroSubEn} />
      );
    }
  };
  return (
    <div className={style.container}>
      <div className={style.contentBox}>
        <div className={style.ast}>
          <Image src={AstImg} />
        </div>
        <div className={style.title}>
          <Image src={TitleImg} />
        </div>
        <div className={style.titleSub}>
          <div className={style.titleSubContent}>
            {t("banner_3")}
            <span className={style.divider}>|</span>
            {t("banner_4")}
          </div>
          <div
            onClick={() => jumpHref("youtube")}
            className={style.titleSubBtn}
          >
            {t("banner_apply")}
          </div>
        </div>
        {renderLaser()}
      </div>
    </div>
  );
};
export default Banner;
