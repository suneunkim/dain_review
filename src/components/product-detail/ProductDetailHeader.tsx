import ShareIcon from '@/assets/icons/product-detail/share.svg'
import BackIcon from '@/assets/icons/product-detail/back-button.svg'

const ProductDetailHeader = () => {
  return (
    <header className="flex min-h-[56px] items-center justify-between bg-white px-4 lg:hidden">
      <BackIcon />
      <ShareIcon />
    </header>
  )
}

export default ProductDetailHeader
