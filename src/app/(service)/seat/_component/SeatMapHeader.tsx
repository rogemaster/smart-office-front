'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import style from '../css/seatMap.module.css';
import cx from 'classnames';
import { FloorInfo } from '@/mocks/data/floorInfo';

const DynamicMap = dynamic(() => import('./DynamicSeatMap'), {
  ssr: false,
});

export default function SeatMapHeader() {
  const [floor, setFloor] = useState<string>('6층');
  const [isToggle, setIsToggle] = useState<boolean>(false);

  const onToggle = () => {
    setIsToggle(!isToggle);
  };

  const onSelectFloor = (e: React.MouseEvent) => {
    const { id } = e.target as HTMLLIElement;
    setFloor(id);
    setIsToggle(false);
  };

  return (
    <div className={style.mapWrapper}>
      {/* 층 선택 */}
      <div className={style.mapInfo}>
        <div className={style.dropdownFloor}>
          <button className={style.dropdownToggle} onClick={onToggle}>
            {floor}
          </button>
          <div className={cx(isToggle ? style.dropdownMenu : style.noDropdownMenu)}>
            <ul>
              {FloorInfo().map((floor) => (
                <li key={floor.floorId} onClick={onSelectFloor} id={floor.floorName}>
                  {floor.floorName}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* 표기 가이드 */}
        <div className={style.mapGuide}>
          <span className={style.available}>예약가능</span>
          <span className={style.complete}>예약완료</span>
          <span className={style.my}>내좌석</span>
        </div>
      </div>
      <div className={style.mapContainer}>
        <DynamicMap />
      </div>
    </div>
  );
}
