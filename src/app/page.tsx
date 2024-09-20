import HomeClient from '@/components/client-page/HomeClient'
import { fetchCampaignList } from '@/lib/api'

// 서버 컴포넌트에서 데이터를 페칭하여 HomeClient 컴포넌트에 데이터 전달 예정
// SEO를 개선하기 위해 서버 사이드 렌더링
export default async function Home() {
  // point,popularity(안됨),deadline,latest
  //const premiumData = await fetchCampaignList({ orderParam: 'point' })
  const data = await fetchCampaignList({ orderParam: 'point' })

  return <HomeClient />
}
