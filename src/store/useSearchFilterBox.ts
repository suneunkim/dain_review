'use client'
import { create } from 'zustand'

interface ModalState {
  isLocationModalOpen: boolean
  isFilterModalOpen: boolean

  openLocationModal: () => void
  closeLocationModal: () => void

  openFilterModal: () => void
  closeFilterModal: () => void
}

export const useSearchFilterBoxStore = create<ModalState>(set => ({
  isLocationModalOpen: false,
  isFilterModalOpen: false,

  openLocationModal: () => set({ isLocationModalOpen: true }),
  closeLocationModal: () => set({ isLocationModalOpen: false }),

  openFilterModal: () => set({ isFilterModalOpen: true }),
  closeFilterModal: () => set({ isFilterModalOpen: false })
}))
