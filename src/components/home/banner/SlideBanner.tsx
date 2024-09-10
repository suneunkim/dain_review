import slides from '@/data/bannerSlides'
import BannerItem from './BannerItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const SlideBanner = () => {
  return (
    <div className="flex items-center justify-center">
      <Swiper
        className="w-[55vw] min-w-[360px] sm:w-[443px] lg:h-[592px] lg:w-[1024px]"
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true // 사용자 상호작용시 슬라이더 일시 정지
        }}>
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <BannerItem
              description={slide.description}
              titleMobile={slide.titleMobile}
              buttonText={slide.buttonText}
              imgSrc={slide.imgSrc}
              imgAlt={slide.imgAlt}
              imgClassName={slide.imgClassName}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SlideBanner
