export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="mb-[50px] h-[160px] max-sm:sr-only">헤더</header>
      <div className="flex w-dvw flex-row justify-center">{children}</div>
    </div>
  )
}
