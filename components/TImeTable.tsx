import type { NextPage } from "next";
import style from "../styles/TimeTable.module.css";
import timeTablesMap from "./dataProvider/timetable";
import TimeTableItem from "./TimeTableItem";
const TimeTable: NextPage = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>タイムテーブル</div>
      <div className={style.cardBox}>
        {timeTablesMap.map((item, index) => {
          return <TimeTableItem info={item} key={index} />;
        })}
      </div>
    </div>
  );
};
export default TimeTable;
