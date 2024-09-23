'use client'

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }) // 부드러운 스크롤 이동
  }

  return (
    <button onClick={scrollToTop}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"
          fill="#F0F1F2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.2929 15.2929C19.6834 14.9024 20.3166 14.9024 20.7071 15.2929L26.7071 21.2929C27.0976 21.6834 27.0976 22.3166 26.7071 22.7071C26.3166 23.0976 25.6834 23.0976 25.2929 22.7071L20 17.4142L14.7071 22.7071C14.3166 23.0976 13.6834 23.0976 13.2929 22.7071C12.9024 22.3166 12.9024 21.6834 13.2929 21.2929L19.2929 15.2929Z"
          fill="#5D5F67"
        />
      </svg>
    </button>
  )
}

export default ScrollToTopButton
