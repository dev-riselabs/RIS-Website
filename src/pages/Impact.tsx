
import SlideUp from '../components/animations/SlideUp'
import FadeIn from '../components/animations/FadeIn'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import ExperienceCard from '../components/ui/ExperienceCard'
import PageHero from '../components/ui/PageHero'

const Impact = () => {
  return (
    <div className="w-full bg-surface min-h-screen">
      <PageHero
        title={<>Building Culture. Inspiring Innovation.<br/>Expanding Possibility.</>}
        description="Our impact is measured not only by what we produce, but by what our work makes possible."
        backgroundImage="/IMPACT_HERO_IMG.png"
        curveColor="#303030"
      />

      {/* Why Impact Matters Section */}
      <section className="px-[10%] py-24 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <div className="text-white space-y-6">
            <SlideUp delay={0.1}>
              <h3 className="text-sm font-bold tracking-widest uppercase">Why Impact Matters</h3>
            </SlideUp>
            <SlideUp delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">Stories Can Change More Than Screens</h2>
            </SlideUp>
            <SlideUp delay={0.3}>
              <div className="space-y-1 text-white/90 text-lg">
                <p>A film can inspire a movement.</p>
                <p>A platform can empower a generation of creators.</p>
                <p>A festival can ignite curiosity and innovation.</p>
                <p>A story can preserve history and shape culture.</p>
                <p className="pt-4">We believe meaningful impact happens when creativity moves beyond consumption and becomes participation, learning, collaboration and transformation. That belief guides everything we create.</p>
              </div>
            </SlideUp>
          </div>
          
          {/* Right Image */}
          <div className="w-full">
            <FadeIn>
              <img 
                src="/THE_FUTURE_OF_CONTENT.png" 
                alt="The Future of Content Creation with AI" 
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How We Create Impact Section */}
      <section className="relative px-[10%] py-24 bg-surface overflow-hidden">
        {/* SVG Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full  pointer-events-none opacity-50 z-0">
          <svg width="100%" height="100%" viewBox="0 0 1440 1379" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M1450.96 1391.79C1450.96 1391.79 1192.14 1252.22 915.885 1472.59C639.63 1692.95 573.699 1147.18 361.467 1147.18C149.235 1147.18 33.72 1391.79 33.72 1391.79L-60 396.839C-60 396.839 17.6459 238.911 284.911 38.7463C552.176 -161.418 792.742 479.108 1024.04 479.108C1255.35 479.108 1500 4.95703 1500 4.95703L1450.96 1391.79Z" fill="#44BB3D" fillOpacity="0.3"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <SlideUp delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-16 uppercase tracking-wider">
              How We Create Impact
            </h2>
          </SlideUp>

          <FadeIn delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1 */}
            <div className="relative group overflow-hidden rounded-lg w-full mx-auto flex flex-col justify-end p-8 md:p-10 border border-white/10 shadow-[6px_0px_0px_rgba(255,255,255,0.8)]" style={{ height: '550px' }}>
              <img 
                src="/THROUGH_WORLDS_IMG.jpg" 
                alt="Through Story Worlds"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0"
              />
              <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black via-black/80 to-black/50 z-10"></div>
              
              <div className="relative z-20 text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase tracking-wider">Through Story Worlds</h3>
                <p className="text-white/90 leading-relaxed text-sm md:text-base">
                  We develop stories that entertain, educate and inspire. From films and books to future adaptations and creative experiences, our Story Worlds are designed to spark conversations, preserve legacies and expand perspectives. We believe African stories deserve global audiences and lasting cultural influence.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative group overflow-hidden rounded-lg w-full mx-auto flex flex-col justify-end p-8 md:p-10 border border-white/10 shadow-[6px_0px_0px_rgba(255,255,255,0.8)]" style={{ height: '550px' }}>
              <img 
                src="/THROUGH_EXPERIENCES_IMG.jpg" 
                alt="Through Experiences"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0"
              />
              <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black via-black/80 to-black/50 z-10"></div>
              
              <div className="relative z-20 text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase tracking-wider">Through Experiences</h3>
                <div className="text-white/90 leading-relaxed space-y-4 text-sm md:text-base">
                  <p>Our experiences create spaces for learning, dialogue, creativity and discovery. Whether through festivals, cultural programmes, innovation platforms or strategic activations, we bring people together around ideas that shape the future.</p>
                  <p>We create experiences that inspire participation rather than passive attendance.</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative group overflow-hidden rounded-lg w-full mx-auto flex flex-col justify-end p-8 md:p-10 border border-white/10 shadow-[6px_0px_0px_rgba(255,255,255,0.8)]" style={{ height: '550px' }}>
              <img 
                src="/THROUGH_PLATFORMS_IMG.png" 
                alt="Through Platforms"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0"
              />
              <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black via-black/80 to-black/50 z-10"></div>
              
              <div className="relative z-20 text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase tracking-wider">Through Platforms</h3>
                <div className="text-white/90 leading-relaxed space-y-4 text-sm md:text-base">
                  <p>Technology has the power to democratize creativity. Through platforms like DeyMake, we are helping creators find audiences, build communities and participate in the future of digital culture.</p>
                  <p>Our goal is to create ecosystems where creativity can thrive.</p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative group overflow-hidden rounded-lg w-full mx-auto flex flex-col justify-end p-8 md:p-10 border border-white/10 shadow-[6px_0px_0px_rgba(255,255,255,0.8)]" style={{ height: '550px' }}>
              <img 
                src="/THROUGH_INNOVATION_IMG.jpg" 
                alt="Through Innovation"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0"
              />
              <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black via-black/80 to-black/50 z-10"></div>
              
              <div className="relative z-20 text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase tracking-wider">Through Innovation</h3>
                <p className="text-white/90 leading-relaxed text-sm md:text-base">
                  We explore how emerging technologies can unlock new forms of storytelling, creative expression and audience engagement. Through our AI Creative Lab, we help creators, learners and communities understand and embrace the opportunities created by artificial intelligence and future technologies.
                </p>
              </div>
            </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Impact In Action Section */}
      <section className="relative w-full py-24 my-24 bg-surface overflow-hidden">
        {/* Blue SVG Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1440px] pointer-events-none z-0">
          <svg width="100%" height="100%" viewBox="0 0 1440 1232" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M1394.73 1124.38C1394.73 1124.38 1155.82 1011.63 900.817 1189.66C645.812 1367.68 584.953 926.771 389.047 926.771C193.14 926.771 86.5106 1124.38 86.5106 1124.38L0 320.594C0 320.594 71.6731 193.009 318.379 31.3019C565.086 -130.405 787.146 387.057 1000.66 387.057C1214.17 387.057 1440 4.00464 1440 4.00464L1394.73 1124.38Z" fill="#1A237E" fillOpacity="0.3"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-[5%] md:px-[10%]">
          <div className="flex flex-col items-center mt-12 w-full">
            {/* Header */}
            <div className="text-center text-white mb-16 relative w-full">
              <SlideUp delay={0.1}>
                <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white/80">Impact In Action</p>
              </SlideUp>
              <SlideUp delay={0.2}>
                <div className="flex items-center justify-center gap-6 mb-6">
                  <h2 className="text-3xl font-bold">Creating Ecosystems, Not Isolated Projects</h2>
                </div>
              </SlideUp>

              {/* Navigation Arrows */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 flex gap-4">
                <button className="impact-prev w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                </button>
                <button className="impact-next w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
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
                  prevEl: '.impact-prev',
                  nextEl: '.impact-next',
                }}
                pagination={{
                  el: '.impact-pagination',
                  clickable: true,
                  renderBullet: function (_index, className) {
                    return '<span class="' + className + ' custom-bullet"></span>';
                  },
                }}
                className="w-full max-w-[1200px] mx-auto"
              >
                <SwiperSlide>
                  <ExperienceCard
                    title="MAKEMATION"
                    description="What began as a feature film has evolved into a growing ecosystem connecting storytelling, artificial intelligence, education, innovation and youth development. Today, the Makemation movement extends beyond the screen through festivals, learning experiences and future skills engagement initiatives."
                    image="/MAINMAKEMATION_IMG.png"
                  />
                </SwiperSlide>
              </Swiper>

              {/* Custom Pagination Container */}
              <div className="impact-pagination custom-pagination flex justify-center gap-2 items-center mt-8"></div>
            </div>
          </div>
        </div>
      </section>

      {/* The Future We Are Building Section */}
      <section className="relative px-[10%] py-24 bg-surface">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Image */}
          <div className="w-full lg:w-1/2">
            <FadeIn>
              <img 
                src="/THE_FUTURE_WE_ARE_BUILDING_IMG.png" 
                alt="The Future We Are Building"
                className="w-full h-auto rounded-3xl shadow-2xl object-cover"
              />
            </FadeIn>
          </div>
          
          {/* Right Text */}
          <div className="w-full lg:w-1/2 text-white">
            <SlideUp delay={0.1}>
              <h4 className="text-sm font-bold tracking-widest uppercase mb-4 text-white/80">The Future We Are Building</h4>
            </SlideUp>
            <SlideUp delay={0.2}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">A More Creative, Connected and Innovative Africa</h2>
            </SlideUp>
            
            <SlideUp delay={0.3}>
              <p className="text-white/90 mb-6 text-lg">We envision a future where:</p>
            </SlideUp>
            
            <SlideUp delay={0.4}>
              <ol className="list-decimal list-outside ml-5 space-y-3 text-white/90 mb-8 text-base md:text-lg font-light">
                <li className="pl-2">African stories travel across borders and generations.</li>
                <li className="pl-2">Young people have access to future-ready skills.</li>
                <li className="pl-2">Creators have platforms to share their work and grow their audiences.</li>
                <li className="pl-2">Technology amplifies creativity rather than replaces it.</li>
                <li className="pl-2">Culture remains a source of inspiration, innovation and identity.</li>
                <li className="pl-2">Creative industries contribute meaningfully to economic growth and opportunity.</li>
              </ol>
            </SlideUp>
            
            <SlideUp delay={0.5}>
              <p className="text-white/90 text-lg">Everything we create contributes to this larger vision.</p>
            </SlideUp>
          </div>
        </div>
      </section>
      {/* Our Commitment Section */}
      <section className="relative px-[10%] py-24 bg-surface">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Text */}
          <div className="w-full lg:w-1/2 text-white">
            <SlideUp delay={0.1}>
              <h4 className="text-sm font-bold tracking-widest uppercase mb-4 text-white">Our Commitment</h4>
            </SlideUp>
            <SlideUp delay={0.2}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">Creating Work That Matters</h2>
            </SlideUp>
            
            <SlideUp delay={0.3}>
              <div className="space-y-2 text-white/90 text-base md:text-lg font-light leading-relaxed">
                <p>We are committed to building stories, experiences, platforms and innovations that create lasting value.</p>
                <p>Not every project will look the same.</p>
                <p>Not every audience will be the same.</p>
                <p>But the mission remains constant:</p>
                <p>To create meaningful work that inspires imagination, strengthens communities and expands what is possible.</p>
              </div>
            </SlideUp>
          </div>
          
          {/* Right Image */}
          <div className="w-full lg:w-1/2">
            <FadeIn>
              <img 
                src="/OUR_COMMITMENT_IMG.png" 
                alt="Our Commitment"
                className="w-full h-auto rounded-3xl shadow-2xl object-cover"
              />
            </FadeIn>
          </div>
        </div>
      </section>

        {/* The Future Is Creative Section */}
      <div className="relative z-10 mx-[5%] md:mx-[10%] pt-10 pb-20">
        <div 
          className="relative w-full rounded-[32px] overflow-hidden p-8 md:p-12 lg:p-20 shadow-2xl border border-surface-light bg-cover bg-center backdrop-blur-sm"
          style={{ backgroundImage: 'url(/CAROUSEL_CARD_BG.png)' }}
        >
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Column (Image) */}
            <div className="lg:col-span-5 w-full">
              <FadeIn>
                <div className="bg-white rounded-[24px] p-8 md:p-12 shadow-2xl flex items-center justify-center aspect-square w-full max-w-[400px] mx-auto lg:mx-0">
                  <img 
                    src="/POPULAR_JING_IMG.png" 
                    alt="Popular Jing Podcast" 
                    className="w-full h-auto object-contain"
                  />
                </div>
              </FadeIn>
            </div>

            {/* Right Column (Text & Buttons) */}
            <div className="lg:col-span-7 text-white">
              <SlideUp delay={0.1}>
                <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-6 leading-tight">The Future Is Creative</h2>
              </SlideUp>
              
              <SlideUp delay={0.2}>
                <p className="text-white/90 leading-relaxed text-[15px] md:text-base lg:text-lg mb-10 max-w-2xl">
                  Technology alone does not change the world. People do. Our mission is to help creators, storytellers, innovators and communities harness emerging technologies to build a future that is imaginative, inclusive and impactful.
                </p>
              </SlideUp>
              
              <SlideUp delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white font-medium rounded-lg px-6 py-3 transition-colors text-[15px] cursor-pointer">
                    Explore Our Story Worlds
                  </button>
                  <button className="w-full sm:w-auto border border-white/50 hover:border-white text-white font-medium rounded-lg px-6 py-3 transition-colors text-[15px] cursor-pointer bg-transparent">
                    Explore Our Experiences
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

export default Impact
