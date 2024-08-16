import style from '@/app/(service)/seat/css/seatMap.module.css';
import cx from 'classnames';
import { FloorInfo } from '@/mocks/data/floorInfo';
import React, { useState } from 'react';

type Props = {
  onFloor: (floorId: string) => void;
};

export const FloorButton = ({ onFloor }: Props) => {
  const [floor, setFloor] = useState<string>('6층');
  const [isToggle, setIsToggle] = useState<boolean>(false);

  const onToggle = () => {
    setIsToggle(!isToggle);
  };

  const onSelectFloor = (e: React.MouseEvent) => {
    const { id } = e.target as HTMLLIElement;
    setFloor(id);
    setIsToggle(false);
    onFloor(id);
  };

  return (
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
  );
}
