export type ThreeFilter = '카테고리' | 'SNS' | '유형'

export const filterOptions: { category: ThreeFilter; items: string[] }[] = [
  {
    category: '카테고리',
    items: ['맛집', '뷰티', '여행', '문화', '식품', '생활', '디지털']
  },
  {
    category: 'SNS',
    items: ['인스타그램', '네이버블로그', '유튜브', '릴스', '쇼츠', '틱톡']
  },
  {
    category: '유형',
    items: ['방문형', '구매형', '배송형', '기자단', '포장형']
  }
]
