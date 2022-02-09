import type { NextPage } from "next";
import Image from "next/image";
import BadgeImage from "../assets/video/badge.png";
import LeftImage from "../assets/video/lefT.png";
import style from "../styles/VideoAchive.module.css";
import i18next from "i18next";

const maskYoutubeChannelUrl =
  "https://www.youtube.com/channel/UCqT1gH1Wy8Nb6ABYpi09hWA";
const web3ConferenceYoutubeUrl = "https://www.youtube.com/embed/ZFd_Gd9NURY";
const VideoAchive: NextPage = () => {
  const { t } = i18next;
  return (
    <div id="youtube" className={style.container}>
      <div className={style.inner}>
        <div className={style.left}>
          <div className={style.left_title}>
            <Image src={LeftImage} />
          </div>
          <div className={style.left_sub}>{t("video_2_t")}</div>
          <a
            href={maskYoutubeChannelUrl}
            target="_blank"
            className={style.left_btn}
          >
            {t("video_t")}
          </a>
        </div>
        <div className={style.right}>
          <div className={style.badge}>
            <Image src={BadgeImage} />
          </div>
          <div className={style.videoBox}>
            <iframe
              width="100%"
              height="100%"
              src={web3ConferenceYoutubeUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoAchive;
