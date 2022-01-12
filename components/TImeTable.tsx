import type { NextPage } from "next";
import { FunctionComponent } from "react";
import style from "../styles/TimeTable.module.css";
// time title info mod roles speaker
interface Props extends FunctionComponent {
  date: string;
  title: string;
  info: string[];
  extra?: [
    {
      type?: string;
      name?: string;
      sub?: string;
    }
  ];
}
const TimeTable: NextPage = (props?: any) => {
  return (
    <div className={style.container}>
      <div className={style.title}>タイムテーブル</div>
      <div className={style.cardBox}>content</div>
    </div>
  );
};
export default TimeTable;
