import type { NextPage } from "next";
import style from "../styles/Roles.module.css";
import RoleItem from "./RoleItem";
import rolesInfoMap from "./dataProvider/role";
const Roles: NextPage = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>登壇者様一覧</div>
      <div className={style.rolesBox}>
        {rolesInfoMap.map((item, index) => {
          return <RoleItem key={index} role={item} />;
        })}
      </div>
    </div>
  );
};
export default Roles;
