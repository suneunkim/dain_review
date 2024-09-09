'use client'

import { filterOptions } from '@/data/filterOptions'
import { useState } from 'react'
import FilterActionsButtons from '../modal/search-modal/FilterActionsButtons'
import useThreeFilter from '@/hooks/useThreeFilter'
import { useRouter } from 'next/navigation'
import buildQueryParams from '@/utils/filterBuildQueryParams'

const DeskTopSearchFilter = ({ keyword = '' }: { keyword: string }) => {
  const router = useRouter()
  const [seletedDropFilter, setSeletedDropFilter] = useState(false)

  const { selectedFilters, handleFilterItemClick, handleReset } =
    useThreeFilter()

  const handleButtonClick = () => {
    setSeletedDropFilter(prev => !prev)
  }

  const onSubmit = () => {
    setSeletedDropFilter(false)

    const queryParams = buildQueryParams(selectedFilters, keyword)
    const queryString = queryParams.toString()
    router.push(`/campaign?${queryString}`)
  }

  return (
    <div className="relative z-50 font-[500] text-gray-80">
      <button
        onClick={handleButtonClick}
        className="flex items-center gap-2 rounded-[4px] border px-3 py-[10px]">
        <div>필터</div>
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.41205 7.41205C4.73748 7.08661 5.26512 7.08661 5.59056 7.41205L10.0013 11.8228L14.412 7.41205C14.7375 7.08661 15.2651 7.08661 15.5906 7.41205C15.916 7.73748 15.916 8.26512 15.5906 8.59056L10.5906 13.5906C10.2651 13.916 9.73748 13.916 9.41205 13.5906L4.41205 8.59056C4.08661 8.26512 4.08661 7.73748 4.41205 7.41205Z"
            fill="#19191B"
          />
        </svg>
      </button>
      {seletedDropFilter && (
        <div className="absolute right-0 mt-[3px] flex h-[583px] w-[368px] flex-col gap-8 rounded-[4px] bg-white p-5 shadow-sm">
          {filterOptions.map((filter, i) => (
            <div key={i}>
              <h5 className="mb-2 text-heading-5 font-medium text-gray-90">
                {filter.category}
              </h5>
              <div className="flex flex-wrap gap-[10px]">
                {filter.items.map(item => (
                  <span
                    onClick={() => handleFilterItemClick(filter.category, item)}
                    className={`rounded border border-line-normal px-4 py-[10px] text-body-1 font-medium text-gray-80 ${
                      (filter.category === '카테고리' &&
                        selectedFilters.category === item) ||
                      (filter.category === 'SNS' &&
                        selectedFilters.platform === item) ||
                      (filter.category === '유형' &&
                        selectedFilters.type === item)
                        ? 'border-red-main bg-background-red text-red-main'
                        : ''
                    } `}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}

          <FilterActionsButtons
            onReset={handleReset}
            onClose={handleButtonClick}
            onSubmit={onSubmit}
          />
        </div>
      )}
    </div>
  )
}

export default DeskTopSearchFilter
