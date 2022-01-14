import { NextPage } from "next";
import { TimeTableProp } from "./dataProvider/timetable";
import style from "../styles/MobileTimeTableItem.module.css";
import MobileLiveJa from "../assets/mobile_live.svg";
import MobileRecordJa from "../assets/mobile_record.svg";
interface Props {
  info: TimeTableProp;
}

const MobileTableItem: NextPage<Props> = ({ info }) => {
  const { time, title, sub, extra } = info;
  return (
    <div className={style.inner}>
      <div className={style.mobileTime}>
        <div className={style.mobileTimeUp}>
          {info.isLive && <img src={MobileLiveJa} />}
          {info.isRecord && <img src={MobileRecordJa} />}
          <div className={style.time}>{time}</div>
        </div>
        {info.difficuty && (
          <div className={style.whiteBtn}>{info.difficuty}</div>
        )}
      </div>
      <div className={style.infoBox}>
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
  );
};
export default MobileTableItem;
