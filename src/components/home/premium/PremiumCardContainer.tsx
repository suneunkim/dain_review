'use client'

import { useMediaQuery } from 'react-responsive'
import MoreButtonIcon from '../product/MoreButton'
import { useEffect, useState } from 'react'
import SegmentProductCard from '../product/SegmentProductCard'
import { CampaignProps } from '@/models/campaignList'
import useNavigateWithOrderParam from '@/hooks/useMoreButton'

const PremiumCardContainer = ({ premiumData }: any) => {
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

  // 웹 크기에서 3개 노출, 모바일 4개 노출
  const visibleCards = desktop ? 3 : 4

  return (
    <>
      <div className="mx-auto mt-[24px] flex max-w-[1400px] flex-col lg:mt-[64px]">
        <section className="mb-[16px] flex justify-between lg:mb-[36px]">
          <p className="text-heading-5 font-bold lg:text-[22px] lg:leading-[25.2px]">
            프리미엄 체험단 👑
          </p>
          <button onClick={navigatePremium}>
            <MoreButtonIcon />
          </button>
        </section>
        <div className="grid grid-cols-2 gap-x-4 gap-y-[22px] lg:grid-cols-3">
          {premiumData?.slice(0, visibleCards).map((data: CampaignProps) => (
            <SegmentProductCard
              data={data}
              key={data.seq}
              isPremiumContainer
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default PremiumCardContainer
