import MobileMoreIcon from '@/assets/icons/home/mobile/mobile-more-right.svg'
const MoreButton = () => {
  return (
    <div className="flex items-center">
      <p className="hidden text-[14px] font-[400] leading-[19.6px] text-gray-70 lg:block">
        더보기
      </p>
      <MobileMoreIcon />
    </div>
  )
}

export default MoreButton
