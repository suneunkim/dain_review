'use client'

import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import MoreButton from './MoreButton'

const ProductCardContainer = () => {
  const [mobileShow, setMobileShow] = useState(false) // 화면 너비 작으면 인기 4개만 노출
  const popularProducts = Array(8).fill(null)

  useEffect(() => {
    const updateNumOfCards = () => {
      if (window.innerWidth >= 1024) {
        setMobileShow(false) // 1024px 이상에서는 모든 카드 노출
      } else {
        setMobileShow(true) // 모바일 화면에서는 기본적으로 4개만 노출
      }
    }

    // 컴포넌트가 마운트될 때 및 윈도우 크기 변화 감지
    updateNumOfCards()
    window.addEventListener('resize', updateNumOfCards)

    // 컴포넌트 언마운트 시 이벤트 리스너 해제
    return () => {
      window.removeEventListener('resize', updateNumOfCards)
    }
  }, [])

  const displayedProducts = mobileShow
    ? popularProducts.splice(0, 4)
    : popularProducts

  return (
    <>
      <div className="mx-auto flex max-w-[1400px] flex-col">
        <section className="mb-[16px] flex justify-between lg:mb-[20px]">
          <p className="text-heading-5 font-[700] lg:text-[22px]">
            인기 체험단 ⭐
          </p>
          <MoreButton />
        </section>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-10">
          {displayedProducts?.map((_, i) => (
            <ProductCard
              flag={null}
              key={i}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default ProductCardContainer
