'use client'

import { useMediaQuery } from 'react-responsive'
import MoreButtonIcon from './MoreButton'
import { useEffect, useState } from 'react'
import SegmentProductCard from './SegmentProductCard'
import { CampaignProps } from '@/models/campaignList'
import useNavigateWithOrderParam from '@/hooks/useMoreButton'

const ProductCardContainer = ({ popularityData }: any) => {
  const [desktop, setDesktop] = useState(false)
  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' })
  const navigatePremium = useNavigateWithOrderParam('point')

  useEffect(() => {
    if (isMobile) {
      setDesktop(false)
    } else {
      setDesktop(true)
    }
    return () => {}
  }, [isMobile])

  // 웹 크기에서 8개 노출, 모바일 4개 노출
  const visibleCards = desktop ? 8 : 4

  return (
    <>
      <div className="mx-auto flex max-w-[1400px] flex-col">
        <section className="mb-[16px] flex justify-between lg:mb-[20px]">
          <p className="text-heading-5 font-[700] lg:text-[22px]">
            인기 체험단 ⭐
          </p>
          <button onClick={navigatePremium}>
            <MoreButtonIcon />
          </button>
        </section>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-10">
          {popularityData.slice(0, visibleCards).map((data: CampaignProps) => (
            <SegmentProductCard
              data={data}
              key={data.seq}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default ProductCardContainer
