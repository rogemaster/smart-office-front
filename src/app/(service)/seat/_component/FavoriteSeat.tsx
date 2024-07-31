import style from "../css/favoriteSeat.module.css";
import React from "react";

export default function FavoriteSeat() {
  return (
    <div className={style.favoriteSeatWrapper}>
      <h3>즐겨찾기 좌석</h3>
      <div className={style.favoriteSeatList}>
        <span><em>실리안</em></span>
        <span><em>니나브</em></span>
        <span><em>웨이</em></span>
        <button>편집</button>
      </div>
      {/*<div className={style.noFavoriteSeat}>*/}
      {/*  <span>좌석을 선택하여 즐겨찾기를 해주세요.</span>*/}
      {/*</div>*/}
    </div>
  )
}