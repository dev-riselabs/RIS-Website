import React from 'react'

export interface ExperienceCardProps {
  title: string
  description?: string
  image: string
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, description, image }) => {
  return (
    <div className="relative w-full aspect-[16/9] md:aspect-video rounded-3xl overflow-hidden group cursor-pointer shadow-2xl">
      
      {/* Main Image Layer */}
      <img 
        src={image} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Gradient & Solid Overlay for text legibility and focus */}
      <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
      
      {/* Text Content */}
      <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full max-w-[80%]">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-wide uppercase">
          {title}
        </h3>
        {description && (
          <p className="text-white/80 text-xs md:text-sm leading-relaxed max-w-2xl line-clamp-3">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

export default ExperienceCard
