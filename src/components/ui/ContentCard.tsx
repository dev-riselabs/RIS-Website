import React from 'react'

export interface ContentCardProps {
  category: string
  title: string
  description: string | React.ReactNode
  buttonText?: string
  image: string
}

const ContentCard: React.FC<ContentCardProps> = ({
  category,
  title,
  description,
  buttonText,
  image
}) => {
  return (
    <div 
      className="min-h-[569px] h-full rounded-3xl px-8 md:px-12 py-10 flex flex-col md:flex-row gap-12 items-center w-[1000px] max-w-full mx-auto backdrop-blur-sm border border-surface-light bg-cover bg-center"
      style={{ backgroundImage: 'url(/CAROUSEL_CARD_BG.png)' }}
    >
      <div className="flex-1 flex flex-col items-start text-white">
        <h4 className="text-sm font-bold tracking-widest uppercase mb-6">{category}</h4>
        
        <h3 className="text-4xl font-bold mb-4">{title}</h3>
        
        <p className="text-text-secondary text-sm leading-relaxed mb-8">
          {description}
        </p>
        
        {buttonText && (
          <button className="border border-white/30 hover:border-white transition-colors rounded-lg px-8 py-3 text-sm">
            {buttonText}
          </button>
        )}
      </div>
      
      <div className="flex-1 w-full flex justify-center md:justify-end">
        <img 
          src={image} 
          alt={title} 
          className="rounded-2xl object-cover shadow-2xl  w-full md:w-auto"
        />
      </div>
    </div>
  )
}

export default ContentCard
