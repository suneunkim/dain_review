import DesktopBoard from '@/components/board/DesktopBoard'
import MobilleBoard from '@/components/board/MobilleBoard'

const mockdata = {
  id: '1',
  type: '공지',
  title: '포인트 환급 기준 변경',
  description:
    '안녕하세요 다인리뷰입니다. 소득세법 제86조 개정에 따라 2024년 7월 1일부터 사업소득에 대한 소액부징수를 적용하지 않게 되었습니다. 이에 따라 기존 포인트 환급 신청 시 33,333원 이상의 건에 대하여만 소득세를 납부하였으나, 2024년 6월 27일부터 신청하시는 모든 환급 신청 건에 대하여 소득세가 납부되오니 참고 부탁 드립니다.',
  author: '관리자',
  date: '2024.07.26',
  views: 15
}

const page = () => {
  return (
    <div className="mx-auto max-w-[1400px]">
      <div className="lg:hidden">
        <MobilleBoard data={mockdata} />
      </div>

      <div className="hidden lg:block">
        <DesktopBoard data={mockdata} />
      </div>
    </div>
  )
}

export default page
