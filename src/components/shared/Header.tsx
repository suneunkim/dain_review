'use client'

import UserMenu from '../header/UserMenu'
import GuestMenu from '../header/GuestMenu'
import Notification from '../header/Notification'
import LogoIconBlack from '@/assets/icons/home/logo-icon-black.svg'
import MobileMenu from '@/assets/icons/home/mobile/mobile-menu.svg'
import MobileSubtitleHeader from '../header/mobile/MobileSubtitleHeader'
import { useSearchModalStore } from '@/store'
import SearchButton from '../header/SearchButton'

interface Props {
  isLogin: boolean
  subtitle?: string
}

const Header = ({ isLogin, subtitle }: Props) => {
  const { openModal } = useSearchModalStore()
  return (
    <header className="mx-auto h-[56px] max-w-[1400px] bg-white px-4 md:bg-inherit lg:h-[160px] desktop:p-0">
      {/* 모바일 반응형 헤더 - 비로그인 시 UI & 다른 페이지랑 아이콘 위치가 달라서 디자인 팀 확인 필요*/}
      {subtitle ? (
        <MobileSubtitleHeader subtitle={subtitle} />
      ) : (
        <div className="flex h-full items-center justify-between lg:hidden">
          <MobileMenu />
          <div className="flex items-center gap-4">
            <SearchButton />
            <Notification noti={3} />
          </div>
        </div>
      )}

      {/* 웹 반응형 헤더 - lg(1024px) 사이즈 이상 노출 */}
      <section className="hidden h-[80px] items-center justify-between lg:flex">
        <LogoIconBlack />
        <div className="flex items-center gap-[18px]">
          {isLogin ? <UserMenu noti={3} /> : <GuestMenu />}
        </div>
      </section>
      <section>
        <ul className="hidden h-[80px] items-center gap-[56px] text-[16px] font-[700] leading-[22.4px] text-black lg:flex">
          <li>체험단</li>
          <li>이용안내</li>
          <li>게시판</li>
          <li>포인트</li>
        </ul>
      </section>
    </header>
  )
}

export default Header
