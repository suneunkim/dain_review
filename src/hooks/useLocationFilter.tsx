'use client'

import { useState } from 'react'

const useLocationFilter = () => {
  const [selectedCity, setSelectedCity] = useState<string>('') // ui 용도
  const [selectedDistricts, setSelectedDistricts] = useState<string[]>([]) // 선택된 구 저장

  const handleCityClick = (city: string) => {
    setSelectedCity(city)
    setSelectedDistricts([]) // 도시 변경 시 구 초기화
  }

  const handleDistrictClick = (district: string) => {
    setSelectedDistricts(prevDistricts => {
      if (prevDistricts.includes(district)) {
        return prevDistricts.filter(d => d !== district) // 이미 선택된 구면 제거
      } else if (prevDistricts.length < 3) {
        return [...prevDistricts, district] // 새로운 구면 추가
      }
      return prevDistricts // 최대 3개 선택 시 그대로 반환
    })
  }

  // 선택된 도시와 구를 직접 삭제하는 함수 추가
  const removeLocation = (district: string) => {
    setSelectedDistricts(prevDistricts =>
      prevDistricts.filter(d => d !== district)
    )
  }

  const handleReset = () => {
    setSelectedCity('')
    setSelectedDistricts([])
  }

  return {
    selectedCity,
    selectedDistricts,
    handleCityClick,
    handleDistrictClick,
    removeLocation,
    handleReset
  }
}

export default useLocationFilter
