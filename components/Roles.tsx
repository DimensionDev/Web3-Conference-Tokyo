import type { NextPage } from "next";
import style from "../styles/Roles.module.css";
import RoleItem from "./RoleItem";
import rolesInfoMap, { Role } from "./dataProvider/role";
import { useState } from "react";
import ArrowLeftImg from "../assets/arrow_left.svg";
import ArrowRightImg from "../assets/arrow_right.svg";
import CloseImg from "../assets/close.svg";
import Image from "next/image";
const Roles: NextPage = () => {
  const [isShowMask, setIsShowMask] = useState(true);
  const [curIndex, setCurIndex] = useState(0);
  const [curPerson, setCurPerson] = useState<Role>(rolesInfoMap[curIndex]);
  const toggle = (num: number, e?: MouseEvent) => {
    e?.stopPropagation();
    if (curIndex + num < 0 || curIndex + num > rolesInfoMap.length - 1) {
      return;
    }
    const newV = curIndex + num;
    setCurIndex(newV);
    setCurPerson(rolesInfoMap[newV]);
  };
  return (
    <div className={style.container}>
      <div className={style.title}>登壇者様一覧</div>
      <div className={style.rolesBox}>
        {rolesInfoMap.map((item, index) => {
          return <RoleItem key={index} role={item} />;
        })}
      </div>
      {isShowMask && <div className={style.mask} onClick={()=>setIsShowMask(false)} ></div>}
      {isShowMask && (
        <div className={style.detailBox}>
          <Image
            src={ArrowLeftImg}
            className={style.iconActive}
            onClick={() => toggle(-1)}
          />
          <div className={style.detailContent}>
            <div className={style.imgContainer}>
              <div className={style.avatarBox}>
                <Image
                  width={"246px"}
                  height={"246px"}
                  className={style.avatar}
                  placeholder={"empty"}
                  src={curPerson.avatar}
                />
              </div>
              <div>
                <div className={style.uInfo}>{curPerson.roleTitles}</div>
                <div className={style.uName}>{curPerson.name}</div>
              </div>
            </div>
            <div className={style.introBox}>
              {curPerson.intro?.map((item, idx) => {
                return (
                  <div key={idx}>
                    {item}
                    <br />
                    <br />
                  </div>
                );
              })}
            </div>
            <div className={style.close} onClick={() => setIsShowMask(false)}>
              <Image src={CloseImg} className={style.close} />
            </div>
          </div>
          <Image
            src={ArrowLeftImg}
            className={style.iconActive}
            onClick={() => toggle(1)}
          />
        </div>
      )}
    </div>
  );
};
export default Roles;
