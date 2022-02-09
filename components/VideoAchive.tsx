import type { NextPage } from "next";
import Image from "next/image";
import BadgeImage from "../assets/video/badge.png";
import style from "../styles/VideoAchive.module.css";

const maskYoutubeChannelUrl =
  "https://www.youtube.com/channel/UCqT1gH1Wy8Nb6ABYpi09hWA";
const web3ConferenceYoutubeUrl = "https://www.youtube.com/embed/ZFd_Gd9NURY";
const VideoAchive: NextPage = () => {
  return (
    <div className={style.container}>
      <div className={style.inner}>
        <div className={style.left}>
          <div className={style.left_title}>Check it Out!</div>
          <div className={style.left_sub}>
            YouTubeにて録画映像を配信しております いつでもお楽しみ頂けます。
          </div>
          <a
            href={maskYoutubeChannelUrl}
            target="_blank"
            className={style.left_btn}
          >
            Mask Network JPチャンネル
          </a>
        </div>
        <div className={style.right}>
          <div className={style.badge}>
            <Image src={BadgeImage} />
          </div>
          <div className={style.videoBox}>
            <iframe
              width="680"
              height="428"
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
