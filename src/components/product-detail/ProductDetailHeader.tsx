import ShareIcon from '@/assets/icons/product-detail/share.svg'
import BackButton from '../header/BackButton'

const ProductDetailHeader = () => {
  return (
    <header className="flex min-h-[56px] items-center justify-between bg-white px-4 lg:hidden">
      <BackButton />
      <ShareIcon />
    </header>
  )
}

export default ProductDetailHeader
