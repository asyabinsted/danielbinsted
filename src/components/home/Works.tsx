'use client';

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Work {
  id: number;
  slug: string;
  title: string;
  genre: string;
  role: string;
  thumbnail: string;
  videoSrc?: string;
}

const works: Work[] = [
  {
    id: 1,
    slug: "the-first-lady",
    title: "The First Lady",
    genre: "Documentary",
    role: "Cinematographer",
    thumbnail: "/images/works/the-first-lady/the-first-lady-placeholder.jpg",
    videoSrc: "/videos/works/the-first-lady/the-first-lady.mp4",
  },
  {
    id: 2,
    slug: "the-war-of-raya-sinitsina",
    title: "The War of Raya Sinitsina",
    genre: "Documentary",
    role: "Cinematographer",
    thumbnail: "/images/works/the-war-of-raya-sinitsina/the-war-of-raya-sinitsina-cover.jpg",
    videoSrc: "/videos/works/the-war-of-raya-sinitsina/the-war-of-raya-sinitsina.mp4",
  },
  {
    id: 3,
    slug: "julian-edelman",
    title: "100% Julian Edelman",
    genre: "Documentary",
    role: "Second Unit Cinematographer",
    thumbnail: "/images/works/julian-edelman/julian-edelman-placeholder.jpg",
    videoSrc: "/videos/works/julian-edelman/julian-edelman.mp4",
  },
  {
    id: 4,
    slug: "mini-dv",
    title: "Mini DV",
    genre: "Documentary",
    role: "Cinematographer",
    thumbnail: "/images/works/mini-dv/mini-dv-placeholder.jpg",
    videoSrc: "/videos/works/mini-dv/mini-dv.mp4",
  },
  {
    id: 5,
    slug: "kuya-noy",
    title: "Kuya Noy",
    genre: "Documentary",
    role: "Director",
    thumbnail: "/images/works/kuya-noy/kuya-noy-placeholder.jpg",
    videoSrc: "/videos/works/kuya-noy/kuya-noy.mp4",
  },
  {
    id: 6,
    slug: "the-unknown-soldier",
    title: "The Unknown Soldier",
    genre: "Documentary",
    role: "Cinematographer",
    thumbnail: "/images/works/the-unknown-soldier/the-unknown-soldier-placeholder.jpg",
    videoSrc: "/videos/works/the-unknown-soldier/the-unknown-soldier.mp4",
  },
  {
    id: 7,
    slug: "the-postman-in-underwear",
    title: "The Postman in Underwear",
    genre: "Comedy",
    role: "Director, writer",
    thumbnail: "/images/works/the-postman-in-underwear/the-postman-in-underwear-placeholder.jpg",
    videoSrc: "/videos/works/the-postman-in-underwear/the-postman-in-underwear.mp4",
  },
  {
    id: 8,
    slug: "empty-spaces",
    title: "Empty Spaces",
    genre: "Drama",
    role: "Writer, co-creator",
    thumbnail: "/images/works/empty-spaces/empty-spaces-placeholder.jpg",
  },
  {
    id: 9,
    slug: "riverside-magic-clips",
    title: "Riverside.fm",
    genre: "Branded campaign",
    role: "Director, Producer & Video Editor",
    thumbnail: "/images/works/riverside-magic-clips/riverside-magic-clips-placeholder.jpg",
    videoSrc: "/videos/works/riverside-magic-clips/riverside-magic-clips.mp4",
  },
  {
    id: 10,
    slug: "riverside-ai-transcriptions",
    title: "Riverside.fm",
    genre: "Promotional video",
    role: "Writer, Producer, Director & Video Editor",
    thumbnail: "/images/works/riverside-ai-transcriptions/riverside-ai-transcriptions-placeholder.jpg",
    videoSrc: "/videos/works/riverside-ai-transcriptions/riverside-ai-transcriptions.mp4",
  },
  {
    id: 11,
    slug: "fiverr",
    title: "Fiverr",
    genre: "Branded content",
    role: "Director, Producer, Writer, Editor & Cinematographer",
    thumbnail: "/images/works/fiverr/fiverr-placeholder.jpg",
    videoSrc: "/videos/works/fiverr/fiverr.mp4",
  },
  {
    id: 12,
    slug: "riverside-masterclass",
    title: "Master the Art of Podcasting",
    genre: "Educational series",
    role: "Producer & Video Editor",
    thumbnail: "/images/works/riverside-masterclass/riverside-masterclass-placeholder.jpg",
    videoSrc: "/videos/works/riverside-masterclass/riverside-masterclass.mp4",
  },
  {
    id: 13,
    slug: "monday",
    title: "Monday.com",
    genre: "Product video",
    role: "Cinematographer",
    thumbnail: "/images/works/monday/monday-placeholder.jpg",
    videoSrc: "/videos/works/monday/monday.mp4",
  },
  {
    id: 14,
    slug: "succulent-sessions",
    title: "Succulent Sessions",
    genre: "Live music video",
    role: "Cinematographer",
    thumbnail: "/images/works/succulent-sessions/succulent-sessions-placeholder.jpg",
    videoSrc: "/videos/works/succulent-sessions/succulent-sessions.mp4",
  },
  {
    id: 15,
    slug: "riverside-paid-social-01",
    title: "Riverside.fm",
    genre: "Paid Social Campaign",
    role: "Director & Editor",
    thumbnail: "/images/works/riverside-paid-social-01/riverside-paid-social-01-placeholder.jpg",
    videoSrc: "/videos/works/riverside-paid-social-01/riverside-paid-social-01.mp4",
  },
  {
    id: 16,
    slug: "riverside-paid-social-02",
    title: "Riverside.fm",
    genre: "Paid Social Campaign",
    role: "Director & Editor",
    thumbnail: "/images/works/riverside-paid-social-02/riverside-paid-social-02-placeholder.jpg",
    videoSrc: "/videos/works/riverside-paid-social-02/riverside-paid-social-02.mp4",
  },
  {
    id: 17,
    slug: "mixtiles",
    title: "Mixtiles",
    genre: "Performance Marketing Campaign",
    role: "Editor",
    thumbnail: "/images/works/mixtiles/mixtiles-placeholder.jpg",
    videoSrc: "/videos/works/mixtiles/mixtiles.mp4",
  },
  {
    id: 18,
    slug: "echelonn-ai",
    title: "Echelonn AI",
    genre: "Brand Awareness Video",
    role: "Director & Editor",
    thumbnail: "/images/works/echelonn-ai/echelonn-ai-placeholder.jpg",
    videoSrc: "/videos/works/echelonn-ai/echelonn-ai.mp4",
  },
];

interface WorkItemProps {
  work: Work;
  isHovered: boolean;
  isDimmed: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function WorkItem({ work, isHovered, isDimmed, onMouseEnter, onMouseLeave }: WorkItemProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoOpacity, setVideoOpacity] = useState(0);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detect if device supports touch
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    // Skip video hover effect on touch devices
    if (!video || !work.videoSrc || isTouchDevice) return;

    if (isHovered) {
      // Add delay before showing video (prevents accidental triggers on quick movements)
      hoverTimeoutRef.current = setTimeout(() => {
        // Start playing video
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Video started playing successfully
              console.log('Video playing:', work.title);
              // Fade in video
              setVideoOpacity(1);
            })
            .catch((error) => {
              console.error('Video play failed:', work.title, error);
            });
        }
      }, 250); // 250ms delay before video loads
    } else {
      // Clear timeout if hover ends before delay completes
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      
      // Fade out video
      setVideoOpacity(0);
      
      // Wait for fade out animation, then pause and reset
      setTimeout(() => {
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      }, 300); // Match transition duration
    }

    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, [isHovered, work.videoSrc, work.title, isTouchDevice]);

  return (
    <div className="col-span-12 md:col-span-3">
      <Link 
        href={`/work/${work.slug}`}
        onMouseEnter={isTouchDevice ? undefined : onMouseEnter}
        onMouseLeave={isTouchDevice ? undefined : onMouseLeave}
        className="block"
      >
        {/* Title above frame - visible on mobile only */}
        <div className="md:hidden mb-2">
          <p className="text-body text-foreground">{work.title}</p>
        </div>
        
        <div className="relative w-full aspect-[16/9] cursor-pointer overflow-hidden">
          {/* Placeholder Image - always visible as background */}
          <Image
            src={work.thumbnail}
            alt={work.title}
            fill
            className="object-cover"
          />
          
          {/* Video overlay - always in DOM for works with video, controlled by opacity */}
          {work.videoSrc && (
            <video
              ref={videoRef}
              src={work.videoSrc}
              className="absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-300"
              style={{ opacity: videoOpacity, pointerEvents: 'none' }}
              muted
              loop
              playsInline
            />
          )}

          {/* Dim overlay for non-hovered works */}
          {isDimmed && (
            <div 
              className="absolute inset-0 bg-background transition-opacity duration-300 z-20"
              style={{ opacity: 0.9 }}
            />
          )}
        </div>
      </Link>
    </div>
  );
}

export default function Works() {
  const [hoveredWorkId, setHoveredWorkId] = useState<number | null>(null);
  const [hoveredRowIndex, setHoveredRowIndex] = useState<number | null>(null);

  const handleMouseEnter = (workId: number, index: number) => {
    setHoveredWorkId(workId);
    // Calculate which row this work is in (4 works per row)
    const rowIndex = Math.floor(index / 4);
    setHoveredRowIndex(rowIndex);
  };

  const handleMouseLeave = () => {
    setHoveredWorkId(null);
    setHoveredRowIndex(null);
  };

  const handleInfoLineEnter = (workId: number, index: number) => {
    // Keep the info line visible when hovering over it
    setHoveredWorkId(workId);
    const rowIndex = Math.floor(index / 4);
    setHoveredRowIndex(rowIndex);
  };

  // Group works by row (4 per row)
  const rows: Work[][] = [];
  for (let i = 0; i < works.length; i += 4) {
    rows.push(works.slice(i, i + 4));
  }

  const hoveredWork = works.find(w => w.id === hoveredWorkId);

  return (
    <section id="works" className="w-full pt-48 md:pt-48 pt-24 pb-24 bg-background">
      <div className="w-full px-5">
        {/* Removed "Works" title */}
        
        <div className="space-y-8 md:space-y-16">
          {rows.map((row, rowIndex) => (
            <div 
              key={rowIndex} 
              className="relative"
            >
              {/* Info Line - appears above the hovered row, clickable and hoverable - DESKTOP ONLY */}
              {hoveredRowIndex === rowIndex && hoveredWork && (
                <Link 
                  href={`/work/${hoveredWork.slug}`}
                  onMouseEnter={() => handleInfoLineEnter(hoveredWork.id, row.findIndex(w => w.id === hoveredWork.id) + rowIndex * 4)}
                  onMouseLeave={handleMouseLeave}
                  className="hidden md:block absolute -top-[29px] left-0 right-0 z-10 cursor-pointer pb-[21px]"
                >
                  <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-3 overflow-visible">
                      <p className="text-body text-foreground whitespace-nowrap overflow-visible">{hoveredWork.genre}</p>
                    </div>
                    <div className="col-span-3 overflow-visible">
                      <p className="text-body text-foreground whitespace-nowrap overflow-visible">{hoveredWork.title}</p>
                    </div>
                    <div className="col-span-3 overflow-visible">
                      <p className="text-body text-foreground whitespace-nowrap overflow-visible">{hoveredWork.role}</p>
                    </div>
                    <div className="col-span-3 text-right overflow-visible">
                      <p className="text-body text-foreground whitespace-nowrap overflow-visible">View</p>
                    </div>
                  </div>
                </Link>
              )}

              {/* Works Grid Row - 1 column on mobile, 4 columns on desktop */}
              <div className="grid grid-cols-12 gap-5 md:gap-5 gap-y-8">
                {row.map((work, indexInRow) => {
                  const globalIndex = rowIndex * 4 + indexInRow;
                  const isHovered = work.id === hoveredWorkId;
                  const isDimmed = hoveredWorkId !== null && !isHovered;

                  return (
                    <WorkItem
                      key={work.id}
                      work={work}
                      isHovered={isHovered}
                      isDimmed={isDimmed}
                      onMouseEnter={() => handleMouseEnter(work.id, globalIndex)}
                      onMouseLeave={handleMouseLeave}
                    />
                  );
                })}
                
                {/* Add "Your project could be here" frame to the last row - COMMENTED OUT FOR NOW */}
                {/* {rowIndex === rows.length - 1 && row.length < 4 && (
                  <div className="col-span-3">
                    <div className="relative w-full aspect-[16/9] border border-foreground/20 bg-background flex items-center justify-center">
                      <p className="text-body text-foreground text-center px-4">
                        Your project could be here
                      </p>
                    </div>
                  </div>
                )} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

