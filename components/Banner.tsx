import type { NextPage } from "next";
import TitleImg from "../assets/title.svg";
import LaserIcon from "../assets/laser_icon.svg";
import style from "../styles/Banner.module.css";
import MobileHeroSub from "../assets/mobileHeroSub.svg";
import Image from "next/image";
import AstImg from "../assets/hero/ast.svg";
import i18next from "i18next";

const Banner: NextPage = () => {
  const t = i18next.t;

  const renderLaser = () => {
    return (
      ((globalThis || window).innerWidth > 1024 && (
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
      )) || <Image src={MobileHeroSub} />
    );
  };
  return (
    <div className={style.container}>
      <div className={style.contentBox}>
        <div className={style.ast}>
          <Image src={AstImg} />
        </div>
        <div className={style.title}>
          <Image src={TitleImg} alt="" />
        </div>
        <div className={style.titleSub}>
          <div className={style.titleSubContent}>
            <div>{t("banner_3")}</div>
            <div>|</div>
            <div>{t("banner_4")}</div>
          </div>
        </div>
        {renderLaser()}
      </div>
    </div>
  );
};
export default Banner;
