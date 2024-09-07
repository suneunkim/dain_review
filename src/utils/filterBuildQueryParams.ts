import { filterOptions } from '@/data/filterOptions'

const buildQueryParams = (selectedFilters: any, keyword?: string) => {
  const { category, platform, type } = selectedFilters
  const queryParams = new URLSearchParams()

  if (keyword) queryParams.append('searchWord', keyword)

  const categorySeq = category
    ? filterOptions[0].items.indexOf(category) + 1
    : null
  const platformSeq = platform
    ? filterOptions[1].items.indexOf(platform) + 1
    : null
  const typeSeq = type ? filterOptions[2].items.indexOf(type) + 1 : null

  if (categorySeq) queryParams.append('categorySeq', categorySeq.toString())
  if (platformSeq) queryParams.append('platformSeq', platformSeq.toString())
  if (typeSeq) queryParams.append('typeSeq', typeSeq.toString())

  return queryParams
}

export default buildQueryParams
