'use client'

import { useSearchModalStore } from '@/store'
import SearchIcon from '@/assets/icons/home/mobile/mobile-search.svg'

const SearchButton = () => {
  const { openModal } = useSearchModalStore()
  return (
    <button onClick={openModal}>
      <SearchIcon />
    </button>
  )
}

export default SearchButton
