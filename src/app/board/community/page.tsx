import BoardLayout from '@/components/board/BoardLayout'
import CommunityClient from '@/components/client-page/CommunityClient'
import { fetchCommunityList } from '@/lib/communityApi'
import { cookies } from 'next/headers'

type SarchParams = {
  searchWord: string
  searchType: string
  influencerSearchPostType: string
}

const page = async ({ searchParams }: { searchParams: SarchParams }) => {
  const cookieStore = cookies()
  const token = cookieStore.get('token')?.value

  const { searchWord, searchType, influencerSearchPostType } = searchParams

  const fetchData = await fetchCommunityList({
    searchWord,
    searchType,
    influencerSearchPostType,
    token
  })

  return (
    <div className="mx-auto max-w-[1440px]">
      {/* 모바일 레이아웃 */}
      <div className="lg:hidden">
        <BoardLayout
          isMobile
          currentTab="커뮤니티">
          <CommunityClient data={fetchData.data.content} />
        </BoardLayout>
      </div>

      {/* 데스크탑 레이아웃 */}
      <div className="hidden px-5 lg:block">
        <BoardLayout currentTab="커뮤니티">
          <div className="mt-[24px] w-[708px] py-6 desktop:w-[1065px]">
            <CommunityClient data={fetchData.data.content} />
          </div>
        </BoardLayout>
      </div>
    </div>
  )
}

export default page
