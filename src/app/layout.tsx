import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import SearchModalHandler from '@/components/shared/SearchModalHandler'

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
    <html lang="en">
      <Script src="https://cdn.iamport.kr/v1/iamport.js" />
      <body>
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar={true}
          closeButton={false}
          newestOnTop={false}
          draggable
          limit={2}
        />
        <SearchModalHandler />
        {children}
      </body>
    </html>
  )
}
