'use client'

import React from 'react'
import ImagePreviewer from '@/components/shared/ImagePreviewer'

const ImageHeader = '/assets/img/header.svg'
const ImageExCampaign = '/assets/img/ex_campaign.svg'

// 리뷰 등록: 인플루언서의 체험단 리뷰 등록 및 결과 보고 작성 페이지
// 홈 - 마이페이지(인플루언서) - 리뷰 등록

const page = () => {
  const handleFileSelect = (file: File | null) => {
    if (file) {
      console.log('Selected file:', file)
    }
  }

  return (
    // <Header />
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

        <div className="m-auto flex w-full max-w-[1400px] items-center justify-center">
          {/* 일단 하드코딩함. 카드 컴포넌트로 교체 예정 */}
          <div className="my-[32px] flex h-full max-h-[494px] w-full max-w-[453px] flex-col items-center justify-center rounded-[8px] border-[#D4EAFA]">
            <img
              src={ImageExCampaign}
              alt="Example Campaign"
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
              <p className="text-body2 text-gray-60">
                플랫폼에 작성한 리뷰 URL을 입력해 주세요.
              </p>
              <input className="mb-[26px] mt-[2px] h-[38px] w-full rounded-[4px] border border-line-normal pl-[12px]" />

              <h4 className="text-body1 font-[800]">
                파일 선택<strong>*</strong>
              </h4>
              <p className="text-body2 text-gray-60">
                플랫폼에서 본인의 게시물이 나타나는 화면의 캡처 파일을 첨부해
                주세요.
              </p>
              <ImagePreviewer onFileSelect={handleFileSelect} />
              <p className="text-body2 text-gray-60">
                <strong className="text-gray-60">예시화면</strong>
                &nbsp;&nbsp;키워드로 검색 시 검색되는 본인의 게시물을 캡처해
                주세요.
              </p>
              <button className="mb-[32px] w-full rounded-[4px] bg-red-main px-[20px] py-[12px] text-white">
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
    // <Footer />
  )
}

export default page
