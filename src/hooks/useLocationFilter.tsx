'use client'

import { useState } from 'react'

const useLocationFilter = () => {
  const [selectedCity, setSelectedCity] = useState<string>('') // ui 용도
  const [selectedLocations, setSelectedLocations] = useState<
    [string, string][]
  >([]) // 시와 구 튜플로 저장

  const handleCityClick = (city: string) => {
    setSelectedCity(city)
  }

  const handleDistrictClick = (district: string) => {
    // 도시와 구의 조합을 새로운 상태에 추가
    setSelectedLocations(prevLocations => {
      const exists = prevLocations.some(
        ([city, dist]) => city === selectedCity && dist === district
      )

      if (exists) {
        // 이미 선택된 조합이면 제거
        return prevLocations.filter(
          ([city, dist]) => !(city === selectedCity && dist === district)
        )
      } else if (prevLocations.length < 5) {
        // 새로운 조합 추가
        return [...prevLocations, [selectedCity, district]]
      } else {
        // 선택된 조합이 5개 이상일 때는 그대로 반환
        return prevLocations
      }
    })
  }

  // 선택된 도시와 구를 직접 삭제하는 함수 추가
  const removeLocation = (city: string, district: string) => {
    setSelectedLocations(prevLocations =>
      prevLocations.filter(([c, d]) => !(c === city && d === district))
    )
  }

  const handleReset = () => {
    setSelectedLocations([])
  }

  return {
    selectedCity,
    selectedLocations,
    handleCityClick,
    handleDistrictClick,
    removeLocation,
    handleReset
  }
}

export default useLocationFilter
