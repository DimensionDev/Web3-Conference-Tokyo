import type { NextPage } from "next";
import style from "../styles/Footer.module.css";
import TwitterImg from "../assets/media/icon_twitter.png";
import DiscordImg from "../assets/media/icon_discord.png";
import FacebookImg from "../assets/media/icon_facebook.png";
import TeleImg from "../assets/media/icon_telegram.png";
import GithubImg from "../assets/media/icon_github.png";
import RedditImg from "../assets/media/icon_reddit.png";
import YoutubeImg from "../assets/media/icon_youtube.png";
import Image from "next/image";
const Footer: NextPage = () => {
  const mediaMap = [
    { key: 1, img: TwitterImg, url: "https://twitter.com/realMaskNetwork" },
    { key: 2, img: TeleImg, url: "https://t.me/maskbook_group#telegram" },
    { key: 3, img: DiscordImg, url: "https://discord.gg/4SVXvj7" },
    { key: 4, img: FacebookImg, url: "https://www.facebook.com/masknetwork" },
    { key: 5, img: RedditImg, url: "https://www.reddit.com/r/MaskNetwork/" },
    { key: 6, img: GithubImg, url: "https://github.com/DimensionDev" },
    { key: 7, img: YoutubeImg, url: "https://www.youtube.com/c/MaskNetwork" },
  ];
  return (
    <div className={style.container}>
      <div className={style.inner}>
        <div className={style.joinUs}>Join us Community</div>
        <div className={style.mediaBox}>
          {mediaMap.map((item) => {
            return (
              <a href={item.url} key={item.key} className={style.imgItem} >
                <Image src={item.img} />
              </a>
            );
          })}
        </div>
        <div className={style.copyright}>© 2022 Web3 Conference Tokyo. All Rights Reserved</div>
      </div>
    </div>
  );
};
export default Footer;
