'use client';

import Link from "next/link";
import RollingText from "@/components/RollingText";

export default function Cover() {
  const scrollToWorks = () => {
    const worksSection = document.getElementById('works');
    if (worksSection) {
      worksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="relative w-full h-screen">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/cover/cover-placeholder.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/showreel/showreel.mp4" type="video/mp4" />
      </video>
      
      {/* Gradient Overlay - Transparent at top, 100% opacity at bottom for text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% via-background/40 via-60% to-background to-100%" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-end pb-5">
        <div className="container-grid w-full">
          {/* Text occupies full width on mobile, columns 7-11 on desktop */}
          <div className="col-span-12 md:col-start-7 md:col-span-5">
            <h1 className="text-body text-foreground mb-8" style={{ fontSize: '18px', lineHeight: '1.3', fontWeight: '400' }}>
              Daniel is a filmmaker passionate about visual storytelling that moves people. 
              His experience spans commercial work, narrative film, and digital advertising, 
              from editing UGC campaigns to filming award winning documentaries. He brings 
              a mix of creative intuition, technical expertise, and strategic thinking 
              that supports both brand goals and audience engagement.
            </h1>
            
            <button
              onClick={scrollToWorks}
              className="nav-link text-supporting text-foreground cursor-pointer"
            >
              <RollingText text="Scroll ↓" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

