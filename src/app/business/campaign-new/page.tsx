import React from 'react'

// 체험단 등록: 사업자의 체험단 모집 작성 페이지
// 방문형·포장형으로 구분
// 홈 - 마이페이지(사업자) - 체험단 모집 - 방문형 선택
// 홈 - 마이페이지(사업자) - 체험단 모집 - 구매형/배송형 선택

const page = () => {
  return (
    <main>
      <header className="h-[160px]">
        <h1>헤더 높이 160px</h1>
      </header>

      <div className="bg-white py-32">사업자 - 체험단 등록 페이지</div>

      <footer className="h-[286px] bg-background-red">
        <h1>푸터 높이 286px</h1>
      </footer>
    </main>
  )
}

export default page
