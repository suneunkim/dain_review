import BoardLayout from '@/components/board/BoardLayout'
import BoardListItem from '@/components/board/BoardListItem'
import Link from 'next/link'

const page = () => {
  return (
    <div className="mx-auto max-w-[1400px]">
      {/* 모바일 레이아웃 */}
      <div className="lg:hidden">
        <BoardLayout
          isMobile
          currentTab="커뮤니티">
          <div className="px-2 pb-[14px] pt-[10px]"></div>
        </BoardLayout>
      </div>

      {/* 데스크탑 레이아웃 */}
      <div className="hidden lg:block">
        <BoardLayout currentTab="커뮤니티">
          <div className="mt-[24px] max-w-[1085px] border px-[30px] py-6"></div>
        </BoardLayout>
      </div>
    </div>
  )
}

export default page
