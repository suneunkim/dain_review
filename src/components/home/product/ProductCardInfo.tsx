import ReviewType from './ReviewType'

const ProductCardInfo = () => {
  let remainingDays = 3 // 예시로 10일 설정

  let textColor = 'text-gray-70'

  if (remainingDays <= 7) {
    textColor = 'text-red-main'
  }

  return (
    <div className="mt-[4px] flex flex-col gap-1 lg:mt-[12px] lg:gap-3">
      <div>
        <p className="text-caption-1 text-gray-60 lg:mb-[4px] lg:text-body-2">
          하이파이브 뷰티
        </p>
        <h4 className="mb-[2px] truncate text-body-2 font-bold text-gray-90 lg:text-heading-5">
          신제품 체험단 모집합니다
        </h4>
        <p className="truncate text-caption-1 text-gray-60 lg:text-body-2">
          스킨케어set
        </p>
      </div>
      <ReviewType
        snsType="instagram"
        labelType="배송형"
      />
      <div className="border border-line-neutral" />
      <div className="flex h-[14px] items-center justify-between text-caption-1 md:h-[22px] lg:text-body-1">
        <div>
          <span className="font-[700] text-gray-80">123명&nbsp;</span>
          <span className="font-[500] text-gray-60">/ 4명</span>
        </div>
        <span className={`font-[700] ${textColor}`}>3일남음</span>
      </div>
    </div>
  )
}

export default ProductCardInfo
