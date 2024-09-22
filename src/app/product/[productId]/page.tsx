import ProductDetailClient from '@/components/client-page/ProductDetailClient'
import Header from '@/components/shared/Header'
import { fetchProductDetail } from '@/lib/api'

const page = async ({ params }: { params: { productId: string } }) => {
  let productDetail
  let errorMessage = ''

  try {
    productDetail = await fetchProductDetail(params.productId)
  } catch (error) {
    errorMessage = '상품 정보를 불러오는 데 실패했습니다. 다시 시도해 주세요.'
  }

  return (
    <main className="mx-auto w-full min-w-[360px]">
      {/* 공통 헤더 - lg 이상에서만 노출 */}
      <div className="hidden lg:block">
        <Header isLogin />
      </div>

      {errorMessage ? (
        <p className="mt-40 text-center">{errorMessage}</p>
      ) : (
        <ProductDetailClient data={productDetail.data} />
      )}
    </main>
  )
}

export default page
