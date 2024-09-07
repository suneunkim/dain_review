'use client'

import FilterArrow from '@/assets/icons/home/filter-arrow.svg'
import { useSearchFilterBoxStore } from '@/store'

interface Props {
  title: '지역' | '필터'
  isSearchPage?: boolean // 여기에 필터 드롭다운 만들거나 따로 만들거나
}

const SearchFilterBox = ({ title }: Props) => {
  const { openFilterModal, openLocationModal } = useSearchFilterBoxStore()

  const handleClick = (title: string) => {
    title === '지역' ? openLocationModal() : openFilterModal()
  }

  return (
    <div className="relative font-[500] text-gray-80">
      <button
        onClick={() => handleClick(title)}
        className="flex items-center gap-2 rounded-[4px] border px-3 py-[10px]">
        <div>{title}</div>
        <FilterArrow />
      </button>
    </div>
  )
}

export default SearchFilterBox
