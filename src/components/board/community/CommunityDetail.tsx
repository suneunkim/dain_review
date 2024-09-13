'use client'

import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'

type SearchBarType = {
  comment: string
}

type Props = {
  onSubmit: SubmitHandler<SearchBarType>
}

export interface PostDetailProps {
  category: string
  title: string
  content: string
  author: string
  createdDate: string
  viewCount: number
}

const CommunityDetail = ({ data }: { data: PostDetailProps }) => {
  const { handleSubmit, register } = useForm<SearchBarType>()

  const onSubmit = () => {}

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h4 className="flex text-body-2 font-semibold leading-[1] text-red-main">
          {data.category}
        </h4>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5H10.0083M10 10H10.0083M10 15H10.0083"
            stroke="#19191B"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <h4 className="text-body-2 font-semibold text-gray-90 lg:mb-2 lg:text-body-1">
        {data.title}
      </h4>
      <div className="mt-[5px] flex justify-between text-caption-1 lg:mt-[11px]">
        <div className="flex items-center gap-[10px]">
          <p className="font-semibold lg:text-body-2">{data.author}</p>
          <span>{data.createdDate}</span>
        </div>
        <div>조회 {data.viewCount}회</div>
      </div>

      <div className="min-h-[170px] px-[15px] py-2 lg:mt-4 lg:min-h-[223px] lg:p-0">
        <div className="w-full text-caption-1 lg:text-heading-5 lg:text-gray-60">
          {data.content}
        </div>
      </div>

      {/* 댓글 */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex h-[105px] flex-col border border-gray-10 p-2">
        <textarea
          {...register('comment', { required: true })}
          placeholder="댓글을 남겨 보세요."
          className="h-[50px] w-full resize-none border-none outline-none"
        />
        <button
          type="submit"
          className="ml-auto rounded bg-gray-90 px-4 py-[9px] text-gray-0">
          등록
        </button>
      </form>

      {/* 버튼 */}
      <div className="mt-8 flex justify-between text-body-2 font-bold">
        <div className="flex gap-[5px]">
          <button className="flex gap-[10px] rounded bg-gray-20 px-3 py-[10px] text-gray-0">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_8228_35098)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.0593 4.40814C12.7339 4.0827 12.2062 4.0827 11.8808 4.40814L6.8808 9.40814C6.55536 9.73358 6.55536 10.2612 6.8808 10.5867L11.8808 15.5867C12.2062 15.9121 12.7339 15.9121 13.0593 15.5867C13.3847 15.2612 13.3847 14.7336 13.0593 14.4081L8.64856 9.9974L13.0593 5.58665C13.3847 5.26121 13.3847 4.73358 13.0593 4.40814Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_8228_35098">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0.804688)"
                  />
                </clipPath>
              </defs>
            </svg>

            <span>이전글</span>
          </button>
          <button className="flex gap-2 rounded bg-gray-90 px-3 py-[10px] text-gray-0">
            <span>다음글</span>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_8228_48849)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.54877 4.40814C8.8742 4.0827 9.40184 4.0827 9.72728 4.40814L14.7273 9.40814C15.0527 9.73358 15.0527 10.2612 14.7273 10.5867L9.72728 15.5867C9.40184 15.9121 8.8742 15.9121 8.54877 15.5867C8.22333 15.2612 8.22333 14.7336 8.54877 14.4081L12.9595 9.9974L8.54877 5.58665C8.22333 5.26121 8.22333 4.73358 8.54877 4.40814Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_8228_48849">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0.804688)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        <Link href="/board">
          <div className="rounded border border-gray-80 px-3 py-[10px] text-gray-80 lg:px-[30px]">
            목록
          </div>
        </Link>
      </div>
    </div>
  )
}

export default CommunityDetail
