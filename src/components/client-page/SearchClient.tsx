'use client'

import { useSearchFilterBoxStore } from '@/store'
import SegmentProductCard from '../home/product/SegmentProductCard'
import MobileSearchResult from '../search/MobileSearchResult'
import SearchForm from '../search/SearchForm'
import LocationModal from '../modal/search-modal/search-filter-box-inner-modal/LocationModal'
import FilterModal from '../modal/search-modal/search-filter-box-inner-modal/FilterModal'
import { locations } from '@/data/locations'
import useLocationFilter from '@/hooks/useLocationFilter'

import XIcon from '@/assets/icons/home/mobile/mobile-x-icon.svg'
import DropdownFilter from '../modal/search-modal/DropdownFilter'
import DeskTopSearchFilter from '../search/DeskTopSearchFilter'
import { useRouter } from 'next/navigation'
import { CampaignProps } from '@/models/campaignList'

// MoreButton에 쿼리파라미터 추가해서 보내기 types=premium
type LocationData = {
  city: string
  districts: string[]
}

interface Props {
  keyword: string
  data: any
}

const SearchClient = ({ keyword = '', data }: Props) => {
  const router = useRouter()
  const { isLocationModalOpen, isFilterModalOpen } = useSearchFilterBoxStore()

  const {
    selectedCity,
    selectedDistricts,
    handleCityClick,
    handleDistrictClick,
    removeLocation,
    handleReset
  } = useLocationFilter()

  const onSubmit = ({ searchTerm }: { searchTerm: string }) => {
    router.push(`/campaign?searchWord=${searchTerm}`)
  }

  // 모바일 지역 선택 모달에서 확인 누르면 쿼리 파라미터 보냄
  const handleConfirmLocation = (location: LocationData) => {
    const { city, districts } = location

    // 도시 ID 찾기 (서울 1 부산 2)
    const selectedLocation = locations.find(loc => loc.city === city)
    if (!selectedLocation) return

    const cityId = locations.indexOf(selectedLocation)

    let queryParams = new URLSearchParams()
    if (districts[0] === `${city} 전체`) {
      // `${city} 전체`로 비교
      queryParams.set('city', cityId.toString())
    } else {
      const filteredDistricts = districts.filter(
        dist => dist !== `${city} 전체`
      )
      queryParams.set('districts', filteredDistricts.join(','))
      queryParams.set('city', cityId.toString())
    }

    router.push(`/campaign?${queryParams.toString()}`)
  }

  // 웹에서 하위 지역 선택 시 쿼리 파라미터 보냄
  const handleDistrictSelect = (district: string) => {
    if (selectedDistricts.includes(district)) {
      // 선택 해제 시
      const updatedDistricts = selectedDistricts.filter(
        dist => dist !== district
      )

      // 쿼리 파라미터 업데이트
      handleConfirmLocation({ city: selectedCity, districts: updatedDistricts })
    } else {
      if (district === `${selectedCity} 전체`) {
        // 전체 클릭 시 도시 ID만 쿼리 파라미터로 보냄
        handleConfirmLocation({ city: selectedCity, districts: [district] })
      } else {
        // 구 클릭 시 해당 구를 선택하고 바로 쿼리 파라미터를 설정
        handleDistrictClick(district)
        handleConfirmLocation({
          city: selectedCity,
          districts: [...selectedDistricts, district]
        })
      }
    }
  }

  return (
    <div className="relative">
      {/* 모바일 지역과 필터 모달 */}
      {isLocationModalOpen && (
        <LocationModal onChange={handleConfirmLocation} />
      )}
      {isFilterModalOpen && <FilterModal keyword={keyword} />}

      <SearchForm
        onSubmit={onSubmit}
        keyword={keyword}
      />
      {/* 모바일 검색 결과 */}
      <div className="lg:hidden">
        <MobileSearchResult
          data={data}
          keyword={keyword}
        />
      </div>
      <section className="mx-auto mb-28 hidden max-w-[1400px] px-4 lg:block">
        {/* 도시 선택 */}
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
        {/* 도시 하위 지역 선택 */}
        <ul
          className={`my-5 grid grid-cols-10 border-t py-3 ${selectedCity && 'border-b'} `}>
          {locations
            .find(location => location.city === selectedCity)
            ?.districts.map(district => {
              const isSelected = selectedDistricts.includes(district)
              // 선택된 도시와 구의 조합이 존재하는지 확인
              return (
                <li
                  onClick={() => handleDistrictSelect(district)}
                  key={district}
                  className={`min-w-[100px] cursor-pointer gap-4 px-4 py-2 text-center text-body-2 text-gray-60 ${isSelected && 'text-red-main'} `}>
                  {district}
                </li>
              )
            })}
        </ul>
        {/* 선택된 지역 보여주는 UI */}
        <ul className="flex h-[28px] gap-1 px-4">
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

        {/* 웹 검색 결과 */}
        <div className="mt-12 flex items-center justify-between">
          <div className="text-heading-4 text-gray-90">
            <span className="text-red-main">{data.length}</span>
            <span>개의 체험단</span>
          </div>
          <div className="flex gap-2">
            <DeskTopSearchFilter keyword={keyword} />
            <DropdownFilter />
          </div>
        </div>
        <div className="mt-[32px] hidden lg:block">
          {data.length === 0 ? (
            <div className="text-center">
              <p className="mb-4 text-heading-4 font-medium text-gray-90">
                찾으시는 체험단이 없어요.
              </p>
              <p className="text-body-1 text-gray-60">
                적용한 필터나 키워드를 변경하여 찾아 보세요.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-x-5 gap-y-10">
              {data.map((campaign: CampaignProps) => (
                <SegmentProductCard
                  data={campaign}
                  key={campaign.seq}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default SearchClient
