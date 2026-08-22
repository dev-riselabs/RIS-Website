import React from 'react';
import SlideUp from '../animations/SlideUp';

interface PageHeroProps {
  title: React.ReactNode;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  curveColor?: string;
  children?: React.ReactNode;
}

const PageHero: React.FC<PageHeroProps> = ({ 
  title, 
  subtitle, 
  description, 
  backgroundImage, 
  backgroundColor = 'bg-accent-blue',
  curveColor = '#303030',
  children 
}) => {
  return (
    <div className={`relative w-full overflow-hidden ${backgroundColor} pt-40 pb-32 md:pt-52 md:pb-40 flex items-center min-h-[90vh]`}>
      {/* Background Image */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          {/* Overlay to darken image for text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 mx-[10%] flex flex-col w-full max-w-4xl">
        {subtitle && (
          <SlideUp delay={0.1}>
            <p className="text-sm md:text-base font-bold tracking-widest uppercase mb-4 text-primary flex items-center gap-4">
              <span className="w-8 h-[2px] bg-primary"></span>
              {subtitle}
            </p>
          </SlideUp>
        )}
        <SlideUp delay={0.2}>
          <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold mb-6 text-white tracking-tight leading-[1.2]">
            {title}
          </h1>
        </SlideUp>
        {description && (
          <SlideUp delay={0.3}>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed">
              {description}
            </p>
          </SlideUp>
        )}
        {children && (
          <SlideUp delay={0.4}>
            <div className="mt-8 w-full flex">
              {children}
            </div>
          </SlideUp>
        )}
      </div>
      
      {/* Curved Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-[1px]">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-16 md:h-24 lg:h-32 drop-shadow-sm origin-bottom"
          preserveAspectRatio="none"
        >
          <path 
            d="M0 120V0C480 120 960 120 1440 0V120H0Z" 
            fill={curveColor} 
          />
        </svg>
      </div>
    </div>
  );
};

export default PageHero;
