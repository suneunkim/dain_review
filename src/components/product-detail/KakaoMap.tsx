'use client'

import { useEffect } from 'react'
declare global {
  interface Window {
    kakao: any
  }
}
interface KakaoMapProps {
  latitude?: number
  longitude?: number
  placeName?: string
  mapId: string
}

const KakaoMap = ({
  latitude = 37.5667,
  longitude = 126.9782,
  placeName = '다인카페',
  mapId
}: KakaoMapProps) => {
  useEffect(() => {
    const loadKaKaoMap = () => {
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
          const mapContainer = document.getElementById(mapId)
          if (!mapContainer) return

          const mapOption = {
            center: new window.kakao.maps.LatLng(
              latitude || 37.5667,
              longitude || 126.9782
            ),
            level: 3
          }

          const map = new window.kakao.maps.Map(mapContainer, mapOption)

          // 마커
          const markerPosition = new window.kakao.maps.LatLng(
            latitude || 37.5667,
            longitude || 126.9782
          )
          const marker = new window.kakao.maps.Marker({
            position: markerPosition
          })
          marker.setMap(map)
        })
      }
    }

    // 스크립트가 로드된 후 지도를 초기화합니다.
    if (window.kakao && window.kakao.maps) {
      loadKaKaoMap()
    }

    // 스크립트 로드 시, 로드된 후 이벤트를 발생시켜 지도를 초기화합니다.
    const script = document.createElement('script')
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=c0e6be4f805e51858d2f212f7224c429&libraries=services&autoload=false`
    script.onload = () => window.dispatchEvent(new Event('kakaoMapLoaded'))
    document.head.appendChild(script)

    window.addEventListener('kakaoMapLoaded', loadKaKaoMap)

    return () => {
      window.removeEventListener('kakaoMapLoaded', loadKaKaoMap)
    }
  }, [mapId, latitude, longitude])

  // 길찾기 바로가기
  const kakaoMapLink = `https://map.kakao.com/link/to/${placeName},${latitude},${longitude}`

  const handleKakaoMapLink = () => {
    window.location.href = kakaoMapLink // 클릭 시 카카오 맵 링크로 이동
  }

  return (
    <>
      <div
        id={mapId}
        className="h-[176px] w-full sm:h-[352px] lg:h-[344px]"
      />
      <button onClick={handleKakaoMapLink}>카카오 지도로 길찾기</button>
    </>
  )
}

export default KakaoMap
