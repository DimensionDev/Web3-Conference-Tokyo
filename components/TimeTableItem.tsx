import type { NextPage } from "next";
import { TimeTableProp } from "./dataProvider/timetable";
import style from "../styles/TimeTableItem.module.css";
import Image from "next/image";
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
                  <div className={style.subBoxType}>{subBoxItem.type}</div>
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
