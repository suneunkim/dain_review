import TextFiledForm from '../apply/TextFiledForm'
import ReviewType from '../home/product/ReviewType'
import ButtonAndInfo from '../product-detail/elements/ButtonAndInfo'
import CoinIcon from '@/assets/icons/product-detail/coin.svg'
import Schedule from '../product-detail/elements/Schedule'

interface Props {
  id: string
}
const ApplyClient = ({ id }: Props) => {
  return (
    <div className="max-[1400px] mx-auto flex h-full flex-col px-4 py-5 desktop:flex-row desktop:justify-center desktop:gap-10">
      <div className="flex-1 desktop:flex-none">
        <TextFiledForm />
      </div>
      {/* 웹 반응형 노출 */}
      <div className="hidden h-[766px] w-[405px] bg-gray-5 px-6 pt-6 desktop:block">
        <div className="flex flex-col gap-4">
          <div className="min-h-[248px] rounded bg-gray-300" />
          <h3 className="mt-2 text-heading-2 font-bold">
            다인카페 체험단 모집합니다.
          </h3>
          <p className="text-gray-80">
            음료 메뉴 2잔 + 디저트 메뉴 1종 (선택 가능) + 애견 동반 입장료
            무료(매너벨트 1개 포함)
          </p>
          <div className="flex h-[58px] gap-4 border-b border-t py-4">
            <div className="flex gap-[2px]">
              <CoinIcon />
              <span className="text-body-2 font-bold text-gray-70">
                100,000P
              </span>
            </div>
            <ReviewType
              snsType="naver"
              detailPage
            />
          </div>
          <Schedule />
        </div>
        <div className="mt-[66px]">
          <ButtonAndInfo productId={id} />
        </div>
      </div>
      {/* 모바일 반응형 노출 버튼 */}
      <div className="mx-auto flex min-w-[328px] max-w-[328px] desktop:hidden">
        <ButtonAndInfo productId={id} />
      </div>
    </div>
  )
}

export default ApplyClient
