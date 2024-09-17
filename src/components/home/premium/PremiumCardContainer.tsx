'use client'

import { useMediaQuery } from 'react-responsive'
import PremiumCard from './PremiumCard'
import MoreButton from '../product/MoreButton'
import { useEffect, useState } from 'react'

const PremiumCardContainer = () => {
  const [desktop, setDesktop] = useState(false)
  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' })

  useEffect(() => {
    if (isMobile) {
      setDesktop(false)
    } else {
      setDesktop(true)
    }
    return () => {}
  }, [isMobile])

  const premiumProducts = Array(4).fill(null)

  // 웹 크기에서 3개 노출, 모바일 4개 노출
  const visibleCards = desktop ? 3 : 4

  return (
    <>
      <div className="mx-auto mt-[24px] flex max-w-[1400px] flex-col lg:mt-[64px]">
        <section className="mb-[16px] flex justify-between lg:mb-[36px]">
          <p className="text-heading-5 font-bold lg:text-[22px] lg:leading-[25.2px]">
            프리미엄 체험단 👑
          </p>
          <MoreButton />
        </section>
        <div className="grid grid-cols-2 gap-x-4 gap-y-[22px] lg:grid-cols-3">
          {/* 실제 데이터를 받으면 slice(numOfCards)로 변경할 예정 */}
          {premiumProducts.slice(0, visibleCards).map((_, index) => (
            <PremiumCard
              flag="premium"
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default PremiumCardContainer
