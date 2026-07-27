import React from 'react'

export interface VerticalPosterCardProps {
  image: string
  footerText: string
}

const VerticalPosterCard: React.FC<VerticalPosterCardProps> = ({ image, footerText }) => {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden shadow-lg border border-white group cursor-pointer hover:border-white/80 transition-colors bg-[#292929]">
      {/* Poster Image */}
      <div className="w-full aspect-[3/4] relative">
        <img 
          src={image} 
          alt={footerText} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      {/* Footer Bar */}
      <div className="w-full py-5 bg-[#333333] flex justify-center items-center relative z-10">
        <span className="text-sm font-semibold tracking-wider text-white">
          {footerText}
        </span>
      </div>
    </div>
  )
}

export default VerticalPosterCard
