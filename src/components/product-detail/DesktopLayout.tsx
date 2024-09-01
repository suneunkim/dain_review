import {
  experienceMessage,
  missionList,
  staticData,
  tagkeywordList,
  요청사항,
  필수체크사항
} from '@/data/DetailPageMockData'
import CheckInfoList from './elements/CheckInfoList'
import LikeButton from './elements/LikeButton'
import ButtonAndInfo from './elements/ButtonAndInfo'
import TagKeyword from './elements/TagKeyword'
import DotIcon from '@/assets/icons/product-detail/dot.svg'
import ReviewType from '../home/product/ReviewType'
import DesttopShare from '@/assets/icons/product-detail/desktop-share.svg'
import { ProductDetailProps } from '@/models/detailPage'
import Schedule from './elements/Schedule'

const DesktopLayout = ({ productId }: ProductDetailProps) => {
  return (
    <div className="px-5">
      <div className="flex justify-center gap-5">
        {/* 왼쪽 레이아웃 */}
        <div className="min-w-[503px] max-w-[899px] flex-1 px-4">
          <section className="flex flex-col">
            <div className="mt-10">
              <ReviewType
                labelType="기자단"
                snsType="naver"
                detailPage
              />
            </div>
            <div className="flex justify-between border-b border-line-neutral pb-6">
              <h3 className="mt-2 text-heading-2 font-bold">
                다인카페 체험단 모집합니다.
              </h3>
              <div className="flex gap-6">
                <DesttopShare />
                <LikeButton deskTop />
              </div>
            </div>
            <div className="mt-[40px]">
              <p className="mb-6 text-heading-5 font-bold">제공 내역</p>
              <p className="mb-4 mt-3 text-gray-80">
                음료 메뉴 2잔 + 디저트 메뉴 1종 (선택 가능) + 애견 동반 입장료
                무료(매너벨트 1개 포함)
              </p>
            </div>
          </section>
          {/* 사업주 정보 */}
          <div className="mt-12">
            <p className="mb-2 text-heading-5 font-bold">사업주</p>
            <div className="flex items-center gap-4">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                  fill="#E1E1E3"
                />
                <g clipPath="url(#clip0_5963_23504)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 8.5C13.6988 8.5 11.8333 10.3655 11.8333 12.6667C11.8333 14.9679 13.6988 16.8333 16 16.8333C18.3012 16.8333 20.1667 14.9679 20.1667 12.6667C20.1667 10.3655 18.3012 8.5 16 8.5ZM12.6667 17.6667C10.3655 17.6667 8.5 19.5321 8.5 21.8333C8.5 23.214 9.61929 24.3333 11 24.3333H21C22.3807 24.3333 23.5 23.214 23.5 21.8333C23.5 19.5321 21.6345 17.6667 19.3333 17.6667H12.6667Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5963_23504">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(6 6)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span>다인카페</span>
            </div>
          </div>
          {/* 주소와 지도 */}
          <section className="mt-12 flex flex-col gap-2">
            <p className="text-heading-5 font-bold">주소</p>
            <p>서울 강남구 봉오대로 677번길 다인카페</p>
            <div className="min-h-[344px] bg-gray-200" />
          </section>
          <section className="mt-12">
            <p className="mb-4 text-heading-5 font-bold">방문 / 예약 안내</p>
            <ul className="flex flex-col gap-2">
              {staticData.map((item, i) => (
                <li
                  className="flex"
                  key={i}>
                  <DotIcon />
                  {item.label} : {item.value}
                </li>
              ))}
              <li className="flex">
                <DotIcon />
                {experienceMessage}
              </li>
            </ul>
          </section>
          <section className="mt-12">
            <p className="mb-4 text-heading-5 font-bold">주의사항</p>
            <ul className="flex flex-col gap-2">
              <li className="flex">
                <span className="w-[22px]">
                  <DotIcon />
                </span>
                체험단 미션과 일정을 꼭 확인한 후에 신청해주세요. 선정된 후에
                리뷰를 작성하지 않은 경우 패널티가 부과됩니다.
              </li>
              <li className="flex">
                <DotIcon />
                유료 광고 표시(라벨 표시 / 게시글 내 표시)는 필수입니다.
              </li>
            </ul>
          </section>
          <section className="mt-12">
            <p className="mb-4 text-heading-5 font-bold">필수 체크 사항</p>
            <ul className="flex flex-col gap-2">
              {필수체크사항.map((info, i) => (
                <CheckInfoList
                  info={info}
                  key={i}
                />
              ))}
            </ul>
          </section>
          <section className="mt-12">
            <div>
              <p className="mb-4 text-heading-5 font-bold">태그 키워드</p>
              <div className="flex flex-col gap-4 520:flex-row">
                <div className="flex flex-wrap gap-2">
                  {tagkeywordList.map((tag, i) => (
                    <TagKeyword
                      info="tag"
                      tag={tag}
                      key={i}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  className="mt-[25px] w-[78px] border-b-2 border-gray-70 520:mt-0">
                  키워드 복사
                </button>
              </div>
            </div>
          </section>
          <section className="mt-12">
            <p className="mb-4 text-heading-5 font-bold">체험단 미션</p>
            <div className="flex flex-wrap gap-2">
              {missionList.map((tag, i) => (
                <TagKeyword
                  info="mission"
                  tag={tag}
                  key={i}
                />
              ))}
            </div>
          </section>
          <section className="mb-12 mt-12">
            <p className="mb-4 text-heading-5 font-bold">사업주 요청 사항</p>
            <ul className="flex flex-col gap-2">
              {요청사항.map((info, i) => (
                <CheckInfoList
                  key={i}
                  info={info}
                />
              ))}
            </ul>
          </section>
        </div>
        {/* 오른쪽 레이아웃 */}
        <div className="mt-10 h-[836px] min-w-[461px] rounded-lg bg-[#F7F8F8] px-6 pb-8 pt-6">
          <p className="text-heading-5 font-bold">체험단 일정</p>
          <Schedule />
          <div className="mt-4 min-h-[465px] rounded-2xl border border-line-neutral bg-white">
            달력
          </div>
          <div className="mt-[66px]">
            <ButtonAndInfo productId={productId} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesktopLayout
