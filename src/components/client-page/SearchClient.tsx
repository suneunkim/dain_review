'use client'

import { useState } from 'react'
import { useSearchFilterBoxStore, useSearchModalStore } from '@/store'

import MobileSearchResult from '../search/MobileSearchResult'
import SearchForm from '../search/SearchForm'
import LocationModal from '../modal/search-modal/search-filter-box-inner-modal/LocationModal'
import FilterModal from '../modal/search-modal/search-filter-box-inner-modal/FilterModal'
import ProductCard from '../home/product/ProductCard'
import { locations } from '@/data/locations'
import useLocationFilter from '@/hooks/useLocationFilter'
import XIcon from '@/assets/icons/home/mobile/mobile-x-icon.svg'
import SearchFilterBox from '../modal/search-modal/SearchFilterBox'
import DropdownFilter from '../modal/search-modal/DropdownFilter'

// MoreButton에 쿼리파라미터 추가해서 보내기 types=premium
interface QueryFilters {
  cities: string[]
  categorySeqs: number[]
  platformSeqs: number[]
  types: number[]
}

const SearchClient = ({ keyword = '' }: { keyword: string }) => {
  const { isLocationModalOpen, isFilterModalOpen } = useSearchFilterBoxStore()
  const [searchWord, setSearchWord] = useState(keyword)
  const [queryFilters, setQueryFilters] = useState<QueryFilters>({
    cities: [], // ['서울-강남구']
    categorySeqs: [], // 카테고리 필터
    platformSeqs: [], // SNS 필터
    types: [] // 유형 필터
  })

  const {
    selectedCity,
    selectedLocations,
    handleCityClick,
    handleDistrictClick,
    removeLocation,
    handleReset
  } = useLocationFilter()

  const handleCityChange = (locations: [string, string][]) => {
    setQueryFilters(prev => ({
      ...prev,
      cities: locations.map(([city, district]) => `${city}-${district}`) // 튜플을 '서울-강남구' 형식으로 변환
    }))
  }

  const onSubmit = ({ searchTerm }: { searchTerm: string }) => {}

  return (
    <div className="relative">
      {/* 모바일 지역과 필터 모달 */}
      {isLocationModalOpen && <LocationModal onChange={handleCityChange} />}
      {isFilterModalOpen && <FilterModal />}

      <SearchForm onSubmit={onSubmit} />
      {/* 모바일 검색 결과 - 추후 data를 props로 */}
      <div className="lg:hidden">
        {searchWord && <MobileSearchResult searchTerm={searchWord} />}
      </div>
      {/* 웹 검색 필터와 결과 */}
      <section className="mx-auto hidden max-w-[1400px] px-4 lg:block">
        <ul className="mt-12 grid grid-cols-9 gap-[10px] desktop:flex">
          {locations.map(location => (
            <li
              onClick={() => handleCityClick(location.city)}
              key={location.city}
              className={`w-full cursor-pointer rounded bg-background-gray px-3 py-2 text-center text-body-1 text-gray-40 ${selectedCity === location.city && 'bg-background-red text-red-main'} `}>
              {location.city}
            </li>
          ))}
        </ul>
        <ul className="my-5 grid grid-cols-10 border-b border-t py-3">
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
                  className={`min-w-[100px] cursor-pointer gap-4 px-4 py-2 text-center text-body-2 text-gray-60 ${isSelected && 'text-red-main'} `}>
                  {district}
                </li>
              )
            })}
        </ul>
        <ul className="flex h-[28px] gap-1 px-4">
          {selectedLocations.map(([city, district]) => (
            <li
              key={`${city}-${district}`}
              className="flex items-center gap-[7px] rounded-2xl border px-3 py-[2px]">
              <span className="min-w-min whitespace-nowrap text-body-2 text-gray-40">
                {city} {district}
              </span>
              <button onClick={() => removeLocation(city, district)}>
                <XIcon />
              </button>
            </li>
          ))}
        </ul>
        {/* 웹 검색 결과 */}
        <div className="mt-12 flex items-center justify-between">
          <div className="text-heading-4 text-gray-90">
            <span className="text-red-main">3,098</span>
            <span>개의 체험단</span>
          </div>
          <div className="flex gap-2">
            <SearchFilterBox title="필터" />
            <DropdownFilter />
          </div>
        </div>
        <div className="mt-[32px] hidden lg:block">
          <div className="grid grid-cols-4 gap-x-5 gap-y-10">
            {Array(20)
              .fill(null)
              .map((_, i) => (
                <ProductCard
                  flag={null}
                  key={i}
                />
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default SearchClient
