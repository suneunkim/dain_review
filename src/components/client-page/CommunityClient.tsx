'use client'

import { useRouter } from 'next/navigation'
import SearchBar, { SearchBarType } from '../board/community/SearchBar'
import Link from 'next/link'
import BoardListItem, { PostProps } from '../board/BoardListItem'

const CommunityClient = ({ data }: { data: PostProps }) => {
  const router = useRouter()

  const onSubmit = ({ searchWord, searchType, category }: SearchBarType) => {
    const queryParams = new URLSearchParams()

    if (searchWord) queryParams.append('searchWord', searchWord)
    if (searchType) queryParams.append('searchType', searchType)
    if (category) queryParams.append('category', category)

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
        <Link href={`/board/community/${data.communityId}`}>
          <BoardListItem data={data} />
        </Link>
      </section>
    </div>
  )
}

export default CommunityClient
