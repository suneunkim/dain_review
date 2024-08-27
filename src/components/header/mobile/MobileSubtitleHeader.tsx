'use client'
import MobileMoreLeft from '@/assets/icons/home/mobile/mobile-more-left.svg'
import { useRouter } from 'next/navigation'

const MobileSubtitleHeader = ({ subtitle }: { subtitle: string }) => {
  const router = useRouter()

  const handleClick = () => {
    router.back
  }
  return (
    <div className="flex h-full items-center justify-between lg:hidden">
      <button onClick={handleClick}>
        <MobileMoreLeft />
      </button>
      <div className="flex items-center gap-4">
        <p className="text-body-1 font-bold">{subtitle}</p>
      </div>
      <div className="w-3"></div>
    </div>
  )
}

export default MobileSubtitleHeader
