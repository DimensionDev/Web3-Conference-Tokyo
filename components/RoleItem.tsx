import type { NextPage } from "next";
import style from "../styles/RoleItem.module.css";
import Image from "next/image";
import { Role } from "./dataProvider/role";
import MoreImg from "../assets/more.svg";

import CoImg from "../assets/roles/co.svg";
import TwitterImg from "../assets/roles/twitter.svg";
import ETHImg from "../assets/roles/eth.svg";
import FacebookImg from "../assets/roles/fb.svg";

interface Props {
  role: Role;
  onMore: any;
  idx: number;
}
const RoleItem: NextPage<Props> = ({ role, onMore, idx }) => {
  const { avatar, name, roleTitles } = role;
  return (
    <div className={style.box}>
      <div className={style.inner}>
        <div className={style.avatarBox}>
          <Image
            width={246}
            height={246}
            className={style.avatar}
            src={avatar}
            onClick={() => onMore(role, idx)}
          />
          <div className={style.mediaBox}>
            <a href={role.coLink} target="_blank">
              <Image src={CoImg} />
            </a>
            {role.twitterLink && (
              <a href={role.twitterLink} target="_blank">
                <Image src={TwitterImg} />
              </a>
            )}
            {role.ethLink && (
              <a href={role.ethLink} target="_blank">
                <Image src={ETHImg} />
              </a>
            )}
            {role.facebookLink && (
              <a href={role.facebookLink} target="_blank">
                <Image src={FacebookImg} />
              </a>
            )}
          </div>
        </div>
        <div className={style.uInfo}>
          {roleTitles.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
        </div>
        <div className={style.uName}>{name}</div>
        <div className={style.more} onClick={() => onMore(role, idx)}>
          <Image src={MoreImg} />
        </div>
      </div>
    </div>
  );
};
export default RoleItem;
