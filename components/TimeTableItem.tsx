import type { NextPage } from "next";
import { TimeTableProp } from "./dataProvider/timetable";
import style from "../styles/TimeTableItem.module.css";
import Image from "next/image";
import LiveImgJa from "../assets/schedule/live_ja.svg";
import RecordImgJa from "../assets/schedule/record_ja.svg";
interface Props {
  info: TimeTableProp;
}
const TimeTableItem: NextPage<Props> = ({ info }) => {
  const { preview, time, title, sub, extra } = info;
  return (
    <div className={style.container}>
      <div className={style.inner}>
        <div className={style.previewBox}>
          <Image src={preview} className={style.previewImg} />
          {info.difficuty && (
            <div className={style.diffBox}>
              <div>難易度</div>
              <div className={style.whiteBtn}>{info.difficuty}</div>
            </div>
          )}
          {info.isLive && (
            <div className={style.previewTip}>
              <Image src={LiveImgJa} />
            </div>
          )}
          {info.isRecord && (
            <div className={style.previewTip}>
              <Image src={RecordImgJa} />
            </div>
          )}
        </div>
        <div className={style.infoBox}>
          <div className={style.time}>{time}</div>
          <div className={style.title}>{title}</div>
          <div className={style.subTitle}>
            {sub.map((item, index) => {
              return (
                <div key={index}>
                  {item} <br />
                  <br />
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
};
export default TimeTableItem;
