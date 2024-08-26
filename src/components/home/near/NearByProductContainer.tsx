import MoreButton from '../product/MoreButton'
import ProductCard from '../product/ProductCard'
import AddressRequired from './AddressRequired'
import LoginRequired from './LoginRequired'

interface Props {
  isLogin: boolean
  isAddressSet: boolean
}

const NearByProductContainer = ({ isLogin, isAddressSet }: Props) => {
  const nearbyProducts = Array(4).fill(null)

  if (!isLogin) {
    return <LoginRequired />
  }

  return (
    <>
      <div className="mx-auto flex max-w-[1400px] flex-col">
        <section className="mb-[16px] flex justify-between lg:mb-[20px]">
          <p className="text-heading-5 font-[700] lg:text-[22px]">내 주변 👣</p>
          <MoreButton />
        </section>
        {!isAddressSet ? (
          <AddressRequired />
        ) : (
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-10">
            {nearbyProducts?.map((_, i) => (
              <ProductCard
                flag={null}
                key={i}
              />
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default NearByProductContainer
