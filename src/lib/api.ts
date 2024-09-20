// lib/api.ts
export const fetchProductDetail = async (productId: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/campaign/${productId}`
  )

  if (!res.ok) {
    throw new Error('Failed to fetch product details')
  }

  return res.json()
}

export const fetchCampaignList = async ({
  categorySeq,
  searchWord,
  platformSeq,
  typeSeq,
  orderParam
}: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/campaign?status=3&categorySeq=${categorySeq}&searchWord=${searchWord}&platformSeq=${platformSeq}&typeSeq=${typeSeq}&orderParam=${orderParam}`,
    {
      cache: 'no-store'
    }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch product list')
  }

  return res.json()
}
