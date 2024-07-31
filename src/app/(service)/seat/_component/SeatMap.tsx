import style from '../css/seatMap.module.css';

export default function SeatMap() {
  return (
    <div className={style.mapWrapper}>
      {/* 층 선택 */}
      <div className={style.mapInfo}>
        <div className={style.dropdownFloor}>
          <button className={style.dropdownToggle}>{'4층'}</button>
          <div className={style.dropdownMenu}>
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