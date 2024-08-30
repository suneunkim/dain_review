import React from 'react'
import Link from 'next/link'

import NaverMobileLogin from '@/assets/icons/auth/NaverMobileLogin.svg'
import KakaoMobileLogin from '@/assets/icons/auth/KakaoMobileLogin.svg'
import GoogleMobileLogin from '@/assets/icons/auth/GoogleMobileLogin.svg'

export const SocialLinkMobileGroups = () => {
  return (
    <>
      <Link
        href={'/'}
        className="lg:sr-only">
        <NaverMobileLogin />
      </Link>
      <Link
        href={'/'}
        className="lg:sr-only">
        <KakaoMobileLogin />
      </Link>
      <Link
        href={'/'}
        className="lg:sr-only">
        <GoogleMobileLogin />
      </Link>
    </>
  )
}
