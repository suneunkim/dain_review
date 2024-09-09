'use client'

import { useSearchModalStore } from '@/store'
import SearchModal from '../modal/search-modal/SearchModal'
import { useEffect } from 'react'

const SearchModalHandler = () => {
  const { isOpen } = useSearchModalStore()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return <>{isOpen && <SearchModal />}</>
}

export default SearchModalHandler
