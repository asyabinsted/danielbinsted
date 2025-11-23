'use client';

import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import preloaderAnimation from '../../public/preloader.json';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide preloader once page is fully loaded
    const handleLoad = () => {
      // Add a small delay to ensure smooth transition
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-500"
      style={{ opacity: isLoading ? 1 : 0 }}
    >
      <div style={{ width: '60px', height: '60px' }}>
        <Lottie
          animationData={preloaderAnimation}
          loop={true}
          autoplay={true}
        />
      </div>
    </div>
  );
}

