
import SlideUp from '../components/animations/SlideUp';
import FadeIn from '../components/animations/FadeIn';
import PageHero from '../components/ui/PageHero';
import Carousel from '../components/ui/Carousel';
import ContentCard from '../components/ui/ContentCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Experiences = () => {
  return (
    <div className="w-full bg-surface min-h-screen pb-20">
      <PageHero 
        title="Creating Experiences That Inspire Action" 
        backgroundImage="/EXPERIENCES_PAGE_HERO_IMG.png"
        curveColor="#303030"
      >
        <div className="flex flex-col gap-6 text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed">
          <p>
            Our experiences are designed to move beyond participation and become catalysts for creativity, collaboration and transformation. From festivals and cultural dialogues to strategic experience design and creative activations, we create platforms that spark conversations, inspire learning and create lasting impact
          </p>
        </div>
      </PageHero>
      {/* Our Philosophy Section */}
      <div className="relative z-10 mx-[5%] md:mx-[10%] pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column (Image) */}
          <div className="w-full">
            <FadeIn>
              <img 
                src="/OUR_PHILOSOPHY_EXP_PAGE.png" 
                alt="Our Philosophy" 
                className="w-full h-auto rounded-3xl object-cover drop-shadow-xl"
              />
            </FadeIn>
          </div>

          {/* Right Column (Text) */}
          <div className="text-white">
            <SlideUp delay={0.1}>
              <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white">OUR PHILOSOPHY</p>
            </SlideUp>
            <SlideUp delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">More Than Events</h2>
            </SlideUp>
            <SlideUp delay={0.3}>
              <p className="text-white/80 leading-relaxed text-[15px] md:text-base mb-6">
                We believe experiences have the power to shape ideas, strengthen communities and accelerate innovation. Every experience we create is intentionally designed to educate, inspire and connect people around themes that matter to the future of Africa and the world.
              </p>
            </SlideUp>
            <SlideUp delay={0.4}>
              <p className="text-white/80 leading-relaxed text-[15px] md:text-base">
                By combining creativity, culture, technology and storytelling, we create experiences that leave a lasting legacy long after the moment itself.
              </p>
            </SlideUp>
          </div>
        </div>
      </div>

      {/* Carousel & What We Do Section */}
      <div className="relative w-full overflow-hidden mt-32 pb-40">
        {/* Decorative Background SVG */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0 opacity-100">
          <svg width="100%" height="100%" viewBox="0 0 1440 1214" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M1453.96 1391.79C1453.96 1391.79 1195.14 1252.22 918.885 1472.59C642.63 1692.95 576.699 1147.18 364.467 1147.18C152.235 1147.18 36.72 1391.79 36.72 1391.79L-57 396.839C-57 396.839 20.6459 238.911 287.911 38.7463C555.176 -161.418 795.742 479.108 1027.04 479.108C1258.35 479.108 1503 4.95703 1503 4.95703L1453.96 1391.79Z" fill="#44BB3D" fillOpacity="0.3"/>
          </svg>
        </div>

        <div id="makemation-national" className="relative z-10 w-full pt-10 scroll-mt-24">
          <Carousel navPosition="bottom">
            <ContentCard
              category="FEATURED EXPERIENCES"
              title="Makemation National Youth AI Festival"
              description={
                <div className="flex flex-col gap-4 text-[13px] text-white/80 leading-relaxed">
                  <div>
                    <span className="font-bold text-white">Status:</span> Upcoming<br/>
                    <span className="font-bold text-white">Date:</span> 18 July 2026<br/>
                    <span className="font-bold text-white">Format:</span> National Innovation & Future Skills Festival
                  </div>
                  <p>
                    The Makemation National Youth AI Festival Is A Nationwide Movement Introducing Young People To Artificial Intelligence, Creativity, Innovation And Future Skills.
                  </p>
                  <p>
                    Designed To Inspire The Next Generation Of Innovators, Creators And Problem-Solvers, The Festival Brings Together Students, Educators, Entrepreneurs, Industry Leaders And Policymakers To Explore How Emerging Technologies Can Help Shape Africa's Future.
                  </p>
                  <p>
                    Inspired By The Makemation Story World, The Festival Extends The Impact Of Storytelling Into Real-World Learning, Innovation And Youth Empowerment. Registration: Aifest.Makemation.Com
                  </p>
                </div>
              }
              image="/FEATURED_IMG.png"
            />
            <ContentCard
              category="FEATURED EXPERIENCES"
              title="Makemation National Youth AI Festival"
              description={
                <div className="flex flex-col gap-4 text-[13px] text-white/80 leading-relaxed">
                  <div>
                    <span className="font-bold text-white">Status:</span> Upcoming<br/>
                    <span className="font-bold text-white">Date:</span> 18 July 2026<br/>
                    <span className="font-bold text-white">Format:</span> National Innovation & Future Skills Festival
                  </div>
                  <p>
                    The Makemation National Youth AI Festival Is A Nationwide Movement Introducing Young People To Artificial Intelligence, Creativity, Innovation And Future Skills.
                  </p>
                  <p>
                    Designed To Inspire The Next Generation Of Innovators, Creators And Problem-Solvers, The Festival Brings Together Students, Educators, Entrepreneurs, Industry Leaders And Policymakers To Explore How Emerging Technologies Can Help Shape Africa's Future.
                  </p>
                  <p>
                    Inspired By The Makemation Story World, The Festival Extends The Impact Of Storytelling Into Real-World Learning, Innovation And Youth Empowerment. Registration: Aifest.Makemation.Com
                  </p>
                </div>
              }
              image="/FEATURED_IMG.png"
            />
          </Carousel>
        </div>

        {/* What We Do Section */}
        <div className="relative z-10 mx-[5%] md:mx-[10%] pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
            
            {/* Left Column Text */}
            <div className="lg:col-span-1 text-white pt-10">
              <SlideUp delay={0.1}>
                <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white">EXPERIENCE DESIGN & DELIVERY</p>
              </SlideUp>
              <SlideUp delay={0.2}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">What We Do</h2>
              </SlideUp>
              <SlideUp delay={0.3}>
                <p className="text-white/80 leading-relaxed text-[15px] md:text-base">
                  We create experiences that combine creativity, technology and strategic thinking to achieve meaningful outcomes. Our capabilities include:
                </p>
              </SlideUp>
            </div>

            {/* Right Column Cards */}
            <div className="lg:col-span-2 min-w-0 relative">
              <Swiper
                modules={[Navigation]}
                spaceBetween={24}
                slidesPerView={1.2}
                navigation={{
                  prevEl: '.whatwedo-prev',
                  nextEl: '.whatwedo-next',
                }}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 2 },
                }}
                className="w-full"
              >
                {[
                  {
                    title: "Experience Strategy",
                    desc: "Designing experiences aligned with audience needs, stakeholder objectives and long-term impact goals.",
                    img: "/EXPERIENCE_STRATEGY_IMG.png",
                    bgClass: "bg-accent-purple"
                  },
                  {
                    title: "Creative Direction",
                    desc: "Developing compelling concepts, narratives and audience journeys that bring experiences to life.",
                    img: "/CREATIVE_DIRECTION_IMG.png",
                    bgClass: "bg-black"
                  },
                  {
                    title: "Experience Strategy",
                    desc: "Designing experiences aligned with audience needs, stakeholder objectives and long-term impact goals.",
                    img: "/EXPERIENCE_STRATEGY_IMG.png",
                    bgClass: "bg-accent-purple"
                  },
                  {
                    title: "Creative Direction",
                    desc: "Developing compelling concepts, narratives and audience journeys that bring experiences to life.",
                    img: "/CREATIVE_DIRECTION_IMG.png",
                    bgClass: "bg-black"
                  }
                ].map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="flex flex-col rounded-xl overflow-hidden border border-white/20 bg-primary-dark/30 backdrop-blur-sm h-full">
                      <div className={`w-full aspect-square ${item.bgClass} flex items-center justify-center p-8 relative`}>
                        <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: `url(${item.img})` }}></div>
                      </div>
                      <div className="p-6">
                        <h4 className="text-white font-bold mb-3">{item.title}</h4>
                        <p className="text-white/70 text-[13px] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          
          {/* Arrows */}
          <div className="w-full flex justify-end gap-4 mt-8">
            <button className="whatwedo-prev w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors disabled:opacity-50 cursor-pointer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18 l-6-6 6-6"/></svg>
            </button>
            <button className="whatwedo-next w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors disabled:opacity-50 cursor-pointer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 l6-6 -6-6"/></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Areas of Focus & Our Approach Section */}
      <div className="relative w-full overflow-hidden mt-20 pt-20 pb-40">
        {/* Blue SVG Background */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0 opacity-100">
          <svg width="100%" height="100%" viewBox="0 0 1440 1232" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M1394.73 1124.38C1394.73 1124.38 1155.82 1011.63 900.817 1189.66C645.812 1367.68 584.953 926.771 389.047 926.771C193.14 926.771 86.5106 1124.38 86.5106 1124.38L0 320.594C0 320.594 71.6731 193.009 318.379 31.3019C565.086 -130.405 787.146 387.057 1000.66 387.057C1214.17 387.057 1440 4.00464 1440 4.00464L1394.73 1124.38Z" fill="#1A237E" fillOpacity="0.3"/>
          </svg>
        </div>

        <div className="relative z-10 mx-[5%] md:mx-[10%]">
          {/* AREAS OF FOCUS */}
          <div className="flex flex-col text-center items-center text-white mb-20">
            <SlideUp delay={0.1}>
              <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white/80">AREAS OF FOCUS</p>
            </SlideUp>
            <SlideUp delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Experiences That Create Impact</h2>
            </SlideUp>
            <SlideUp delay={0.3}>
              <p className="text-white/80 leading-relaxed max-w-2xl">
                Our work focuses on themes that are shaping Africa's future. These Include:
              </p>
            </SlideUp>

            {/* Navigation Arrows for this carousel */}
            <div className="w-full flex justify-end gap-4 mt-8 mb-8">
              <button className="focus-prev w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer disabled:opacity-50">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18 l-6-6 6-6"/></svg>
              </button>
              <button className="focus-next w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer disabled:opacity-50">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 l6-6 -6-6"/></svg>
              </button>
            </div>

            {/* Carousel */}
            <div className="w-full relative">
              <Swiper
                modules={[Navigation]}
                spaceBetween={24}
                slidesPerView={1.2}
                navigation={{
                  prevEl: '.focus-prev',
                  nextEl: '.focus-next',
                }}
                breakpoints={{
                  640: { slidesPerView: 2.2 },
                  1024: { slidesPerView: 4 }
                }}
                className="w-full pb-8"
              >
                {[
                  { title: "Artificial Intelligence", image: "/AI_IMG.png" },
                  { title: "Innovation & Technology", image: "/INNOVATION_TECH_IMG.png" },
                  { title: "Future Skills", image: "/FUTURE_SKILLS_IMG.png" },
                  { title: "Youth Development", image: "/YOUTH_DEV_IMG.png" },
                  { title: "Artificial Intelligence", image: "/AI_IMG.png" },
                  { title: "Innovation & Technology", image: "/INNOVATION_TECH_IMG.png" },
                  { title: "Future Skills", image: "/FUTURE_SKILLS_IMG.png" },
                  { title: "Youth Development", image: "/YOUTH_DEV_IMG.png" }
                ].map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="flex flex-col items-center group cursor-pointer">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-auto mb-6 drop-shadow-lg transition-transform duration-700 group-hover:scale-105" 
                        onError={(e) => {e.currentTarget.style.display='none'}} 
                      />
                      <p className="text-sm text-white/90 font-medium text-center px-2 leading-relaxed">{item.title}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* OUR APPROACH */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-32">
            {/* Left Column (Image) */}
            <div className="w-full">
              <FadeIn>
                <img 
                  src="/OUR_APPROACH_EXPERIENCES_PAGE.png" 
                  alt="Designed For Lasting Impact" 
                  className="w-full h-auto rounded-3xl object-cover drop-shadow-xl"
                  onError={(e) => {e.currentTarget.src='/ABOUT_PG_OUR_STORY.png'}}
                />
              </FadeIn>
            </div>

            {/* Right Column (Text) */}
            <div className="text-white">
              <SlideUp delay={0.1}>
                <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white">OUR APPROACH</p>
              </SlideUp>
              <SlideUp delay={0.2}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Designed For Lasting Impact</h2>
              </SlideUp>
              <SlideUp delay={0.3}>
                <p className="text-white/80 leading-relaxed text-[15px] md:text-base mb-6">
                  We measure success not simply by attendance, but by the conversations, partnerships, ideas and opportunities that emerge from every experience.
                </p>
              </SlideUp>
              <SlideUp delay={0.4}>
                <p className="text-white/80 leading-relaxed text-[15px] md:text-base mb-4">
                  Our goal is to create experiences that:
                </p>
              </SlideUp>
              <SlideUp delay={0.5}>
                <ul className="text-white/80 leading-relaxed text-[15px] md:text-base space-y-2">
                  <li>• Inspire Learning</li>
                  <li>• Strengthen Communities</li>
                  <li>• Amplify Innovation</li>
                  <li>• Encourage Collaboration</li>
                  <li>• Celebrate Creativity</li>
                  <li>• Support Talent Development</li>
                  <li>• Drive Meaningful Change</li>
                </ul>
              </SlideUp>
            </div>
          </div>
        </div>
      </div>

      {/* LOOKING AHEAD Section */}
      <div className="relative z-10 mx-[5%] md:mx-[10%] pt-16 pb-32">
        <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white">LOOKING AHEAD</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">Building Experiences For The Future</h2>
        <p className="text-white/80 leading-relaxed text-[15px] md:text-base mb-2 max-w-4xl">
          Rise Interactive Studios is actively developing new experiences that bring together storytelling, culture, technology and innovation.
        </p>
        <p className="text-white/80 leading-relaxed text-[15px] md:text-base mb-12 max-w-4xl">
          Future areas of exploration include:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-accent-orange rounded-2xl p-6 md:p-8 flex items-center justify-center text-center min-h-[140px] md:min-h-[160px] shadow-xl hover:scale-[1.02] transition-transform">
            <span className="text-white font-bold text-sm md:text-[15px] drop-shadow-md px-2">Innovation Festivals</span>
          </div>
          <div className="bg-accent-cyan rounded-2xl p-6 md:p-8 flex items-center justify-center text-center min-h-[140px] md:min-h-[160px] shadow-xl hover:scale-[1.02] transition-transform">
            <span className="text-white font-bold text-sm md:text-[15px] drop-shadow-md px-2">Creative Technology Experiences</span>
          </div>
          <div className="bg-accent-brown rounded-2xl p-6 md:p-8 flex items-center justify-center text-center min-h-[140px] md:min-h-[160px] shadow-xl hover:scale-[1.02] transition-transform">
            <span className="text-white font-bold text-sm md:text-[15px] drop-shadow-md px-2">Storytelling & Culture Platforms</span>
          </div>
          <div className="bg-accent-blue-bright rounded-2xl p-6 md:p-8 flex items-center justify-center text-center min-h-[140px] md:min-h-[160px] shadow-xl hover:scale-[1.02] transition-transform">
            <span className="text-white font-bold text-sm md:text-[15px] drop-shadow-md px-2">Youth Innovation Programmes</span>
          </div>
          <div className="bg-accent-green rounded-2xl p-6 md:p-8 flex items-center justify-center text-center min-h-[140px] md:min-h-[160px] shadow-xl hover:scale-[1.02] transition-transform">
            <span className="text-white font-bold text-sm md:text-[15px] drop-shadow-md px-2">Creator Economy Experiences</span>
          </div>
          <div className="bg-accent-magenta-light rounded-2xl p-6 md:p-8 flex items-center justify-center text-center min-h-[140px] md:min-h-[160px] shadow-xl hover:scale-[1.02] transition-transform">
            <span className="text-white font-bold text-sm md:text-[15px] drop-shadow-md px-2">Global African Convenings</span>
          </div>
          <div className="bg-accent-pink rounded-2xl p-6 md:p-8 flex items-center justify-center text-center min-h-[140px] md:min-h-[160px] shadow-xl hover:scale-[1.02] transition-transform">
            <span className="text-white font-bold text-sm md:text-[15px] drop-shadow-md px-2">Learning & Future Skills Platforms</span>
          </div>
        </div>
      </div>

      {/* Great Experiences Section */}
      <div className="relative z-10 mx-[5%] md:mx-[10%] pt-20 pb-32">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Left Column (Image) */}
          <div className="w-full flex-1">
            <FadeIn>
              <img 
                src="/GREAT_EXPERIENCE_IMG.png" 
                alt="Great Experiences Create Lasting Legacies" 
                className="w-full h-auto rounded-3xl object-cover shadow-2xl"
                onError={(e) => {e.currentTarget.src='/OUR_APPROACH_IMG.png'}}
              />
            </FadeIn>
          </div>

          {/* Right Column (Text) */}
          <div className="text-white flex-1">
            <SlideUp delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Great Experiences Create Lasting Legacies</h2>
            </SlideUp>
            
            <SlideUp delay={0.2}>
              <p className="text-white/80 leading-relaxed text-[15px] md:text-base mb-6">
                We believe experiences should do more than bring people together.
              </p>
            </SlideUp>
            
            <SlideUp delay={0.3}>
              <p className="text-white/80 leading-relaxed text-[15px] md:text-base mb-10">
                They should inspire action, unlock opportunities, strengthen communities and shape the future. Through every festival, dialogue, activation and experience we create, our mission remains the same: To design experiences that move people, ideas and possibilities forward.
              </p>
            </SlideUp>
            
            <SlideUp delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-primary text-white font-semibold py-3.5 px-8 rounded-lg hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20 whitespace-nowrap">
                  Explore Our Story Worlds
                </button>
                <button className="flex-1 border border-white/30 text-white font-semibold py-3.5 px-8 rounded-lg hover:bg-white/10 transition-colors whitespace-nowrap">
                  Partner With Us
                </button>
              </div>
            </SlideUp>
          </div>
          
        </div>
      </div>

    </div>
  );
};

export default Experiences;
