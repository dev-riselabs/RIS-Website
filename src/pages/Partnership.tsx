
import SlideUp from '../components/animations/SlideUp'
import FadeIn from '../components/animations/FadeIn'
import PageHero from '../components/ui/PageHero'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const Partnership = () => {
  return (
    <div className="w-full bg-surface min-h-screen">
      <PageHero
        title="Let's Build The Future Together"
        description="Great stories, transformative experiences and meaningful innovation are rarely created alone. Whether you're a creator, filmmaker, educator, innovator, institution, brand, investor or community builder, we invite you to explore opportunities to collaborate with us."
        backgroundImage="/CONTACT_HERO_PAGE.png"
        curveColor="#303030"
      />

      <section className="relative w-full py-24 overflow-hidden">
        {/* Background SVG */}
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center mix-blend-screen opacity-50">
          <svg width="100%" height="100%" viewBox="0 0 1440 1415" fill="none" xmlns="http://www.w3.org/2000/svg" className="min-w-[1440px] w-full h-auto">
            <path fillRule="evenodd" clipRule="evenodd" d="M1450.96 1424.84C1450.96 1424.84 1192.14 1276.94 915.885 1510.46C639.63 1743.97 573.699 1165.64 361.467 1165.64C149.235 1165.64 33.72 1424.84 33.72 1424.84L-60 370.519C-60 370.519 17.6459 203.167 284.911 -8.94165C552.176 -221.051 792.742 457.698 1024.04 457.698C1255.35 457.698 1500 -44.7472 1500 -44.7472L1450.96 1424.84Z" fill="#44BB3D" fillOpacity="0.3"/>
          </svg>
        </div>

        <div className="relative z-10 mx-[5%] md:mx-[10%] flex flex-col gap-32">
          {/* Why Collaborate Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Image */}
            <div className="w-full">
              <FadeIn>
                <img src="/WHY_COLLABORATE_WITH_RIS.png" alt="Why Collaborate with RIS" className="w-full h-auto rounded-3xl shadow-xl" />
              </FadeIn>
            </div>
            {/* Right Content */}
            <div>
              <SlideUp delay={0.1}>
                <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white">Why Collaborate With RIS</p>
              </SlideUp>
              <SlideUp delay={0.2}>
                <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-6 text-white leading-tight">Building More Than Projects</h2>
              </SlideUp>
              <SlideUp delay={0.3}>
                <p className="text-white/90 text-[15px] md:text-base leading-relaxed">
                  We are creating an ecosystem of Story Worlds, Experiences, Platforms and Innovation initiatives designed to inspire, educate and shape the future. Our collaborations extend beyond individual projects to create long-term value, meaningful partnerships and lasting impact.
                </p>
              </SlideUp>
            </div>
          </div>

          {/* For Creators Section */}
          <div className="flex flex-col">
            <div className="text-center mb-12">
              <SlideUp delay={0.1}>
                <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white">For Creators</p>
              </SlideUp>
              <SlideUp delay={0.2}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Bring Your Creativity To The Ecosystem</h2>
              </SlideUp>
              <SlideUp delay={0.3}>
                <p className="text-white/90 text-[15px] md:text-base">We work with creators across multiple disciplines including:</p>
              </SlideUp>
            </div>

            <FadeIn delay={0.4}>
            <div className="relative w-full mb-12">
              {/* Custom Navigation */}
              <div className="flex justify-end gap-4 mb-6 relative z-20">
                <button className="creators-prev w-10 h-10 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/10 hover:border-white transition-colors cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6"/>
                  </svg>
                </button>
                <button className="creators-next w-10 h-10 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/10 hover:border-white transition-colors cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </button>
              </div>

              <Swiper
                modules={[Navigation]}
                spaceBetween={24}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  960: { slidesPerView: 3 },
                  1280: { slidesPerView: 4 },
                }}
                navigation={{
                  prevEl: '.creators-prev',
                  nextEl: '.creators-next',
                }}
                className="w-full"
              >
                {[
                  { img: 'FOR_CREATORS_1.png', label: 'Filmmakers' },
                  { img: 'FOR_CREATORS_2.png', label: 'Writers' },
                  { img: 'FOR_CREATORS_3.png', label: 'Storytellers' },
                  { img: 'FOR_CREATORS_4.png', label: 'Producers' },
                ].map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-full ">
                        <img src={`/${item.img}`} alt={item.label} className="w-full h-full object-cover" />
                      </div>
                      <p className="text-white text-sm font-medium">{item.label}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            </FadeIn>

            <SlideUp delay={0.5}>
              <p className="text-center text-white/90 text-[15px] md:text-base max-w-3xl mx-auto">
                Whether you're developing a story, building a creative project or exploring new ideas, we welcome opportunities to collaborate.
              </p>
            </SlideUp>
          </div>
        </div>
      </section>

      <section className="relative w-full py-24 overflow-hidden bg-transparent">
        {/* Background SVG */}
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center mix-blend-screen opacity-50">
          <svg width="100%" height="100%" viewBox="0 0 1440 1519" fill="none" xmlns="http://www.w3.org/2000/svg" className="min-w-[1440px] w-full h-auto">
            <path fillRule="evenodd" clipRule="evenodd" d="M1529.41 1386.31C1529.41 1386.31 1257.16 1247.29 966.556 1466.79C675.957 1686.29 606.602 1142.67 383.351 1142.67C160.099 1142.67 38.5861 1386.31 38.5861 1386.31L-60.0001 395.277C-60.0001 395.277 21.6774 237.971 302.82 38.5938C583.962 -160.783 837.019 477.223 1080.33 477.223C1323.64 477.223 1581 4.93738 1581 4.93738L1529.41 1386.31Z" fill="#1A237E" fillOpacity="0.3"/>
          </svg>
        </div>

        <div className="relative z-10 mx-[5%] md:mx-[10%] flex flex-col gap-32">
          {/* 1. For Filmmakers & Storytellers */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text (Left) */}
            <div className="order-2 lg:order-1">
              <SlideUp delay={0.1}>
                <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white">FOR FILMMAKERS & STORYTELLERS</p>
              </SlideUp>
              <SlideUp delay={0.2}>
                <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-6 text-white leading-tight uppercase">FOR FILMMAKERS &<br/>STORYTELLERS</h2>
              </SlideUp>
              <SlideUp delay={0.3}>
                <p className="text-white/90 text-[15px] md:text-base leading-relaxed mb-6">
                  We are actively building a growing portfolio of Story Worlds across film, books, original series and future media formats.
                </p>
              </SlideUp>
              <SlideUp delay={0.4}>
                <p className="text-white/90 text-[15px] md:text-base leading-relaxed mb-4">
                  Areas of collaboration include:
                </p>
              </SlideUp>
              <SlideUp delay={0.5}>
                <ol className="list-decimal pl-5 text-white/90 text-[15px] md:text-base space-y-1">
                  <li>Screenwriting</li>
                  <li>Film Development</li>
                  <li>Production</li>
                  <li>Story Research</li>
                  <li>Adaptation Development</li>
                  <li>Creative Partnerships</li>
                </ol>
              </SlideUp>
            </div>
            {/* Image (Right) */}
            <div className="w-full order-1 lg:order-2">
              <FadeIn>
                <img src="/FOR_FILMMAKERS.png" alt="For Filmmakers" className="w-full h-auto rounded-3xl shadow-xl" />
              </FadeIn>
            </div>
          </div>

          {/* 2. For Educators & Innovators */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image (Left) */}
            <div className="w-full">
              <FadeIn>
                <img src="/FOR_EDUCATORS.png" alt="For Educators" className="w-full h-auto rounded-3xl shadow-xl" />
              </FadeIn>
            </div>
            {/* Text (Right) */}
            <div>
              <SlideUp delay={0.1}>
                <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white">FOR EDUCATORS & INNOVATORS</p>
              </SlideUp>
              <SlideUp delay={0.2}>
                <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-6 text-white leading-tight">Inspire The Next Generation</h2>
              </SlideUp>
              <SlideUp delay={0.3}>
                <p className="text-white/90 text-[15px] md:text-base leading-relaxed">
                  Through programmes such as the Makemation National Youth AI Festivals, the Makemation UK-Nigerian AI Festival, the AFRIFF AI Workshop & Cultural Dialogue and future learning initiatives, we collaborate with educators, researchers, mentors and innovation leaders who share our passion for empowering young people.
                </p>
              </SlideUp>
            </div>
          </div>

          {/* 3. For Creators & Digital Communities */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text (Left) */}
            <div className="order-2 lg:order-1">
              <SlideUp delay={0.1}>
                <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white">FOR CREATORS & DIGITAL COMMUNITIES</p>
              </SlideUp>
              <SlideUp delay={0.2}>
                <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-6 text-white leading-tight">Build The Future Of Creativity</h2>
              </SlideUp>
              <SlideUp delay={0.3}>
                <p className="text-white/90 text-[15px] md:text-base leading-relaxed">
                  Through DeyMake and the Humachines Making Films Challenge, we are creating opportunities for creators to experiment, learn, collaborate and share their work with wider audiences. We welcome creators interested in exploring the future of storytelling, content creation and digital culture.
                </p>
              </SlideUp>
            </div>
            {/* Image (Right) */}
            <div className="w-full order-1 lg:order-2">
              <FadeIn>
                <img src="/BUILD_THE_FUTURE_OF_CREATIVITY.png" alt="Build The Future Of Creativity" className="w-full h-auto rounded-3xl shadow-xl" />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Organizations & Institutions Section */}
      <section className="relative w-full pb-32 pt-12 overflow-hidden z-10">
        <div className="mx-[5%] md:mx-[10%]">
          <div className="mb-12">
            <SlideUp delay={0.1}>
              <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white">FOR ORGANIZATIONS & INSTITUTIONS</p>
            </SlideUp>
            <SlideUp delay={0.2}>
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-6 text-white leading-tight">Create Experiences That Matter</h2>
            </SlideUp>
            <SlideUp delay={0.3}>
              <p className="text-white/90 text-[15px] md:text-base leading-relaxed mb-6 max-w-4xl">
                We collaborate with governments, educational institutions, development organizations, cultural institutions and private sector partners to design impactful experiences, creative initiatives and innovation programmes.
              </p>
            </SlideUp>
            <SlideUp delay={0.4}>
              <p className="text-white/90 text-[15px] md:text-base leading-relaxed mb-12">
                Areas of collaboration include:
              </p>
            </SlideUp>
          </div>

          <FadeIn delay={0.5}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-[#F93C40] rounded-[24px] lg:rounded-[32px] p-8 flex items-center justify-center min-h-[180px] text-center shadow-lg transition-transform hover:-translate-y-1">
              <h3 className="text-white font-bold text-lg md:text-xl">Experience Design</h3>
            </div>
            <div className="bg-[#03D5B5] rounded-[24px] lg:rounded-[32px] p-8 flex items-center justify-center min-h-[180px] text-center shadow-lg transition-transform hover:-translate-y-1">
              <h3 className="text-white font-bold text-lg md:text-xl">Strategic Storytelling</h3>
            </div>
            <div className="bg-[#3DC853] rounded-[24px] lg:rounded-[32px] p-8 flex items-center justify-center min-h-[180px] text-center shadow-lg transition-transform hover:-translate-y-1">
              <h3 className="text-white font-bold text-lg md:text-xl">Creative Technology</h3>
            </div>
            <div className="bg-[#FFCC00] rounded-[24px] lg:rounded-[32px] p-8 flex items-center justify-center min-h-[180px] text-center shadow-lg transition-transform hover:-translate-y-1">
              <h3 className="text-white font-bold text-lg md:text-xl">Cultural Programmes</h3>
            </div>
            <div className="bg-[#D341EE] rounded-[24px] lg:rounded-[32px] p-8 flex items-center justify-center min-h-[180px] text-center shadow-lg transition-transform hover:-translate-y-1">
              <h3 className="text-white font-bold text-lg md:text-xl">Knowledge Products</h3>
            </div>
            <div className="bg-[#0086FF] rounded-[24px] lg:rounded-[32px] p-8 flex items-center justify-center min-h-[180px] text-center shadow-lg transition-transform hover:-translate-y-1">
              <h3 className="text-white font-bold text-lg md:text-xl">Public Engagement Initiatives</h3>
            </div>
          </div>
          </FadeIn>
        </div>
      </section>

      {/* Brands & Sponsors Section */}
      <section className="relative w-full py-24 z-10">
        <div className="mx-[5%] md:mx-[10%] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image (Left) */}
          <div className="w-full">
            <FadeIn>
              <img src="/RESPONSIBLE_INNOVATION_IMG.png" alt="For Brands & Sponsors" className="w-full h-auto rounded-[24px] lg:rounded-[32px] shadow-xl" />
            </FadeIn>
          </div>
          {/* Text (Right) */}
          <div>
            <SlideUp delay={0.1}>
              <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white">FOR BRANDS & SPONSORS</p>
            </SlideUp>
            <SlideUp delay={0.2}>
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-6 text-white leading-tight">Align With Purpose-Driven Creativity</h2>
            </SlideUp>
            <SlideUp delay={0.3}>
              <p className="text-white/90 text-[15px] md:text-base leading-relaxed">
                Our productions, experiences, platforms and creator initiatives create opportunities for brands to engage with audiences through meaningful storytelling and impactful partnerships. We welcome collaborations that align with our values and vision.
              </p>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* Investors Section */}
      <section className="relative w-full pb-32 pt-12 z-10">
        <div className="mx-[5%] md:mx-[10%] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text (Left) */}
          <div className="order-2 lg:order-1">
            <SlideUp delay={0.1}>
              <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white">FOR INVESTORS & STRATEGIC PARTNERS</p>
            </SlideUp>
            <SlideUp delay={0.2}>
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-6 text-white leading-tight">Help Build The Future</h2>
            </SlideUp>
            <SlideUp delay={0.3}>
              <p className="text-white/90 text-[15px] md:text-base leading-relaxed">
                As we continue to expand our ecosystem of Story Worlds, Experiences, Platforms and Innovation initiatives, we welcome conversations with investors, production partners and strategic collaborators interested in supporting the next generation of African creativity and innovation.
              </p>
            </SlideUp>
          </div>
          {/* Image (Right) */}
          <div className="w-full order-1 lg:order-2">
            <FadeIn>
              <img src="/FOR_INVESTORS.png" alt="For Investors & Strategic Partners" className="w-full h-auto rounded-[24px] lg:rounded-[32px] shadow-xl" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Current Opportunities Section */}
      <section className="relative w-full py-24 bg-surface z-10">
        <div className="mx-[5%] md:mx-[10%] flex flex-col">
          <div className="text-center mb-12">
            <SlideUp delay={0.1}>
              <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white">CURRENT OPPORTUNITIES</p>
            </SlideUp>
            <SlideUp delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ways To Get Involved</h2>
            </SlideUp>
            <SlideUp delay={0.3}>
              <p className="text-white/90 text-[15px] md:text-base">Opportunities may include:</p>
            </SlideUp>
          </div>

          <FadeIn delay={0.4}>
          <div className="relative w-full">
            {/* Custom Navigation */}
            <div className="flex justify-end gap-4 mb-6 relative z-20">
              <button className="opps-prev w-10 h-10 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/10 hover:border-white transition-colors cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
              </button>
              <button className="opps-next w-10 h-10 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/10 hover:border-white transition-colors cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </button>
            </div>

            <Swiper
              modules={[Navigation]}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                960: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              navigation={{
                prevEl: '.opps-prev',
                nextEl: '.opps-next',
              }}
              className="w-full"
            >
              {[
                { img: 'FOR_CREATORS_1.png', label: 'Story Development Partnerships' },
                { img: 'FOR_CREATORS_2.png', label: 'Film Co-Productions' },
                { img: 'FOR_CREATORS_3.png', label: 'Festival Participation' },
                { img: 'FOR_CREATORS_4.png', label: 'Creator Programmes' },
              ].map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-full">
                      <img src={`/${item.img}`} alt={item.label} className="w-full h-auto object-cover" />
                    </div>
                    <p className="text-white text-sm font-medium text-center">{item.label}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          </FadeIn>
        </div>
      </section>

      <div className="relative z-10 mx-[5%] md:mx-[10%] py-20">
        <div 
          className="relative w-full rounded-[32px] overflow-hidden p-8 md:p-12 lg:p-20 shadow-2xl border border-surface-light bg-cover bg-center backdrop-blur-sm"
          style={{ backgroundImage: 'url(/CAROUSEL_CARD_BG.png)' }}
        >
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Column (Image) */}
            <div className="lg:col-span-5 w-full">
              <FadeIn>
                <div className="bg-white rounded-[24px] shadow-2xl flex items-center justify-center aspect-square w-full max-w-[400px] mx-auto lg:mx-0">
                  <img 
                    src="/THE_FUTURE_IS_BRIGHT.png" 
                    alt="Popular Jing Podcast" 
                    className="w-full h-auto object-contain"
                  />
                </div>
              </FadeIn>
            </div>

            {/* Right Column (Text & Buttons) */}
            <div className="lg:col-span-7 text-white">
              <SlideUp delay={0.1}>
                <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-6 leading-tight">Great Things Are Built Together</h2>
              </SlideUp>
              
              <SlideUp delay={0.2}>
                <p className="text-white/90 leading-relaxed text-[15px] md:text-base lg:text-lg mb-10 max-w-2xl">
                  Every film, experience, platform and initiative begins with people who believe in the power of creativity to make a difference.  If you're interested in creating stories, shaping culture, exploring innovation or building something meaningful, we'd love to hear  from you.
                </p>
              </SlideUp>
              
              <SlideUp delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-primary hover:bg-primary-hover text-white font-medium rounded-lg px-6 py-3 transition-colors text-[15px] cursor-pointer">
                  Start A Conversation
                  </button>
                  <button className="border border-white/50 hover:border-white text-white font-medium rounded-lg px-6 py-3 transition-colors text-[15px] cursor-pointer bg-transparent">
                  Contact Our Team
                  </button>
                </div>
              </SlideUp>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partnership
