// 커뮤니티 게시글 조회
export const fetchCommunityList = async ({
  influencerSearchPostType,
  searchType,
  searchWord,
  token
}: {
  influencerSearchPostType?: string
  searchType?: string
  searchWord?: string
  token?: string
}) => {
  const queryParams = new URLSearchParams()

  if (influencerSearchPostType)
    queryParams.append('influencerSearchPostType', influencerSearchPostType)
  if (searchType) queryParams.append('searchType', searchType)
  if (searchWord) queryParams.append('searchWord', searchWord)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/inf/communities?${queryParams.toString()}`,
    {
      method: 'GET',
      headers: {
        Authorization: `${token}`,
        'Content-Type': 'application/json'
      },
      cache: 'no-store'
    }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch community list')
  }

  return res.json()
}

// 커뮤니티 게시글 상세 조회
export const fetchCommunityDetail = async ({
  id,
  token
}: {
  id: string
  token?: string
}) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/inf/communities/${id}`,
    {
      method: 'GET',
      headers: {
        Authorization: `${token}`,
        'Content-Type': 'application/json'
      },
      cache: 'no-store'
    }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch community detail')
  }

  return res.json()
}

// 커뮤니티 댓글
export const postComment = async ({
  postSeq,
  comment,
  token
}: {
  postSeq: number
  comment: string
  token?: string | null
}) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/community/comments`,
    {
      method: 'POST',
      headers: {
        Authorization: `${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        postSeq,
        comment
      })
    }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch post comment')
  }

  return res.json()
}
