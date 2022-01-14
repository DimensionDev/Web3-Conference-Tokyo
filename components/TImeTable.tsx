import type { NextPage } from "next";
import style from "../styles/TimeTable.module.css";
import timeTablesMap from "./dataProvider/timetable";
import MobileTableItem from "./MobileTableItem";
import PreTimeInfo from "./PreTimeInfo";
import TimeTableItem from "./TimeTableItem";
const TimeTable: NextPage = () => {
  return (
    <div className={style.container} id={"タイムテーブル"}>
      <div className={style.title}>タイムテーブル</div>
      <div className={style.cardBox}>
        {timeTablesMap.map((item, index) => {
          console.log(globalThis.innerWidth);
          return (
            <div key={`${index}_timeContainer`} style={{ width: "100%" }}>
              {/* <TimeTableItem key={`${index}_timetable`} info={item} /> */}

              {(globalThis || window).innerWidth > 768 ? (
                   <TimeTableItem key={`${index}_timetable`} info={item} />
              ) : (
                // <MobileTableItem
                //   key={`${index}_mobileTimetableItem`}
                //   info={item}
                // />
                <div>22</div>
              )}
              {item.switchTime && (
                <PreTimeInfo
                  key={`${index}_pre`}
                  text={item.switchTime}
                  isBig={item.isBig}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default TimeTable;
