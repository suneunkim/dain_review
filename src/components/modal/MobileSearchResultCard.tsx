import ReviewType from '../home/product/ReviewType'

const MobileSearchResultCard = () => {
  return (
    <div className="min-h-[238px] min-w-[156px] max-w-[520px]">
      <div className="max-w-[228px] 520:w-[44vw]">
        <div className="min-h-[117px] w-full bg-gray-300" />
        <div className="flex flex-col">
          <p className="my-1 text-caption-1 text-gray-60">지역 이름</p>
          <p className="text-body-2 font-bold text-gray-90">체험단 명</p>
          <p className="mb-1 mt-[2px] text-caption-1 text-gray-60">
            제공 서비스
          </p>
          <div className="flex border-b border-line-neutral pb-1">
            <ReviewType
              snsType="naver"
              labelType="카테고리"
            />
          </div>
          <div className="mt-1 flex justify-between text-caption-1">
            <div>
              <span className="font-bold text-gray-80">{`0명`}</span>
              <span className="font-medium text-gray-60">{`/ 0명`}</span>
            </div>
            <span className="font-bold text-red-main">0일 남음</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileSearchResultCard
