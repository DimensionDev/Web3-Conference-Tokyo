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

interface TimeTable {
  preview: any;
  time: string;
  title: string;
  sub: string[];
  extra: Array<{
    type: string;
    name: string;
    sub: string;
  }>;
}

const timeTablesMap: TimeTable[] = [
  {
    preview: img1,
    time: "11:00-11:10",
    title: "オープニング ",
    sub: ["・  辻さんからイベント開催の想いなどを話してもらいます"],
    extra: [{ type: "登壇者", name: "Tsuji Kanakoちゃん", sub: "maskNetwork" }],
  },
  {
    preview: img2,
    time: "11:15-11:30",
    title: "インターネットの歴史とMaskNetworkの紹介",
    sub: [
      "・  Web1-Web2-Web3 の歴史を振り返りながらMaskの紹介",
      "・  未来のWebの予想",
    ],
    extra: [{ type: "登壇者", name: "SujiYan", sub: "MaskNetwork CEO" }],
  },
  {
    preview: img3,
    time: "11:35-12:05",
    title: "OSS（オープンソースソフトウェア）",
    sub: ["  ・ の歴史からみるWeb3について"],
    extra: [{ type: "登壇者", name: "猫井夕菜", sub: "@nekomatu @nekoi7yu" }],
  },
  {
    preview: img4,
    time: "12:05-12:35",
    title: "Web3を語るなら、まずDeFiを学ぼう",
    sub: [
      "  ・ Yuさんからはweb3の定義を",
      "  ・ DeFi領域の第一人者であるホリーさんに来てもらいお話いただく",
      "  ・ そしてなぜDeFiが大事なのかをYuさんんに誘導してもらう",
    ],
    extra: [
      { type: "Mod", name: "なし / Mai Fujimoto", sub: "" },
      { type: "Speaker", name: "ホリーさん", sub: "やさしいDeFi" },
      { type: " ", name: "Yuさん", sub: "" },
    ],
  },
  {
    preview: img5,
    time: "12:40-13:20",
    title: "セッション１:Web3.0が、Web1.0の理念を復活できるのか？",
    sub: [
      "  ・ Web1.0の頃は自由で検閲されない文化のはずだった。しかし、だんだん企業画集権的なってきて、今のWeb2.0になった。Web3.0はWeb1.0の理念を復帰できるのか？",
      "  ・ Web2.0は、インターネットの最終形ではないと思う",
    ],
    extra: [
      { type: "Mod", name: "馬渕さん", sub: "PwC" },
      { type: "Speaker", name: "安宅さん", sub: "Tokyo Otaku Mode" },
      { type: "", name: "家入一真", sub: "CampFire" },
      { type: "", name: "内山さん", sub: "Hottolink" },
    ],
  },
  {
    preview: img6,
    time: "13:25-13:55",
    title: "セッション２:既存IPの効果的なweb3.0へのアプローチ方法",
    sub: [
      " ・既にweb2.0企業が、web3.0業界とのコラボで大成功を収めている事例ができていている。",
      " ・できない理由を探すよりできる理由から学ぼう！",
    ],
    extra: [
      { type: "Mod", name: "新子さん", sub: "渋谷デザイン" },
      { type: "Speaker", name: "Mizonoさん", sub: "Quon" },
      { type: " ", name: "佐藤詳悟", sub: "Firebug" },
      { type: " ", name: "熊谷さん", sub: "Akatsuki" },
      { type: " ", name: "伏見さん", sub: "メルカリ" },
    ],
  },
  {
    preview: img7,
    time: "14:30-15:00",
    title: "セッション３:Web3.0事業例①インフラ",
    sub: [
      " ・ それぞれの事業内容と、なぜWeb3で企業しようとおもったのか",
      " ・ 今後どのような企業とコラボレーションを希望しているのか",
    ],
    extra: [
      { type: "Mod", name: "加藤さん", sub: "TOKEN economist" },
      { type: "Speaker", name: "國光さん", sub: "gumi Cryptos" },
      { type: " ", name: "陽水さん", sub: "Hokusai" },
      { type: " ", name: "岡部さん", sub: "JPYC" },
      { type: " ", name: "Sushiさん", sub: "HiDE" },
    ],
  },
  {
    preview: img8,
    time: "15:05-15:35",
    title: "セッション４:Web3.0事業例②メタバース/NFT関連",
    sub: [
      " ・ 分散型のメタバースと既存のVRコミュニティがどのように交わっていきたいか",
      " ・ メタバース/XR領域でのNFTの活用の仕方",
    ],
    extra: [
      { type: "Mod", name: "設楽さん", sub: "幻冬舎" },
      { type: "Speaker", name: "佐渡島さん", sub: "コルク" },
      { type: " ", name: "白石さん", sub: "Arigato Bank" },
      { type: " ", name: "久保田さん", sub: "元CoinDesk Japan" },
      { type: " ", name: "平手さん", sub: "Joyfa" },
    ],
  },
  {
    preview: img9,
    time: "16:05-16:15",
    title: "社会実装に使えるブロックチェーン技術(国内)",
    sub: [
      " ・ 分散型のメタバースと既存のVRコミュニティがどのように交わっていきたいか",
      " ・ メタバース/XR領域でのNFTの活用の仕方",
    ],
    extra: [{ type: "Mod", name: "クリスさ", sub: "Unicask" }],
  },
  {
    preview: img10,
    time: "16:20-16:50",
    title: "社会実装に使えるブロックチェーン技術(海外)",
    sub: [],
    extra: [{ type: "登壇者", name: "Numbers protocol", sub: "" }],
  },
  {
    preview: img11,
    time: "16:55-17:55",
    title: "セッション５:超スタートアップピッチタイム",
    sub: [
      " ・各企業10分ぐらいで新しいサービスの説明ができる時間   6組紹介予定（一般公募）",
    ],
    extra: [
      { type: "Mod", name: "Fracton Ventures ", sub: "" },
      { type: "Speaker", name: "SHUSHI TOP marketing ", sub: "" },
      { type: "Mod", name: "ReCone ", sub: "" },
    ],
  },
  {
    preview: img12,
    time: "16:55-17:55",
    title: "セッション６:DAOはどう世界を変えていくのか",
    sub: [" ・DAOって何がすごいの？", " ・DAOの在り方", " ・DAOのこれから"],
    extra: [
      { type: "Mod", name: "アラタさん", sub: "CryptoTimes" },
      { type: "Speaker", name: "Makotoさん", sub: "ENS" },
      { type: " ", name: "キャサリン", sub: "現Polygon、元MakerDAO" },
      { type: " ", name: "Gabby", sub: "YGG" },
      { type: " ", name: "登壇舎未定", sub: "Merit circle" },
    ],
  },
  {
    preview: img13,
    time: "18:35-18:45",
    title: "エンディング",
    sub: [],
    extra: [
      { type: "主催", name: "辻さん", sub: "" },
      { type: " ", name: "藤本", sub: "" },
      { type: " ", name: "Maskメンバー！", sub: "" },
    ],
  },
];
export default timeTablesMap;
