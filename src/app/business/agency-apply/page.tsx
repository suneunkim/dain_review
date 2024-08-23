import React from 'react'

// 대행사 신청: 사업자의 대행사 신청 페이지
// 홈 - 마이페이지(사업자) - 대행사 신청

const page = () => {
  return (
    <main>
      <header className="h-[160px]">
        <h1>헤더 높이 160px</h1>
      </header>

      <div className="bg-white py-32">사업자 - 대행사 신청 페이지</div>
      <footer className="h-[286px] bg-background-red">
        <h1>푸터 높이 286px</h1>
      </footer>
    </main>
  )
}

export default page
