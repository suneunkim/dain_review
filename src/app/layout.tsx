import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

const pretendard = Inter({
  subsets: ['latin'],
  weight: ['400', '600'], // 필요한 폰트 두께 선택
  display: 'swap',
  variable: '--font-pretendard', // CSS 변수로 설정
});

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
    <html lang="en" className={pretendard.variable}>
      <body>{children}</body>
    </html>
  )
}
