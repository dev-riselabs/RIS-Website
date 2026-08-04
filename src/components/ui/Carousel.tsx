import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

export interface CarouselProps {
  children: React.ReactNode
}

const ArrowLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6"/>
  </svg>
)

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6"/>
  </svg>
)

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  return (
    <div className="relative mx-[10%] group">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          prevEl: '.custom-prev',
          nextEl: '.custom-next',
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="px-12"
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index}>
            <div className="py-8">
              {child}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Navigation Arrows */}
      <button className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white/20 transition-colors">
        <ArrowLeft />
      </button>
      
      <button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white/20 transition-colors">
        <ArrowRight />
      </button>
    </div>
  )
}

export default Carousel
