import CommunityDetail from '@/components/board/community/CommunityDetail'
import BoardLayout from './../../../../components/board/BoardLayout'
import { fetchCommunityDetail } from '@/lib/communityApi'
import { cookies } from 'next/headers'

const page = async ({ params }: { params: { communityId: string } }) => {
  const id = params.communityId
  const cookieStore = cookies()
  const token = cookieStore.get('token')?.value

  const fetchDetailData = await fetchCommunityDetail({ id, token })

  return (
    <div className="mx-auto max-w-[1400px]">
      {/* 모바일 레이아웃*/}
      <div className="mx-auto max-w-[1023px] px-4 py-5 lg:hidden">
        <h3 className="mb-4 text-heading-5 font-bold text-gray-90">커뮤니티</h3>
        <CommunityDetail
          data={fetchDetailData.data}
          comments={fetchDetailData.data.comments.content}
        />
      </div>

      {/* 데스크탑 레이아웃 */}
      <div className="hidden lg:block">
        <BoardLayout currentTab="커뮤니티">
          <div className="mt-[24px] max-w-[1065px]">
            <CommunityDetail
              data={fetchDetailData.data}
              comments={fetchDetailData.data.comments.content}
            />
          </div>
        </BoardLayout>
      </div>
    </div>
  )
}

export default page
