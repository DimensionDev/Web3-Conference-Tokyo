import type { NextPage } from "next";
import style from "../styles/TimeTable.module.css";
import timeTablesMap from "./dataProvider/timetable";

import TimeTableItem from "./TimeTableItem";
const TimeTable: NextPage = () => {
  return (
    <div className={style.container} id={"タイムテーブル"}>
      <div className={style.title}>タイムテーブル</div>
      <div className={style.cardBox}>
        {timeTablesMap.map((item, index) => {
          return (
            <div key={`${index}_timeContainer`} style={{ width: "100%" }}>
              <TimeTableItem key={`${index}_timetable`} info={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default TimeTable;
