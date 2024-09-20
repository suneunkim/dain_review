'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

type DropdownType = '추천순' | '인기순' | '마감임박순' | '최신순'

const orderMap: Record<DropdownType, string> = {
  추천순: 'point',
  인기순: 'latest', //  popularity 오류남
  마감임박순: 'deadline',
  최신순: 'latest'
}

const DropdownFilter = () => {
  const router = useRouter()
  const dropdown: DropdownType[] = ['추천순', '인기순', '마감임박순', '최신순']
  const [seletedDropDown, setSeletedDropDown] = useState(false)
  const [seletedValue, setSeletedValue] = useState<DropdownType>('추천순')

  const handleButtonClick = () => {
    setSeletedDropDown(prev => !prev)
  }
  const handleValueClick = (drop: DropdownType) => {
    setSeletedValue(drop)
    setSeletedDropDown(false)

    const orderParam = orderMap[drop]
    const queryParams = new URLSearchParams(window.location.search)
    queryParams.set('orderParam', orderParam)
    router.push(`${window.location.pathname}?${queryParams.toString()}`)
  }

  return (
    <div className="relative z-50 font-[500] text-gray-80">
      <button
        onClick={handleButtonClick}
        className="flex items-center gap-2 rounded-[4px] border px-3 py-[10px]">
        <div>{seletedValue}</div>
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
