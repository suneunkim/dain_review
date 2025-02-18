'use client'
import { create } from 'zustand'

interface ModalState {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

export const useSearchModalStore = create<ModalState>(set => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false })
}))
