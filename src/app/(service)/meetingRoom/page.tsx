"use client"

import style from './css/meetingRoomMainHeader.module.css'
import { FloorButton } from '@/app/_component/FloorButton';
import cx from "classnames";
import {FloorInfo} from "@/mocks/data/floorInfo";
import React, {useState} from "react";

export default function MeetingRoomPage() {
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
    <>
      {/* 타이틀영역 */}
      <header className={style.headerWrapper}>
        <h2>회의실 예약</h2>
        <span>원하는 회의실로 시간을 선택하신 후 예야을 진행 하세요.</span>
      </header>

      {/* 정렬, 날짜선택 영역 */}
      <div>
        <div>
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
        </div>
      </div>
    </>
  );
}
