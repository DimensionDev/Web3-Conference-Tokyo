import type { NextPage } from "next";
import style from "../styles/Sponsor.module.css";
import SponsorImg from "../assets/sponsorBg.svg";
import Image from "next/image";

const Sponsor: NextPage = () => {
  return (
    <div className={style.container} id="メディアパートナー">
      <div className={style.inner}>
        <Image src={SponsorImg} />
      </div>
    </div>
  );
};
export default Sponsor;
