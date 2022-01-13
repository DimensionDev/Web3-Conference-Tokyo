import type { NextPage } from "next";
import Image from "next/image";
import TitleImg from "../assets/title.svg";
import LaserIcon from "../assets/laser_icon.svg";
import style from "../styles/Banner.module.css";

const Banner: NextPage = () => {
  return (
    <div className={style.container}>
      <div className={style.contentBox}>
        <Image className={style.title} src={TitleImg} alt="" />
        <div className={style.titleSub}>
          <div className={style.titleSubContent}>
            <div>「 時間 11:00 ~ 19:00 」</div>
            <div>|</div>
            <div>オンライン配信有り！</div>
          </div>
        </div>
        <div className={style.LaserContentBox}>
          <Image src={LaserIcon} />
          <div className={style.laserContent}>
            <div className={style.LaserContentTitle}>
              Web3 Conference Tokyoについて
            </div>
            <div className={style.LaserContentText}>
              2022年は今年のブームを踏まえより一層業界の枠を超えて交わりを深める必要があり、ブロックチェーン業界内だけで盛り上がるイベントではなく業界内外のハブを目指します
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
