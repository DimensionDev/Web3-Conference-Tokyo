import type { NextPage } from "next";
import style from "../styles/Sponsor.module.css";
import SponsorImgJa from "../assets/sponsor/ja.svg";
import SponsorImgEn from "../assets/sponsor/en.svg";
import Image from "next/image";
import { useState } from "react";
import i18next from "i18next";
const Sponsor: NextPage = () => {
  const [curImg, setCurImg] = useState(SponsorImgJa);
  i18next.on("languageChanged", (lang) => {
    if (lang === "ja") {
      setCurImg(SponsorImgJa);
    }
    if (lang === "en") {
      setCurImg(SponsorImgEn);
    }
  });
  return (
    <div className={style.container} id="#3">
      <div className={style.inner}>
        <Image src={curImg} />
      </div>
    </div>
  );
};
export default Sponsor;
