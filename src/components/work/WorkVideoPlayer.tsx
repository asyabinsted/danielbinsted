'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import RollingText from '@/components/RollingText';

interface WorkVideoPlayerProps {
  videoSrc: string;
  posterSrc: string;
  title: string;
  metadata: string;
  role: string;
  onInformationClick: () => void;
  onVideoToggle: () => void;
  isVertical?: boolean;
}

export default function WorkVideoPlayer({
  videoSrc,
  posterSrc,
  title,
  metadata,
  role,
  onInformationClick,
  onVideoToggle,
  isVertical = false,
}: WorkVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showPoster, setShowPoster] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set video to muted by default
    video.muted = true;

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    const handleCanPlay = () => {
      // Autoplay once video can play (muted by default)
      video.play().then(() => {
        setIsPlaying(true);
        // Hide poster once video starts playing (only for vertical videos)
        if (isVertical) {
          setShowPoster(false);
        }
      }).catch((error) => {
        console.log('Autoplay failed:', error);
      });
    };

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  // Expose toggle function to parent
  useEffect(() => {
    const handleToggle = () => {
      const video = videoRef.current;
      if (!video) return;

      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    };

    // Store function reference for parent to call
    (window as any).toggleVideo = handleToggle;

    return () => {
      delete (window as any).toggleVideo;
    };
  }, []);

  const togglePlayPause = (e: React.MouseEvent) => {
    e.preventDefault();
    onVideoToggle();
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const remainingTime = duration - currentTime;
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <>
      {/* Fixed Background Layer - Video/Poster (NOT scrollable, always visible) */}
      <div 
        className="fixed inset-0 w-full h-full z-0 cursor-pointer"
        onClick={togglePlayPause}
        style={{ backgroundColor: isVertical ? '#000000' : 'transparent' }}
      >
        {/* Poster Image - shows while video loads, hidden once video plays for vertical videos */}
        {showPoster && (
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={posterSrc}
              alt={title}
              fill
              className={isVertical ? "object-contain" : "object-cover"}
              priority
            />
          </div>
        )}

        {/* Video - overlays poster once loaded */}
        <video
          ref={videoRef}
          src={videoSrc}
          className={`absolute inset-0 w-full h-full ${isVertical ? "object-contain" : "object-cover"}`}
          playsInline
          loop
          preload="auto"
        />
      </div>

      {/* Scrollable Content - Player Bar at bottom initially */}
      <div className="relative z-10 min-h-screen flex flex-col justify-end pb-5 pointer-events-none">
        <div className="w-full pointer-events-auto">
          {/* Player Bar */}
          <div className="container-grid items-end pb-2">
            {/* Left - Title & Metadata (4 columns) */}
            <div className="col-span-4">
              <h2 className="text-supporting text-foreground">{title}</h2>
              <p className="text-supporting text-foreground mt-1">{metadata}</p>
            </div>

            {/* Center - Role (4 columns) */}
            <div className="col-span-4">
              <p className="text-supporting text-foreground">{role}</p>
            </div>

            {/* Right - Information & Controls (4 columns) */}
            <div className="col-span-4 flex flex-col items-end gap-2">
              {/* First line: Information button */}
              <button
                onClick={onInformationClick}
                className="nav-link text-supporting text-foreground"
              >
                <RollingText text="Information ↓" />
              </button>
              
              {/* Second line: Sound + Timer */}
              <div className="flex items-center gap-2">
                <span className="text-supporting text-foreground">Sound</span>
                <button
                  onClick={toggleMute}
                  className="w-4 h-4 flex items-center justify-center"
                >
                  <Image
                    src={isMuted ? '/assets/icons/sound-off-icon.svg' : '/assets/icons/sound-on-icon.svg'}
                    alt={isMuted ? 'Sound off' : 'Sound on'}
                    width={16}
                    height={16}
                  />
                </button>
                <span className="text-supporting text-foreground">
                  / {formatTime(duration > 0 ? remainingTime : duration)}
                </span>
              </div>
            </div>
          </div>

          {/* Progress Bar with white line on top */}
          <div className="w-full h-[1px] bg-foreground/20 relative">
            <div
              className="absolute top-0 left-0 h-full bg-foreground transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
