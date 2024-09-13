import BoardLayout from '@/components/board/BoardLayout'
import { SearchBarType } from '@/components/board/community/SearchBar'
import CommunityClient from '@/components/client-page/CommunityClient'

const data = {
  communityId: '1',
  category: '질문하기',
  title: '체험단 취소는 어떻게 하나요?',
  content:
    '체험단 하면서 목과 어깨가 너무 안좋아져서 이제 살려고 당첨된거 취소할려고 하는데 취소 버튼이 안보이네요 취소는 어디서 하면 될까요?',
  author: '닉네임',
  createdDate: '2024.07.26',
  viewCount: 15,
  commentCount: 10
}

const page = ({ searchParams }: { searchParams: SearchBarType }) => {
  const { searchWord, searchType, category } = searchParams

  return (
    <div className="mx-auto max-w-[1440px]">
      {/* 모바일 레이아웃 */}
      <div className="lg:hidden">
        <BoardLayout
          isMobile
          currentTab="커뮤니티">
          <CommunityClient data={data} />
        </BoardLayout>
      </div>

      {/* 데스크탑 레이아웃 */}
      <div className="hidden px-5 lg:block">
        <BoardLayout currentTab="커뮤니티">
          <div className="mt-[24px] w-[708px] py-6 desktop:w-[1085px]">
            <CommunityClient data={data} />
          </div>
        </BoardLayout>
      </div>
    </div>
  )
}

export default page
