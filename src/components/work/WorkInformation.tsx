'use client';

import Image from 'next/image';

interface Award {
  src: string;
  alt: string;
}

interface WorkInformationProps {
  title: string;
  metadata: string;
  credits: string[];
  location: string;
  year: string;
  description: string;
  link?: string;
  trailer?: string;
  awards?: Award[];
  posterImage?: string;
  posterWidth?: number;
  awardsWidth?: number;
  onBackgroundClick: () => void;
}

export default function WorkInformation({
  title,
  metadata,
  credits,
  location,
  year,
  description,
  link,
  trailer,
  awards,
  posterImage,
  posterWidth = 240,
  awardsWidth = 160,
  onBackgroundClick,
}: WorkInformationProps) {
  return (
    <div 
      className="pt-5 pb-10 relative z-10"
    >
      {/* Gradient overlay - full width, darker at bottom, extends to cover all content */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
      
      <div className="container-grid relative z-10">
        {/* Empty space - left 8 columns - clickable for video control - DESKTOP ONLY */}
        <div className="hidden md:block col-span-8 cursor-pointer" onClick={onBackgroundClick} />
        
        {/* Information Section - full width on mobile, right 4 columns on desktop */}
        <div 
          className="col-span-12 md:col-span-4"
        >
          <div className="space-y-6">
            {/* Title - 100% opacity */}
            <h1 className="text-h1 text-foreground">{title}</h1>
            
            {/* Poster Image */}
            {posterImage && (
              <div className="relative h-auto" style={{ width: `${posterWidth}px` }}>
                <Image
                  src={posterImage}
                  alt={`${title} poster`}
                  width={posterWidth}
                  height={Math.round(posterWidth * 1.5)}
                  className="h-auto object-cover"
                  style={{ width: `${posterWidth}px` }}
                />
              </div>
            )}
            
            {/* Metadata - 100% opacity */}
            <p className="text-body text-foreground">{metadata}</p>
            
            {/* Location & Year - Show right after metadata for projects WITH poster */}
            {posterImage && (location || year) && (
              <p className="text-body text-foreground">
                {location}{year && location ? ' · ' : ''}{year}
              </p>
            )}
            
            {/* Credits - 100% opacity */}
            <div className="space-y-2">
              {credits.map((credit, index) => (
                <p key={index} className="text-body text-foreground">
                  {credit}
                </p>
              ))}
            </div>
            
            {/* Description - 100% opacity */}
            <p className="text-body text-foreground leading-relaxed">
              {description}
            </p>
            
            {/* Links - 100% opacity */}
            {(link || trailer) && (
              <div className="flex flex-col gap-2 items-start">
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body footer-link"
                  >
                    Link
                  </a>
                )}
                {trailer && (
                  <a
                    href={trailer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body text-foreground underline hover:text-foreground/80 transition-colors"
                  >
                    Trailer
                  </a>
                )}
              </div>
            )}
            
            {/* Awards - Stretch to full width, height auto based on SVG */}
            {awards && awards.length > 0 && (
              <div className={`pt-4 pb-2 ${awardsWidth === 120 ? 'flex justify-start' : 'grid grid-cols-2 gap-2'}`}>
                {awards.map((award, index) => (
                  <div key={index} className={`relative h-auto flex items-center ${awardsWidth === 120 ? 'justify-start' : awardsWidth !== 160 ? 'justify-start' : 'justify-center'}`} style={{ width: awardsWidth === 120 ? '120px' : '100%' }}>
                    <Image
                      src={award.src}
                      alt={award.alt}
                      width={awardsWidth}
                      height={awardsWidth}
                      className="h-auto object-contain"
                      style={{ width: awardsWidth === 120 ? '120px' : awardsWidth !== 160 ? `${awardsWidth}px` : '100%' }}
                    />
                  </div>
                ))}
              </div>
            )}
            
            {/* Location & Year - Show here only for projects WITHOUT poster (like Riverside) */}
            {!posterImage && (location || year) && (
              <p className="text-body text-foreground">
                {location}{year && location ? ' · ' : ''}{year}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
