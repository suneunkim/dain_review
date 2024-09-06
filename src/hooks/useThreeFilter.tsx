'use client'

import { useState } from 'react'
import { ThreeFilter } from '@/data/filterOptions'
type FilterState = {
  category: string | null
  platform: string | null
  type: string | null
}

const useThreeFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState<ThreeFilter>('카테고리')
  const [selectedFilters, setSelectedFilters] = useState<FilterState>({
    category: null,
    platform: null,
    type: null
  })

  const handleFilterClick = (filter: ThreeFilter) => {
    setSelectedFilter(filter)
  }

  // 필터 항목 선택 핸들러
  const handleFilterItemClick = (filter: ThreeFilter, item: string) => {
    if (filter === '카테고리') {
      setSelectedFilters(prev => ({ ...prev, category: item }))
    } else if (filter === 'SNS') {
      setSelectedFilters(prev => ({ ...prev, platform: item }))
    } else if (filter === '유형') {
      setSelectedFilters(prev => ({ ...prev, type: item }))
    }
  }

  // 필터 항목 제거 핸들러
  const handleRemoveItemClick = (filter: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filter === '카테고리'
        ? 'category'
        : filter === 'SNS'
          ? 'platform'
          : 'type']: null
    }))
  }

  const handleReset = () => {
    setSelectedFilters({
      category: null,
      platform: null,
      type: null
    })
  }

  return {
    selectedFilter,
    selectedFilters,
    handleFilterClick,
    handleFilterItemClick,
    handleRemoveItemClick,
    handleReset
  }
}

export default useThreeFilter
