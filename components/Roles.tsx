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
  const [isShowMask, setIsShowMask] = useState(false);
  const [curIndex, setCurIndex] = useState(0);
  const [curPerson, setCurPerson] = useState<Role>(rolesInfoMap[curIndex]);
  const toggle = (num: number) => {
    if (curIndex + num < 0 || curIndex + num > rolesInfoMap.length - 1) {
      return;
    }
    const newV = curIndex + num;
    setCurIndex(newV);
    setCurPerson(rolesInfoMap[newV]);
  };
  return (
    <div className={style.container} id='登壇者' >
      <div className={style.title}>登壇者様一覧</div>
      <div className={style.rolesBox}>
        {rolesInfoMap.map((item, index) => {
          return (
            <RoleItem
              onMore={(role: Role, idx: number) => {
                setCurPerson(role);
                setCurIndex(idx);
                setIsShowMask(true);
              }}
              key={index}
              role={item}
              idx={index}
            />
          );
        })}
      </div>
      {isShowMask && (
        <div className={style.mask} onClick={() => setIsShowMask(false)}></div>
      )}
      {isShowMask && (
        <div className={style.detailBox}>
          <Image
            src={ArrowLeftImg}
            className={curIndex === 0 ? style.iconDisable : style.iconActive}
            onClick={() => toggle(-1)}
          />
          <div className={style.detailContent}>
            <div className={style.imgContainer}>
              <div className={style.avatarBox}>
                <Image
                  width={244}
                  height={244}
                  className={style.avatar}
                  src={curPerson.avatar}
                />
              </div>
              <div className={style.infoBox} >
                <div className={style.uInfo}>{curPerson.roleTitles}</div>
                <div className={style.uName}>{curPerson.name}</div>
              </div>
            </div>
            <div className={style.introBox}>
              <div className={style.scrollBox}>
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
             
            </div>
            <div className={style.close} onClick={() => setIsShowMask(false)}>
              <Image src={CloseImg} className={style.close} />
            </div>
          </div>
          <Image
            src={ArrowRightImg}
            className={curIndex === 19 ? style.iconDisable : style.iconActive}
            onClick={() => toggle(1)}
          />
        </div>
      )}
    </div>
  );
};
export default Roles;
