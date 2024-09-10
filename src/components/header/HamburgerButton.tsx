'use client'

import { useHamburgerModalStore } from '@/store'
import MobileMenu from '@/assets/icons/home/mobile/mobile-menu.svg'

const HamburgerButton = () => {
  const { HamburderOpenModal } = useHamburgerModalStore()
  return (
    <button onClick={HamburderOpenModal}>
      <MobileMenu />
    </button>
  )
}

export default HamburgerButton
