'use client'

import { useSearchFilterBoxStore } from '@/store'
import { locations } from '@/data/locations'
import useLocationFilter from '@/hooks/useLocationFilter'

import XIcon from '@/assets/icons/home/mobile/mobile-x-icon.svg'
import FilterActionsButtons from '../FilterActionsButtons'

type LocationData = {
  city: string
  districts: string[]
}

const LocationModal = ({
  onChange
}: {
  onChange: (locations: LocationData) => void
}) => {
  const { closeLocationModal } = useSearchFilterBoxStore()
  const {
    selectedCity,
    selectedDistricts,
    handleCityClick,
    handleDistrictClick,
    removeLocation,
    handleReset
  } = useLocationFilter()

  const handleConfirm = () => {
    onChange({ city: selectedCity, districts: selectedDistricts }) // 올바른 형태로 전달
    closeLocationModal()
  }

  return (
    <div className="fixed inset-0 z-40 flex items-end bg-black bg-opacity-40 520:right-0 lg:hidden">
      <div className="relative z-50 min-h-[480px] w-full min-w-[360px] rounded-t-3xl bg-white">
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
                // 선택된 도시와 구의 조합이 존재하는지 확인
                const isSelected = selectedDistricts.includes(district)
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
        <ul className="flex h-[36px] gap-1 overflow-x-auto px-4 pt-2 shadow-topCustom">
          {selectedDistricts.map(district => (
            <li
              key={district}
              className="flex items-center gap-[7px] rounded-2xl border px-3 py-[2px]">
              <span className="min-w-min whitespace-nowrap text-body-2 text-gray-40">
                {district}
              </span>
              <button onClick={() => removeLocation(district)}>
                <XIcon />
              </button>
            </li>
          ))}
        </ul>
        <div className="p-4">
          <FilterActionsButtons
            onReset={handleReset}
            onClose={closeLocationModal}
            onSubmit={handleConfirm}
          />
        </div>
      </div>
    </div>
  )
}

export default LocationModal
