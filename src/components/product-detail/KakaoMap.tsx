'use client'

import Script from 'next/script'

declare global {
  interface Window {
    kakao: any
  }
}

interface KakaoMapProps {
  latitude?: number
  longitude?: number
  placeName?: string
}

const KakaoMap = ({
  latitude,
  longitude,
  placeName = '다인리뷰'
}: KakaoMapProps) => {
  const loadKaKaoMap = () => {
    if (window.kakao && window.kakao.maps) {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById('map')

        const mapOption = {
          center: new window.kakao.maps.LatLng(
            latitude || 37.5667,
            longitude || 126.9782
          ),
          level: 3
        }

        const map = new window.kakao.maps.Map(mapContainer, mapOption)

        // 마커
        const markerPosition = new window.kakao.maps.LatLng(latitude, longitude)
        const marker = new window.kakao.maps.Marker({
          position: markerPosition
        })
        marker.setMap(map), map
      })
    }
  }

  // 길찾기 바로가기
  const kakaoMapLink = `https://map.kakao.com/link/to/${placeName},${latitude},${longitude}`

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_CLIENT}&&libraries=services&autoload=false`}
        onReady={loadKaKaoMap}
      />
      <div
        id="map"
        className="h-[176px] w-full sm:h-[352px] lg:h-[344px]"
      />
    </>
  )
}

export default KakaoMap
