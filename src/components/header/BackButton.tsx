'use client'
import { useRouter } from 'next/navigation'
import BackIcon from '@/assets/icons/product-detail/back-button.svg'

const BackButton = () => {
  const router = useRouter()

  const handleClick = () => {
    router.back
  }

  return (
    <button onClick={handleClick}>
      <BackIcon />
    </button>
  )
}

export default BackButton
