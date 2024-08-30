'use client'

import { useState } from 'react'
import RefreshIcon from '@/assets/icons/home/mobile/mobile-refresh.svg'
import XIcon from '@/assets/icons/home/mobile/mobile-x-icon.svg'
import { useSearchFilterBoxStore } from '@/store'
import { locations } from '@/data/locations'

interface Props {
  onChange: (locations: [string, string][]) => void
}

const LocationModal = ({ onChange }: Props) => {
  const { closeLocationModal } = useSearchFilterBoxStore()

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

  const handleReset = () => {
    setSelectedLocations([])
  }

  const handleConfirm = () => {
    onChange(selectedLocations)
    closeLocationModal()
  }

  return (
    <div className="fixed inset-y-0 z-40 flex items-end bg-black bg-opacity-40 520:right-0 lg:hidden">
      <div className="relative z-50 min-h-[480px] min-w-[360px] max-w-[520px] rounded-t-3xl bg-white">
        <div className="flex h-20 max-w-[520px] items-center justify-center border-b border-line-neutral text-gray-80 520:w-[97vw]">
          지역설정
        </div>
        <div className="flex">
          <ul className="max-h-[282px] min-w-20 overflow-y-auto border-r border-line-neutral">
            {locations.map(location => (
              <li
                onClick={() => handleCityClick(location.city)}
                key={location.city}
                className={`w-20 p-4 text-center text-body-1 ${selectedCity === location.city && 'bg-red-main text-white'}`}>
                {location.city}
              </li>
            ))}
          </ul>
          <ul className="max-h-[282px] w-full overflow-y-auto border-r border-line-neutral">
            {locations
              .find(location => location.city === selectedCity)
              ?.districts.map(district => {
                const isSelected = selectedLocations.some(
                  ([city, dist]) => city === selectedCity && dist === district
                )
                // 선택된 도시와 구의 조합이 존재하는지 확인
                return (
                  <li
                    onClick={() => handleDistrictClick(district)}
                    key={district}
                    className={`p-4 text-body-1 ${isSelected && 'text-red-main'}`}>
                    {district}
                  </li>
                )
              })}
          </ul>
        </div>
        {/* 선택된 구 표시*/}
        <ul className="shadow-topCustom flex h-[36px] gap-1 overflow-x-auto px-4 pt-2">
          {selectedLocations.map(([city, district]) => (
            <li
              key={`${city}-${district}`}
              className="flex items-center gap-[7px] rounded-2xl border px-3 py-[2px]">
              <span className="min-w-min whitespace-nowrap text-body-2 text-gray-40">
                {district}
              </span>
              <button onClick={() => handleDistrictClick(district)}>
                <XIcon />
              </button>
            </li>
          ))}
        </ul>
        <div className="flex justify-between gap-[10px] p-4">
          <div className="flex items-center gap-[10px] font-bold">
            <button
              onClick={handleReset}
              className="min-h-[50px] min-w-10 rounded-md px-2">
              <RefreshIcon />
            </button>
            <button
              onClick={closeLocationModal}
              className="min-h-[50px] min-w-[109px] rounded-md bg-gray-5 text-center text-heading-5">
              닫기
            </button>
          </div>
          <button
            onClick={handleConfirm}
            className="min-h-[50px] w-full rounded-md bg-red-main text-heading-5 text-white">
            확인
          </button>
        </div>
      </div>
    </div>
  )
}

export default LocationModal
