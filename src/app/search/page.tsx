import SearchClient from '@/components/client-page/SearchClient'
import Header from '@/components/shared/Header'

const page = () => {
  return (
    <div>
      {/* 웹 반응형 헤더 - 프로필 표시 */}
      <div className="hidden lg:block">
        <Header isLogin />
      </div>
      {/* 모바일 반응형 헤더 - 뒤로 가기 버튼과 제목만 표시 */}
      <div className="lg:hidden">
        <Header
          subtitle="체험단"
          isLogin
        />
      </div>
      <SearchClient />
    </div>
  )
}

export default page
