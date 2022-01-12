import NoritakaOkabe from "../../assets/roles/Noritaka Okabe.png";
import YosuiHarasawa from "../../assets/roles/Yosui Harasawa10号23点更新.jpeg";
import Nekomatu from "../../assets/roles/猫井 夕菜(ねこい ゆうな) a.k.a.  @nekomatu .jpg";
import XiongGu from "../../assets/roles/熊谷 祐二.png";
import Kuniyoshi from "../../assets/roles/Kuniyoshi Mabuchi.png";
import Shuiye from "../../assets/roles/水野和寛.png";
import Anzhai from "../../assets/roles/安宅 基（あたか はじめ）.jpg";
import Sato from "../../assets/roles/210109_0018 - 佐藤詳悟.png";
import Yellow from "../../assets/roles/コムギ（こむぎ）.jpeg";
import Makoto from "../../assets/roles/Makoto Inoue.png";
import Pingshou from "../../assets/roles/平手 宏志朗.jpg";
import Longjing from "../../assets/roles/亀井 聡彦 （かめい としひこ）.jpeg";
import Jueci from "../../assets/roles/堀次 泰介（ほりつぎ たいすけ）.jpg";
import Youjie from "../../assets/roles/設楽 悠介.jpg";
import XingShu from "../../assets/roles/内山 幸樹.png";
import YongPing from '../../assets/roles/佐渡島 庸平.jpg'
import Kathleen from '../../assets/roles/11号17点更新Kathleen Chu.jpg'
import XizhuangGe from '../../assets/roles/11号17点更新クリス　ダイ.png'
import CryptoBaby from '../../assets/roles/11号17点更新 Crypto Baby.jpeg'
import ShigoAri from '../../assets/roles/截屏2022-01-12 上午11.51.08.png'
export interface Role {
  avatar: any;
  coLink: string;
  twitterLink: string;
  name: string;
  roleTitles: string[];
}
const rolesInfoMap: Role[] = [
  {
    avatar: NoritakaOkabe,
    coLink: "",
    twitterLink: "",
    name: "Noritaka Okabe",
    roleTitles: ["JPYC Inc.", "CEO/ BCCC Director"],
  },
  {
    avatar: YosuiHarasawa,
    coLink: "",
    twitterLink: "",
    name: "Yosui Harasawa",
    roleTitles: ["Hokusai"],
  },
  {
    avatar: Nekomatu,
    coLink: "",
    twitterLink: "",
    name: "猫井夕菜  @nekomatu ",
    roleTitles: ["DeFiGeek(DFGC) ", "モデレーター"],
  },
  {
    avatar: XiongGu,
    coLink: "",
    twitterLink: "",
    name: "熊谷 祐二",
    roleTitles: ["株式会社アカツキ/ディレクター"],
  },
  {
    avatar: Kuniyoshi,
    coLink: "",
    twitterLink: "",
    name: "Kuniyoshi Mabuchi",
    roleTitles: ["PwC Managing Director", "ex Facebook Director"],
  },
  {
    avatar: Shuiye,
    coLink: "",
    twitterLink: "",
    name: "水野 和寛",
    roleTitles: ["株式会社Minto CEO"],
  },
  {
    avatar: Anzhai,
    coLink: "",
    twitterLink: "",
    name: "安宅 基",
    roleTitles: ["株式会社Tokyo Otaku Mode", "創業者兼COO"],
  },
  {
    avatar: Sato,
    coLink: "",
    twitterLink: "",
    name: "佐藤 詳悟",
    roleTitles: ["株式会社FIREBUG ", "代表取締役CPO"],
  },
  {
    avatar: Yellow,
    coLink: "",
    twitterLink: "",
    name: "コムギ",
    roleTitles: ["Web3特化のベンチャーキャピタル ", "/Web3リサーチャー"],
  },
  {
    avatar: Makoto,
    coLink: "",
    twitterLink: "",
    name: "Makoto Inoue",
    roleTitles: ["ENS, developer"],
  },
  {
    avatar: Pingshou,
    coLink: "",
    twitterLink: "",
    name: "平手 宏志朗",
    roleTitles: ["株式会社ジョイファ"],
  },
  {
    avatar: Longjing,
    coLink: "",
    twitterLink: "",
    name: "亀井 聡彦",
    roleTitles: ["Co-Founder of Fracton Ventures"],
  },
  {
    avatar: Jueci,
    coLink: "",
    twitterLink: "",
    name: "堀次 泰介",
    roleTitles: ["Kyber Network Japan Manager"],
  },
  {
    avatar: Youjie,
    coLink: "",
    twitterLink: "",
    name: "設楽 悠介",
    roleTitles: ["幻冬舎「あたらしい経済」編集長"],
  },
  {
    avatar: XingShu,
    coLink: "",
    twitterLink: "",
    name: "内山 幸樹",
    roleTitles: ["（株)ホットリンク", "代表取締役＆グループCEO"],
  },
  {
    avatar: YongPing,
    coLink: "",
    twitterLink: "",
    name: "佐渡島 庸平",
    roleTitles: ["株式会社コルク"],
  },
  {
    avatar: Kathleen,
    coLink: "",
    twitterLink: "",
    name: "Kathleen Chu",
    roleTitles: ["Head of Communications,","Polygon"],
  },
  {
    avatar: XizhuangGe,
    coLink: "",
    twitterLink: "",
    name: "クリス　ダイ",
    roleTitles: ["株式会社 UniCask"],
  },
  {
    avatar: CryptoBaby,
    coLink: "",
    twitterLink: "",
    name: "Crypto Baby",
    roleTitles: ["MaskNetwork Japan"],
  },
  {
    avatar: ShigoAri,
    coLink: "",
    twitterLink: "",
    name: "Shingo Arai | 新井 進悟",
    roleTitles: ["MaskNetwork Japan"],
  },
];

export default rolesInfoMap;
