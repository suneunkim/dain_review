'use client'

import SearchIcon from '@/assets/icons/home/mobile/mobile-search.svg'
import DeleteIcon from '@/assets/icons/home/mobile/mobile-search-delete.svg'
import { useSearchModalStore } from '@/store'

const SearchModal = () => {
  const { closeModal } = useSearchModalStore()
  const categories = ['프리미엄 👑', '인기 ⭐', '마감임박 🚨', '신규 🐤']
  const searchTerms = ['하이파이브', '글램핑', '카페', '펜션', '수분크림']
  const popularKeywords = [
    '풀빌라',
    '클라이밍',
    '애견미용',
    '한우 오마카세',
    '다이슨',
    '두바이초콜릿',
    '파티룸',
    '원데이 클래스',
    '키보드'
  ]
  const campaignLocation = ['전국', '서울', '경기']

  return (
    <div className="fixed inset-y-0 z-20 max-h-[1000px] max-w-[520px] overflow-y-auto bg-white pb-[64px] pt-5 520:right-0">
      {/* <div className="fixed inset-0 z-20 max-h-[1000px] max-w-[640px] overflow-y-auto bg-white pb-[64px] pt-5 sm:inset-auto sm:inset-y-0 sm:right-0"></div> */}
      <section className="px-4">
        <div className="flex h-10 items-center gap-2 border-b border-gray-90">
          <SearchIcon />
          <input
            className="text-body-1 text-gray-40"
            placeholder="찾고있는 체험단을 검색해보세요"
          />
          <button
            className="ml-auto"
            onClick={closeModal}>
            닫기
          </button>
        </div>
        <ul className="mt-4 flex gap-1">
          {categories.map((category, i) => (
            <li
              key={i}
              className="rounded-[1000px] border border-line-normal px-[9px] py-1 text-body-2 font-medium">
              {category}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-col gap-[6px]">
          <div className="flex justify-between pt-2">
            <p className="text-body-1 font-semibold">최근 검색어</p>
            <p className="text-body-2 text-gray-40">전체삭제</p>
          </div>
          <ul className="text-body-2 text-gray-70">
            {searchTerms.map((term, i) => (
              <div
                key={i}
                className="flex items-center justify-between">
                <li className="py-[6px]">{term}</li>
                <DeleteIcon />
              </div>
            ))}
          </ul>
        </div>
        <div className="mt-6 flex h-[57px] items-center justify-between rounded bg-red-main px-[62px]">
          <div className="flex flex-col py-2 text-white">
            <p className="text-caption-1">지금 회원가입하고</p>
            <p className="text-body-1 font-bold">바로 10,000원 받기</p>
          </div>
          <img
            alt="banner"
            src="home-banner/mobile-search-banner.png"
          />
        </div>
      </section>
      <div className="my-4 h-3 bg-line-neutral" />
      <section className="px-4">
        <p className="mb-4 mt-[26px] text-body-1 font-semibold">
          지금 인기 키워드
        </p>
        <div className="flex flex-wrap gap-[10px]">
          {popularKeywords.map((keyword, i) => (
            <button
              key={i}
              className="rounded bg-gray-5 px-4 py-[6px] text-body-2 font-medium text-gray-70">
              {keyword}
            </button>
          ))}
        </div>
      </section>
      <section className="mb-5 mt-12 flex flex-col px-4">
        {campaignLocation.map((campaign, i) => (
          <button
            key={i}
            className="flex gap-[9px] py-5">
            <p className="text-heading-5 text-gray-70">
              {campaign} 지역 체험단 보기
            </p>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_4935_155642)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.29289 5.79289C9.68342 5.40237 10.3166 5.40237 10.7071 5.79289L16.7071 11.7929C17.0976 12.1834 17.0976 12.8166 16.7071 13.2071L10.7071 19.2071C10.3166 19.5976 9.68342 19.5976 9.29289 19.2071C8.90237 18.8166 8.90237 18.1834 9.29289 17.7929L14.5858 12.5L9.29289 7.20711C8.90237 6.81658 8.90237 6.18342 9.29289 5.79289Z"
                  fill="#494a51"
                />
              </g>
              <defs>
                <clipPath id="clip0_4935_155642">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        ))}
      </section>
    </div>
  )
}

export default SearchModal
