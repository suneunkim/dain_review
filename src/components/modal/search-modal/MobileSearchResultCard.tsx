import Flag from '@/components/home/product/Flag'
import Heart from '@/components/home/product/Heart'
import ProductCardInfo from '@/components/home/product/ProductCardInfo'

interface Props {
  isSearchPage?: boolean
}

const MobileSearchResultCard = ({ isSearchPage }: Props) => {
  return (
    <div
      className={`relative min-h-[238px] min-w-[156px] max-w-[520px] ${isSearchPage && '520:h-[354px]'} `}>
      {/* w-[44vw] max-w-[240px] 옵션은 웹에서 검색 모달 띄운 상태에서 검색결과와 너비 맞추기 위함이라 추후에 검색 페이지에서 싱크 안맞으면 삭제*/}
      <div
        className={`min-h-[117px] w-[44vw] min-w-[156px] max-w-[240px] rounded-t-lg bg-gray-300 ${isSearchPage && '520:h-[233px]'} `}
      />
      <ProductCardInfo />
      <Flag flag={null} />
      <Heart />
    </div>
  )
}

export default MobileSearchResultCard
