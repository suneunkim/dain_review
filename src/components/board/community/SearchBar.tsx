'use client'

import { SubmitHandler, useForm } from 'react-hook-form'

export type SearchBarType = {
  searchWord: string
  searchType: string
  influencerSearchPostType: string
}

type Props = {
  onSubmit: SubmitHandler<SearchBarType>
}

const categories = [
  { label: '질문하기', value: 'QUESTION' },
  { label: '노하우', value: 'KNOW_HOW' },
  { label: '동행', value: 'ACCOMPANY' },
  { label: '기타', value: 'ETC' }
]

const SearchBar = ({ onSubmit }: Props) => {
  const { handleSubmit, register, setValue, watch } = useForm<SearchBarType>({
    defaultValues: {
      searchWord: '',
      searchType: 'ALL',
      influencerSearchPostType: ''
    }
  })

  const handleCategoryClick = (category: string) => {
    setValue('influencerSearchPostType', category)
    handleSubmit(onSubmit)()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 lg:gap-3">
      <section className="flex items-center gap-2 lg:gap-[15px]">
        <div className="flex w-[288px] items-center justify-center gap-[6px] border-b border-gray-90 py-[5px] pl-2 pr-[10px] lg:w-[478px] lg:px-0 lg:px-[15px] lg:py-[10px]">
          <select
            className="lg:w-[114px]"
            {...register('searchType')}>
            <option value="ALL">전체</option>
            <option value="TITLE">제목</option>
            <option value="CONTENTS">내용</option>
            <option value="USER">작성자</option>
          </select>
          <input
            className="w-full text-body-1 text-gray-40 outline-none ring-0 focus:text-gray-80"
            placeholder="검색어를 입력해주세요"
            {...register('searchWord')}
          />
          <button type="submit">
            <svg
              className="size-5"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_5639_25522)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 10.5C4 6.91015 6.91015 4 10.5 4C14.0899 4 17 6.91015 17 10.5C17 14.0899 14.0899 17 10.5 17C6.91015 17 4 14.0899 4 10.5ZM10.5 2C5.80558 2 2 5.80558 2 10.5C2 15.1944 5.80558 19 10.5 19C12.4869 19 14.3145 18.3183 15.7618 17.176L20.293 21.7072C20.6835 22.0977 21.3167 22.0977 21.7072 21.7072C22.0977 21.3167 22.0977 20.6835 21.7072 20.293L17.176 15.7618C18.3183 14.3145 19 12.4869 19 10.5C19 5.80558 15.1944 2 10.5 2Z"
                  fill="#19191B"
                />
              </g>
              <defs>
                <clipPath id="clip0_5639_25522">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        {/* 글 작성하기 */}
        <button
          className="lg:hidden"
          type="button">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H4C1.79086 32 0 30.2091 0 28V4Z"
              fill="#19191B"
            />
            <path
              d="M23.7594 11.7318L20.268 8.24122C20.1519 8.12511 20.0141 8.03301 19.8624 7.97018C19.7107 7.90734 19.5482 7.875 19.384 7.875C19.2198 7.875 19.0572 7.90734 18.9056 7.97018C18.7539 8.03301 18.6161 8.12511 18.5 8.24122L8.86641 17.8748C8.74983 17.9905 8.65741 18.1281 8.59451 18.2798C8.5316 18.4315 8.49948 18.5942 8.50001 18.7584V22.2498C8.50001 22.5813 8.6317 22.8993 8.86612 23.1337C9.10054 23.3681 9.41849 23.4998 9.75001 23.4998H22.875C23.0408 23.4998 23.1997 23.434 23.3169 23.3168C23.4342 23.1995 23.5 23.0406 23.5 22.8748C23.5 22.7091 23.4342 22.5501 23.3169 22.4329C23.1997 22.3157 23.0408 22.2498 22.875 22.2498H15.0094L23.7594 13.4998C23.8755 13.3837 23.9676 13.2459 24.0304 13.0942C24.0933 12.9426 24.1256 12.78 24.1256 12.6158C24.1256 12.4517 24.0933 12.2891 24.0304 12.1374C23.9676 11.9857 23.8755 11.8479 23.7594 11.7318ZM16.625 11.8834L17.9289 13.1873L11.3125 19.8037L10.0086 18.4998L16.625 11.8834ZM9.75001 22.2498V20.0084L11.9914 22.2498H9.75001ZM13.5 21.9912L12.1969 20.6873L18.8125 14.0709L20.1164 15.3748L13.5 21.9912ZM21 14.4912L17.5094 10.9998L19.3844 9.12481L22.875 12.6162L21 14.4912Z"
              fill="white"
            />
          </svg>
        </button>
      </section>

      {/* 카테고리 버튼 */}
      <section className="relative flex justify-between pb-[10px] lg:border-b-2">
        <div className="flex gap-[5px] lg:gap-[8px]">
          {categories.map(category => (
            <button
              className="h-[35px] rounded-[1000px] border px-[15px] py-[5px] text-body-2 text-gray-40 lg:text-heading-5"
              key={category.value}
              type="button"
              onClick={() => handleCategoryClick(category.value)}>
              {category.label} {/* 한글 UI */}
            </button>
          ))}
        </div>
        <button className="absolute bottom-2 right-0 hidden rounded bg-gray-90 px-[38px] py-[10px] text-heading-4 text-gray-0 lg:block">
          등록
        </button>
      </section>
    </form>
  )
}

export default SearchBar
