import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const pretendard = localFont({
  src: './assets/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard'
})

export const metadata: Metadata = {
  title: '다인리뷰',
  description: '인플루언서와 사업주를 위한 플랫폼, 다인리뷰입니다.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={pretendard.variable}>
      <body>{children}</body>
    </html>
  )
}
