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
      name: t('roles_1_name'),
      roleTitles: ["JPYC Inc.", "CEO/ BCCC Director"],
      intro: [
        "2001年、一橋大学在学中に有限会社（現株式会社）リアルアンリアルを創業し、代表取締役、取締役CTO等を務める。",
        "2017年、リアルワールドゲームス株式会社を共同創業。取締役CTO/CFOを経て、取締役ARUK（暗号資産）担当。",
        "2019年JPYC株式会社を創業し、代表取締役。(一社）ブロックチェーン推進協会理事、（一社）DeFi協会ステーブルコイン部会長、情報経営イノベーション専門職大学客員教授",
      ],
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
      name: "猫井夕菜  @nekomatu ",
      roleTitles: ["DeFiGeek(DFGC) ", "モデレーター"],
      intro: [
        "Debian/Ubuntuユーザーで業務ではLinuxカーネルなどを取り扱う組込み系ソフトウェアエンジニア。学生時代からOSSが好きで卒業研究はP2Pに関するもの。好きなOSSライセンスはGPLv2。",
        "技術交流会に育ててもらった恩があり、複数のイベント主催者(事務係)を行っている。日本発DAO型コミュニティであるDFGCではモデレーターロールをしている。",
        "猫井夕菜は @nekomatu の VTuberアカウントである。Discordにアカウント切換え機能がなくクリプトの活動はこちらで行うことが多い。",
      ],
    },
    {
      avatar: XiongGu,
      coLink: "https://aktsk.jp/",
      twitterLink: "https://twitter.com/yujikumagai_",
      name: "熊谷 祐二",
      roleTitles: ["株式会社アカツキ/ディレクター"],
      intro: [
        "2014年にiemo株式会社共同代表取締役COO就任を経て、同社を株式会社ディー・エヌ・エーへ売却。 ",
        "2015年にスポーツテック事業を手掛けるSkyBall株式会社を創業し、",
        "2018年にアカツキへ売却。アカツキのesports事業責任者並びにProfessional Esports League取締役（バルセロナ）に就任。",
        "2019年8月からHeart Driven Fund ヴァイスプレジデントに就任。自身の起業・経営経験を元に主にアーリーステージの投資実行、ハンズオン支援を行う。",
      ],
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
      name: "水野 和寛",
      roleTitles: ["株式会社Minto CEO"],
      intro: [
        "日本1位のデコメ(絵文字)サイトや世界的にヒットしたスマホアプリ「Touch the Numbers」などをプロデュース。その後、株式会社クオンを設立。SNS発のキャラクター創出にフォーカスし、FacebookやWeChatなど全世界のチャットアプリと提携。スタンプのDL数は50億超で世界一位。日本以外に中国・タイ・ベトナムに支社。",
        "2021年にSNS×漫画領域の国内No.1ベンチャーwwwaap社と経営統合し",
        "2022年1月から株式会社Mintoに。",
      ],
    },
    {
      avatar: Anzhai,
      coLink: "https://corporate.otakumode.com/",
      twitterLink: "https://twitter.com/paji_a",
      name: "安宅 基",
      roleTitles: ["株式会社Tokyo Otaku Mode", "創業者兼COO"],
      intro: [
        "2009年11月にリアルタイムQ&Aサービスを開発。2011年11月に同サービスを法人化、2011年12月に事業売却の形でバイアウトした。その後、Tokyo Otaku Mode創業に参画。Tokyo Otaku Mode Co-founderとして米国シードアクセレーター （http://500.co）のプログラム参加。EC事業など新規事業開発及び事業全般の統括を行う。",
      ],
    },
    {
      avatar: Sato,
      coLink: "firebug.jp",
      twitterLink: "https://twitter.com/sato_shogo1",
      name: "佐藤 詳悟",
      roleTitles: ["株式会社FIREBUG ", "代表取締役CPO"],
      intro: [
        "1983年生まれ、東京都出身。大学卒業後の2005年、吉本興業に入社。ナインティナインやロンドンブーツ1号2号、COWCOW、ロバートなどのマネージャーを歴任。ロバート秋山の『クリエーターズ・ファイル』、COWCOWの『あたりまえ体操』などのコンテンツ開発にも携わる。15年に独立。経営者や文化人など多様な背景を持つ人材のエージェント会社「QREATOR AGENT」を立ち上げ、落合陽一や前田裕二などのメディア露出支援を行う。16年にはお笑い芸人や俳優、モデル、アーティストなど著名人のDXパートナーとして、 デジタルを起点としたIP開発・ビジネスモデル構築を包括的に手掛ける“エンタメビジネススタジオ”FIREBUGを立ち上げ。メルカリやBASEなどのスタートアップ企業のビジネス支援の他、よゐこや北斗晶、菊地亜美をはじめとするタレントのYouTubeチャンネルの開発・運用、いきものがかりなどのアーティストの360°プロデュース事業を展開している",
      ],
    },
    {
      avatar: Yellow,
      coLink: "https://komugi.jp/",
      twitterLink: "https://twitter.com/ro_mi",
      name: "コムギ",
      roleTitles: ["Web3特化のベンチャーキャピタル ", "/Web3リサーチャー"],
      intro: [
        "Web3に特化したベンチャーキャピタル（VC）でリサーチャーを務める。大学卒業後、ＮＨＫ出版に入社。編集担当作に『教養としてのテクノロジー』『ITビジネスの原理』『VRビジネスの衝撃』など多数。2019年に暗号資産ニュースメディア「CoinDesk Japan」創刊編集長、ブロックチェーンカンファレンス「btokyo」プロデューサーを経て、2021年6月より現職。",
      ],
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
      name: "平手 宏志朗",
      roleTitles: ["株式会社ジョイファ"],
      intro: [
        "2017年よりブロックチェーン事業に携わり、日本およびシンガポールの企業において、データ管理・証券取引・エネルギー取引といった分野における、ブロックチェーンプロジェクトをリード。",
        "2020年4月に NFT x エンターテイメントのエコシステムを開発しているEnjinにジョインし、同社が発行する仮想通貨の上場や、国内外の企業との事業提携を推進。",
        "2021年5月に株式会社ジョイファを創業。",
      ],
    },
    {
      avatar: Longjing,
      coLink: "https://fracton.ventures/",
      twitterLink: "https://twitter.com/tolehico",
      name: "亀井 聡彦",
      roleTitles: ["Co-Founder of Fracton Ventures"],
      intro: [
        "早稲田大学CS学科卒。卒業後2011年のサンフランシスコへの移住をきっかけにスタートアップと出会う。帰国後、2013年から、シードアクセラレーターやコレクティブ・インパクト・コミュニティのMistoletoe(ミスルトウ)、IoT特化ファンドABBALab(アバラボ)等にてスタートアップの投資、育成、支援を行う。 Web3.0のスタートアップエコシステムに貢献するべく2021年に、Fracton Venturesを共同創業。",
      ],
    },
    {
      avatar: Jueci,
      coLink: "https://kyber.network/",
      twitterLink: "https://twitter.com/taisuke_hory",
      name: "堀次 泰介",
      roleTitles: ["Kyber Network Japan Manager"],
      intro: [
        "2018年より、シンガポールのDeFiプロトコル開発チームであるKyber NetworkのJapan Managerとして活動。日本DeFi協会アドバイザーも務めつつ、日本のDeFiユーザーの理解促進と普及を促進するため、DeFiを学んでゆくオンライン・コミュニティ活動『やさしいDeFi』を2年以上主催。",
      ],
    },
    {
      avatar: Youjie,
      coLink: "https://www.neweconomy.jp/",
      twitterLink: "https://twitter.com/ysksdr",
      name: "設楽 悠介",
      roleTitles: ["幻冬舎「あたらしい経済」編集長"],
      intro: [
        "幻冬舎でブロックチェーン/暗号資産専門メディア「あたらしい経済」を創刊。同社コンテンツビジネス局で新規事業やコンテンツマーケティング事業を担当。幻冬舎コミックスの取締役を兼務、ライツや電子書籍事業担当。個人活動で「みんなのメンタールーム（Amazon audible）」や「風呂敷畳み人ラジオ（Voicy）」、「欲望のSNS（podcast）」等のコンテンツ配信。Forbes Japanで「ポストDXの世界」連載。著書『畳み人という選択』（プレジデント社）。ツイッター：@ysksdr",
      ],
    },
    {
      avatar: XingShu,
      coLink: "https://www.hottolink.co.jp",
      twitterLink: "https://twitter.com/ucchy/",
      name: "内山 幸樹",
      roleTitles: ["（株)ホットリンク", "代表取締役＆グループCEO"],
      intro: [
        "1995年、東京大学大学院博士課程在学中に日本最初期の検索エンジンの開発＆検索エンジンベンチャーの創業に携わる。 ",
        "2000年に株式会社ホットリンクを創業、2013年東証マザーズ上場。 ",
        "2015年には米国企業を買収し、現在は世界中のSNSデータアクセス権販売と、国内及び中国市場向けにSNSデータを活用したマーケティング支援を展開。",
        `2018年より、ブロックチェーン技術を活用した事業への投資・事業開発を推進。 
        ・グローバルのブロックチェーン企業への投資（1Inch / Mythical / etc. ）
        ・東京大学ブロックチェーンイノベーション寄付講座の立上・運営
        ・ブロックチェーンを利用して、多様な家族形態を認める社会の実現を目指す「Famieeプロジェクト」の立上・運営`,
        `2020年より、米国シリコンバレーを拠点にして活動中。
        ・新経済連盟が発足した「多様な性的指向・性自認の活躍促進プロジェクトチーム」ではプロジェクトリーダー
        ・経済産業省主導のTRUSTED WEB推進協議会 委員
        ・総務省主導のデータ取引市場に関する国際標準化推進検討会 メンバー`,
      ],
    },
    {
      avatar: YongPing,
      coLink: "https://metabaworld.com",
      twitterLink: "https://twitter.com/sadycork",
      name: "佐渡島 庸平",
      roleTitles: ["株式会社コルク"],
      intro: [
        `1979年生まれ。東京大学文学部卒。講談社を経て、2012年クリエイターのエージェント会社、株式会社コルクを創業。三田紀房、安野モヨコ、小山宙哉ら著名作家陣とエージェント契約を結び、作品編集、著作権管理、ファンコミュニティ形成・運営などを行う。従来の出版流通の形の先にあるインターネット時代のエンターテインメントのモデル構築を目指している。
        Twitter： @sadycork　YouTube【編集者 佐渡島チャンネル】：https://bit.ly/3fopD9P
        `,
      ],
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
      name: "クリス　ダイ",
      roleTitles: ["株式会社 UniCask"],
      intro: [
        `株式会社UniCask共同創業者及びCEO。株式会社レシカ創業者及びCEO。ブロックチェーンのエバンジェリストであり、ブロックチェーン技術を活用した非金融分野でのWeb3.0分散型ビジネスの考案に注力。Web3.0モデルとそのビジネス、社会学、哲学的側面に深く惹かれる。ブロックチェーンの技術・ビジネス動向の研究や、社内外への情報発信などに取り組んでいる。
        ２０１９年に "『ネクスト・ブロックチェーン次世代産業創生のエコシステム』日本経済新聞出版社"を共著。２０２０年に"『Blockchain and Crypto Currency』Springer"を共著
        `,
      ],
    },
    {
      avatar: CryptoBaby,
      coLink: "https://mask.io/",
      twitterLink: "https://twitter.com/crypto___baby",
      name: "Crypto Baby",
      roleTitles: ["MaskNetwork Japan"],
      intro: [
        `SNSでブロックチェーン関連の発信、様々なグローバルプロジェクトのコミュニティ管理を経てMaskNetworkJapan立ち上げメンバーに。元美容師。
        日本のブロックチェーン業界を盛り上げたい！！！`,
      ],
    },
    {
      avatar: ShigoAri,
      coLink: "https://crypto-times.jp",
      twitterLink: "https://twitter.com/cry_curr_ar",
      name: "Shingo Arai | 新井 進悟",
      roleTitles: ["Rokubunnoni Inc. CEO ", "CRYPTO TIMES 編集長"],
      intro: [
        `〇経歴/自己紹介
      2013年に東京理科大学大学院を卒業後、Web系やスマホアプリ系、大手広告代理店などの企業複数社にてデータ分析やデータサイエンスの業務に従事。AIのR＆D事業などにも携わる。
      2017年5月に、暗号通貨やブロックチェーンに出会い、その面白さにハマる。
      2018年1月に株式会社ロクブンノニを設立
      
      2020年2月に開始したブロックチェーン/仮想通貨に関するリサーチレポート「CT Analysis」をリリース、2021年9月にリニューアルを行い、登録者数は現在4000人を超え、多くのユーザーや企業から読まれている。
      
      〇事業紹介
      2018年1月26日に設立。Web2.0からWeb3.0の未来へをVisionに掲げている。
      2018年2月より暗号通貨に特化したWeb Media『CRYPTO TIMES』を4年間運営しており、暗号通貨/ブロックチェーン業界のキーマンへのインタビューや最新ニュース、How toなど多くの記事を公開。月間アクセス数は50万を超えるときも。
      2020年2月ブロックチェーン/仮想通貨に関するリサーチレポート「CT Analysis」をリリース、2021年9月に『あなたをクリプトオタクまで成長させる暗号資産特化レポート』をテーマにリニューアルを行い、登録者数は現在4000人超え、月に4-5本のインフォグラッフィクのレポートを定期配信。
      トレンドにあわせた内容を配信する他に、企業からのカスタムレポートの依頼も受託している。
      `,
      ],
    },
    {
      avatar: Fujian,
      coLink: "https://www.mercoin.jp/",
      twitterLink: "https://twitter.com/smcpglf",
      name: "伏見 慎剛",
      roleTitles: [
        "株式会社メルカリ 執行役員NFT担当",
        "株式会社メルコイン 取締役",
      ],
      intro: [
        "早稲田大学を卒業後、株式会社リクルート（現株式会社リクルートホールディングス）に入社。人材領域や販促領域での営業やマネジメントを経験した後、新規事業開発に従事。主にO2O決済分野のサービス立ち上げや事業運営に携わる。2012年より、創業期の株式会社Origamiに参画し、事業拡大のためのビジネス全般を担当し、戦略的提携や資金調達等にも従事。2020年3月、同社のメルカリグループ参画により、メルカリグループに参画。メルペイ執行役員 VP of Growthを経て、2021年4月より現職。",
      ],
    },
    {
      avatar: Jingyuan,
      coLink: "https://company.warashibe.market/",
      twitterLink: "https://twitter.com/0xhideaki_sushi",
      name: "井元秀彰",
      roleTitles: ["株式会社和らしべ・CEO"],
      intro: [
        "複数ブロックチェーン企業のアンバサダーを経て、脱サラして株式会社和らしべを共同創業。「法定通貨に依存しない分散型経済圏を創る」をビジョンにweb2とweb3の掛橋となるDapps開発や手数料の民主化を可能にするprotocolを提供しています。",
      ],
    },
    {
      avatar: XuDou,
      coLink: "https://www.blockchainproseed.com/",
      twitterLink: "https://twitter.com/Yu_Ayato",
      name: "絢斗 優",
      roleTitles: ["BlockchainPROseed"],
      intro: [
        "メディアアーティストとしてのバックグラウンドと、ブロックチェーン業界の知見を生かし、業界間の橋渡しとして活動。ブロックチェーンを活用したチャリティープロジェクトKIZUNAでは、Binance charityやKevin Abosch等とチャリティーキャンペーンを推進。BlockchainPROseedではブロックチェーンに特化したコミュニティ支援を専門とし、COSMOS、Propy、SKALE、Flow, Avalancheなどの海外プロジェクトとのmeetupやイベント運営、AMM、youtubeコンテンツ制作などに協力。世界最大規模のNFTカンファレンスNon-fungible Tokyoの運営に2019年より参加。",
        "NFT事業立上げに関するサポートもしていおり、2021年に東京都現代美術館で開催された企画展「ライゾマティクス_マルティプレックス」などの制作協力も行なっている。",
        "2006年よりメディアアーティスト、トラックメイカーとして活動開始。ユネスコダンスコングレスや文化庁芸術祭など国内外で作品を発表。2017年よりVRコンテンツの制作に取り組み、Vtuberのライブ演出やVRプラットフォームでのイベント制作などを行う",
      ],
    },
    {
      avatar: Shunmi,
      coLink: "https://www.token-economist.com/",
      twitterLink: "https://twitter.com/TokenEconomist",
      name: "加藤 順弥",
      roleTitles: ["TOKEN ECONOMIST", "代表"],
      intro: [
        "中上級者向けのブロックチェーンメディア「TOKEN ECONOMIST」の代表。プロジェクトをの深堀りを中心にし、日々良質なプロジェクトのリサーチを行う。その他、Telegram発祥のブロックチェーン「Everscale」の日本DAOや、興味ドリブンでユーザー同士の交流ができるSaaS「Ecomedia」の開発を行うScalably株式会社のBDも務めている。",
      ],
    },
  ];
  return rolesInfoMap;
};

export default func;
