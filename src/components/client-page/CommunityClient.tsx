'use client'

import { useRouter } from 'next/navigation'
import SearchBar, { SearchBarType } from '../board/community/SearchBar'
import Link from 'next/link'
import CommunityListItem from '../board/community/CommunityListItem'

export interface PostProps {
  seq: number
  postType: string // 질문, 노하우 등
  title: string
  contents: string
  username: string
  registeredAt: string
  viewCount: number
  commentCount: number
}

const CommunityClient = ({ data }: { data: PostProps[] }) => {
  const router = useRouter()

  const onSubmit = ({
    searchWord,
    searchType,
    influencerSearchPostType
  }: SearchBarType) => {
    const queryParams = new URLSearchParams()

    if (searchWord) queryParams.append('searchWord', searchWord)
    if (searchType) queryParams.append('searchType', searchType)
    if (influencerSearchPostType)
      queryParams.append('influencerSearchPostType', influencerSearchPostType)

    const queryString = queryParams.toString()

    router.push(`/board/community?${queryString}`)
  }

  return (
    <div>
      {/* 모바일 ~ 1023 px까지 SearchBar 가운데 정렬을 위한 분리 */}
      <section>
        <div className="flex justify-center lg:hidden">
          <SearchBar onSubmit={onSubmit} />
        </div>

        <div className="hidden lg:block">
          <SearchBar onSubmit={onSubmit} />
        </div>
      </section>

      <section className="mt-[9px] px-2 py-3 lg:px-[30px] lg:py-6">
        {data.map((item: PostProps) => (
          <Link
            href={`/board/community/${item.seq}`}
            key={item.seq}>
            <CommunityListItem data={item} />
          </Link>
        ))}
        {data.length === 0 && <p>게시글이 없습니다.</p>}
      </section>
    </div>
  )
}

export default CommunityClient
