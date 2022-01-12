import type { NextPage } from "next";
import style from "../styles/RoleItem.module.css";
import Image from "next/image";
import { Role } from "./dataProvider/role";
interface Props {
  role: Role;
}
const RoleItem: NextPage<Props> = ({ role }) => {
  const { avatar, name, roleTitles } = role;
  return (
    <div className={style.box}>
      <div className={style.avatarBox}>
        <Image className={style.avatar} src={avatar} />
      </div>
      <div className={style.uInfo}>
        {roleTitles.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
      <div className={style.uName}>{name}</div>
    </div>
  );
};
export default RoleItem;
