import React from 'react';
import SlideUp from '../components/animations/SlideUp';
import FadeIn from '../components/animations/FadeIn';
import PageHero from '../components/ui/PageHero';

const Platforms = () => {
  return (
    <div className="w-full bg-surface min-h-screen pb-20">
      <PageHero 
        title="Building Platforms For Creativity, Community and Connection"
        description="We create platforms that empower creators, connect communities and unlock new opportunities for participation, expression and engagement."
        backgroundImage="/PLATFORMS_HERO_IMG.png"
      />

      {/* Our Approach Section */}
      <div className="relative z-10 mx-[5%] md:mx-[10%] pt-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (Image) */}
          <div className="w-full">
            <FadeIn>
              <img 
                src="/TECH_IN_SERVICE_IMG.png" 
                alt="Technology In Service Of Creativity" 
                className="w-full h-auto rounded-3xl object-cover shadow-2xl"
              />
            </FadeIn>
          </div>

          {/* Right Column (Text) */}
          <div className="text-white">
            <SlideUp delay={0.1}>
              <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white">OUR APPROACH</p>
            </SlideUp>
            <SlideUp delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Technology In Service Of Creativity</h2>
            </SlideUp>
            
            <SlideUp delay={0.3}>
              <p className="text-white/80 leading-relaxed text-[15px] md:text-base mb-6 font-medium">
                Technology is not the destination. It is the enabler.
              </p>
            </SlideUp>
            
            <SlideUp delay={0.4}>
              <p className="text-white/80 leading-relaxed text-[15px] md:text-base mb-10">
                We develop platforms that combine creativity, culture, innovation and human connection to create meaningful digital experiences. Our goal is to build products that amplify voices, support creators and create lasting value for communities.
              </p>
            </SlideUp>
            
          </div>
          
        </div>
      </div>

      {/* DeyMake Section */}
      <div id="deymake" className="relative w-full overflow-hidden bg-surface pt-20 scroll-mt-24">
        {/* Green SVG Background */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0 opacity-100">
          <svg width="100%" height="100%" viewBox="0 0 1440 1368" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M1450.96 1391.79C1450.96 1391.79 1192.14 1252.22 915.885 1472.59C639.63 1692.95 573.699 1147.18 361.467 1147.18C149.235 1147.18 33.72 1391.79 33.72 1391.79L-60 396.839C-60 396.839 17.6459 238.911 284.911 38.7463C552.176 -161.418 792.742 479.108 1024.04 479.108C1255.35 479.108 1500 4.95703 1500 4.95703L1450.96 1391.79Z" fill="#44BB3D" fillOpacity="0.3"/>
          </svg>
        </div>

        <div className="relative z-10 mx-[5%] md:mx-[10%]">
          
          <div className="max-w-4xl text-white mb-16">
            <SlideUp delay={0.1}>
              <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white">FEATURED PLATFORM</p>
            </SlideUp>
            <SlideUp delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">DEYMAKE</h2>
            </SlideUp>
            <SlideUp delay={0.3}>
              <p className="text-lg md:text-xl font-bold mb-1">Africa's Social UGC Platform</p>
            </SlideUp>
            <SlideUp delay={0.4}>
              <p className="text-white/80 mb-8 text-sm"><span className="font-bold text-white">Status:</span> Active</p>
            </SlideUp>
            
            <SlideUp delay={0.5}>
              <p className="text-white/80 leading-relaxed text-[15px] md:text-base mb-4">
                DeyMake is a social user-generated content platform designed for creators, communities and culture.
              </p>
            </SlideUp>
            <SlideUp delay={0.6}>
              <p className="text-white/80 leading-relaxed text-[15px] md:text-base mb-4">
                Built to support creativity, collaboration and self-expression, DeyMake provides a space where users can create, share and discover content while connecting with audiences who share their interests and passions.
              </p>
            </SlideUp>
            <SlideUp delay={0.7}>
              <p className="text-white/80 leading-relaxed text-[15px] md:text-base mb-10">
                The platform reflects our belief that the future of storytelling is participatory, community-driven and creator-led.
              </p>
            </SlideUp>

            <SlideUp delay={0.8}>
              <h3 className="text-xl md:text-2xl font-bold mb-4">What DeyMake Enables</h3>
            </SlideUp>
            <SlideUp delay={0.9}>
              <ul className="text-white/80 space-y-1 mb-10 text-[15px] md:text-base">
                <li>• Content Creation</li>
                <li>• Community Building</li>
                <li>• Creator Growth</li>
                <li>• User-Generated Content</li>
                <li>• Cultural Expression</li>
                <li>• Audience Engagement</li>
                <li>• Digital Participation</li>
              </ul>
            </SlideUp>

            <SlideUp delay={1.0}>
              <button className="bg-primary hover:bg-primary-hover text-white font-medium py-3 px-12 rounded-lg transition-colors shadow-lg shadow-primary/20">
                Visit DeyMake
              </button>
            </SlideUp>
          </div>

          {/* Platform Image */}
          <div className="w-full">
            <FadeIn>
              <img 
                src="/DEY_MAKE_IMG.png" 
                alt="DeyMake Platform Interface" 
                className="w-full h-auto  object-contain shadow-2xl"
              />
            </FadeIn>
          </div>

        </div>
      </div>

      {/* Why Platforms Matter & Our Platform Vision Section */}
      <div className="relative w-full overflow-hidden bg-surface pt-20 pb-40">
        {/* Blue SVG Background */}
        <div className="absolute inset-0 top-40 pointer-events-none flex items-center justify-center z-0 opacity-100">
          <svg width="100%" height="100%" viewBox="0 0 1440 1232" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M1394.73 1124.38C1394.73 1124.38 1155.82 1011.63 900.817 1189.66C645.812 1367.68 584.953 926.771 389.047 926.771C193.14 926.771 86.5106 1124.38 86.5106 1124.38L0 320.594C0 320.594 71.6731 193.009 318.379 31.3019C565.086 -130.405 787.146 387.057 1000.66 387.057C1214.17 387.057 1440 4.00464 1440 4.00464L1394.73 1124.38Z" fill="#1A237E" fillOpacity="0.3"/>
          </svg>
        </div>

        <div className="relative z-10 mx-[5%] md:mx-[10%]">
          
          {/* WHY PLATFORMS MATTER */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center mb-32">
            {/* Left Column (Text) */}
            <div className="text-white flex-1">
              <SlideUp delay={0.1}>
                <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white">WHY PLATFORMS MATTER</p>
              </SlideUp>
              <SlideUp delay={0.2}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Expanding The Storytelling Ecosystem</h2>
              </SlideUp>
              
              <SlideUp delay={0.3}>
                <p className="text-white/80 leading-relaxed text-[15px] md:text-base">
                  Stories today exist across multiple formats and touchpoints. Platforms provide new ways for people to participate in storytelling rather than simply consume it. By creating digital communities and creator ecosystems, we help audiences become active contributors to culture and conversation.
                </p>
              </SlideUp>
            </div>
            
            {/* Right Column (Image) */}
            <div className="w-full flex-1 flex justify-center lg:justify-end">
              <FadeIn>
                <img 
                  src="/WHY_PLATFORMS_MATTER_IMG.png" 
                  alt="Expanding The Storytelling Ecosystem" 
                  className="w-[90%] md:w-[80%] lg:w-[800px] h-auto object-contain drop-shadow-2xl"
                />
              </FadeIn>
            </div>
          </div>

          {/* OUR PLATFORM VISION */}
          <div className="mb-16">
            <SlideUp delay={0.1}>
              <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white">OUR PLATFORM VISION</p>
            </SlideUp>
            <SlideUp delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">Creating The Next Generation Of African Digital Experiences</h2>
            </SlideUp>
            <SlideUp delay={0.3}>
              <p className="text-white/80 leading-relaxed text-[15px] md:text-base mb-6 max-w-4xl">
                We envision a future where African creators have access to platforms that reflect their realities, celebrate their creativity and connect them to opportunities across the continent and beyond.
              </p>
            </SlideUp>
            <SlideUp delay={0.4}>
              <p className="text-white/80 leading-relaxed text-[15px] md:text-base mb-12 max-w-4xl">
                Our platform strategy focuses on:
              </p>
            </SlideUp>

            {/* Grid of colors */}
            <FadeIn delay={0.5}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {/* Creator Empowerment */}
              <div className="bg-accent-pink rounded-2xl p-6 md:p-8 flex items-center justify-center text-center min-h-[140px] md:min-h-[160px] shadow-xl hover:scale-[1.02] transition-transform">
                <span className="text-white font-bold text-sm md:text-[15px] drop-shadow-md px-2">Creator Empowerment</span>
              </div>
              {/* Community Engagement */}
              <div className="bg-accent-cyan rounded-2xl p-6 md:p-8 flex items-center justify-center text-center min-h-[140px] md:min-h-[160px] shadow-xl hover:scale-[1.02] transition-transform">
                <span className="text-white font-bold text-sm md:text-[15px] drop-shadow-md px-2">Community Engagement</span>
              </div>
              {/* Cultural Participation */}
              <div className="bg-accent-green-alt rounded-2xl p-6 md:p-8 flex items-center justify-center text-center min-h-[140px] md:min-h-[160px] shadow-xl hover:scale-[1.02] transition-transform">
                <span className="text-white font-bold text-sm md:text-[15px] drop-shadow-md px-2">Cultural Participation</span>
              </div>
              {/* Digital Innovation */}
              <div className="bg-accent-yellow rounded-2xl p-6 md:p-8 flex items-center justify-center text-center min-h-[140px] md:min-h-[160px] shadow-xl hover:scale-[1.02] transition-transform">
                <span className="text-white font-bold text-sm md:text-[15px] drop-shadow-md px-2">Digital Innovation</span>
              </div>
              {/* Future Media Experiences */}
              <div className="bg-accent-magenta-light rounded-2xl p-6 md:p-8 flex items-center justify-center text-center min-h-[140px] md:min-h-[160px] shadow-xl hover:scale-[1.02] transition-transform">
                <span className="text-white font-bold text-sm md:text-[15px] drop-shadow-md px-2">Future Media Experiences</span>
              </div>
              {/* Knowledge Sharing */}
              <div className="bg-accent-blue-bright rounded-2xl p-6 md:p-8 flex items-center justify-center text-center min-h-[140px] md:min-h-[160px] shadow-xl hover:scale-[1.02] transition-transform">
                <span className="text-white font-bold text-sm md:text-[15px] drop-shadow-md px-2">Knowledge Sharing</span>
              </div>
            </div>
            </FadeIn>
          </div>
          
        </div>
      </div>

       {/* LOOKING AHEAD Section */}
      <div className="relative w-full overflow-hidden pt-20">
        <div className="relative z-10 mx-[5%] md:mx-[10%]">
          <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-16 items-center">
            
            {/* Left Column (Image) */}
            <div className="w-full flex-1 flex justify-center lg:justify-start">
              <FadeIn>
                <img 
                  src="/LOOKING_AHEAD_IMG.png" 
                  alt="Building What's Next" 
                  className="w-[90%] md:w-[80%] lg:w-[800px] h-auto object-contain drop-shadow-2xl"
                />
              </FadeIn>
            </div>

            {/* Right Column (Text) */}
            <div className="text-white flex-1">
              <SlideUp delay={0.1}>
                <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white">LOOKING AHEAD</p>
              </SlideUp>
              <SlideUp delay={0.2}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Building What's Next</h2>
              </SlideUp>
              
              <SlideUp delay={0.3}>
                <p className="text-white/80 leading-relaxed text-[15px] md:text-base mb-6">
                  DeyMake represents the beginning of our platform journey.
                  <br />
                  As our ecosystem grows, we will continue exploring new ways to combine storytelling, creativity, technology and community through digital products and experiences.
                </p>
              </SlideUp>

              <SlideUp delay={0.4}>
                <p className="text-white/80 leading-relaxed text-[15px] md:text-base mb-4">
                  Future areas of exploration include:
                </p>
              </SlideUp>

              <SlideUp delay={0.5}>
                <ul className="text-white/80 space-y-2 text-[15px] md:text-base">
                  <li>• Creator Economy Platforms</li>
                  <li>• Learning Communities</li>
                  <li>• Storytelling Technologies</li>
                  <li>• Interactive Experiences</li>
                  <li>• Community Engagement Tools</li>
                  <li>• Future Media Platforms</li>
                </ul>
              </SlideUp>
            </div>
            
          </div>
        </div>
      </div>

      {/* Platforms & Story Worlds Section */}
      <div className="relative w-full overflow-hidden bg-surface pt-20 pb-32">
        <div className="relative z-10 mx-[5%] md:mx-[10%]">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            
            {/* Left Column (Text) */}
            <div className="text-white flex-1">
              <SlideUp delay={0.1}>
                <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white">PLATFORMS & STORY WORLDS</p>
              </SlideUp>
              <SlideUp delay={0.2}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Connecting Stories,<br/>Experiences and Communities</h2>
              </SlideUp>
              
              <SlideUp delay={0.3}>
                <p className="text-white/80 leading-relaxed text-[15px] md:text-base mb-6">
                  Our platforms are designed to work alongside our Story Worlds and Experiences.
                </p>
              </SlideUp>

              <SlideUp delay={0.4}>
                <p className="text-white/80 leading-relaxed text-[15px] md:text-base mb-6">
                  Together, they create an ecosystem where stories inspire communities, experiences spark engagement and platforms extend participation beyond a single moment.
                </p>
              </SlideUp>

              <SlideUp delay={0.5}>
                <p className="text-white/80 leading-relaxed text-[15px] md:text-base">
                  This connected approach allows us to build deeper relationships with audiences while creating new opportunities for learning, creativity and collaboration.
                </p>
              </SlideUp>
            </div>

            {/* Right Column (Image) */}
            <div className="w-full flex-1 flex justify-center lg:justify-end">
              <FadeIn>
                <img 
                  src="/PLATFORMS_IMG.png" 
                  alt="Connecting Stories, Experiences and Communities" 
                  className="w-[90%] md:w-[80%] lg:w-[800px] h-auto object-contain drop-shadow-2xl"
                />
              </FadeIn>
            </div>
            
          </div>
        </div>
      </div>

     

      {/* Building Digital Spaces Section */}
      <div className="relative w-full overflow-hidden bg-surface ">
        <div className="relative z-10 mx-[5%] md:mx-[10%]">
          {/* Card Container */}
          <div className="relative w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
            {/* Background Image for Card */}
            <div 
              className="absolute inset-0 z-0 bg-cover bg-center"
              style={{ backgroundImage: 'url(/CAROUSEL_CARD_BG.png)' }}
            >
              {/* Overlay for readability */}
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 items-center pt-12 lg:pt-0 px-8 lg:px-0 lg:pr-20">
              
              {/* Left Column (Image) */}
              <div className="w-full lg:w-[40%] flex justify-center lg:justify-start">
                <FadeIn>
                  <img 
                    src="/BUILDING_DIGITAL_IMG.png" 
                    alt="Building Digital Spaces For The Future" 
                    className="w-full  h-auto object-contain drop-shadow-2xl"
                  />
                </FadeIn>
              </div>

              {/* Right Column (Text) */}
              <div className="text-white lg:w-[60%]">
                <SlideUp delay={0.1}>
                  <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold mb-6 leading-tight">
                    Building Digital Spaces For The Future
                  </h2>
                </SlideUp>
                
                <SlideUp delay={0.2}>
                  <p className="text-white/90 leading-relaxed text-[15px] md:text-[17px] mb-8">
                    We believe technology should bring people closer to ideas, opportunities and each other.
                  </p>
                </SlideUp>

                <SlideUp delay={0.3}>
                  <p className="text-white/90 leading-relaxed text-[15px] md:text-[17px] mb-10">
                    Through platforms like DeyMake and future innovations, we are creating digital spaces where creativity, culture and community can thrive.
                  </p>
                </SlideUp>

                <SlideUp delay={0.4}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex-1 bg-primary hover:bg-primary-hover text-white font-semibold py-3.5 px-8 rounded-lg transition-colors shadow-lg shadow-primary/20 whitespace-nowrap">
                      Visit DeyMake
                    </button>
                    <button className=" flex-1 border border-white/50 hover:bg-white/10 text-white font-semibold py-3.5 px-8 rounded-lg transition-colors whitespace-nowrap">
                      Explore Our Experiences
                    </button>
                  </div>
                </SlideUp>
              </div>
              
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Platforms;
