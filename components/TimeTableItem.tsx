import type { NextPage } from "next";
import { TimeTableProp } from "./dataProvider/timetable";
import style from "../styles/TimeTableItem.module.css";
import Image from "next/image";
import LiveImgJa from "../assets/schedule/live_ja.svg";
import RecordImgJa from "../assets/schedule/record_ja.svg";
import MobileLiveJa from "../assets/mobile_live.svg";
import MobileRecordJa from "../assets/mobile_record.svg";
interface Props {
  info: TimeTableProp;
}
const TimeTableItem: NextPage<Props> = ({ info }) => {
  const { preview, time, title, sub, extra } = info;
  return (
    <div className={style.container}>
      {(globalThis || window).innerWidth > 769 ? (
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
      ) : (
        222
        // <div className={style.m_inner}>
        //   <div className={style.mobileTime}>
        //     <div className={style.mobileTimeUp}>
        //       {info.isLive && <Image src={MobileLiveJa} />}
        //       {info.isRecord && <Image src={MobileRecordJa} />}
        //       <div className={style.m_time}>{time}</div>
        //     </div>
        //     {info.difficuty && (
        //       <div className={style.m_whiteBtn}>{info.difficuty}</div>
        //     )}
        //   </div>
        //   <div className={style.m_infoBox}>
        //     <div className={style.m_title}>{title}</div>
        //     <div className={style.m_subTitle}>
        //       {sub.map((item, index) => {
        //         return (
        //           <div key={index}>
        //             {item} <br />
        //             <br />
        //           </div>
        //         );
        //       })}
        //     </div>
        //     <div className={style.m_subBox}>
        //       {extra.map((subBoxItem, index) => {
        //         return (
        //           <div key={index} className={style.m_subBoxItem}>
        //             <div className={style.m_subBoxType}>
        //               {subBoxItem.type || (
        //                 <div className={style.m_hidden}>u cant see me</div>
        //               )}
        //             </div>
        //             <div className={style.m_subBoxName}>{subBoxItem.name}</div>
        //             <div className={style.m_subBoxSub}>{subBoxItem.sub}</div>
        //           </div>
        //         );
        //       })}
        //     </div>
        //   </div>
        // </div>
      )}
    </div>
  );
};
export default TimeTableItem;
