export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      {/* 헤더 완성시 root layout으로 교체 */}
      <header className="h-[160px] border-b-2 max-sm:sr-only">헤더</header>
      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  )
}
