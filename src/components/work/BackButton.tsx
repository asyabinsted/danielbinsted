'use client';

import Image from 'next/image';

export default function BackButton() {
  const handleClick = () => {
    // Use window.location to navigate and hash to scroll to works
    window.location.href = '/#works';
  };

  return (
    <button
      onClick={handleClick}
      className="fixed top-14 left-0 z-50 w-12 h-12 flex items-center justify-center hover:opacity-70 transition-opacity"
      aria-label="Back to works"
    >
      <Image
        src="/assets/icons/back-arrow-icon.svg"
        alt="Back"
        width={24}
        height={24}
      />
    </button>
  );
}
