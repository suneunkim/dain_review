import Flag from '../product/Flag'
import Heart from '../product/Heart'
import ProductCardInfo from '../product/ProductCardInfo'

interface Props {
  flag: 'pick' | 'premium' | null
}

const PremiumCard = ({ flag }: Props) => {
  return (
    <article className="relative h-[235px] w-[156px] max-w-[453px] border-red-5 md:h-[354px] md:w-[46.3vw] lg:h-[418px] lg:w-[31vw] desktop:h-[522px] desktop:w-[453px]">
      <div className="h-[117px] overflow-hidden rounded-t-lg bg-gray-300 md:h-[232px] lg:h-[236px] desktop:h-[340px]" />
      <Flag flag={flag} />
      <Heart />
      <ProductCardInfo />
    </article>
  )
}

export default PremiumCard
