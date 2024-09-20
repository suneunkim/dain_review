import BoardDetail from '@/components/board/BoardDetail'
import BoardLayout from '@/components/board/BoardLayout'

const data = {
  title: '포인트 환급 기준 변경',
  content:
    '안녕하세요 다인리뷰입니다. 소득세법 제86조 개정에 따라 2024년 7월 1일부터 사업소득에 대한 소액부징수를 적용하지 않게 되었습니다. 이에 따라 기존 포인트 환급 신청 시 33,333원 이상의 건에 대하여만 소득세를 납부하였으나, 2024년 6월 27일부터 신청하시는 모든 환급 신청 건에 대하여 소득세가 납부되오니 참고 부탁 드립니다.',
  author: '관리자',
  createdDate: '2024.07.26',
  viewCount: 15
}

const page = ({ params }: { params: { noticeId: string } }) => {
  return (
    <div className="mx-auto max-w-[1400px]">
      {/* 모바일 레이아웃*/}
      <div className="mx-auto max-w-[1023px] px-4 py-5 lg:hidden">
        <h3 className="mb-4 text-heading-5 font-bold text-gray-90">공지</h3>
        <BoardDetail data={data} />
      </div>

      {/* 데스크탑 레이아웃 */}
      <div className="hidden lg:block">
        <BoardLayout currentTab="공지사항">
          <div className="mt-[24px] max-w-[1065px]">
            <BoardDetail data={data} />
          </div>
        </BoardLayout>
      </div>
    </div>
  )
}

export default page
