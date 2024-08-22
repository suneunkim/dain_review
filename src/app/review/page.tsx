import React, { useState } from 'react'

const ImageHeader = '/assets/img/header.svg'
const ImageExCampaign = '/assets/img/ex_campaign.svg'
const ImageExample = '/assets/img/example.svg'
const ImageClip = '/assets/img/clip.svg'

// 리뷰 등록: 인플루언서의 체험단 리뷰 등록 및 결과 보고 작성 페이지
// 홈 - 마이페이지(인플루언서) - 리뷰 등록

const page = () => {
  return (
    <main>
      <header className="h-[160px]">
        <h1>헤더 높이 160px</h1>
      </header>

      <div className="flex w-full max-w-[1920px] flex-col">
        <div
          className="flex h-[200px] w-full flex-col items-center justify-center pt-[84px]"
          style={{ backgroundImage: `url(${ImageHeader})` }}>
          <h2 className="text-display2 text-gray-0">리뷰 등록</h2>
        </div>
        {/* 일단 하드코딩 - 나중에 Card Component로 대체 */}
        <div className="m-auto flex w-full max-w-[1400px] items-center justify-center">
          <div className="my-[32px] flex h-full max-h-[494px] w-full max-w-[453px] flex-col items-center justify-center rounded-[8px] border-[#D4EAFA]">
            <img
              src={ImageExCampaign}
              alt="Example Campaign Image"
            />
            <h3 className="text-center text-[16px]">
              다인카페 체험단 모집합니다.
            </h3>
            <p>
              음료 메뉴 2잔 + 디저트 메뉴 1종 (선택 가능) + 애견 동반 입장료
              무료 (매너벨트 1개 포함)
            </p>
          </div>
          <div className="ml-[20px] mt-[40px] w-full max-w-[927px]">
            <form>
              <h4 className="text-body1 font-[800]">
                리뷰 URL<strong>*</strong>
              </h4>
              <p className="mb-[2px] text-body2 text-gray-60">
                플랫폼에 작성한 리뷰 URL을 입력해 주세요.
              </p>
              <input
                className="mb-[26px] h-[38px] w-full rounded-[4px] border border-line-normal pl-[12px]"
                required
              />
              <h4 className="text-body1 font-[800]">
                파일 선택<strong>*</strong>
              </h4>
              <p className="mb-[2px] text-body2 text-gray-60">
                플랫폼에서 본인의 게시물이 나타나는 화면의 캡처 파일을 첨부해
                주세요.
              </p>
              {/* 이미지 첨부/미리보기 컴포넌트 */}
              <div className="flex h-[68px] w-full items-center justify-center rounded-[4px] border border-line-normal bg-background-gray text-body1r text-gray-40">
                <img
                  src={ImageClip}
                  alt="file add"
                  className="mr-[5px]"
                />
                파일 첨부하기
              </div>
              <p className="my-[5px] text-body2 text-gray-60">
                <strong className="text-gray-60">예시화면</strong>
                &nbsp;&nbsp;키워드로 검색 시 검색되는 본인의 게시물을 캡처해
                주세요.
              </p>
              <img
                src={ImageExample}
                alt="Example Image"
              />
              <button
                className="mb-[32px] w-full rounded-[4px] bg-red-main px-[20px] py-[12px] text-white"
                type="submit">
                제출
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer className="h-[286px] bg-background-red">
        <h1>푸터 높이 286px</h1>
      </footer>
    </main>
  )
}

export default page
