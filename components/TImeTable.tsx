import type { NextPage } from "next";
import style from "../styles/TimeTable.module.css";
import timeTablesMap from "./dataProvider/timetable";
import TimeTableItem from "./TimeTableItem";
import i18next from "i18next";

const TimeTable: NextPage = () => {
  const {t} = i18next
  return (
    <div className={style.container} id={"#1"}>
      <div className={style.title}>{t('timeTable_title')}</div>
      <div className={style.cardBox}>
        {timeTablesMap().map((item, index) => {
          return (
            <div className={style.cardBox } key={`outer_${index}`}>
              <TimeTableItem key={`${index}_timetable`} info={item} />
              {/* {item.switchTime && (
                <PreTimeInfo text={item.switchTime} isBig={item.isBig} />
              )} */}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default TimeTable;
