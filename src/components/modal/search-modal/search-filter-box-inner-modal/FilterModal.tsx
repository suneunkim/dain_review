'use client'

import { useState } from 'react'
import RefreshIcon from '@/assets/icons/home/mobile/mobile-refresh.svg'
import XIcon from '@/assets/icons/home/mobile/mobile-x-icon.svg'
import { useSearchFilterBoxStore } from '@/store'
import { filterOptions } from '@/data/filterOptions'

const FilterModal = () => {
  const { closeFilterModal } = useSearchFilterBoxStore()

  const [selectedFilter, setSelectedFilter] = useState<string>(
    filterOptions[0].category
  )
  const [selectedFilterItems, setSelectedFilterItems] = useState<string[]>([])

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter)
  }

  const handleFilterItemClick = (item: string) => {
    setSelectedFilterItems(prevSelected => {
      if (prevSelected.includes(item)) {
        // 이미 선택된 하위 지역이면 제거
        return prevSelected.filter(item => item !== item)
      } else if (prevSelected.length < 5) {
        // 선택된 하위 지역이 5개 미만일 때만 추가
        return [...prevSelected, item]
      } else {
        // 선택된 하위 지역이 5개 이상일 때는 그대로 반환
        return prevSelected
      }
    })
  }

  const handleReset = () => {
    setSelectedFilterItems([])
  }

  return (
    <div className="fixed inset-0 z-40 flex items-end bg-black bg-opacity-40 lg:hidden">
      <div className="relative z-50 min-h-[480px] w-full min-w-[360px] rounded-t-3xl bg-white">
        <div className="flex h-20 max-w-[520px] items-center justify-center border-b border-line-neutral text-gray-80 520:w-[97vw]">
          지역설정
        </div>
        <div className="flex">
          <ul className="max-h-[282px] min-w-20 overflow-y-auto border-r border-line-neutral">
            {filterOptions.map(option => (
              <li
                onClick={() => handleFilterClick(option.category)}
                key={option.category}
                className={`py-4 text-center text-body-1 ${selectedFilter === option.category && 'bg-red-main text-white'}`}>
                {option.category}
              </li>
            ))}
          </ul>
          <ul className="max-h-[282px] w-full overflow-y-auto border-r border-line-neutral">
            {filterOptions
              .find(option => option.category === selectedFilter)
              ?.items.map(item => (
                <li
                  onClick={() => handleFilterItemClick(item)}
                  key={item}
                  className={`p-4 text-body-1 ${selectedFilterItems.includes(item) && 'text-red-main'}`}>
                  {item}
                </li>
              ))}
          </ul>
        </div>
        {/* 선택된 요소 */}
        <ul className="flex h-[36px] gap-1 overflow-x-auto px-4 pt-2 shadow-topCustom">
          {selectedFilterItems.map(item => (
            <li
              key={item}
              className="flex items-center gap-[7px] rounded-2xl border px-3 py-[2px]">
              <span className="min-w-min whitespace-nowrap text-body-2 text-gray-40">
                {item}
              </span>
              <button onClick={() => handleFilterItemClick(item)}>
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
              onClick={closeFilterModal}
              className="min-h-[50px] min-w-[109px] rounded-md bg-gray-5 text-center text-heading-5">
              닫기
            </button>
          </div>
          <button className="min-h-[50px] w-full rounded-md bg-red-main text-heading-5 text-white">
            확인
          </button>
        </div>
      </div>
    </div>
  )
}

export default FilterModal
