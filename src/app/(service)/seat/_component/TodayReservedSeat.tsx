import style from "../css/todayReservedSeat.module.css";
import React from "react";

export default function TodayReservedSeat() {
  const todaySeatInfo = {
    seatNumber: 'A-10', // 촤석 번호
    bookingStatus: 'BOOKED', // 좌석 예약 상태
    seatId: 'A-10', //
    seatFixed: false,
    floorId: 2, // 층,
    floorName: '2층',
    userId: 'jzzz',
    userDepName: '개발팀',
    seatBookingId: 'jzzz'
  }

  return (
    <div className={style.todayReservedSeatWrapper}>
      <h3>오늘의 예약 좌석</h3>
      {/* 좌석 예약 정보에 따라 조건 - 예약된 좌석이 있는 경우 */}
      {/*<div className={style.todayReservedSeatInfo}>*/}
      {/*  <span>{todaySeatInfo.seatNumber}</span>*/}
      {/*  <button>퇴실하기</button>*/}
      {/*</div>*/}
      {/* 예약된 좌석이 없는 경우 */}
      <div className={style.noTodayReservedSeat}>
        <span>좌석을 예약해 주세요</span>
      </div>
    </div>
  )
}