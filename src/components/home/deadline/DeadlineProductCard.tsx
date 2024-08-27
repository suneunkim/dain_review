import ReviewType from '../product/ReviewType'

const DeadlineProductCard = () => {
  return (
    <div className="flex h-[104px] min-w-[320px] gap-2 md:w-[94.5vw] lg:h-[144px] lg:w-full lg:max-w-[580px] lg:gap-4">
      <div className="aspect-square min-w-[104px] overflow-hidden rounded-md bg-gray-300 lg:min-w-[144px]" />
      <div className="flex w-full flex-col justify-between gap-1 lg:gap-2">
        <div>
          <p className="text-caption-2 font-bold text-red-main lg:text-body-1">
            오늘 자정 마감
          </p>
          <p className="text-body-2 font-bold lg:text-heading-5">
            하이브리드 카메라 신제품 체험단
          </p>
          <p className="text-caption-1 font-medium text-gray-60 lg:text-body-2">
            폴라로이드 신제품
          </p>
        </div>
        <div className="text-caption-2 text-gray-60 lg:text-body-2">재택</div>
        <div className="flex w-full justify-between">
          <ReviewType
            snsType="naver"
            labelType="배송형"
          />
          <div>
            <span className="text-caption-2 font-bold text-gray-80 lg:text-body-1">
              10,235명 <span className="text-gray-60"> / 1명</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeadlineProductCard
