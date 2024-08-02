"use client"

import {useState} from "react";
import style from '../css/seatMap.module.css';
import cx from 'classnames';

export default function SeatMap() {
  const [floor, setFloor] = useState<string>('6층')
  const [isToggle, setIsToggle] = useState<boolean>(false);

  const onToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div className={style.mapWrapper}>
      {/* 층 선택 */}
      <div className={style.mapInfo}>
        <div className={style.dropdownFloor}>
          <button className={style.dropdownToggle} onClick={onToggle}>{floor}</button>
          <div className={cx(isToggle ? style.dropdownMenu : style.noDropdownMenu)}>
            <ul>
              <li>2층</li>
              <li>3층</li>
              <li>4층</li>
              <li>5층</li>
              <li>6층</li>
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
      <div className={style.mapContainer} />
    </div>
  )
}