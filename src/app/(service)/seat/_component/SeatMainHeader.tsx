import React from 'react';
import style from '../css/seatMainHeader.module.css';
import Image from 'next/image';
import searchIcon from '../../../../../public/icon_search.png';

export default function SeatMainHeader() {
  return (
    <header className={style.headerWrapper}>
      <div>
        <h2>자율좌석 예약</h2>
        <span>좌석 배치도에서 좌석 선택 후 예약을 진행하세요.</span>
      </div>
      <button className={style.searchBtn}>
        <Image src={searchIcon} alt="검색" width={42} height={42} />
      </button>
    </header>
  );
}
