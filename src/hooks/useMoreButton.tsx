'use client'

import { useRouter } from 'next/navigation'

const useNavigateWithOrderParam = (orderParam: any) => {
  const router = useRouter()

  const navigateToSearch = () => {
    router.push(`/campaign?orderParam=${orderParam}`)
  }

  return navigateToSearch
}

export default useNavigateWithOrderParam
