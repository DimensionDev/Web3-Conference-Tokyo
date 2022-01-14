import type { NextPage } from "next";
import style from "../styles/Footer.module.css";
// import TwitterImg from "../assets/media/icon_twitter.png";
// import DiscordImg from "../assets/media/icon_discord.png";
// import FacebookImg from "../assets/media/icon_facebook.png";
// import TeleImg from "../assets/media/icon_telegram.png";
// import GithubImg from "../assets/media/icon_github.png";
// import RedditImg from "../assets/media/icon_reddit.png";
// import YoutubeImg from "../assets/media/icon_youtube.png";
const Footer: NextPage = () => {
  const mediaMap = [
    { key: 1, img: "../assets/media/icon_twitter.png", url: "" },
    { key: 2, img: "../assets/media/icon_discord.png", url: "" },
    { key: 3, img: "../assets/media/icon_discord.png", url: "" },
    { key: 4, img: "../assets/media/icon_facebook.png", url: "" },
    { key: 5, img: "../assets/media/icon_github.png", url: "" },
    { key: 6, img: "../assets/media/icon_github.png", url: "" },
    { key: 7, img: "../assets/media/icon_youtube.png", url: "" },
  ];
  return (
    <div className={style.container}>
      <div className={style.inner}>
        <div className={style.joinUs}>Join us Community</div>
        <div className={style.mediaBox}>
          {mediaMap.map((item) => {
            return (
              <div key={item.key} className={style.imgItem}>
                <img src={item.img} />
              </div>
            );
          })}
        </div>
        <div className={style.copyright}>2021 copyright</div>
      </div>
    </div>
  );
};
export default Footer;
