import HomeClient from '@/components/client-page/HomeClient'
import { fetchCampaignList } from '@/lib/api'

// SEO를 개선하기 위해 서버 사이드 렌더링
export default async function Home() {
  const handleSortChange = async (
    sort: 'point' | 'popularity' | 'deadline' | 'latest'
  ) => {
    const sortData = await fetchCampaignList({ orderParam: sort })
    return sortData
  }

  // point 기준 데이터 불러오기 (popularity 오류로 대체 사용)
  const pointData = await handleSortChange('point')
  const premiumData = pointData.list.slice(0, 4) // 앞쪽 4개
  const fallbackPopularityData = pointData.list.slice(4, 12) // popularity 대체

  const deadlineResponse = await handleSortChange('deadline')
  const deadlineData = deadlineResponse.list.slice(0, 4)

  const latestDataResponse = await handleSortChange('latest')
  const latestData = latestDataResponse.list.slice(0, 4)

  return (
    <HomeClient
      premiumData={premiumData}
      fallbackPopularityData={fallbackPopularityData}
      deadlineData={deadlineData}
      latestData={latestData}
    />
  )
}
