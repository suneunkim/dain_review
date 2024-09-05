'use client'

import React, { useState, useRef } from 'react'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import PageTitle from '@/components/shared/PageTitle'
import ImagePreviewer from '@/components/review/ImagePreviewer'
import WeekdayPicker from '@/components/campaign/WeekdayPicker'

// 체험단 등록: 사업자의 체험단 모집 작성 페이지
// 방문형·포장형으로 구분
// 홈 - 마이페이지(사업자) - 체험단 모집 - 방문형 선택
// 홈 - 마이페이지(사업자) - 체험단 모집 - 구매형/배송형 선택

// 공통 CSS 정의

const Section = React.forwardRef(({ children }, ref) => (
  <section
    ref={ref}
    className="mb-[100px]">
    {children}
  </section>
))

const NextButton = ({ children, ...props }) => (
  <button
    className="mb-[32px] mt-[80px] w-full max-w-[216px] rounded-[4px] border border-gray-80 bg-gray-0 px-[20px] py-[12px] text-body-1 font-[700] text-gray-80"
    {...props}>
    {children}
  </button>
)

const Guide = ({ children }) => <div className="mb-[40px]">{children}</div>

const Heading = ({ level, children }) => {
  const Tag = `h${level}`
  const className =
    level === 3
      ? 'mb-[12px] text-heading-3 font-[700] text-gray-90'
      : 'text-heading-5 font-[500] text-gray-60'
  return <Tag className={className}>{children}</Tag>
}

const Text = ({ type, children }) => {
  const className =
    type === 'body1'
      ? 'mb-[8px] text-body-1 font-[700] text-gray-80'
      : 'text-body-2 font-[300] text-gray-60'
  return <p className={className}>{children}</p>
}

const weekdays = ['일', '월', '화', '수', '목', '금', '토']

const page = () => {
  const [selectedPossibleDays, setSelectedPossibleDays] = useState([])
  const [selectedImpossibleDays, setSelectedImpossibleDays] = useState([])

  const handlePossibleDayChange = day => {
    setSelectedPossibleDays(prev =>
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    )
  }

  const handleImpossibleDayChange = day => {
    setSelectedImpossibleDays(prev =>
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    )
  }

  return (
    <main>
      <Header />
      <PageTitle
        title="체험단 등록"
        // subtitle=""
        alignment="center"
      />
      <div className="m-auto flex w-full max-w-[1920px] flex-col px-[56px]">
        <form className="m-auto flex w-full max-w-[691px] flex-col bg-white py-32">
          <Section>
            <Guide>
              <Heading level={3}>광고 영역</Heading>
              <Heading level={5}>
                광고를 원하는 플랫폼, 유형, 카테고리를 선택해 주세요
              </Heading>
            </Guide>
            <div className="flex w-full flex-wrap items-center justify-between">
              <div className="flex-1">
                <Text type="body1">플랫폼</Text>
                {/* dropdown box 컴포넌트 고려해볼 것 */}
                <select className="mt-2 w-full min-w-[200px] max-w-[217px] rounded-md border border-gray-300 p-2 text-gray-700">
                  <option value="">선택</option>
                  <option value="naver blog">블로그</option>
                  <option value="instagram">인스타그램</option>
                  <option value="youtube">유튜브</option>
                  <option value="tiktok">틱톡</option>
                  <option value="reels">릴스</option>
                  <option value="shorts">쇼츠</option>
                </select>
              </div>
              <div className="flex-1">
                <Text type="body1">유형</Text>
                <select className="mt-2 w-full min-w-[200px] max-w-[217px] rounded-md border border-gray-300 p-2 text-gray-700">
                  <option value="">선택</option>
                  <option value="visit">방문형</option>
                  <option value="takeout">포장형</option>
                  <option value="delivery">배송형</option>
                </select>
              </div>
              <div className="flex-1">
                <Text type="body1">카테고리</Text>
                <select className="mt-2 w-full min-w-[200px] max-w-[217px] rounded-md border border-gray-300 p-2 text-gray-700">
                  <option value="">선택</option>
                  <option value="food">음식</option>
                  <option value="beauty">뷰티</option>
                  <option value="fashion">패션</option>
                </select>
              </div>
            </div>
            <div className="flex justify-center">
              <NextButton>다음</NextButton>
            </div>
          </Section>
          <Section>
            <Guide>
              <Heading level={3}>상호 정보</Heading>
              <Heading level={5}>상호명과 썸네일을 등록해 주세요</Heading>
            </Guide>
            <Text type="body1">상호명</Text>
            <input
              className="mb-[26px] h-[40px] w-full rounded-[4px] border border-line-normal pl-[12px]"
              required
            />
            <Text type="body1">썸네일</Text>
            <Text type="body2">10MB 이하 이미지 파일 1개를 첨부해 주세요</Text>
            <ImagePreviewer />
            <div className="flex justify-center">
              <NextButton>다음</NextButton>
            </div>
          </Section>
          <Section>
            <Guide>
              <Heading level={3}>제공 내역</Heading>
              <Heading level={5}>
                인플루언서에게 제공할 서비스 항목을 입력해 주세요
              </Heading>
            </Guide>
            <Text type="body1">서비스 항목</Text>
            <textarea
              placeholder="서비스 항목을 100자 이내로 입력해 주세요"
              maxLength={100}
              className="h-[167px] w-full rounded-[4px] border border-line-normal p-[9px] pl-[12px]"
              required></textarea>
            {/* 글자수 표시하는 함수 */}
            <div className="flex justify-end">
              <p className="text-caption-1 font-[300] text-gray-30"> 0 / 100</p>
            </div>
            <div className="flex justify-center">
              <NextButton>다음</NextButton>
            </div>
          </Section>
          <Section>
            <Guide>
              <Heading level={3}>주소</Heading>
              <Heading level={5}>
                방문 체험이 이루어질 장소의 주소를 입력해 주세요
              </Heading>
            </Guide>
            <Text type="body1">방문 주소</Text>
            {/* 주소 검색하는 Input */}
            <div className="flex space-x-[4px]">
              <input
                placeholder="우편번호"
                className="h-[40px] w-full max-w-[613px] rounded-[4px] border border-line-normal pl-[12px]"
                required
              />
              <button
                type="button"
                className="h-[40px] w-[74px] rounded-[4px] border border-gray-90 bg-gray-90 text-body-2 font-[700] text-gray-0">
                검색
              </button>
            </div>
            <input
              placeholder="기본 주소"
              className="h-[40px] w-full rounded-[4px] border border-line-normal pl-[12px]"
              required
            />
            <input
              placeholder="상세 주소"
              className="h-[40px] w-full rounded-[4px] border border-line-normal pl-[12px]"
            />
            <div className="flex justify-center">
              <NextButton>다음</NextButton>
            </div>
          </Section>
          <Section>
            <Guide>
              <Heading level={3}>체험 일정</Heading>
              <Heading level={5}>
                체험 일정을 조율할 수 있는 연락처와 요일, 시간을 입력해 주세요
              </Heading>
            </Guide>
            <Text type="body1">연락처</Text>
            <input
              placeholder="‘-’ 없이 숫자만 작성"
              className="mb-[26px] h-[40px] w-full rounded-[4px] border border-line-normal pl-[12px]"
              required
            />
            <Guide>
              <div className="flex w-full flex-wrap items-center justify-between">
                {/* 일월화수목금토 체크박스 */}
                <div className="">
                  <Text type="body1">
                    체험 가능 요일{' '}
                    <span className="justify-center text-body-2 font-[700] text-status-destructive">
                      * 1개 이상
                    </span>
                  </Text>
                  <div className="mt-[8px] flex h-[90px] min-w-[328px] max-w-[335px] flex-1 items-center justify-around space-x-2 rounded-lg border px-[11px]">
                    {weekdays.map(day => (
                      <WeekdayPicker
                        key={day}
                        day={day}
                        isChecked={selectedPossibleDays.includes(day)}
                        onChange={() => handlePossibleDayChange(day)}
                      />
                    ))}
                  </div>
                </div>
                {/* 일월화수목금토 체크박스 */}
                <div className="">
                  <Text type="body1">체험 불가능 요일</Text>
                  <div className="mt-[8px] flex h-[90px] min-w-[328px] max-w-[335px] flex-1 items-center justify-around space-x-2 rounded-lg border px-[11px]">
                    {weekdays.map(day => (
                      <WeekdayPicker
                        key={day}
                        day={day}
                        isChecked={selectedImpossibleDays.includes(day)}
                        onChange={() => handleImpossibleDayChange(day)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Guide>
            <Text type="body1">체험 가능 시간</Text>
            <div className="flex justify-center">
              <NextButton>다음</NextButton>
            </div>
          </Section>
          <Section>
            <Guide>
              <Heading level={3}>사업주 미션</Heading>
              <Heading level={5}>
                인플루언서에게 요구하는 사항을 자세히 입력해 주세요
              </Heading>
            </Guide>
            <Text type="body1">요구 사항</Text>
            <textarea
              placeholder="서비스 항목을 100자 이내로 입력해 주세요"
              maxLength={100}
              className="h-[167px] w-full rounded-[4px] border border-line-normal p-[9px] pl-[12px]"
              required></textarea>
            {/* 글자수 표시하는 함수 */}
            <div className="flex justify-center">
              <NextButton>다음</NextButton>
            </div>
          </Section>
          <Section>
            <Guide>
              <Heading level={3}>태그 키워드</Heading>
              <Heading level={5}>
                해시태그로 사용할 키워드를 10자 이내로 적어 주세요
              </Heading>
            </Guide>
            <Text type="body1">홍보용 키워드</Text>
            <div className="flex flex-wrap justify-between space-x-[20px]">
              <input
                placeholder="키워드 1"
                className="mb-[26px] h-[40px] w-full flex-1 rounded-[4px] border border-line-normal pl-[12px]"
                required
              />
              <input
                placeholder="키워드 2"
                className="mb-[26px] h-[40px] w-full flex-1 rounded-[4px] border border-line-normal pl-[12px]"
                required
              />
              <input
                placeholder="키워드 3"
                className="mb-[26px] h-[40px] w-full flex-1 rounded-[4px] border border-line-normal pl-[12px]"
                required
              />
            </div>
            <div className="flex justify-center">
              <NextButton>다음</NextButton>
            </div>
          </Section>
          <Section>
            <Guide>
              <Heading level={3}>모집 인원 & 지급 포인트</Heading>
              <Heading level={5}>
                모집 인원 수와 지급 포인트를 설정하면 총 사용 포인트가
                계산됩니다
              </Heading>
            </Guide>
            <Text type="body1">모집 인원 수</Text>
            <input
              type="number"
              className="mb-[26px] h-[40px] w-full max-w-[216px] rounded-[4px] border border-line-normal pl-[12px]"
            />
            <Text type="body1">포인트 지급</Text>
            <div>
              <button className="h-[40px] w-[106px] rounded-[4px] border border-line-normal pl-[12px] text-body-2 font-[700]">
                예
              </button>{' '}
              <button className="h-[40px] w-[106px] rounded-[4px] border border-line-normal pl-[12px] text-body-2 font-[700]">
                아니오
              </button>
            </div>
            <input
              placeholder="0 P"
              className="mb-[26px] h-[40px] w-full max-w-[216px] rounded-[4px] border border-line-normal pl-[12px]"
            />
            <Text type="body2">
              포인트를 지급할 경우 프리미엄 체험단으로 등록되어 양질의
              인플루언서가 지원할 확률이 높아집니다.
            </Text>
            <Text type="body1">총 사용 포인트</Text>
            <Text type="body2">
              1인당 지급 포인트 × 모집 인원수 × 수수료 20%
            </Text>
            <input
              placeholder="0 P"
              className="mb-[26px] h-[40px] w-full max-w-[216px] rounded-[4px] border border-line-normal pl-[12px]"
            />
          </Section>
          <div className="flex justify-center">
            <button
              className="mb-[32px] w-full max-w-[216px] rounded-[4px] bg-red-main px-[20px] py-[12px] text-gray-0"
              type="submit"
              // disabled={isSubmitDisabled}
            >
              등록
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </main>
  )
}

export default page
