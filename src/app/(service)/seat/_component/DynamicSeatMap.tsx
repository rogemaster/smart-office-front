'use client';

import { ImageOverlay, MapContainer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import FitBounds from '@/app/(service)/seat/_component/FitBounds';

export default function DynamicSeatMap() {
  const imageUrl: string = '/map/floor_2_map.png';
  const imageBounds: L.LatLngBoundsExpression = [
    [-1384, 700], // 남서쪽 좌표
    [700, 1384], // 북동쪽 코너 (높이, 너비)
  ];

  return (
    <MapContainer
      center={[350, 692]}
      zoom={1}
      style={{ height: 'inherit', width: 'inherit', background: '#f4f7fb', zIndex: '0' }}
      zoomControl={true} // 화면의 줌 컨트롤 사용
      scrollWheelZoom={true} // 스크롤 줌 사용
      dragging={true} // 드래그 가능 사용
    >
      <ImageOverlay
        url={imageUrl}
        bounds={imageBounds}
        opacity={1.0} // 투명도를 1로 설정하여 이미지가 선명하게 보이도록 합니다.
        interactive={false} // 이미지를 인터랙티브하지 않게 설정
      />
      <FitBounds bounds={imageBounds} />
    </MapContainer>
  );
}
