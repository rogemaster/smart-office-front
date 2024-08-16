import React from 'react';
import style from '../layout.module.css';
import SeatMainHeader from '@/app/(service)/seat/_component/SeatMainHeader';
import TodayReservedSeat from '@/app/(service)/seat/_component/TodayReservedSeat';
import FavoriteSeat from '@/app/(service)/seat/_component/FavoriteSeat';
import RecentlyReservedSeat from '@/app/(service)/seat/_component/RecentlyReservedSeat';
import SeatMapHeader from "@/app/(service)/seat/_component/SeatMapHeader";

export default function AutonomousSeatPage() {
  return (
    <>
      <SeatMainHeader />
      <div className={style.seatInfoWrapper}>
        {/* 오늘의 예약 좌석 */}
        <TodayReservedSeat />
        {/* 즐겨찾기 */}
        <FavoriteSeat />
        {/* 최근예약 좌석 */}
        <RecentlyReservedSeat />
      </div>
      <SeatMapHeader />
    </>
  );
}
