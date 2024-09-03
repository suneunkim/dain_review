import Flag from '@/components/home/product/Flag'
import Heart from '@/components/home/product/Heart'
import ProductCardInfo from '@/components/home/product/ProductCardInfo'

const MobileSearchResultCard = () => {
  return (
    <div
      className={`relative min-h-[238px] min-w-[156px] max-w-[456px] 520:h-[354px]`}>
      <div
        className={`min-h-[117px] min-w-[156px] rounded-t-lg bg-gray-300 520:h-[233px]`}
      />
      <ProductCardInfo />
      <Flag flag={null} />
      <Heart />
    </div>
  )
}

export default MobileSearchResultCard
