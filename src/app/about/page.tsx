import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="w-full min-h-screen bg-background text-foreground pt-32 pb-20">
      <div className="container-grid w-full">
        {/* Columns 1-2: Avatar and Links */}
        <div className="col-span-2">
          {/* Avatar */}
          <div className="mb-8">
            <Image
              src="/images/about/avatar.jpg"
              alt="Daniel Binsted"
              width={240}
              height={320}
              className="w-full h-auto"
            />
          </div>

          {/* Links Section - Same as Footer */}
          <div>
            <h3 className="text-body uppercase mb-4">LINKS</h3>
            <div className="space-y-2 flex flex-col items-start">
              <a
                href="https://www.linkedin.com/in/daniel-binsted-b1b2a0a6/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body footer-link"
              >
                Linkedin
              </a>
              <a
                href="https://www.imdb.com/name/nm6474957/?ref_=ext_shr_lnk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body footer-link"
              >
                Imdb
              </a>
            </div>
          </div>
        </div>

        {/* Empty column 3 */}
        <div className="col-span-1"></div>

        {/* Columns 4-8: Biography */}
        <div className="col-span-5">
          <h2 className="text-body uppercase mb-8">BIOGRAPHY</h2>
          <p className="text-body mb-8">
            I'm a filmmaker passionate about visual storytelling that moves people. 
            My experience spans commercial work, narrative film, and digital advertising 
            – from editing UGC campaigns to filming award-winning documentaries. I bring 
            a mix of creative intuition, technical expertise, and strategic thinking 
            that supports both brand goals and audience engagement.
          </p>
          
          <Link 
            href="/#works" 
            className="inline-block text-supporting footer-link"
          >
            Selected works →
          </Link>
        </div>

        {/* Empty column 9 */}
        <div className="col-span-1"></div>

        {/* Columns 10-12: Clients */}
        <div className="col-span-3">
          <h3 className="text-body uppercase mb-8">CLIENTS</h3>
          <div className="space-y-2 flex flex-col items-start">
            <a
              href="https://riverside.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body footer-link"
            >
              Riverside.fm
            </a>
            <a
              href="https://www.mixtiles.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body footer-link"
            >
              Mixtiles
            </a>
            <a
              href="https://www.fiverr.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body footer-link"
            >
              Fiverr
            </a>
            <a
              href="https://monday.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body footer-link"
            >
              Monday.com
            </a>
            <a
              href="https://youtube.com/@succulentsessions?si=c0xs1-0qdLFl5bWA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body footer-link"
            >
              Succulent Sessions
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

