'use client'

import UserMenu from '../header/UserMenu'
import GuestMenu from '../header/GuestMenu'
import Notification from '../header/Notification'
import MobileSubtitleHeader from '../header/mobile/MobileSubtitleHeader'
import SearchButton from '../header/SearchButton'
import BackButton from '../header/BackButton'
import { useSearchModalStore } from '@/store'
import LogoIconBlack from '@/assets/icons/home/logo-icon-black.svg'
import MobileMenu from '@/assets/icons/home/mobile/mobile-menu.svg'
import Link from 'next/link'
interface Props {
  isLogin: boolean
  subtitle?: string
  isOnlyBackButton?: boolean
}

const Header = ({ isLogin, subtitle, isOnlyBackButton = false }: Props) => {
  const { openModal } = useSearchModalStore()
  return (
    <header className="mx-auto h-[56px] max-w-[1400px] bg-white px-4 md:bg-inherit lg:h-[160px] desktop:p-0">
      {/* 모바일 반응형 헤더 - 비로그인 시 UI & 다른 페이지랑 아이콘 위치가 달라서 디자인 팀 확인 필요*/}
      {subtitle ? (
        <MobileSubtitleHeader subtitle={subtitle} />
      ) : (
        <div className="flex h-full items-center justify-between lg:hidden">
          {isOnlyBackButton ? <BackButton /> : <MobileMenu />}

          {!isOnlyBackButton && (
            <div className="flex items-center gap-4">
              <SearchButton />
              <Notification noti={3} />
            </div>
          )}
        </div>
      )}

      {/* 웹 반응형 헤더 - lg(1024px) 사이즈 이상 노출 */}
      <section className="hidden h-[80px] items-center justify-between lg:flex">
        <Link href="/">
          <LogoIconBlack />
        </Link>
        <div className="flex items-center gap-[18px]">
          {isLogin ? <UserMenu noti={3} /> : <GuestMenu />}
        </div>
      </section>
      <section>
        <ul className="hidden h-[80px] items-center gap-[56px] text-[16px] font-[700] leading-[22.4px] text-black lg:flex">
          <Link href="/campaign">
            <li>체험단</li>
          </Link>
          <li>이용안내</li>
          <li>게시판</li>
          <li>포인트</li>
        </ul>
      </section>
    </header>
  )
}

export default Header
