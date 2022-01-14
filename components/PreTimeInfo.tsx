import { NextPage } from "next/types";
import style from "../styles/PreTimeInfo.module.css";
import Left from "../assets/switch/left.svg";
import Right from "../assets/switch/right.svg";
interface Props {
  text: string;
  isBig?: boolean;
}
const PreTimeInfo: NextPage<Props> = ({ text, isBig }) => {
  return (
    <div className={style.container}>
      <img src={Left} />
      <div className={isBig ? `${style.text} ${style.BigText}` : style.text}>
        {text}
      </div>
      <img src={Right} />
    </div>
  );
};
export default PreTimeInfo;
