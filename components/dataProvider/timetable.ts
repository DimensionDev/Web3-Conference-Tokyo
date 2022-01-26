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
  vitalik?: boolean;
}
const func: () => TimeTableProp[] = () => {
  const { t } = i18next;
  const timeTablesMap: TimeTableProp[] = [
    {
      preview: img1,
      time: "10:30-11:10",
      title: t("timeTable_1_t"),
      sub: [],
      extra: [{ type: t("speaker"), name: "Vitalik Buterin", sub: "" }],
      isLive: true,
      vitalik: true,
      // switchTime: "5分で転換",
    },
    {
      preview: img2,
      time: "11:15-11:30",
      title: t("timeTable_2_t"),
      sub: [t("timeTable_2_s"), t("timeTable_2_s1")],
      extra: [{ type: t("speaker"), name: "SujiYan", sub: "MaskNetwork CEO" }],
      isRecord: true,
      // switchTime: "11:30-11:35転換",
    },
    {
      preview: img3,
      time: "11:35-12:05",
      title: t("timeTable_3_t"),
      sub: [t("timeTable_3_s"), t("timeTable_3_s1")],
      extra: [
        { type: t("speaker"), name: t("timeTable_3_r"), sub: "DeFiGeek" },
      ],
      isLive: true,
    },
    {
      preview: img4,
      time: "12:05-12:35",
      title: t("timeTable_4_t"),
      sub: [t("timeTable_4_s"), t("timeTable_4_s1")],
      extra: [
        { type: "Mod", name: "Mai Fujimoto", sub: "Gracone CEO " },
        {
          type: "Speaker",
          name: t('roles_10_name'),
          sub: "Kyber Network Japan Manager",
        },
        { type: "", name: t('roles_18_name'), sub: "BlockchainPROseed" },
      ],
      // switchTime: "12:35-12:40 転換",
    },
    {
      preview: img5,
      time: "12:40-13:20",
      title: t("timeTable_5_t"),
      sub: [t("timeTable_5_s"), t("timeTable_5_s1"), t("timeTable_5_s2")],
      extra: [
        { type: "Mod", name: t('roles_20_name'), sub: "PwC Managing Director ex Facebook Director" },
        { type: "Speaker", name: t('roles_5_name'), sub: "Tokyo Otaku Mode COO" },
        { type: "", name: t('roles_21_name'), sub: "CampFire CEO" },
        { type: "", name: t('roles_12_name'), sub: "Hottolink CEO" },
      ],
      isLive: true,
      // switchTime: "13:20-13:25 転換",
    },
    {
      preview: img6,
      time: "13:25-13:55",
      title: t("timeTable_6_t"),
      sub: [
        t("timeTable_6_s"),
        t("timeTable_6_s1"),
        t("timeTable_6_s2"),
        t("timeTable_6_s3"),
      ],
      extra: [
        {
          type: "Mod",
          name: t('roles_22_name'),
          sub: t('roles_22_co'),
        },
        { type: "Speaker", name: t('roles_4_name'), sub: "Minto CEO" },
        { type: "", name: t('roles_6_name'), sub: "FIREBUG CPO" },
        { type: "", name: t('roles_3_name'), sub: "Akatsuki Director" },
        { type: "", name: t('roles_16_name'), sub: "Mercari CEO" },
      ],
      isLive: true,
      // switchTime: t('switch'),
      // isBig: true,
    },
    {
      preview: img7,
      time: "14:30-15:00",
      title: t("timeTable_7_t"),
      sub: [t("timeTable_7_s"), t("timeTable_7_s1"), t("timeTable_7_s2")],
      extra: [
        { type: "Mod", name: t('roles_19_name'), sub: "TOKEN ECONOMIST Rep." },
        { type: "Speaker", name: t('roles_23_name'), sub: "gumi Founder" },
        { type: "", name: t('roles_24_name'), sub: "Hokusai CEO" },
        { type: "", name: t('roles_25_name'), sub: "JPYC Inc. CEO" },
        { type: "", name: t('roles_17_name'), sub: "warashibe CEO " },
      ],
      isLive: true,
      // switchTime: "15:00-15:05 転換",
    },
    {
      preview: img8,
      time: "15:05-15:35",
      title: t("timeTable_8_t"),
      sub: [
        t("timeTable_8_s"),
        t("timeTable_8_s1"),
        t("timeTable_8_s2"),
        t("timeTable_8_s3"),
      ],
      extra: [
        {
          type: "Mod",
          name: t('roles_11_name'),
          sub: t('roles_11_co'),
        },
        { type: "Speaker", name: t('roles_13_name'), sub: t('roles_13_co') },
        { type: "", name: t('roles_26_name'), sub: "ARIGATOBANK CEO" },
        { type: "", name: t('roles_7_name'), sub: "Web3 VC/Web3 Researcher" },
        { type: "", name: t('roles_27_name'), sub: "HIKKY COO/CQO" },
      ],
      isLive: true,
      // switchTime: "15:35-16:05   転換",
    },
    {
      preview: img9,
      time: "16:05-16:15",
      title: t("timeTable_9_t"),
      sub: [],
      extra: [{ type: "Mod", name: "Chris Dai", sub: "Unicask" }],
      isLive: true,
      // switchTime: "16:15-16:20  転換",
    },
    {
      preview: img10,
      time: "16:20-16:50",
      title: t("timeTable_10_t"),
      sub: [],
      extra: [{ type: t("speaker"), name: "Numbers protocol", sub: "" }],
      isRecord: true,
      // switchTime: "16:50-16:55  転換",
    },
    {
      preview: img11,
      time: "16:55-17:55",
      title: t("timeTable_11_t"),
      sub: [t("timeTable_11_s")],
      extra: [
        { type: "Mod", name:t('roles_9_name'), sub: "Fracton Ventures Co-Founder" },
      ],
      isLive: true,
      // switchTime: "17:55-18:00 転換",
    },
    {
      preview: img12,
      time: "16:55-17:55",
      title: t("timeTable_12_t"),
      sub: [t("timeTable_12_s"), t("timeTable_12_s1"), t("timeTable_12_s2")],
      extra: [
        { type: "Mod", name: t('roles_15_name'), sub: t('roles_15_co') },
        { type: "Speaker", name: "Makoto Inoue", sub: "ENS Developer" },
        {
          type: "",
          name: "Kathleen Chu",
          sub: "Polygon Head of Communications",
        },
        {
          type:"",
          name:"SujiYan",
          sub:"MaskNetwork CEO"
        }
      ],
      isRecord: true,
      // switchTime: "18:30-18:35 転換",
    },
    {
      preview: img13,
      time: "18:35-18:45",
      title: t("timeTable_13_t"),
      sub: [],
      extra: [
        { type: "Organizer", name: "Nachan", sub: "" },
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
