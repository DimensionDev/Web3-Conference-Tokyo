import type { NextPage } from "next";
import style from "../styles/TimeTable.module.css";
import timeTablesMap from "./dataProvider/timetable";
import PreTimeInfo from "./PreTimeInfo";
import TimeTableItem from "./TimeTableItem";

const TimeTable: NextPage = () => {
  return (
    <div className={style.container} id={"Schedule"}>
      <div className={style.title}>タイムテーブル</div>
      <div className={style.cardBox}>
        {timeTablesMap.map((item, index) => {
          return (
            <div className={style.cardBox} key={`outer_${index}`}>
              <TimeTableItem key={`${index}_timetable`} info={item} />
              {item.switchTime && (
                <PreTimeInfo text={item.switchTime} isBig={item.isBig} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default TimeTable;
