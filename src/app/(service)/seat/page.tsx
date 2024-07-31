import React from 'react';
import style from '../layout.module.css';
import SeatHeader from '@/app/(service)/seat/_component/SeatHeader';
import TodayReservedSeat from '@/app/(service)/seat/_component/TodayReservedSeat';
import FavoriteSeat from '@/app/(service)/seat/_component/FavoriteSeat';
import RecentlyReservedSeat from '@/app/(service)/seat/_component/RecentlyReservedSeat';
import SeatMap from "@/app/(service)/seat/_component/SeatMap";

export default function AutonomousSeatPage() {
  return (
    <>
      <SeatHeader />
      <div className={style.seatInfoWrapper}>
        {/* 오늘의 예약 좌석 */}
        <TodayReservedSeat />
        {/* 즐겨찾기 */}
        <FavoriteSeat />
        {/* 최근예약 좌석 */}
        <RecentlyReservedSeat />
        {/* 좌석 평면도 */}
      </div>
      <SeatMap />
    </>
  );
}
