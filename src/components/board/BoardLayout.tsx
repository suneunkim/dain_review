import Link from 'next/link'
import React from 'react'

interface Props {
  isMobile?: boolean
  children: React.ReactNode
  currentTab: '공지사항' | '커뮤니티' | '맞팔 / 서이추'
}
const BoardLayout = ({ isMobile = false, children, currentTab }: Props) => {
  const isNoticeTab = currentTab === '공지사항'
  const isCommunityTab = currentTab === '커뮤니티'
  const isFollowTab = currentTab === '맞팔 / 서이추'

  if (isMobile) {
    return (
      <div className="mx-auto max-w-[1023px]">
        <section className="p-5">
          <h2 className="text-center text-heading-2 font-bold">게시판</h2>
          <div className="mx-auto mt-[29px] flex w-[303px] text-heading-5">
            <Link href="/board">
              <h3
                className={`border-b px-[19px] py-[5px] ${isNoticeTab && 'border-b border-gray-90 font-bold'} `}>
                공지사항
              </h3>
            </Link>
            <Link href="/board/community">
              <h3
                className={`border-b px-[19px] py-[5px] ${isCommunityTab && 'border-gray-90 font-bold'} `}>
                커뮤니티
              </h3>
            </Link>
            <h3
              className={`border-b px-[8px] py-[5px] ${isFollowTab && 'border-gray-90 font-bold'}`}>
              맞팔/서이추
            </h3>
          </div>
        </section>
        <section className="px-4 py-5">{children}</section>
      </div>
    )
  } else {
    // 데스크탑 레이아웃
    return (
      <div className="mx-auto flex max-w-[1400px] gap-5 px-4">
        <section className="w-[247px] py-10">
          <ul className="w-[247px] text-body-1 text-gray-90">
            <li className="flex h-[66px] min-w-[199px] items-center border-b px-[10px] text-heading-5 font-bold">
              게시판
            </li>
            <Link href="/board">
              <li
                className={`flex h-[66px] items-center px-[10px] ${isNoticeTab && 'font-bold'}`}>
                공지사항
              </li>
            </Link>
            <Link href="/board/community">
              <li
                className={`flex h-[66px] items-center px-[10px] ${isCommunityTab && 'font-bold'}`}>
                커뮤니티
              </li>
            </Link>
            <li
              className={`flex h-[66px] items-center px-[10px] ${isFollowTab && 'font-bold'}`}>
              맞팔 / 서이추
            </li>
          </ul>
        </section>
        <section className="w-full py-10">
          <h3 className="text-display-2 font-bold">게시판</h3>
          <div className="mt-14 flex items-end gap-[10px]">
            <h4 className="text-heading-2 font-bold">{currentTab}</h4>
            {!isNoticeTab && (
              <p className="text-heading-5 text-gray-60">
                자유롭게 이야기를 나눠보세요~
              </p>
            )}
          </div>
          {children}
        </section>
      </div>
    )
  }
}

export default BoardLayout
