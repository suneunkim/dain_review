'use client'

import PremiumPick from '@/components/home/banner/PremiumPick'
import SlideBanner from '@/components/home/banner/SlideBanner'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import TopButton from '@/components/shared/TopButton'
import PremiumCardContainer from '@/components/home/premium/PremiumCardContainer'
import ProductCardContainer from '@/components/home/product/ProductCardContainer'
import DeadlineProductContainer from '@/components/home/deadline/DeadlineProductContainer'
import SearchModal from '../modal/search-modal/SearchModal'
import { useSearchModalStore, useHamburgerModalStore } from '@/store'
import NearByProductContainer from '../home/near/NearByProductContainer'
import HamburgerMenuModal from '../modal/hamburger-modal/HamburgerMenuModal'

export default function HomeClient() {
  const { isOpen } = useSearchModalStore()
  const { isHamburgerOpen } = useHamburgerModalStore()

  return (
    <div className="relative">
      <Header isLogin={false} />
      <main className="mx-auto w-full">
        <div className="relative h-[220px] min-w-[360px] bg-[url('/home-banner/background.png')] bg-cover bg-center lg:h-[592px]">
          <SlideBanner />
        </div>
        {/* 체험단 */}
        <section className="flex flex-col gap-[48px] lg:gap-[80px]">
          <PremiumCardContainer />
          <NearByProductContainer
            isLogin={true}
            isAddressSet={false}
          />
          <ProductCardContainer />
          <PremiumPick />
        </section>
        <DeadlineProductContainer />
        <img
          src="home-banner/contact-us.png"
          className="mb-[74px] size-full sm:hidden"
        />
        <TopButton />
        <Footer />
      </main>
      {isOpen && <SearchModal />}
      {isHamburgerOpen && (
        <div className="lg:hidden">
          <HamburgerMenuModal />
        </div>
      )}
    </div>
  )
}
