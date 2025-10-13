import Image from "next/image";
import Link from "next/link";

export default function Cover() {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      {/* TODO: Replace with showreel.mp4 - Upload video to: /public/videos/showreel.mp4 */}
      <Image
        src="/images/cover/cover-placeholder.jpg"
        alt="Daniel Binsted - Director/Editor/Cinematographer"
        fill
        className="object-cover"
        priority
      />
      
      {/* Gradient Overlay - Transparent at top, 60% opacity at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-50% to-background/60 to-100%" />
      
      {/* Content */}
      <div className="relative h-full flex items-end pb-5">
        <div className="container-grid w-full">
          {/* Text occupies columns 6-11 */}
          <div className="col-start-6 col-span-6">
            <h1 className="text-h1 text-foreground mb-8">
              I'm a filmmaker passionate about visual storytelling that moves people. 
              My experience spans commercial work, narrative film, and digital advertising 
              – from editing UGC campaigns to filming award-winning documentaries. I bring 
              a mix of creative intuition, technical expertise, and strategic thinking 
              that supports both brand goals and audience engagement.
            </h1>
            
            <Link 
              href="/about" 
              className="inline-block text-supporting footer-link"
            >
              Learn more →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

