import React from 'react';
import PageHero from '../components/ui/PageHero';
import Carousel from '../components/ui/Carousel';
import ContentCard from '../components/ui/ContentCard';

const StoryWorlds = () => {
  return (
    <div className="w-full bg-surface min-h-screen pb-20">
      <PageHero
        title="Creating Stories That Travel Across Formats, Generations and Borders"
        backgroundImage="/STORYWORLD_HERO_IMG.png"
        curveColor="#303030"
      >
        <div className="flex flex-col gap-6 text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed">
          <p>
            At Rise Interactive Studios, we develop original intellectual property designed to live beyond a single format. From films and books to experiences, animation, educational content and emerging media, we create Story Worlds that entertain, educate, inspire and shape culture.
          </p>
          <p>
            We believe the most powerful stories are not confined to one medium. They evolve, expand and create new possibilities for audiences everywhere.
          </p>
        </div>
      </PageHero>

      {/* Our Approach Section */}
      <div className="relative z-10 mx-[5%] md:mx-[10%] pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column (Image) */}
          <div className="w-full">
            <img
              src="/OUR_APPROACH_IMG.png"
              alt="Film Crew"
              className="w-full h-auto rounded-3xl object-cover drop-shadow-xl"
            />
          </div>

          {/* Right Column (Text) */}
          <div className="text-white">
            <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white">OUR APPROACH</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Building Intellectual Property for the Future</h2>
            <p className="text-white/80 leading-relaxed text-[15px] md:text-base">
              Every Story World begins with an idea. Some begin as films. Others begin as books, biographies, experiences or cultural movements. Our role is to nurture those ideas and develop them into meaningful intellectual property capable of reaching audiences through multiple formats and experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="relative w-full overflow-hidden mt-32 pb-40">
        {/* Decorative Background SVG */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0 opacity-100">
          <svg width="100%" height="100%" viewBox="0 0 1440 1058" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M1453.96 1391.79C1453.96 1391.79 1195.14 1252.22 918.885 1472.59C642.63 1692.95 576.699 1147.18 364.467 1147.18C152.235 1147.18 36.72 1391.79 36.72 1391.79L-57 396.839C-57 396.839 20.6459 238.911 287.911 38.7463C555.176 -161.418 795.742 479.108 1027.04 479.108C1258.35 479.108 1503 4.95703 1503 4.95703L1453.96 1391.79Z" fill="#44BB3D" fillOpacity="0.3" />
          </svg>
        </div>

        <div className="relative z-10 w-full pt-20">
          <Carousel>
            <ContentCard
              category="FEATURED STORY WORLDS"
              title="Makemation"
              description={
                <div className="flex flex-col gap-4 text-[13px] text-white/80 leading-relaxed">
                  <div>
                    <span className="font-bold text-white">Status:</span> Released<br />
                    <span className="font-bold text-white">Formats:</span> Feature Film | Festival | Educational Experiences
                  </div>
                  <p>
                    Makemation Is A Pioneering African Story World Exploring The Relationship Between Artificial Intelligence, Innovation, Creativity And Future Skills.
                  </p>
                  <p>
                    What Began As A Feature Film Has Evolved Into A Broader Ecosystem That Includes Educational Engagement, Youth Innovation Initiatives And The Makemation National AI Festival, Inspiring Young People To Imagine And Build The Future.
                  </p>
                </div>
              }
              image="/MAINMAKEMATION_IMG.png"
            />
            <ContentCard
              category="ORIGINAL SERIES"
              title="Popular Jingo"
              description={
                <div className="flex flex-col gap-4 text-[13px] text-white/80 leading-relaxed">
                  <div>
                    <span className="font-bold text-white">Format:</span> Podcast Series<br />
                    <span className="font-bold text-white">Status:</span> In Development
                  </div>
                  <p>
                    Hosted By Toyosi Akerele-Ogunsiji, Popular Jingo Features Engaging Conversations With Leaders, Innovators, Creators And Changemakers Exploring Ideas, Opportunities And The Forces Shaping Africa And The World. Through Thoughtful Dialogue And Diverse Perspectives, The Series Creates A Space For Learning, Reflection And Meaningful Conversation.
                  </p>
                </div>
              }
              image="/HERO_CAROUSEL_IMG.png"
            />
          </Carousel>
          <Carousel>
            <ContentCard
              category="FEATURED STORY WORLDS"
              title="Makemation"
              description={
                <div className="flex flex-col gap-4 text-[13px] text-white/80 leading-relaxed">
                  <div>
                    <span className="font-bold text-white">Status:</span> Released<br />
                    <span className="font-bold text-white">Formats:</span> Feature Film | Festival | Educational Experiences
                  </div>
                  <p>
                    Makemation Is A Pioneering African Story World Exploring The Relationship Between Artificial Intelligence, Innovation, Creativity And Future Skills.
                  </p>
                  <p>
                    What Began As A Feature Film Has Evolved Into A Broader Ecosystem That Includes Educational Engagement, Youth Innovation Initiatives And The Makemation National AI Festival, Inspiring Young People To Imagine And Build The Future.
                  </p>
                </div>
              }
              image="/MAINMAKEMATION_IMG.png"
            />
            <ContentCard
              category="ORIGINAL SERIES"
              title="Popular Jingo"
              description={
                <div className="flex flex-col gap-4 text-[13px] text-white/80 leading-relaxed">
                  <div>
                    <span className="font-bold text-white">Format:</span> Podcast Series<br />
                    <span className="font-bold text-white">Status:</span> In Development
                  </div>
                  <p>
                    Hosted By Toyosi Akerele-Ogunsiji, Popular Jingo Features Engaging Conversations With Leaders, Innovators, Creators And Changemakers Exploring Ideas, Opportunities And The Forces Shaping Africa And The World. Through Thoughtful Dialogue And Diverse Perspectives, The Series Creates A Space For Learning, Reflection And Meaningful Conversation.
                  </p>
                </div>
              }
              image="/HERO_CAROUSEL_IMG.png"
            />
          </Carousel>
        </div>
      </div>

      <div className='relative pb-60'>
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0 opacity-100 top-100 bottom-0">
          <svg width="1440" height="2352" viewBox="0 0 1440 2352" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1394.73 2146.54C1394.73 2146.54 1155.82 1931.29 900.817 2271.16C645.812 2611.03 584.953 1769.29 389.047 1769.29C193.14 1769.29 86.5106 2146.54 86.5106 2146.54L0 612.043C0 612.043 71.6731 368.471 318.379 59.7581C565.086 -248.955 787.146 738.926 1000.66 738.926C1214.17 738.926 1440 7.64526 1440 7.64526L1394.73 2146.54Z" fill="#1A237E" fill-opacity="0.3" />
          </svg>
        </div>

        <div className='pt-20 mx-[5%] md:mx-[10%] relative'>
          <div className="flex flex-col items-center text-center text-white max-w-3xl mx-auto mb-12">
            <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white">OUR APPROACH</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Human Creativity. Intelligent Technology.</h2>
            <p className="text-white/80 leading-relaxed text-[15px] md:text-base">
              We combine creative excellence with emerging technologies to develop experiences that are imaginative, impactful and future ready. This enables us to create experiences that are both meaningful and scalable.
            </p>
          </div>

          <div className="w-full flex justify-between items-center mb-8">
            <p className="text-white/70 text-sm md:text-base">Our approach integrates:</p>

            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18 l-6-6 6-6" /></svg>
              </button>
              <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 l6-6 -6-6" /></svg>
              </button>
            </div>
          </div>

          {/* Approach Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-40">
            {[
              { title: "Storytelling", image: "/STORYTELLING_PLACEHOLDER.png" },
              { title: "Design", image: "/DESIGN_PLACEHOLDER.png" },
              { title: "Artificial Intelligence", image: "/HUMAN_MACHINES_IMG.png" },
              { title: "Creative Technology", image: "/CREATIVE_TECH_PLACEHOLDER.png" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="w-full aspect-[4/3] rounded-[2rem] bg-white/5 border border-white/10 overflow-hidden mb-4 relative drop-shadow-lg group-hover:border-white/20 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#444] to-[#222]"></div>
                  <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover mix-blend-normal z-10 transition-transform duration-500 group-hover:scale-105" onError={(e) => e.currentTarget.style.display = 'none'} />
                </div>
                <h4 className="text-white text-sm font-medium">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>

<div className='mx-[5%] md:mx-[10%] relative pb-20'>
  <p className='text-white text-xl  text-center max-w-3xl mx-auto'>We believe African stories deserve the opportunity to <br /> reach audiences wherever they are.</p>
</div>
        <div className=' relative flex justify-center '>
          <img src="/BEYOND_IMG.png" alt="" className='w-[600px]' />
        </div>

<div className='pt-20 mx-[5%] md:mx-[10%] relative'>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column (Image) */}
          <div className="w-full">
            <img
              src="/EVERY_GREAT_STORY_IMG.png"
              alt="Film Crew"
              className="w-full h-auto rounded-3xl object-cover drop-shadow-xl"
            />
          </div>

          {/* Right Column (Text) */}
          <div className="text-white">
         
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Every Great Story Begins With An Idea</h2>
            <p className="text-white/80 leading-relaxed text-[15px] md:text-base">
              We are committed to creating Story Worlds that entertain, inspire and leave a lasting cultural impact.  Through storytelling, creativity and innovation, we are building intellectual property that can travel across platforms, generations  and global audiences.
            </p>
             <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-lg font-medium transition-colors text-[15px] mt-4 w-full">
                Partner With Us
              </button>    
          </div>
        </div>
        </div>
      </div> 

    </div>
  );
};

export default StoryWorlds;
