'use client'

import { useEffect, useState } from 'react'
import PremiumCard from './PremiumCard'
import MoreButton from '../product/MoreButton'

const PremiumCardContainer = () => {
  const [numOfCards, setNumOfCards] = useState(4)

  useEffect(() => {
    const updateNumOfCards = () => {
      if (window.innerWidth >= 1024) {
        setNumOfCards(3) // 1024px 이상에서는 3개의 카드만 보여줌
      } else {
        setNumOfCards(4) // 1024px 미만에서는 4개의 카드 보여줌
      }
    }

    updateNumOfCards() // 컴포넌트가 마운트될 때 실행
    window.addEventListener('resize', updateNumOfCards) // 윈도우 크기 변화 감지

    return () => {
      window.removeEventListener('resize', updateNumOfCards)
    }
  }, [])

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
          {Array(numOfCards)
            .fill(null)
            .map((_, index) => (
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
