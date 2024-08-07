"use client"

import { useEffect } from 'react';
import L from 'leaflet';
import { useMap } from 'react-leaflet';

type Props = {
  bounds: L.LatLngBoundsExpression;
};

export default function FitBounds({ bounds }: Props) {
  const map = useMap(); // useMap 훅을 사용하여 현재 맵 인스턴스를 가져옵니다.

  useEffect(() => {
    map.fitBounds(bounds);  // fitBounds 메서드를 호출하여 지도를 이미지의 범위에 맞춥니다.
  }, [bounds, map]);  // map이나 bounds가 변경될 때마다 효과를 재실행합니다.

  return null;  // 이 컴포넌트는 화면에 렌더링되지 않으므로 null을 반환합니다.
}
