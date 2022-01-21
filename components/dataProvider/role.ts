import NoritakaOkabe from "../../assets/roles/0.svg";
import YosuiHarasawa from "../../assets/roles/1.svg";
import Nekomatu from "../../assets/roles/2.svg";
import XiongGu from "../../assets/roles/3.svg";
import Kuniyoshi from "../../assets/roles/4.svg";
import Shuiye from "../../assets/roles/5.svg";
import Anzhai from "../../assets/roles/6.svg";
import Sato from "../../assets/roles/7.svg";
import Yellow from "../../assets/roles/8.svg";
import Makoto from "../../assets/roles/9.svg";
import Pingshou from "../../assets/roles/10.svg";
import Longjing from "../../assets/roles/11.svg";
import Jueci from "../../assets/roles/12.svg";
import Youjie from "../../assets/roles/13.svg";
import XingShu from "../../assets/roles/14.svg";
import YongPing from "../../assets/roles/15.svg";
import Kathleen from "../../assets/roles/16.svg";
import XizhuangGe from "../../assets/roles/17.svg";
import CryptoBaby from "../../assets/roles/18.svg";
import ShigoAri from "../../assets/roles/19.svg";
import Fujian from "../../assets/roles/20.svg";
import Jingyuan from "../../assets/roles/21.svg";
import XuDou from "../../assets/roles/22.svg";
import Shunmi from "../../assets/roles/23.svg";
import BaiShi from "../../assets/roles/24.png";
import jiaRu from "../../assets/roles/25.png";
import tengBen from "../../assets/roles/26.png";
import changTian from "../../assets/roles/27.png";
import Fenhong from "../../assets/roles/28.png";

import i18next from "i18next";
const { t } = i18next;
export interface Role {
  avatar: any;
  coLink: string;
  twitterLink?: string;
  ethLink?: string;
  facebookLink?: string;
  name: string;
  roleTitles: string[];
  intro?: string[];
}
const func: () => Role[] = () => {
  const rolesInfoMap: Role[] = [
    {
      avatar: NoritakaOkabe,
      coLink: "https://jpyc.co.jp/",
      twitterLink: "https://twitter.com/noritaka_okabe",
      name: t("roles_1_name"),
      roleTitles: ["JPYC Inc.", "CEO/ BCCC Director"],
      intro: [t("role_1_intro"), t("role_1_intro1"), t("role_1_intro2")],
    },
    {
      avatar: YosuiHarasawa,
      coLink: "https://hokusai.app/",
      twitterLink: "https://twitter.com/y0su1",
      name: "Yosui Harasawa",
      roleTitles: ["Hokusai"],
      intro: [
        "Founder/CEO of Hokusai, NFT infrastructure. I served as COO at JPYC from 2019-2021.5. I had been working as a free Blockchain researcher for 4-5 years.",
      ],
    },
    {
      avatar: Nekomatu,
      coLink: "https://defigeek.xyz/",
      twitterLink: "https://twitter.com/nekoi7yu",
      name: t("roles_2_name"),
      roleTitles: [t("roles_2_co")],
      intro: [t("role_2_intro"), t("role_2_intro1")],
    },
    {
      avatar: XiongGu,
      coLink: "https://aktsk.jp/",
      twitterLink: "https://twitter.com/yujikumagai_",
      name: t("roles_3_name"),
      roleTitles: [t("roles_3_co")],
      intro: [t("role_3_intro")],
    },
    {
      avatar: Kuniyoshi,
      coLink: "https://www.pwc.com/jp/en",
      facebookLink: "https://www.facebook.com/kuniyoshi.mabuchi",
      name: "Kuniyoshi Mabuchi",
      roleTitles: ["PwC Managing Director", "ex Facebook Director"],
      intro: [
        "2009: General Manager of Tribal DDB Tokyo, the digital agency of Omnicom, the world's No.2 advertising agency group.",
        "2012: CEO of Ogilvy Japan K.K. , the world's No. 1 advertising agency in the WPP Group.",
        "2016: SVP & Partner, Fleishman Hillard, the No. 1 PR agency in the Omnicom Group.",
        "Advisor for Tokyo University.Current position since 2020.",
      ],
    },
    {
      avatar: Shuiye,
      coLink: "https://minto-inc.jp/",
      twitterLink: "https://twitter.com/mizunoq",
      name: t("roles_4_name"),
      roleTitles: [t("roles_4_co")],
      intro: [t("role_4_intro")],
    },
    {
      avatar: Anzhai,
      coLink: "https://corporate.otakumode.com/",
      twitterLink: "https://twitter.com/paji_a",
      name: t("roles_5_name"),
      roleTitles: [t("roles_5_co"), t("roles_5_co_1")],
      intro: [t("role_5_intro")],
    },
    {
      avatar: Sato,
      coLink: "firebug.jp",
      twitterLink: "https://twitter.com/sato_shogo1",
      name: t("roles_6_name"),
      roleTitles: [t("roles_6_co"), t("roles_6_co1")],
      intro: [t("role_6_intro")],
    },
    {
      avatar: Yellow,
      coLink: "https://komugi.jp/",
      twitterLink: "https://twitter.com/ro_mi",
      name: t("roles_7_name"),
      roleTitles: [t("roles_7_co"), t("roles_7_co1")],
      intro: [t("role_7_intro")],
    },
    {
      avatar: Makoto,
      coLink: "https://ens.domains",
      ethLink: "https://twitter.com/kojirohirate",
      name: "Makoto Inoue",
      roleTitles: ["ENS, developer"],
      intro: [
        "Makoto Inoue is one of the core developers at Ethereum Name Service which provides NFT compliant naming service to various blockchain addresses and decentralised file systems. He is also co-founder of Ethereum based event service called Kickback and hosts events such as London Ethereum Codeup where a group of developers examine the latest smart contracts ",
      ],
    },
    {
      avatar: Pingshou,
      coLink: "https://linktr.ee/joyfa",
      twitterLink: "https://twitter.com/kojirohirate",
      name: t("roles_8_name"),
      roleTitles: [t("roles_8_co")],
      intro: [t("role_8_intro"), t("role_8_intro1")],
    },
    {
      avatar: Longjing,
      coLink: "https://fracton.ventures/",
      twitterLink: "https://twitter.com/tolehico",
      name: t("roles_9_name"),
      roleTitles: ["Co-Founder of Fracton Ventures"],
      intro: [t("role_9_intro")],
    },
    {
      avatar: Jueci,
      coLink: "https://kyber.network/",
      twitterLink: "https://twitter.com/taisuke_hory",
      name: t("roles_10_name"),
      roleTitles: ["Kyber Network Japan Manager"],
      intro: [t("role_10_intro")],
    },
    {
      avatar: Youjie,
      coLink: "https://www.neweconomy.jp/",
      twitterLink: "https://twitter.com/ysksdr",
      name: t("roles_11_name"),
      roleTitles: [t("roles_11_co")],
      intro: [t("role_11_intro")],
    },
    {
      avatar: XingShu,
      coLink: "https://www.hottolink.co.jp",
      twitterLink: "https://twitter.com/ucchy/",
      name: t("roles_12_name"),
      roleTitles: [t("roles_12_co"), t("roles_12_co1")],
      intro: [t("role_12_intro")],
    },
    {
      avatar: YongPing,
      coLink: "https://metabaworld.com",
      twitterLink: "https://twitter.com/sadycork",
      name: t("roles_13_name"),
      roleTitles: [t("roles_13_co")],
      intro: [t("role_18_intro")],
    },
    {
      avatar: Kathleen,
      coLink: "https://polygon.technology/",
      twitterLink: "https://twitter.com/inquisitivekath",
      name: "Kathleen Chu",
      roleTitles: ["Head of Communications,", "Polygon"],
      intro: [
        `Kathleen joined Polygon in 2021 to build the organization's communications team, including content and PR. Before Polygon, Kathleen led the Maker Foundation's plan to expand its presence in Japan. She entered the blockchain space when she joined blockhive, an Estonia-based blockchain startup, in 2017. Before blockhive, Kathleen had been a journalist at Bloomberg in Tokyo for more than ten years, covering real estate and investing. During her tenure with the news agency, she took on additional roles, including deputy bureau chief.`,
      ],
    },
    {
      avatar: XizhuangGe,
      coLink: "www.unicask.jp",
      twitterLink: "https://twitter.com/chrisdai_tokyo",
      name: t("roles_14_name"),
      roleTitles: [t("roles_14_co")],
      intro: [t("role_13_intro")],
    },
    {
      avatar: CryptoBaby,
      coLink: "https://mask.io/",
      twitterLink: "https://twitter.com/crypto___baby",
      name: "Crypto Baby",
      roleTitles: ["MaskNetwork Japan"],
      intro: [t("role_14_intro")],
    },
    {
      avatar: ShigoAri,
      coLink: "https://crypto-times.jp",
      twitterLink: "https://twitter.com/cry_curr_ar",
      name: t("roles_15_name"),
      roleTitles: [t("roles_15_co"), t("roles_15_co1")],
      intro: [t("role_15_intro")],
    },
    {
      avatar: Fujian,
      coLink: "https://www.mercoin.jp/",
      twitterLink: "https://twitter.com/smcpglf",
      name: t("roles_16_name"),
      roleTitles: [t("roles_16_co"), t("roles_16_co1")],
      intro: [t("role_16_intro")],
    },
    {
      avatar: Jingyuan,
      coLink: "https://company.warashibe.market/",
      twitterLink: "https://twitter.com/0xhideaki_sushi",
      name: t("roles_17_name"),
      roleTitles: [t("roles_17_co")],
      intro: [t("role_17_intro")],
    },
    {
      avatar: XuDou,
      coLink: "https://www.blockchainproseed.com/",
      twitterLink: "https://twitter.com/Yu_Ayato",
      name: t("roles_18_name"),
      roleTitles: ["BlockchainPROseed"],
      intro: [t("role_19_intro")],
    },
    {
      avatar: Shunmi,
      coLink: "https://www.token-economist.com/",
      twitterLink: "https://twitter.com/TokenEconomist",
      name: t("roles_19_name"),
      roleTitles: [t("roles_19_co"), t("roles_19_co1")],
      intro: [t("role_20_intro")],
    },
    {
      avatar: BaiShi,
      coLink: "https://www.arigatobank.co.jp",
      twitterLink: "https://twitter.com/YosukeShiraishi",
      name: "白石 陽介",
      roleTitles: ["株式会社ARIGATOBANK", "代表取締役"],
      intro: [t("role_21_intro")],
    },
    {
      avatar: Fenhong,
      coLink: "https://www.hikky.life/",
      twitterLink: "https://twitter.com/SawaeMika",
      name: "さわえ みか",
      roleTitles: ["株式会社HIKKY COO兼CQO"],
      intro: [t("role_22_intro")],
    },
    {
      avatar: tengBen,
      coLink: "https://gracone.co.jp/",
      twitterLink: "https://twitter.com/missbitcoin_mai",
      name: "藤本 真衣",
      roleTitles: ["株式会社グラコネ  代表取締役"],
      intro: [t("role_23_intro")],
    },
    {
      avatar: jiaRu,
      coLink: "https://campfire.co.jp/",
      twitterLink: "https://twitter.com/hbkr",
      name: "家入 一真",
      roleTitles: ["株式会社CAMPFIRE 代表取締役社長CEO"],
      intro: [t("role_24_intro")],
    },
  ];
  return rolesInfoMap;
};

export default func;
