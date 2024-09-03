'use client'

import { useState } from 'react'
import FilterArrow from '@/assets/icons/home/filter-arrow.svg'

type DropdownType = '추천순' | '인기순' | '마감임박순' | '최신순'

const DropdownFilter = () => {
  const dropdown: DropdownType[] = ['추천순', '인기순', '마감임박순', '최신순']
  const [seletedDropDown, setSeletedDropDown] = useState(false)
  const [seletedValue, setSeletedValue] = useState<DropdownType>('추천순')

  const handleButtonClick = () => {
    setSeletedDropDown(prev => !prev)
  }
  const handleValueClick = (drop: DropdownType) => {
    setSeletedValue(drop)
    setSeletedDropDown(false)
  }

  return (
    <div className="relative z-50 font-[500] text-gray-80">
      <button
        onClick={handleButtonClick}
        className="flex items-center gap-2 rounded-[4px] border px-3 py-[10px]">
        <div>{seletedValue}</div>
        <FilterArrow />
      </button>
      {seletedDropDown && (
        <ul className="absolute left-0 mt-[3px] rounded-[4px] bg-white shadow-sm">
          {dropdown.map(drop => (
            <li
              onClick={() => handleValueClick(drop)}
              key={drop}
              className="cursor-pointer border-b border-line-neutral px-3 py-[10px] last:border-0 hover:bg-gray-10 hover:bg-opacity-50">
              {drop}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DropdownFilter
