import React from 'react';
import style from './layout.module.css';
import searchIcon from '../../../public/ico_search.png';
import Sidebar from '@/app/_component/Sidebar';
import Image from "next/image";

type Props = { children: React.ReactNode };

export default function MainLayout({ children }: Props) {
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
    <div className={style.container}>
      <div className={style.sidebarWrapper}>
        <Sidebar />
      </div>
      <div className={style.contentWrapper}>
        <section>
          <header className={style.headerTitle}>
            <h2>자율좌석 예약</h2>
            <span>좌석 배치도에서 좌석 선택 후 예약을 진행하세요.</span>
          </header>

          {/* 검색 */}
          <div>
            <div className={style.search}>
              <button className={style.searchBtn}>
                <div className={style.searchIcon}>
                  <Image src={searchIcon} alt="검색" fill />
                </div>
              </button>
            </div>
          </div>

          {/* 좌석 정보 */}
          <div className={style.seatInfoWrapper}>
            {/* 오늘의 근무 좌석 */}
            <div className={style.todayWorkSeat}>
              <h3>오늘의 근무 좌석</h3>
              {/* 좌석 예약 정보에 따라 조건 - 예약된 좌석이 있는 경우 */}
              {/*<div className={style.todayWorkSeatInfo}>*/}
              {/*  <span>{todaySeatInfo.seatNumber}</span>*/}
              {/*  <button>퇴실하기</button>*/}
              {/*</div>*/}
              {/* 예약된 좌석이 없는 경우 */}
              <div className={style.noTodayWorkSeat}>
                <span>좌석을 예약해 주세요</span>
              </div>
            </div>

          {/* 즐겨찾기 */}
          {/* 최근예약 좌석 */}
          </div>

          {children}
        </section>
      </div>
    </div>
  );
}
