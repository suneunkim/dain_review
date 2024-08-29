import ApplyClient from '@/components/client-page/ApplyClient'
import Header from '@/components/shared/Header'

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div className="mx-auto w-full min-w-[360px]">
      <Header
        isLogin
        isBackButton
      />
      <div className="h-[calc(100vh-56px)] lg:h-[calc(100vh-160px)]">
        <ApplyClient id={params.id} />
      </div>
    </div>
  )
}

export default page
