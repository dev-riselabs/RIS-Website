import React from 'react'
import Carousel from '../components/ui/Carousel'
import ContentCard from '../components/ui/ContentCard'
import VerticalPosterCard from '../components/ui/VerticalPosterCard'
import ExperienceCard from '../components/ui/ExperienceCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white">
    <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
    <path d="m10 8 6 4-6 4Z" fill="white" stroke="none" />
  </svg>
)

const Home = () => {
  return (
    <>
      <div className="bg-[#303030] min-h-screen pb-20">
        {/* Hero Section */}
        <div className="relative w-full text-white flex flex-col">
          {/* Background Image containing the built-in arc */}
          <img
            src="/HERO_BG.png"
            alt="Makemation Hero"
            className="w-full h-full block"
          />

          {/* Gradient Overlay for better text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80"></div>

          <div className="absolute inset-0 flex flex-col justify-center w-full">

            {/* Watch Trailer - Centered in the upper half */}
            <div className="flex items-center justify-center gap-6 mt-16 md:mt-0">
              <span className="text-xl md:text-3xl font-bold tracking-[0.2em] uppercase">Watch</span>
              <button className="hover:scale-105 transition-transform hover:opacity-80">
                <PlayIcon />
              </button>
              <span className="text-xl md:text-2xl font-bold tracking-[0.2em] uppercase">Trailer</span>
            </div>

            {/* Title Area - Bottom left of the hero content */}
            <div className="absolute bottom-[15%] md:bottom-[30%] left-[10%]">
              <p className="text-sm md:text-base font-medium tracking-wide mb-3">First African Feature Film</p>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">Makemation</h1>
              <p className="text-sm font-medium tracking-wide">On the air 18 . 04 . 25</p>
            </div>
          </div>
        </div>

        <div className="-mt-16 md:-mt-80 relative z-20">
          <Carousel>
            <ContentCard
              category="What we create"
              title="Productions"
              description="Creating films, documentaries, original series and screen-based stories that entertain, inspire and drive conversations."
              buttonText="View slate"
              image="/HERO_CAROUSEL_IMG.png"
            />
            <ContentCard
              category="Original Series"
              title="Popular Jingo"
              description="Hosted By Toyosi Akerele-Ogunsiji, Popular Jingo Features Engaging Conversations With Leaders, Innovators, Creators And Changemakers Exploring Ideas, Opportunities And The Forces Shaping Africa And The World. Through Thoughtful Dialogue And Diverse Perspectives, The Series Creates A Space For Learning, Reflection And Meaningful Conversation."
              image="/HERO_CAROUSEL_IMG.png"
            />
            <ContentCard
              category="Featured Experiences"
              title="Makemation National AI Festival"
              description="The Makemation National AI Festival Is A Nationwide Movement Introducing Young People To Artificial Intelligence, Creativity, Innovation And Future Skills. Designed To Inspire The Next Generation Of Innovators, Creators And Problem-Solvers, The Festival Brings Together Students, Educators, Entrepreneurs, Industry Leaders And Policymakers To Explore How Emerging Technologies Can Help Shape Africa's Future."
              image="/HERO_CAROUSEL_IMG.png"
            />
          </Carousel>
        </div>
      </div>
      <div className="relative w-full overflow-hidden \pt-12 bg-[#303030]">
        {/* Green SVG Background */}
        <div className="absolute inset-0 top-60 z-0 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 1440 1450" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M1453.96 1391.79C1453.96 1391.79 1195.14 1252.22 918.885 1472.59C642.63 1692.95 576.699 1147.18 364.467 1147.18C152.235 1147.18 36.72 1391.79 36.72 1391.79L-57 396.839C-57 396.839 20.6459 238.911 287.911 38.7463C555.176 -161.418 795.742 479.108 1027.04 479.108C1258.35 479.108 1503 4.95703 1503 4.95703L1453.96 1391.79Z" fill="#44BB3D" fillOpacity="0.3" />
          </svg>
        </div>

        <div className="relative z-10 mx-[10%]  flex flex-col gap-40">

          {/* Stories That Matter Block */}
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left Text */}
            <div className="flex-1 text-white">
              <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white/80">Featured Projects</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Stories That Matter</h2>
              <p className="text-white/70 leading-relaxed max-w-md">
                We develop and produce stories that connect audiences, celebrate African excellence and explore the possibilities of tomorrow.
              </p>
            </div>

            {/* Right Carousel */}
            <div className="flex-1 w-full max-w-[700px] relative">
              <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={2}
                navigation={{
                  prevEl: '.stories-prev',
                  nextEl: '.stories-next',
                }}
                className="pb-"
              >
                <SwiperSlide>
                  <VerticalPosterCard
                    image="/MAKEMATION_IMG.png"
                    footerText="View Productions"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <VerticalPosterCard
                    image="/AWOLOWO_IMG.png"
                    footerText="Currently in Development"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <VerticalPosterCard
                    image="/HERO_CAROUSEL_IMG.png"
                    footerText="Coming Soon"
                  />
                </SwiperSlide>
              </Swiper>

              {/* Navigation Arrows */}
              <div className="absolute -bottom-15 left-1/2 -translate-x-1/2 flex gap-6 z-10">
                <button className="stories-prev w-10 h-10 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-[#303030] transition-colors cursor-pointer disabled:opacity-50">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                </button>
                <button className="stories-next w-10 h-10 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-[#303030] transition-colors cursor-pointer disabled:opacity-50">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </button>
              </div>
            </div>
          </div>

          {/* Featured Experiences Block */}
          <div className="flex flex-col items-center mt-12 w-full">
            {/* Header */}
            <div className="text-center text-white mb-16 relative w-full">
              <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white/80">Featured Experiences</p>

              <div className="flex items-center justify-center gap-6 mb-6">

                <h2 className="text-3xl  font-bold">Designing Experiences That Inspire Action</h2>

              </div>

              <p className="text-white/70 leading-relaxed max-w-2xl mx-auto">
                We create experiences that bring together leaders, innovators, creators, policymakers and communities around the ideas shaping Africa's future.
              </p>

              {/* Navigation Arrows */}
              <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 gap-4">
                <button className="exp-prev w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                </button>
                <button className="exp-next w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </button>
              </div>
            </div>

            {/* Wide Carousel */}
            <div className="w-full relative pb-12">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                centeredSlides={true}
                loop={true}
                navigation={{
                  prevEl: '.exp-prev',
                  nextEl: '.exp-next',
                }}
                pagination={{
                  el: '.custom-pagination',
                  clickable: true,
                  renderBullet: function (index, className) {
                    return '<span class="' + className + ' custom-bullet"></span>';
                  },
                }}
                className="w-full max-w-[1200px] mx-auto"
              >
                <SwiperSlide>
                  <ExperienceCard
                    title="Makemation National AI Festival"
                    description="Africa's Pioneering AI-Inspired Storytelling Franchise Driving Conversations Around Innovation, Education And The Future Of Work."
                    image="/MAINMAKEMATION_IMG.png"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ExperienceCard
                    title="Rise Interactive Forums"
                    description="Connecting innovators and creators."
                    image="/HERO_CAROUSEL_IMG.png"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ExperienceCard
                    title="Creator Workshops"
                    description="Empowering the next generation of storytellers."
                    image="/HERO_CAROUSEL_IMG.png"
                  />
                </SwiperSlide>
              </Swiper>

              {/* Custom Pagination Container */}
              <div className="custom-pagination flex justify-center gap-2 items-center mt-8"></div>
            </div>
          </div>


        </div>
      </div>
      {/* Humachines Creative Challenge Block */}
      <div className="flex flex-col lg:flex-row gap-16 items-center  w-full  py-10 bg-[#303030]">

        {/* Left Image */}
        <div className="flex-1 w-full relative flex justify-center items-center">
          <img
            src="/HUMAN_MACHINES_IMG.png"
            alt="Humachines Creative Challenge"
            className="relative z-10 w-[90%] max-w-[500px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Text */}
        <div className="flex-1 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Humachines Creative Challenge</h2>
          <p className="text-white/80 leading-relaxed mb-10 text-[17px] max-w-xl">
            Where Human Creativity Meets Artificial Intelligence. The Humachines Creative Challenge invites creators to produce original content using AI-powered tools, pushing the boundaries of storytelling, creativity and digital expression. Hosted through DeyMake, the challenge provides a platform for creators to experiment, showcase their work and compete for recognition while exploring the future of creative production.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#44BB3D] text-white font-semibold py-3.5 px-8 rounded-lg hover:bg-[#3ca336] transition-colors shadow-lg shadow-[#44BB3D]/20">
              Learn More
            </button>
            <button className="border border-white/50 text-white font-semibold py-3.5 px-8 rounded-lg hover:bg-white/10 transition-colors">
              Join The Challenge
            </button>
          </div>
        </div>

      </div>

      {/* Creative Technology & AI + Platforms Section */}
      <div className="relative w-full overflow-hidden bg-[#303030] pt-24 pb-32">
        {/* Blue SVG Background */}
        <div className="absolute top-35 inset-0 z-0 pointer-events-none opacity-60 flex items-center justify-center">
          <svg width="100%" height="100%" viewBox="0 0 1440 1172" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M1394.73 1124.38C1394.73 1124.38 1155.82 1011.63 900.817 1189.66C645.812 1367.68 584.953 926.771 389.047 926.771C193.14 926.771 86.5106 1124.38 86.5106 1124.38L0 320.594C0 320.594 71.6731 193.009 318.379 31.3019C565.086 -130.405 787.146 387.057 1000.66 387.057C1214.17 387.057 1440 4.00464 1440 4.00464L1394.73 1124.38Z" fill="#1A237E" fillOpacity="0.3"/>
          </svg>
        </div>

        <div className="relative z-10 mx-[10%] flex flex-col gap-32">
          
          {/* Creative Technology & AI */}
          <div className="flex flex-col text-center items-center text-white">
            <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white/80">Creative Technology & AI</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Reimagining Storytelling Through Technology</h2>
            <p className="text-white/70 leading-relaxed max-w-2xl mb-12">
              We combine creativity and technology to create new forms of storytelling, audience engagement and content experiences. Capabilities include:
            </p>

            {/* Header controls layout */}
            <div className="w-full relative flex justify-center items-center mb-16">
              <button className="border border-white/30 text-white text-sm font-semibold py-3 px-8 rounded-md hover:bg-white/10 transition-colors">
                Explore Innovation
              </button>
              
              {/* Navigation Arrows for this carousel */}
              <div className="hidden md:flex absolute right-0 gap-4">
                 <button className="tech-prev w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer disabled:opacity-50">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                 </button>
                 <button className="tech-next w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer disabled:opacity-50">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                 </button>
              </div>
            </div>

            {/* Carousel */}
            <div className="w-full relative">
              <Swiper
                modules={[Navigation]}
                spaceBetween={24}
                slidesPerView={1.2}
                navigation={{
                  prevEl: '.tech-prev',
                  nextEl: '.tech-next',
                }}
                breakpoints={{
                  640: { slidesPerView: 2.2 },
                  1024: { slidesPerView: 4 }
                }}
                className="w-full pb-8"
              >
                {[
                  { title: "AI-Powered Content Production", image: "/HERO_CAROUSEL_IMG.png" },
                  { title: "AI Video Creation", image: "/HERO_CAROUSEL_IMG.png" },
                  { title: "Motion Graphics & Multimedia Design", image: "/HERO_CAROUSEL_IMG.png" },
                  { title: "Creative Technology Innovation", image: "/HERO_CAROUSEL_IMG.png" },
                  { title: "Immersive Experiences", image: "/HERO_CAROUSEL_IMG.png" },
                  { title: "Digital Storytelling", image: "/HERO_CAROUSEL_IMG.png" }
                ].map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="flex flex-col items-center gap-6 group cursor-pointer">
                      <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg relative">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                      </div>
                      <p className="text-sm text-white/90 font-medium text-center px-2 leading-relaxed">{item.title}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* PLATFORMS */}
          <div className="flex flex-col lg:flex-row gap-16 items-center text-white mt-12">
            <div className="flex-1 lg:max-w-md">
              <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white/80">Platforms</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Building Platforms for the Future</h2>
              <p className="text-white/70 leading-relaxed text-lg">
                Beyond content and experiences, we build digital platforms that empower creators, communities and cultural participation.
              </p>
            </div>

            <div className="flex-1 w-full relative">
              <img 
                src="/DEYMAKE_IMG.png" 
                alt="DeyMake Platform" 
                className="w-[700px] mx-auto object-contain drop-shadow-2xl" 
              />
            </div>
          </div>

        </div>
      </div>

      {/* Impact Section */}
      <div className="relative w-full overflow-hidden bg-[#303030] pt-16 pb-32">
        <div className="relative z-10 mx-[10%] px-6 md:px-12 flex flex-col gap-16">
          
          <div className="flex flex-col text-center items-center text-white max-w-3xl mx-auto">
            <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white/80">Impact</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Creating Value Beyond Content</h2>
            <p className="text-white/70 leading-relaxed text-lg">
              Our work is designed to inspire learning, drive innovation, amplify African voices and create opportunities for communities across Africa and beyond.
            </p>
          </div>

          <div className="flex flex-col w-full">
            <div className="w-full relative flex justify-between items-center mb-10">
              <div className="flex-1"></div>
              <p className="text-white/80 text-sm font-medium">Areas of Impact</p>
              <div className="flex-1 hidden md:flex justify-end gap-4">
                 <button className="impact-prev w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer disabled:opacity-50">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                 </button>
                 <button className="impact-next w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer disabled:opacity-50">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                 </button>
              </div>
            </div>

            {/* Carousel */}
            <div className="w-full relative">
              <Swiper
                modules={[Navigation]}
                spaceBetween={24}
                slidesPerView={1.2}
                navigation={{
                  prevEl: '.impact-prev',
                  nextEl: '.impact-next',
                }}
                breakpoints={{
                  640: { slidesPerView: 2.2 },
                  1024: { slidesPerView: 4 }
                }}
                className="w-full pb-8"
              >
                {[
                  { title: "Education & Future Skills", image: "/HERO_CAROUSEL_IMG.png" },
                  { title: "Creative Economy Development", image: "/HERO_CAROUSEL_IMG.png" },
                  { title: "Youth Empowerment", image: "/HERO_CAROUSEL_IMG.png" },
                  { title: "AI Literacy & Innovation", image: "/HERO_CAROUSEL_IMG.png" },
                  { title: "Community Building", image: "/HERO_CAROUSEL_IMG.png" },
                  { title: "Cultural Preservation", image: "/HERO_CAROUSEL_IMG.png" }
                ].map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="flex flex-col items-center gap-6 group cursor-pointer">
                      <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg relative">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                      </div>
                      <p className="text-sm text-white/90 font-medium text-center px-2">{item.title}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

        </div>
      </div>

      {/* Let's Build The Future Together Section */}
      <div className="relative w-full overflow-hidden bg-[#303030] py-10">
        <div className="relative z-10 mx-[10%] px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Image */}
          <div className="flex-1 w-full">
            <img 
              src="/BUILDFUTURE_IMG.png" 
              alt="Let's build the future together" 
              className="w-full h-auto rounded-3xl drop-shadow-2xl object-cover"
            />
          </div>

          {/* Right Text */}
          <div className="flex-1 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Let's Build The Future Together</h2>
            <p className="text-white/80 leading-relaxed mb-10 text-[17px] max-w-xl">
              Whether you're looking to create a production, design an experience, build a platform or explore new possibilities through storytelling and technology, we'd love to hear from you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#44BB3D] text-white font-semibold py-3.5 px-8 rounded-lg hover:bg-[#3ca336] transition-colors shadow-lg shadow-[#44BB3D]/20">
                Start a Conversation
              </button>
              <button className="border border-white/30 text-white font-semibold py-3.5 px-8 rounded-lg hover:bg-white/10 transition-colors">
                Explore Our Work
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home
