'use client'
import { create } from 'zustand'

interface ModalState {
  isHamburgerOpen: boolean
  HamburderOpenModal: () => void
  HamburderCloseModal: () => void
}

export const useHamburgerModalStore = create<ModalState>(set => ({
  isHamburgerOpen: false,
  HamburderOpenModal: () => set({ isHamburgerOpen: true }),
  HamburderCloseModal: () => set({ isHamburgerOpen: false })
}))
