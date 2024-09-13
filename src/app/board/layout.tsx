import Header from '@/components/shared/Header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header isLogin={false} />
      <div>{children}</div>
    </div>
  )
}
