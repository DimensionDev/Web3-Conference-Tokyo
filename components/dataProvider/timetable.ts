import img1 from "../../assets/schedule/1.png";
import img2 from "../../assets/schedule/2.png";
import img3 from "../../assets/schedule/3.png";
import img4 from "../../assets/schedule/4.png";
import img5 from "../../assets/schedule/5.png";
import img6 from "../../assets/schedule/6.png";
import img7 from "../../assets/schedule/7.png";
import img8 from "../../assets/schedule/8.png";
import img9 from "../../assets/schedule/9.png";
import img10 from "../../assets/schedule/10.png";
import img11 from "../../assets/schedule/11.png";
import img12 from "../../assets/schedule/12.png";
import img13 from "../../assets/schedule/13.png";
import i18next from "i18next";
export interface TimeTableProp {
  preview: any;
  time: string;
  title: string;
  sub: string[];
  extra: Array<{
    type: string;
    name: string;
    sub: string;
  }>;
  isLive?: boolean;
  isRecord?: boolean;
  difficuty?: string;
  switchTime?: string;
  isBig?: boolean;
}
const func: () => TimeTableProp[] = () => {
  const { t } = i18next;
  const timeTablesMap: TimeTableProp[] = [
    {
      preview: img1,
      time: "11:00-11:10",
      title: t("timeTable_1_t"),
      sub: [],
      extra: [{ type: "登壇者", name: "Nachan", sub: "MaskNetwork" }],
      isLive: true,
      // switchTime: "5分で転換",
    },
    {
      preview: img2,
      time: "11:15-11:30",
      title: "インターネットの歴史とMaskNetworkの紹介",
      sub: [
        "・Web1-Web2-Web3 の歴史を振り返りながらMaskの紹介",
        "・未来のWebの予想",
      ],
      extra: [{ type: "登壇者", name: "SujiYan", sub: "MaskNetwork CEO" }],
      isRecord: true,
      // switchTime: "11:30-11:35転換",
    },
    {
      preview: img3,
      time: "11:35-12:05",
      title: "オープンソースソフトウェアの歴史からみるWeb3について",
      sub: [
        "・Web1の時のOSSとWeb3のOSSの変化",
        "・新しいWebの時代で何ができるのか",
      ],
      extra: [{ type: "登壇者", name: "猫井夕菜", sub: "DeFiGeek" }],
      isLive: true,
    },
    {
      preview: img4,
      time: "12:05-12:35",
      title: "Web3を語るなら、まずDeFiを学ぼう",
      sub: [
        "・Web3で重要なポイントとなるDeFi(分散型金融)とは？",
        "・DeFiの思想が新しい経済を作り出す",
      ],
      extra: [
        { type: "Mod", name: "Mai Fujimoto", sub: "株式会社グラコネ CEO" },
        {
          type: "Speaker",
          name: "堀次 泰介",
          sub: "Kyber Network Japan Manager",
        },
        { type: "", name: "絢斗 優", sub: "BlockchainPROseed" },
      ],
      // switchTime: "12:35-12:40 転換",
    },
    {
      preview: img5,
      time: "12:40-13:20",
      title: "セッション１:Web3.0が、Web1.0の理念を復活できるのか？",
      sub: [
        "・Web1時代に自由で検閲されない文化をWeb3で復帰することができるのか？",
        "・Web3.0が完成系に近づいたとき、Web2.0はどうなってるのか",
        "・インターネットの最終形について考える",
      ],
      extra: [
        { type: "Mod", name: "馬渕さん", sub: "PwC" },
        { type: "Speaker", name: "安宅さん", sub: "Tokyo Otaku Mode" },
        { type: "", name: "家入一真", sub: "CampFire" },
        { type: "", name: "内山さん", sub: "Hottolink" },
      ],
      isLive: true,
      // switchTime: "13:20-13:25 転換",
    },
    {
      preview: img6,
      time: "13:25-13:55",
      title: "セッション２:既存IPの効果的なweb3.0へのアプローチ方法",
      sub: [
        "・既存IPがWeb3とのコラボで成功した事例",
        "・日本でできるNFTの可能性",
        "・アニメ、ゲーム、芸能etc これから参入方法は？",
        "・持続可能にするためにどんな工夫が必要か",
      ],
      extra: [
        {
          type: "Mod",
          name: "長田 新子",
          sub: "渋谷未来デザイン 理事/事務局次長",
        },
        { type: "Speaker", name: "水野 和寛", sub: "Minto CEO" },
        { type: "", name: "佐藤詳悟", sub: "FIREBUG CPO" },
        { type: "", name: "熊谷 祐二", sub: "Akatsuki Director" },
        { type: "", name: "伏見 慎剛", sub: "メルカリ執行役員" },
      ],
      isLive: true,
      switchTime: "13:55-14:30 大きな休憩",
      isBig: true,
    },
    {
      preview: img7,
      time: "14:30-15:00",
      title: "セッション３:Web3.0事業例①インフラ",
      sub: [
        "・それぞれの事業内容/投資先で期待しているところ",
        "・今後どのような企業に参入してほしいか",
        "・これから必要になるWeb3インフラサービスとは",
      ],
      extra: [
        { type: "Mod", name: "加藤 順弥", sub: "TOKEN ECONOMIST 代表" },
        { type: "Speaker", name: "国光宏尚", sub: "gumi Founder" },
        { type: "", name: "原沢陽水", sub: "Hokusai CEO" },
        { type: "", name: "岡部典孝", sub: "JPYC Inc. CEO" },
        { type: "", name: "井元 秀彰", sub: "和らしべ CEO" },
      ],
      isLive: true,
      // switchTime: "15:00-15:05 転換",
    },
    {
      preview: img8,
      time: "15:05-15:35",
      title: "セッション４:Web3.0事業例②メタバース/NFT関連",
      sub: [
        "・分散型のメタバースと既存のVRコミュニティがどのように交わっていきたいか",
        "・メタバース/XR領域でのNFTの活用の仕方",
        "・今後のメタバース業界展開予想",
        "・エンターテイメントの可能性",
      ],
      extra: [
        {
          type: "Mod",
          name: "設楽 悠介",
          sub: "幻冬舎「あたらしい経済」編集長",
        },
        { type: "Speaker", name: "佐渡島 庸平", sub: "株式会社コルク" },
        { type: "", name: "白石 陽介", sub: "ARIGATOBANK 代表取締役" },
        { type: "", name: "コムギ", sub: "Web3 VC/Web3 Researcher" },
        { type: "", name: "さわえ みか", sub: "HIKKY COO/CQO" },
      ],
      isLive: true,
      // switchTime: "15:35-16:05   転換",
    },
    {
      preview: img9,
      time: "16:05-16:15",
      title: "社会実装に使えるブロックチェーン技術(国内)",
      sub: [],
      extra: [{ type: "Mod", name: "Chris Dai", sub: "Unicask" }],
      isLive: true,
      // switchTime: "16:15-16:20  転換",
    },
    {
      preview: img10,
      time: "16:20-16:50",
      title: "社会実装に使えるブロックチェーン技術(海外)",
      sub: [],
      extra: [{ type: "登壇者", name: "Numbers protocol", sub: "" }],
      isRecord: true,
      // switchTime: "16:50-16:55  転換",
    },
    {
      preview: img11,
      time: "16:55-17:55",
      title: "セッション５:超スタートアップピッチタイム",
      sub: ["・Web3関連スタートアップ企業の紹介"],
      extra: [
        { type: "Mod", name: "亀井 聡彦", sub: "Fracton Ventures Co-Founder" },
      ],
      isLive: true,
      // switchTime: "17:55-18:00 転換",
    },
    {
      preview: img12,
      time: "16:55-17:55",
      title: "セッション６:DAOはどう世界を変えていくのか",
      sub: [
        "・DAOは私たちの生活をどう変えてくれるの？",
        "・DAOで稼ぐためにはどんなスキルが必要か",
        "・DAOの最終系とは",
      ],
      extra: [
        { type: "Mod", name: "新井 進悟", sub: "CRYPTO TIMES 編集長" },
        { type: "Speaker", name: "Makoto Inoue", sub: "ENS Developer" },
        {
          type: "",
          name: "Kathleen Chu",
          sub: "Polygon Head of Communications",
        },
      ],
      isRecord: true,
      // switchTime: "18:30-18:35 転換",
    },
    {
      preview: img13,
      time: "18:35-18:45",
      title: "エンディング",
      sub: [],
      extra: [
        { type: "主催", name: "Nachan", sub: "" },
        { type: "", name: "Nefer", sub: "" },
        { type: "", name: "Vivian", sub: "" },
        { type: "", name: "MissBitcoin  Mai", sub: "" },
      ],
      isLive: true,
    },
  ];
  return timeTablesMap;
};

export default func;
