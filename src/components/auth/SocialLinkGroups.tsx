import React from 'react'

import NaverLogin from '@/assets/icons/auth/NaverLogin.svg'
import KakaoLogin from '@/assets/icons/auth/KakaoLogin.svg'
import GoogleLogin from '@/assets/icons/auth/GoogleLogin.svg'

import Link from 'next/link'
import Text, { weightClasses } from '../shared/Text'

export const SocialLinkGroups = ({
  border,
  color,
  weight
}: {
  border: boolean
  color: boolean
  weight: keyof typeof weightClasses
}) => {
  return (
    <>
      <Link
        href={'/sign-up'}
        className={`flex h-[46px] w-full items-center justify-center gap-2 ${border && `border-2`} ${color ? `bg-[#03CF5D]` : `bg-white`} max-lg:sr-only`}>
        <NaverLogin />

        <Text
          color="black"
          size="t5"
          weight={weight}>
          네이버로 로그인
        </Text>
      </Link>
      <Link
        href={'/sign-up'}
        className={`flex h-[46px] w-full items-center justify-center gap-2 ${border && `border-2`} ${color ? `bg-[#FFE812]` : `bg-white`} max-lg:sr-only`}>
        <KakaoLogin />

        <Text
          color="black"
          size="t5"
          weight={weight}>
          카카오로 로그인
        </Text>
      </Link>
      <Link
        href={'/sign-up'}
        className={`flex h-[46px] w-full items-center justify-center gap-2 ${border && `border-2`} ${color ? `bg-[#F0F1F2]` : `bg-white`} max-lg:sr-only`}>
        <GoogleLogin />

        <Text
          color="black"
          size="t5"
          weight={weight}>
          구글로 로그인
        </Text>
      </Link>
    </>
  )
}
