'use client';

import { useRef } from 'react';
import { notFound } from 'next/navigation';
import { works } from '@/lib/worksData';
import BackButton from '@/components/work/BackButton';
import WorkVideoPlayer from '@/components/work/WorkVideoPlayer';
import WorkInformation from '@/components/work/WorkInformation';

export default function WorkDetail({ params }: { params: { slug: string } }) {
  const work = works[params.slug];
  const informationRef = useRef<HTMLDivElement>(null);

  if (!work) {
    notFound();
  }

  const handleInformationClick = () => {
    if (informationRef.current) {
      informationRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBackgroundClick = () => {
    if (typeof window !== 'undefined' && (window as any).toggleVideo) {
      (window as any).toggleVideo();
    }
  };

  const handleVideoToggle = () => {
    if (typeof window !== 'undefined' && (window as any).toggleVideo) {
      (window as any).toggleVideo();
    }
  };

  // Determine custom widths based on slug
  const getPosterWidth = () => {
    if (params.slug === 'the-war-of-raya-sinitsina') return 200;
    return 120; // Default width
  };

  const getAwardsWidth = () => {
    if (params.slug === 'julian-edelman') return 120;
    return 160; // Default width
  };

  return (
    <main className="w-full min-h-screen relative overflow-x-hidden">
      <BackButton />
      
      <WorkVideoPlayer
        videoSrc={work.videoSrc}
        posterSrc={work.posterSrc}
        title={work.title}
        metadata={work.metadata}
        role={work.role}
        onInformationClick={handleInformationClick}
        onVideoToggle={handleVideoToggle}
      />

      <div ref={informationRef}>
        <WorkInformation
          title={work.title}
          metadata={work.metadata}
          credits={work.credits}
          location={work.location}
          year={work.year}
          description={work.description}
          link={work.link}
          trailer={work.trailer}
          awards={work.awards}
          posterImage={work.posterImage}
          posterWidth={getPosterWidth()}
          awardsWidth={getAwardsWidth()}
          onBackgroundClick={handleBackgroundClick}
        />
      </div>
    </main>
  );
}

