import CommunityDetail from '@/components/board/community/CommunityDetail'
import BoardLayout from './../../../../components/board/BoardLayout'

const data = {
  category: '질문하기',
  title: '체험단 취소는 어떻게 하나요?',
  content:
    '체험단 하면서 목과 어깨가 너무 안좋아져서 이제 살려고 당첨된거 취소할려고 하는데 취소 버튼이 안보이네요 취소는 어디서 하면 될까요?',
  author: '닉네임',
  createdDate: '2024.07.26',
  viewCount: 15
}

const page = ({ params }: { params: { communityId: string } }) => {
  return (
    <div className="mx-auto max-w-[1400px]">
      {/* 모바일 레이아웃*/}
      <div className="mx-auto max-w-[1023px] px-4 py-5 lg:hidden">
        <h3 className="mb-4 text-heading-5 font-bold text-gray-90">커뮤니티</h3>
        <CommunityDetail data={data} />
      </div>

      {/* 데스크탑 레이아웃 */}
      <div className="hidden lg:block">
        <BoardLayout currentTab="커뮤니티">
          <div className="mt-[24px] max-w-[1065px]">
            <CommunityDetail data={data} />
          </div>
        </BoardLayout>
      </div>
    </div>
  )
}

export default page
