import type { NextPage } from "next";
import { useRef } from "react";
import style from "../styles/TimeTable.module.css";
import timeTablesMap from "./dataProvider/timetable";
import PreTimeInfo from "./PreTimeInfo";
import TimeTableItem from "./TimeTableItem";
const TimeTable: NextPage = () => {
  return (
    <div className={style.container} id={"タイムテーブル"}>
      <div className={style.title}>タイムテーブル</div>
      <div className={style.cardBox}>
        {timeTablesMap.map((item, index) => {
          return (
            <div>
              <TimeTableItem info={item} key={index} />
              {item.switchTime && (
                <PreTimeInfo key={`${index}_pre`} text={item.switchTime} isBig={item.isBig} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default TimeTable;
