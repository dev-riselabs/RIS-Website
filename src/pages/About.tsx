
import SlideUp from '../components/animations/SlideUp';
import FadeIn from '../components/animations/FadeIn';
import PageHero from '../components/ui/PageHero';
import Carousel from '../components/ui/Carousel';
import ContentCard from '../components/ui/ContentCard';
import VerticalPosterCard from '../components/ui/VerticalPosterCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const About = () => {
  return (
    <div className="w-full bg-surface min-h-screen pb-20">
      <PageHero 
        title="Building Africa's Future Media Ecosystem" 
        description="We believe African stories deserve global audiences, and we are building the systems, platforms and creative infrastructure to make that future possible."
        backgroundImage="/ABOUT_HERO_IMG.png"
        curveColor="#303030"
      />

      {/* Our Story Section */}
      <div id="our-story" className="relative z-10 mx-[10%] pt-20 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column (Image) */}
          <div className="w-full">
            <FadeIn>
              <img 
                src="/ABOUT_PG_OUR_STORY.png" 
                alt="Our Story" 
                className="w-full h-auto rounded-3xl object-cover drop-shadow-xl"
              />
            </FadeIn>
          </div>

          {/* Right Column (Text) */}
          <div className="text-white">
            <SlideUp delay={0.1}>
              <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white">OUR STORY</p>
            </SlideUp>
            <SlideUp delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Where Creativity Meets Possibility</h2>
            </SlideUp>
            <SlideUp delay={0.3}>
              <p className="text-white/80 leading-relaxed text-xl mb-6">
                Rise Interactive Studios was founded on a simple belief: Africa's next generation of stories, creators and cultural experiences will be powered by the convergence of creativity, technology and innovation.
              </p>
            </SlideUp>
            <SlideUp delay={0.4}>
              <p className="text-white/80 leading-relaxed text-xl mb-6">
                As storytelling continues to evolve, we see an opportunity to build more than productions. We are building a creative ecosystem where films, books, animations, music, experiences and digital platforms work together to amplify African voices and create lasting impact.
              </p>
            </SlideUp>
            <SlideUp delay={0.5}>
              <p className="text-white/80 leading-relaxed text-xl">
                Today, our work spans content creation, creative technology, publishing, cultural experiences, innovation platforms and intellectual property development designed for African and global audiences.
              </p>
            </SlideUp>
          </div>
        </div>
      </div>
      
      {/* Vision & Beliefs Section */}
      <div className="relative w-full bg-surface overflow-hidden">
        {/* Decorative Background SVG */}
        <div className="absolute inset-0 top-40 pointer-events-none flex items-center justify-center z-0 opacity-80">
          <svg width="100%" height="100%" viewBox="0 0 1440 1450" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M1453.96 1391.79C1453.96 1391.79 1195.14 1252.22 918.885 1472.59C642.63 1692.95 576.699 1147.18 364.467 1147.18C152.235 1147.18 36.72 1391.79 36.72 1391.79L-57 396.839C-57 396.839 20.6459 238.911 287.911 38.7463C555.176 -161.418 795.742 479.108 1027.04 479.108C1258.35 479.108 1503 4.95703 1503 4.95703L1453.96 1391.79Z" fill="#44BB3D" fillOpacity="0.3"/>
          </svg>
        </div>

        <div id="vision" className="relative z-10 mx-[10%] pt-40 pb-20 scroll-mt-24">
          
          {/* OUR VISION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="text-white order-2 lg:order-1">
              <SlideUp delay={0.1}>
                <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white">OUR VISION</p>
              </SlideUp>
              <SlideUp delay={0.2}>
                <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-6 leading-tight">A Future Built on African Stories</h2>
              </SlideUp>
              <SlideUp delay={0.3}>
                <p className="text-white/90 leading-relaxed text-xl mb-6">
                  We envision a future where African stories, ideas and creative talent influence culture, inspire innovation and shape conversations around the world.
                </p>
              </SlideUp>
              <SlideUp delay={0.4}>
                <p className="text-white/90 leading-relaxed text-xl">
                  Our ambition is to become one of Africa's leading media, entertainment and intellectual property companies, creating world-class productions, experiences and platforms that celebrate the continent's creativity and potential.
                </p>
              </SlideUp>
            </div>
            <div className="w-full order-1 lg:order-2">
              <FadeIn>
                <img 
                  src="/OUR_VISION_ABOUTPG_IMG.png" 
                  alt="Our Vision" 
                  className="w-full h-auto rounded-[2.5rem] object-cover drop-shadow-xl z-20 relative"
                />
              </FadeIn>
            </div>
          </div>

          {/* WHAT WE BELIEVE */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="w-full">
              <FadeIn>
                <img 
                  src="/WHAT_WE_BELIEVE_ABOUTPG_IMG.png" 
                  alt="What We Believe" 
                  className="w-full h-auto rounded-[2.5rem] object-cover drop-shadow-xl z-20 relative"
                />
              </FadeIn>
            </div>
            <div className="text-white">
              <SlideUp delay={0.1}>
                <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white">WHAT WE BELIEVE</p>
              </SlideUp>
              <SlideUp delay={0.2}>
                <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-6 leading-tight">Stories Have Power</h2>
              </SlideUp>
              <SlideUp delay={0.3}>
                <p className="text-white/90 leading-relaxed text-xl">
                  Stories inspire action, preserve culture, build communities and help people imagine new possibilities. We believe storytelling is one of the most powerful tools for education, innovation, social change and economic growth. That's why we invest in stories that entertain, educate and inspire.
                </p>
              </SlideUp>
            </div>
          </div>
        </div>

      </div>

      {/* Carousel Section */}
      <div className="relative z-10 w-full  pb-24">
        <div className="-mt-16 md:-mt-20 relative z-20">
          <Carousel>
            <ContentCard
              category="WHAT WE CREATE"
              title="Productions"
              description="Films, documentaries, series and screen-based storytelling experiences."
              buttonText="View slate"
              image="/AWOLOWO_IMG.png"
            />
            <ContentCard
              category="Original Series"
              title="Popular Jingo"
              description="Hosted By Toyosi Akerele-Ogunsiji, Popular Jingo Features Engaging Conversations With Leaders, Innovators, Creators And Changemakers Exploring Ideas, Opportunities And The Forces Shaping Africa And The World. Through Thoughtful Dialogue And Diverse Perspectives, The Series Creates A Space For Learning, Reflection And Meaningful Conversation."
              buttonText="View episodes"
              // image="/HERO_CAROUSEL_IMG.png"
              image="/HERO_CAROUSEL_IMG.jpeg"
            />
          </Carousel>
        </div>
      </div>

      {/* Approach & Impact Section */}
      <div className="relative w-full bg-surface overflow-hidden">
        {/* Decorative Background SVG */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0 opacity-100">
          <svg width="100%" height="100%" viewBox="0 0 1440 1053" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M1394.73 1124.38C1394.73 1124.38 1155.82 1011.63 900.817 1189.66C645.812 1367.68 584.953 926.771 389.047 926.771C193.14 926.771 86.5106 1124.38 86.5106 1124.38L0 320.594C0 320.594 71.6731 193.009 318.379 31.3019C565.086 -130.405 787.146 387.057 1000.66 387.057C1214.17 387.057 1440 4.00464 1440 4.00464L1394.73 1124.38Z" fill="#1A237E" fillOpacity="0.3"/>
          </svg>
        </div>

        <div className="relative z-10 mx-[5%] md:mx-[10%] pt-32 pb-40">
          {/* OUR APPROACH */}
          <div className="flex flex-col items-center text-center text-white max-w-3xl mx-auto mb-12">
            <SlideUp delay={0.1}>
              <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white">OUR APPROACH</p>
            </SlideUp>
            <SlideUp delay={0.2}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Human Creativity. Intelligent Technology.</h2>
            </SlideUp>
            <SlideUp delay={0.3}>
              <p className="text-white/80 leading-relaxed text-[15px] md:text-base">
                We combine creative excellence with emerging technologies to develop experiences that are imaginative, impactful and future ready. This enables us to create experiences that are both meaningful and scalable.
              </p>
            </SlideUp>
          </div>
          
          <div className="w-full flex justify-between items-center mb-8">
            <p className="text-white/70 text-sm md:text-base">Our approach integrates:</p>
            
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18 l-6-6 6-6"/></svg>
              </button>
              <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 l6-6 -6-6"/></svg>
              </button>
            </div>
          </div>
          
          {/* Approach Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-40">
            {[
              { title: "Storytelling", image: "/STORYTELLING_ABOUT_IMG.png" },
              { title: "Design", image: "/DESIGN_ABOUT_IMG.png" },
              { title: "Artificial Intelligence", image: "/AI_ABOUT_IMG.png" },
              { title: "Creative Technology", image: "/CREATIVE_TECH_IMG.png" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-auto mb-4  transition-transform duration-500 group-hover:scale-105" 
                  onError={(e) => e.currentTarget.style.display = 'none'} 
                />
                <h4 className="text-white text-sm font-medium">{item.title}</h4>
              </div>
            ))}
          </div>

          {/* OUR IMPACT */}
          <div className="w-full flex flex-col lg:flex-row justify-between ">
            <div className=" max-w-sm text-white lg:mb-12">
              <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white">OUR IMPACT</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Creating Value Beyond Entertainment</h2>
              <p className="text-white/80 leading-relaxed text-[15px]">
                We develop and produce stories that connect audiences, celebrate African excellence and explore the possibilities of tomorrow.
              </p>
            </div>
            
            <div className="flex-1 w-full lg:max-w-200 flex flex-col gap-6 overflow-hidden relative group lg:ml-auto">
              <Swiper
                modules={[Navigation]}
                spaceBetween={24}
                slidesPerView="auto"
                navigation={{
                  prevEl: '.impact-prev',
                  nextEl: '.impact-next',
                }}
                className="w-full pb-4"
              >
                <SwiperSlide className="!w-auto">
                  <div className="w-[220px] lg:w-[240px] h-[220px] rounded-xl bg-accent-green-alt p-8 flex items-center justify-center text-center hover:scale-[1.02] transition-transform">
                    <h4 className="text-white font-bold text-sm md:text-[15px] leading-tight">Youth Development</h4>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="!w-auto">
                  <div className="w-[220px] lg:w-[240px] h-[220px] rounded-xl bg-accent-magenta p-8 flex items-center justify-center text-center hover:scale-[1.02] transition-transform">
                    <h4 className="text-white font-bold text-sm md:text-[15px] leading-tight">Future Skills Education</h4>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="!w-auto">
                  <div className="w-[220px] lg:w-[240px] h-[220px] rounded-xl bg-accent-blue-alt p-8 flex items-center justify-center text-center hover:scale-[1.02] transition-transform">
                    <h4 className="text-white font-bold text-sm md:text-[15px] leading-tight">Creative Economy Growth</h4>
                  </div>
                </SwiperSlide>
              </Swiper>
              
              {/* Impact Arrows */}
              <div className="w-full flex justify-center gap-4 mt-2">
                <button className="impact-prev w-10 h-10 rounded-full border border-white text-white !flex items-center justify-center hover:bg-white hover:text-surface transition-colors cursor-pointer z-10 [&.swiper-button-disabled]:opacity-50 [&.swiper-button-disabled]:cursor-not-allowed [&.swiper-button-lock]:opacity-50 [&.swiper-button-lock]:cursor-not-allowed">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18 l-6-6 6-6"/></svg>
                </button>
                <button className="impact-next w-10 h-10 rounded-full border border-white text-white !flex items-center justify-center hover:bg-white hover:text-surface transition-colors cursor-pointer z-10 [&.swiper-button-disabled]:opacity-50 [&.swiper-button-disabled]:cursor-not-allowed [&.swiper-button-lock]:opacity-50 [&.swiper-button-lock]:cursor-not-allowed">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 l6-6 -6-6"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Ecosystem and Leadership  */}
      <div className="relative w-full overflow-hidden">
        {/* Decorative Background SVG */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0 opacity-100">
          <svg width="100%" height="100%" viewBox="0 0 1440 1391" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M1453.96 1391.79C1453.96 1391.79 1195.14 1252.22 918.885 1472.59C642.63 1692.95 576.699 1147.18 364.467 1147.18C152.235 1147.18 36.72 1391.79 36.72 1391.79L-57 396.839C-57 396.839 20.6459 238.911 287.911 38.7462C555.176 -161.418 795.742 479.108 1027.04 479.108C1258.35 479.108 1503 4.95691 1503 4.95691L1453.96 1391.79Z" fill="#44BB3D" fillOpacity="0.3"/>
          </svg>
        </div>

        <div className="relative z-10 mx-[5%] md:mx-[10%] pt-20 pb-40">
          {/* OUR ECOSYSTEM */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-40">
            {/* Left side text */}
            <div className="text-white pt-10">
              <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white">OUR ECOSYSTEM</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">Connected Through<br/>Creativity</h2>
              <p className="text-white/90 leading-relaxed text-[15px] mb-8 max-w-[400px]">
                Rise Interactive Studios is building an interconnected ecosystem of Story Worlds, Experiences, Platforms and Innovation initiatives designed to inspire creativity, amplify voices and create lasting impact.
              </p>
              <p className="text-white/90 leading-relaxed text-[15px] max-w-[400px]">
                Explore the productions, programmes, platforms and experiences shaping our future
              </p>
            </div>
            
            {/* Right side cards and subtitle */}
            <div className="flex flex-col">
              <div className="grid grid-cols-2 gap-6 mb-8">
                <VerticalPosterCard image="/MAKEMATION_IMG.png" footerText="Makemation" />
                <VerticalPosterCard image="/AWOLOWO_IMG.png" footerText="AWO" />
              </div>
              <div className="text-white">
                <h3 className="text-xl font-bold mb-4">Building Connections Across Stories, Experiences and Communities</h3>
                <p className="text-white/80 leading-relaxed text-[15px]">
                  From films and books to festivals, creator programmes, digital platforms and emerging technologies, our ecosystem is designed to inspire creativity, foster innovation and expand opportunities for communities across Africa and beyond.
                </p>
              </div>
            </div>
          </div>

          {/* LEADERSHIP */}
          <div id="leadership" className="flex flex-col items-center text-center text-white mb-12 scroll-mt-24">
            <SlideUp delay={0.1}>
              <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white">LEADERSHIP</p>
            </SlideUp>
            <SlideUp delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Team Behind The Vision</h2>
            </SlideUp>
            <SlideUp delay={0.3}>
              <p className="text-white/80 leading-relaxed text-[15px] max-w-2xl">
                A diverse network of storytellers, innovators, technologists, producers and creative thinkers working together to shape the future of African storytelling.
              </p>
            </SlideUp>
          </div>
          
          {/* Arrows */}
          <div className="w-full flex justify-end gap-4 mb-8">
            <button className="leadership-prev w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer disabled:opacity-50">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18 l-6-6 6-6"/></svg>
            </button>
            <button className="leadership-next w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer disabled:opacity-50">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 l6-6 -6-6"/></svg>
            </button>
          </div>
          
          {/* Slider Cards */}
          <div className="w-full relative">
            <Swiper
              modules={[Navigation]}
              spaceBetween={24}
              slidesPerView={1.5}
              breakpoints={{
                640: { slidesPerView: 2.5 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              navigation={{
                prevEl: '.leadership-prev',
                nextEl: '.leadership-next',
              }}
              className="w-full pb-4"
            >
              {[
                { name: "Team Member", role: "Leadership", image: "/FOR_FILMMAKERS.png" },
                { name: "Team Member", role: "Leadership", image: "/FOR_EDUCATORS.png" },
                { name: "Team Member", role: "Leadership", image: "/FOR_INVESTORS.png" },
                { name: "Team Member", role: "Leadership", image: "/FOR_CREATORS_4.png" },
                { name: "Team Member", role: "Leadership", image: "/AI_LAB_IMG.png" },
              ].map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div className="w-full aspect-[3/4] rounded-3xl overflow-hidden relative shadow-lg group bg-black/50">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onError={(e) => e.currentTarget.style.display = 'none'} />
                    <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black via-black/50 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute bottom-6 left-6 text-white z-20 pointer-events-none">
                      <h4 className="font-bold text-lg">{item.name}</h4>
                      <p className="text-white/80 text-sm">{item.role}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      {/* Join Us Section */}
      <div className="relative z-10 mx-[5%] md:mx-[10%] py-12 lg:py-24 mb-8 lg:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side Image */}
          <div className="w-full">
            <FadeIn>
              <img 
                src="/JOINASWEBUILDTHEFUTURE.png" 
                alt="Build the Future" 
                className="w-full h-auto rounded-3xl object-cover drop-shadow-xl"
              />
            </FadeIn>
          </div>
          
          {/* Right side Content */}
          <div className="text-white">
            <SlideUp delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-6 leading-tight">Join Us As We Build The Future</h2>
            </SlideUp>
            <SlideUp delay={0.2}>
              <p className="text-white/90 leading-relaxed text-[15px] md:text-base mb-10">
                We're creating stories, experiences, platforms and intellectual property that inspire, connect and transform. Whether you're a creator, partner, investor, institution or innovator, we invite you to be part of the journey.
              </p>
            </SlideUp>
            <SlideUp delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-lg font-medium transition-colors text-[15px]">
                  Partner With Us
                </button>
                <button className="bg-transparent border border-white/60 hover:border-white hover:bg-white/5 text-white px-8 py-3.5 rounded-lg font-medium transition-colors text-[15px]">
                  Explore Our Work
                </button>
              </div>
            </SlideUp>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
