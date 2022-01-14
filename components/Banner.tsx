import type { NextPage } from "next";
import TitleImg from "../assets/title.svg";
import LaserIcon from "../assets/laser_icon.svg";
import style from "../styles/Banner.module.css";
import MobileHeroSub from "../assets/mobileHeroSub.svg";

const Banner: NextPage = () => {
  const renderLaser = () => {
    return (
      ((globalThis || window).innerWidth > 1024 && (
        <div className={style.LaserContentBox}>
          <img src={LaserIcon} />
          <div className={style.laserContent}>
            <div className={style.LaserContentTitle}>
              Web3 Conference Tokyoについて
            </div>
            <div className={style.LaserContentText}>
              2022年は今年のブームを踏まえより一層業界の枠を超えて交わりを深める必要があり、ブロックチェーン業界内だけで盛り上がるイベントではなく業界内外のハブを目指します
            </div>
          </div>
        </div>
      )) || <img className={style.mobileLaser} src={MobileHeroSub} />
    );
  };
  return (
    <div className={style.container}>
      <div className={style.contentBox}>
        <div className={style.title}>
          <img src={TitleImg} alt="" />
        </div>
        <div className={style.titleSub}>
          <div className={style.titleSubContent}>
            <div>「 時間 11:00 ~ 19:00 」</div>
            <div>|</div>
            <div>オンライン配信有り！</div>
          </div>
        </div>
        {renderLaser()}
      </div>
    </div>
  );
};
export default Banner;
