import type { NextPage } from "next";
import { TimeTableProp } from "./dataProvider/timetable";
import style from "../styles/TimeTableItem.module.css";
import mStyle from "../styles/MobileTimeTable.module.css";
import Image from "next/image";
import LiveImgJa from "../assets/schedule/live_ja.svg";
import RecordImgJa from "../assets/schedule/record_ja.svg";
import LiveImgEn from "../assets/schedule/live_en.svg";
import RecordImgEn from "../assets/schedule/record_en.svg";
import MobileLiveJa from "../assets/mobile_live.svg";
import MobileRecordJa from "../assets/mobile_record.svg";
import { useEffect, useState } from "react";
import i18next from "i18next";
interface Props {
  info: TimeTableProp;
}
const TimeTableItem: NextPage<Props> = ({ info }) => {
  const { preview, time, title, sub, extra } = info;
  const [screenWidth, setScreenWidth] = useState(0);
  const [curLang, setCurLang] = useState("ja");
  useEffect(() => {
    setCurLang(i18next.language);
    setScreenWidth((globalThis || window).innerWidth);
  });
  const render = () => {
    if (screenWidth > 768) {
      return (
        <div className={style.container}>
          <div className={style.inner}>
            <div className={style.previewBox}>
              <Image src={preview} className={style.previewImg} />
              {/* {info.difficuty && (
                <div className={style.diffBox}>
                  <div>難易度</div>
                  <div className={style.whiteBtn}>{info.difficuty}</div>
                </div>
              )} */}
              {info.isLive && (
                <div className={style.previewTip}>
                  <Image src={curLang === "ja" ? LiveImgJa : LiveImgEn} />
                </div>
              )}
              {info.isRecord && (
                <div className={style.previewTip}>
                  <Image src={curLang === "ja" ? RecordImgJa : RecordImgEn} />
                </div>
              )}
            </div>
            <div className={style.infoBox}>
              <div className={style.time}>{time}</div>
              <div className={style.title}>{title}</div>
              <div className={style.subTitle}>
                {sub.map((item, index) => {
                  return (
                    <div style={{ marginBottom: "4px" }} key={index}>
                      {item} <br />
                    </div>
                  );
                })}
              </div>
              <div className={style.subBox}>
                {extra.map((subBoxItem, index) => {
                  return (
                    <div key={index} className={style.subBoxItem}>
                      <div className={style.subBoxType}>
                        {subBoxItem.type || (
                          <div className={style.hidden}>u cant see me</div>
                        )}
                      </div>
                      <div className={style.subBoxName}>{subBoxItem.name}</div>
                      <div className={style.subBoxSub}>{subBoxItem.sub}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={mStyle.container}>
          <div className={mStyle.inner}>
            <div className={mStyle.mobileTime}>
              <div className={mStyle.mobileTimeUp}>
                {info.isLive && <Image src={MobileLiveJa} />}
                {info.isRecord && <Image src={MobileRecordJa} />}
                <div className={mStyle.time}>{time}</div>
              </div>
              {info.difficuty && (
                <div className={mStyle.whiteBtn}>{info.difficuty}</div>
              )}
            </div>
            <div className={mStyle.infoBox}>
              <div className={mStyle.title}>{title}</div>
              <div className={mStyle.subTitle}>
                {sub.map((item, index) => {
                  return (
                    <div key={index}>
                      {item} <br />
                      <br />
                    </div>
                  );
                })}
              </div>
              <div className={mStyle.subBox}>
                {extra.map((subBoxItem, index) => {
                  return (
                    <div key={index} className={mStyle.subBoxItem}>
                      <div className={mStyle.subBoxType}>
                        {subBoxItem.type || (
                          <div className={mStyle.hidden}>{"cant see"}</div>
                        )}
                      </div>
                      <div className={mStyle.subBoxName}>{subBoxItem.name}</div>
                      <div className={mStyle.subBoxSub}>{subBoxItem.sub}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
  return render();
};
export default TimeTableItem;
