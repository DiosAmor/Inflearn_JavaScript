"use client";
// onclick 때문에 client

import style from "./logoutButton.module.css";
import Image from "next/image";

export default function LogoutButton() {
  const me = {
    // 임시로 내 정보 있는것처럼
    id: "diosamor",
    nickname: "아모르",
    image: "/5Udwvqim.jpg",
  };

  const onLogout = () => {};

  return (
    <button className={style.logOutButton} onClick={onLogout}>
      <div className={style.logOutUserImage}>
        {/* <img src={me.image} alt={me.id} /> */}
        <Image src={me.image} alt={me.id} width={40} height={40} />
      </div>
      <div className={style.logOutUserName}>
        <div>{me.nickname}</div>
        <div>@{me.id}</div>
      </div>
    </button>
  );
}
