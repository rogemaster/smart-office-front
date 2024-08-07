import { IFloor } from '@/model/Floor';

export function FloorInfo(): IFloor[] {
  return [
    { floorId: 1, floorName: '1층' },
    { floorId: 2, floorName: '2층' },
    { floorId: 3, floorName: '3층' },
    { floorId: 4, floorName: '4층' },
    { floorId: 5, floorName: '5층' },
    { floorId: 6, floorName: '6층' },
  ];
}