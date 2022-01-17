import type { NextPage } from "next";
import style from "../styles/Roles.module.css";
import RoleItem from "./RoleItem";
import rolesInfoMap, { Role } from "./dataProvider/role";
import { useEffect, useRef, useState } from "react";
import ArrowLeftImg from "../assets/arrow_left.svg";
import ArrowRightImg from "../assets/arrow_right.svg";
import CloseImg from "../assets/close.svg";
import Image from "next/image"
import CoImg from "../assets/roles/co.svg";
import TwitterImg from "../assets/roles/twitter.svg";
import ETHImg from "../assets/roles/eth.svg";
import FacebookImg from "../assets/roles/fb.svg";
import i18next from "i18next";

const Roles: NextPage = () => {
  const {t} = i18next
  const ctx = useRef() as any;
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
  const handleScroll = () => {};
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, []);
  return (
    <div ref={ctx} className={style.container} id="Speaker">
      <div className={style.title}>{t('roles_title')}</div>
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
          {(globalThis || window).innerWidth > 539 && (
            <Image
              src={ArrowLeftImg}
              className={curIndex === 0 ? style.iconDisable : style.iconActive}
              onClick={() => toggle(-1)}
            />
          )}

          <div className={style.detailContent}>
            <div className={style.imgContainer}>
              <div className={style.avatarBox}>
                <Image className={style.avatar} src={curPerson.avatar} />
                <div className={style.mediaBox}>
                  <a href={curPerson.coLink} target="_blank">
                    <Image className={style.mediaIcon} src={CoImg} />
                  </a>
                  {curPerson.twitterLink && (
                    <a href={curPerson.twitterLink} target="_blank">
                      <Image className={style.mediaIcon} src={TwitterImg} />
                    </a>
                  )}
                  {curPerson.ethLink && (
                    <a href={curPerson.ethLink} target="_blank">
                      <Image className={style.mediaIcon} src={ETHImg} />
                    </a>
                  )}
                  {curPerson.facebookLink && (
                    <a
                      href={curPerson.facebookLink}
                      target="_blank"
                      className={style.mediaIcon}
                    >
                      <Image src={FacebookImg} />
                    </a>
                  )}
                </div>
              </div>
              <div className={style.infoBox}>
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
              <Image src={CloseImg} />
            </div>
          </div>
          {(globalThis || window).innerWidth > 539 && (
            <Image
              src={ArrowRightImg}
              className={
                curIndex === rolesInfoMap.length - 1
                  ? style.iconDisable
                  : style.iconActive
              }
              onClick={() => toggle(1)}
            />
          )}
          {(globalThis || window).innerWidth < 540 && (
            <div className={style.bottomSwitch}>
              <div className={style.mobileSwitchIcon}>
                <Image
                  src={ArrowLeftImg}
                  className={
                    curIndex === 0 ? style.iconDisable : style.iconActive
                  }
                  onClick={() => toggle(-1)}
                />
              </div>
              <div className={style.mobileSwitchIcon}>
                <Image
                  src={ArrowRightImg}
                  className={
                    curIndex === rolesInfoMap.length - 1
                      ? style.iconDisable
                      : style.iconActive
                  }
                  onClick={() => toggle(1)}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default Roles;
