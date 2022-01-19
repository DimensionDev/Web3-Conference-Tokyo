import type { NextPage } from "next";
import style from "../styles/Sponsor.module.css";
import SponsorImgJa from "../assets/sponsor/ja.svg";
import SponsorImgEn from "../assets/sponsor/en.svg";
import Image from "next/image";
import i18next from "i18next";
const Sponsor: NextPage = () => {
  return (
    <div className={style.container} id="#3">
      <div className={style.inner}>
        <Image src={i18next.language === "ja" ? SponsorImgJa : SponsorImgEn} />
      </div>
    </div>
  );
};
export default Sponsor;
