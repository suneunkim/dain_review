'use client'

import { useHamburgerModalStore, useSearchModalStore } from '@/store'
import SearchModal from '../modal/search-modal/SearchModal'
import { useEffect } from 'react'

const SearchModalHandler = () => {
  const { isOpen } = useSearchModalStore()
  const { isHamburgerOpen } = useHamburgerModalStore()

  useEffect(() => {
    if (isOpen || isHamburgerOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen, isHamburgerOpen])

  return <>{isOpen && <SearchModal />}</>
}

export default SearchModalHandler
