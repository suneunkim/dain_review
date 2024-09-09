import Header from '@/components/shared/Header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      {/* 헤더 완성시 root layout으로 교체 */}
      <Header isLogin={false} />
      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  )
}
