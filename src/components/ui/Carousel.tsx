import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

export interface CarouselProps {
  children: React.ReactNode
  navPosition?: 'side' | 'bottom'
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

const Carousel: React.FC<CarouselProps> = ({ children, navPosition = 'side' }) => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  return (
    <div className={`relative mx-[10%] group ${navPosition === 'bottom' ? 'flex flex-col' : ''}`}>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{ prevEl, nextEl }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className={navPosition === 'side' ? 'px-12' : 'w-full'}
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index}>
            <div className="py-8">
              {child}
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Arrows */}
        {navPosition === 'bottom' ? (
          <div className="flex gap-4 items-center justify-center mt-2 pb-4">
            <button ref={(node) => setPrevEl(node)} className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/20 hover:border-white transition-colors cursor-pointer z-10">
              <ArrowLeft />
            </button>
            <button ref={(node) => setNextEl(node)} className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/20 hover:border-white transition-colors cursor-pointer z-10">
              <ArrowRight />
            </button>
          </div>
        ) : (
          <>
            <button ref={(node) => setPrevEl(node)} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer">
              <ArrowLeft />
            </button>
            <button ref={(node) => setNextEl(node)} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer">
              <ArrowRight />
            </button>
          </>
        )}
      </Swiper>
    </div>
  )
}

export default Carousel
