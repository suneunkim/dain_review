import MoreArrow from '@/assets/icons/home/more-right-arrow.svg'
import MobileMoreIcon from '@/assets/icons/home/mobile/mobile-more-right.svg'
import DeadlineProductCard from './DeadlineProductCard'

interface DeadlineBoxProps {
  title: '마감임박 🚨' | '신규 체험단 🐤'
  data?: any
  type: 'latest' | 'deadline'
}

const DeadlineProductBox = ({ title, data, type }: DeadlineBoxProps) => {
  return (
    <div className="min-w-[328px] lg:h-[715px] lg:w-[37vw] lg:min-w-[422px] desktop:w-[580px]">
      <div className="mb-4 flex justify-between">
        <p className="text-heading-5 font-[700] text-gray-90 lg:text-heading-3">
          {title}
        </p>
        <p className="flex items-center gap-[2px] text-sm font-[400] text-gray-70">
          <span className="hidden lg:flex lg:items-center lg:gap-[6px]">
            더보기
            <MoreArrow />
          </span>
          <span className="lg:hidden">
            <MobileMoreIcon />
          </span>
        </p>
      </div>
      <div className="my-5 hidden border border-line-normal lg:block" />
      <div className="flex flex-col gap-6">
        {data.map((item: any, index: number) => (
          <DeadlineProductCard
            key={index}
            data={item}
            type={type}
          />
        ))}
      </div>
    </div>
  )
}

export default DeadlineProductBox
