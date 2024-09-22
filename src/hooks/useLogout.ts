'use client'

import { useUserStore } from '@/store'
import { useRouter } from 'next/navigation'

const useLogout = () => {
  const clearUser = useUserStore(state => state.clearUser)
  const router = useRouter()

  const handleLogout = () => {
    // 로컬 스토리지에서 토큰 삭제
    localStorage.removeItem('token')

    // 전역 상태 초기화
    clearUser()

    router.push('/')
  }
  return handleLogout
}

export default useLogout
