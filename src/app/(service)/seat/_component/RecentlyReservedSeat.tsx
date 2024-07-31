import style from '../css/recentlyReservedSeat.module.css'
import React from "react";

export default function RecentlyReservedSeat() {
  return (
    <div className={style.recentlyReservedSeatWrapper}>
      <h3>최근예약 좌석</h3>
      {/*<div className={style.recentlyReservedList}>*/}
      {/*  <span><em>카단</em></span>*/}
      {/*  <span><em>아브렐슈드</em></span>*/}
      {/*  <span><em>일리아칸</em></span>*/}
      {/*</div>*/}
      <div className={style.noRecentlyReserved}>
        <span>최근 예약한 좌석이 없습니다.</span>
      </div>
    </div>
  )
}