import React from 'react'

import NaverLogin from '@/app/assets/icons/auth/NaverLogin.svg'
import KakaoLogin from '@/app/assets/icons/auth/KakaoLogin.svg'
import GoogleLogin from '@/app/assets/icons/auth/GoogleLogin.svg'

import Link from 'next/link'

export const SocialLinkGroups = () => {
  return (
    <>
      <Link
        href={'/'}
        className="flex h-[46px] w-full items-center justify-center gap-2 border-2 max-lg:sr-only">
        <div className="">
          <NaverLogin />
        </div>
        <p>네이버로 로그인</p>
      </Link>
      <Link
        href={'/'}
        className="flex h-[46px] w-full items-center justify-center gap-2 border-2 max-lg:sr-only">
        <div className="">
          <KakaoLogin />
        </div>
        <p>카카오로 로그인</p>
      </Link>
      <Link
        href={'/'}
        className="flex h-[46px] w-full items-center justify-center gap-2 border-2 max-lg:sr-only">
        <div className="">
          <GoogleLogin />
        </div>
        <p>구글로 로그인</p>
      </Link>
    </>
  )
}
