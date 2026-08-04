import React from 'react';
import PageHero from '../components/ui/PageHero';

const AiCreativeLab = () => {
  return (
    <div className="w-full bg-surface min-h-screen pb-20">
      <PageHero 
        title={<>Exploring The Future Of Storytelling,<br className="hidden md:block"/> Creativity and Technology</>}
        description="We explore how artificial intelligence can enhance creativity, expand human imagination and unlock new possibilities for content, culture and community. Our focus is not replacing human creativity but empowering it."
        backgroundImage="/AI_CREATIVE_LAB_HERO_IMG.png"
      />

      {/* Our Philosophy Section */}
      <div className="relative z-10 mx-[5%] md:mx-[10%] pt-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (Image) */}
          <div className="w-full">
            <img 
              src="/AI_LAB_IMG.png" 
              alt="AI Lab" 
              className="w-full h-auto rounded-3xl object-cover shadow-2xl"
            />
          </div>

          {/* Right Column (Text) */}
          <div className="text-white">
            <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white">OUR PHILOSOPHY</p>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-6 leading-tight">
              Human Creativity. Intelligent<br className="hidden lg:block"/> Technology
            </h2>
            
            <p className="text-white/80 leading-relaxed text-[15px] md:text-base lg:text-lg mb-6">
              We believe the future belongs to creators who can combine imagination with innovation. Artificial intelligence is transforming how stories are conceived, produced, distributed and experienced.
            </p>
            
            <p className="text-white/80 leading-relaxed text-[15px] md:text-base lg:text-lg">
              The AI Creative Lab exists to help shape that future by exploring responsible, creative and impactful applications of emerging technologies.
            </p>
          </div>
        </div>
      </div>

      {/* Explore & Action Section */}
      <div className="relative w-full overflow-hidden pb-32">
        {/* Background SVG Curve */}
        <div className="absolute top-0 left-0 w-full z-0 opacity-100 pointer-events-none overflow-hidden h-full min-h-[1525px] max-w-full flex justify-start md:justify-center">
          <svg width="1440" height="1525" viewBox="0 0 1440 1525" fill="none" xmlns="http://www.w3.org/2000/svg" className="min-w-[1440px] w-full h-auto object-cover md:object-contain object-left-top md:object-top opacity-80">
            <path fillRule="evenodd" clipRule="evenodd" d="M1450.96 1391.79C1450.96 1391.79 1192.14 1252.22 915.885 1472.59C639.63 1692.95 573.699 1147.18 361.467 1147.18C149.235 1147.18 33.72 1391.79 33.72 1391.79L-60 396.839C-60 396.839 17.6459 238.911 284.911 38.7463C552.176 -161.418 792.742 479.108 1024.04 479.108C1255.35 479.108 1500 4.95703 1500 4.95703L1450.96 1391.79Z" fill="#44BB3D" fillOpacity="0.3"/>
          </svg>
        </div>

        <div className="relative z-10 mx-[5%] md:mx-[10%] space-y-24 md:space-y-32">
          
          {/* What We Explore Section */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            {/* Left Column (Text) */}
            <div className="w-full lg:w-[35%] text-white pt-4">
              <p className="text-sm font-bold tracking-widest uppercase mb-4">WHAT WE EXPLORE</p>
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-6 leading-tight">Building The Future Of Creative Expression</h2>
              <p className="text-white/80 leading-relaxed text-[15px] md:text-base pr-8">
                Our work spans multiple areas of innovation including:
              </p>
            </div>
            
            {/* Right Column (Cards) */}
            <div className="w-full lg:w-[65%]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Card 1 */}
                <div className="flex flex-col rounded-[20px] overflow-hidden border border-white/20 bg-transparent shadow-xl hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-full aspect-[4/3] bg-surface-mid relative">
                    <img src="/AI_STORY_TELLING.png" alt="AI Storytelling" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3">AI Storytelling</h3>
                    <p className="text-white/80 text-[13px] md:text-sm leading-relaxed">
                      Exploring new ways to develop narratives, characters and immersive story experiences using emerging technologies.
                    </p>
                  </div>
                </div>
                
                {/* Card 2 */}
                <div className="flex flex-col rounded-[20px] overflow-hidden border border-white/20 bg-transparent shadow-xl hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-full aspect-[4/3] bg-surface-mid relative">
                    <img src="/AI_CONTENT_PRODUCTION.png" alt="AI Content Production" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3">AI Content Production</h3>
                    <p className="text-white/80 text-[13px] md:text-sm leading-relaxed">
                      Creating visual, audio and multimedia content powered by intelligent creative tools and workflows.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <div className="flex justify-end gap-3 mt-8">
                <button className="w-9 h-9 rounded-full border border-white/80 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                </button>
                <button className="w-9 h-9 rounded-full border border-white/80 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              </div>
            </div>
          </div>

          {/* AI In Action Section */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start mt-24">
            
            {/* Left Column (Cards) */}
            <div className="w-full lg:w-[65%] order-2 lg:order-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Card 1 */}
                <div className="flex flex-col rounded-[20px] overflow-hidden border border-white/20 bg-transparent shadow-xl hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-full aspect-[4/3] bg-surface-mid relative">
                    <img src="/AI_POWERED_CONTENT_PRODUCTION.png" alt="AI-Powered Content Production" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3">AI-Powered Content Production</h3>
                    <p className="text-white/80 text-[13px] md:text-sm leading-relaxed">
                      Development of promotional videos, visual assets, explainers and multimedia content using AI-assisted workflows.
                    </p>
                  </div>
                </div>
                
                {/* Card 2 */}
                <div className="flex flex-col rounded-[20px] overflow-hidden border border-white/20 bg-transparent shadow-xl hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-full aspect-[4/3] bg-surface-mid relative">
                    <img src="/AI_EXPERIENCE_STORYTELLING.png" alt="Experience Storytelling" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3">Experience Storytelling</h3>
                    <p className="text-white/80 text-[13px] md:text-sm leading-relaxed">
                      Using AI-enhanced content systems to support audience engagement and experience amplification.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <div className="flex justify-start gap-3 mt-8">
                <button className="w-9 h-9 rounded-full border border-white/80 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                </button>
                <button className="w-9 h-9 rounded-full border border-white/80 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              </div>
            </div>

            {/* Right Column (Text) */}
            <div className="w-full lg:w-[35%] text-white pt-4 order-1 lg:order-2">
              <p className="text-sm font-bold tracking-widest uppercase mb-4">AI IN ACTION</p>
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-6 leading-tight">Real-World Applications</h2>
              <p className="text-white/80 leading-relaxed text-[15px] md:text-base mb-6 pr-8">
                Our AI capabilities have been applied across productions, experiences and strategic initiatives.
              </p>
              <p className="text-white/80 leading-relaxed text-[15px] md:text-base pr-8">
                Examples include:
              </p>
            </div>
            
          </div>
          
        </div>
      </div>

      {/* AI Initiatives Section */}
      <div className="relative w-full overflow-hidden pb-32 pt-10">
        {/* Background SVG Curve */}
        <div className="absolute top-0 left-0 w-full z-0 opacity-100 pointer-events-none overflow-hidden h-full min-h-[1232px] max-w-full flex justify-end md:justify-center">
          <svg width="1440" height="1232" viewBox="0 0 1440 1232" fill="none" xmlns="http://www.w3.org/2000/svg" className="min-w-[1440px] w-full h-auto object-cover md:object-contain object-right-top md:object-top opacity-80">
            <path fillRule="evenodd" clipRule="evenodd" d="M1394.73 1124.38C1394.73 1124.38 1155.82 1011.63 900.817 1189.66C645.812 1367.68 584.953 926.771 389.047 926.771C193.14 926.771 86.5106 1124.38 86.5106 1124.38L0 320.594C0 320.594 71.6731 193.009 318.379 31.3019C565.086 -130.405 787.146 387.057 1000.66 387.057C1214.17 387.057 1440 4.00464 1440 4.00464L1394.73 1124.38Z" fill="#1A237E" fillOpacity="0.3"/>
          </svg>
        </div>

        <div className="relative z-10 mx-[5%] md:mx-[10%] space-y-32">
          
          {/* Makemation Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column (Image) */}
            <div className="w-full order-1 lg:order-1">
              <img 
                src="/MAKE_MATION_FUTURE_OF_AI_IMG.png" 
                alt="Makemation & The Future of AI" 
                className="w-full h-auto rounded-[20px] object-cover shadow-2xl"
              />
            </div>
            
            {/* Right Column (Text) */}
            <div className="text-white order-2 lg:order-2">
              <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white">MAKEMATION &amp; THE FUTURE OF AI</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Storytelling That Inspires Innovation</h2>
              <p className="text-white/80 leading-relaxed text-[15px] md:text-base lg:text-lg">
                Through Makemation and the broader Makemation ecosystem, Rise Interactive Studios has helped create conversations around artificial intelligence, creativity and future skills. From film to festivals and educational engagement, we continue to explore how storytelling can make complex technologies accessible, inspiring and relevant to everyday lives.
              </p>
            </div>
          </div>
          
          {/* AFRIFF AI Workshop Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column (Text) */}
            <div className="text-white order-2 lg:order-1">
              <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white">AFRIFF AI WORKSHOP &amp; CULTURAL DIALOGUE</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Where Film, Culture and AI Converge</h2>
              <p className="text-white/80 leading-relaxed text-[15px] md:text-base lg:text-lg">
                As curators of the AFRIFF AI Workshop &amp; Cultural Dialogue, we bring together filmmakers, creators, technologists and cultural leaders to examine the evolving relationship between creativity and emerging technologies. The initiative creates space for experimentation, learning and collaboration while helping shape the future of Africa's creative industries.
              </p>
            </div>
            
            {/* Right Column (Image) */}
            <div className="w-full order-1 lg:order-2">
              <img 
                src="/ARIFF_AI_WORKSHOP_IMG.png" 
                alt="AFRIFF AI Workshop" 
                className="w-full h-auto rounded-[20px] object-cover shadow-2xl"
              />
            </div>
          </div>
          
        </div>
      </div>

      {/* Focus Areas Section */}
      <div className="relative z-10 mx-[5%] md:mx-[10%] pt-16 pb-32">
        <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white">OUR FOCUS AREAS</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">Shaping What's Next</h2>
        <p className="text-white/80 leading-relaxed text-[15px] md:text-base mb-12 max-w-4xl">
          We are particularly interested in the intersection of:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-[#FF4B4B] rounded-[20px] p-6 md:p-8 flex items-center justify-center text-center min-h-[140px] shadow-xl hover:scale-[1.02] transition-transform">
            <span className="text-white font-bold text-sm md:text-[15px] drop-shadow-md px-2">Artificial Intelligence</span>
          </div>
          <div className="bg-accent-cyan rounded-[20px] p-6 md:p-8 flex items-center justify-center text-center min-h-[140px] shadow-xl hover:scale-[1.02] transition-transform">
            <span className="text-white font-bold text-sm md:text-[15px] drop-shadow-md px-2">Storytelling</span>
          </div>
          <div className="bg-accent-green rounded-[20px] p-6 md:p-8 flex items-center justify-center text-center min-h-[140px] shadow-xl hover:scale-[1.02] transition-transform">
            <span className="text-white font-bold text-sm md:text-[15px] drop-shadow-md px-2">Film &amp; Media</span>
          </div>
          
          <div className="bg-accent-brown rounded-[20px] p-6 md:p-8 flex items-center justify-center text-center min-h-[140px] shadow-xl hover:scale-[1.02] transition-transform">
            <span className="text-white font-bold text-sm md:text-[15px] drop-shadow-md px-2">Education</span>
          </div>
          <div className="bg-[#B533FF] rounded-[20px] p-6 md:p-8 flex items-center justify-center text-center min-h-[140px] shadow-xl hover:scale-[1.02] transition-transform">
            <span className="text-white font-bold text-sm md:text-[15px] drop-shadow-md px-2">Culture</span>
          </div>
          <div className="bg-accent-blue-bright rounded-[20px] p-6 md:p-8 flex items-center justify-center text-center min-h-[140px] shadow-xl hover:scale-[1.02] transition-transform">
            <span className="text-white font-bold text-sm md:text-[15px] drop-shadow-md px-2">Creativity</span>
          </div>
          
          <div className="bg-accent-pink rounded-[20px] p-6 md:p-8 flex items-center justify-center text-center min-h-[140px] shadow-xl hover:scale-[1.02] transition-transform">
            <span className="text-white font-bold text-sm md:text-[15px] drop-shadow-md px-2">Community Engagement</span>
          </div>
          <div className="bg-accent-cyan rounded-[20px] p-6 md:p-8 flex items-center justify-center text-center min-h-[140px] shadow-xl hover:scale-[1.02] transition-transform">
            <span className="text-white font-bold text-sm md:text-[15px] drop-shadow-md px-2">Future Skills</span>
          </div>
          <div className="bg-accent-orange rounded-[20px] p-6 md:p-8 flex items-center justify-center text-center min-h-[140px] shadow-xl hover:scale-[1.02] transition-transform">
            <span className="text-white font-bold text-sm md:text-[15px] drop-shadow-md px-2">Emerging Technologies</span>
          </div>
        </div>
      </div>

      {/* Responsible Innovation Section */}
      <div className="relative z-10 mx-[5%] md:mx-[10%] pt-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (Image) */}
          <div className="w-full">
            <img 
              src="/RESPONSIBLE_INNOVATION_IMG.png" 
              alt="Responsible Innovation" 
              className="w-full h-auto rounded-[20px] object-cover shadow-2xl"
            />
          </div>

          {/* Right Column (Text) */}
          <div className="text-white">
            <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white">RESPONSIBLE INNOVATION</p>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-6 leading-tight">Technology With Purpose</h2>
            
            <p className="text-white/80 leading-relaxed text-[15px] md:text-base lg:text-lg">
              We believe innovation should be guided by ethics, inclusion and human-centered design. Our work seeks to ensure that emerging technologies create opportunities for learning, creativity and positive social impact. We are committed to exploring AI in ways that amplify human potential and contribute to a more inclusive future.
            </p>
          </div>
        </div>
      </div>

      {/* The Future Is Creative Section */}
      <div className="relative z-10 mx-[5%] md:mx-[10%] pt-10 pb-20">
        <div 
          className="relative w-full rounded-[32px] overflow-hidden p-8 md:p-12 lg:p-20 shadow-2xl border border-surface-light bg-cover bg-center backdrop-blur-sm"
          style={{ backgroundImage: 'url(/CAROUSEL_CARD_BG.png)' }}
        >
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Column (Image) */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-white rounded-[24px] p-8 md:p-12 shadow-2xl flex items-center justify-center aspect-square w-full max-w-[400px] mx-auto lg:mx-0">
                <img 
                  src="/POPULAR_JING_IMG.png" 
                  alt="Popular Jing Podcast" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Right Column (Text & Buttons) */}
            <div className="lg:col-span-7 text-white">
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-6 leading-tight">The Future Is Creative</h2>
              
              <p className="text-white/90 leading-relaxed text-[15px] md:text-base lg:text-lg mb-10 max-w-2xl">
                Technology alone does not change the world. People do. Our mission is to help creators, storytellers, innovators and communities harness emerging technologies to build a future that is imaginative, inclusive and impactful.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary hover:bg-primary-hover text-white font-medium rounded-lg px-6 py-3 transition-colors text-[15px] cursor-pointer">
                  Explore Our Story Worlds
                </button>
                <button className="border border-white/50 hover:border-white text-white font-medium rounded-lg px-6 py-3 transition-colors text-[15px] cursor-pointer bg-transparent">
                  Explore Our Experiences
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiCreativeLab;
