import ProductDetailHeader from '@/components/product-detail/ProductDetailHeader'
import Flag from '@/components/home/product/Flag'
import DesktopLayout from '@/components/product-detail/DesktopLayout'
import MobileLayout from '../product-detail/MobileLayout'
import Footer from '@/components/shared/Footer'

const ProductDetailClient = () => {
  return (
    <>
      {/* 공통 제품 상세 헤더 및 이미지 */}
      <ProductDetailHeader />
      <div className="relative mx-auto w-full max-w-[1400px]">
        <div className="min-h-[184px] bg-gray-300 520:h-[240px] lg:h-[464px]" />
        <Flag
          flag="premium"
          page="detail"
        />
      </div>
      {/* 웹 반응형 레이아웃 */}
      <div className="hidden lg:block">
        <DesktopLayout />
      </div>
      {/* 모바일 반응형 레이아웃 */}
      <div className="lg:hidden">
        <MobileLayout />
      </div>
      {/* 웹 반응형 푸터 */}
      <div className="hidden lg:block">
        <Footer />
      </div>
    </>
  )
}

export default ProductDetailClient
