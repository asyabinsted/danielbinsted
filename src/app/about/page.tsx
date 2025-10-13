import Image from "next/image";

export default function About() {
  return (
    <main className="w-full min-h-screen bg-background text-foreground py-20">
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

          {/* Links Section */}
          <div>
            <h3 className="text-body uppercase mb-4">LINKS</h3>
            <div className="space-y-2 flex flex-col items-start">
              <a
                href="https://www.instagram.com/danielbinsted/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body footer-link"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/daniel-binsted-b1b2a0a6/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body footer-link"
              >
                Linkedin
              </a>
              <a
                href="https://www.facebook.com/daniel.binsted"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body footer-link"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Empty column 3 */}
        <div className="col-span-1"></div>

        {/* Columns 4-8: Biography */}
        <div className="col-span-5">
          <h2 className="text-body uppercase mb-8">BIOGRAPHY</h2>
          <p className="text-body">
            I'm a filmmaker passionate about visual storytelling that moves people. 
            My experience spans commercial work, narrative film, and digital advertising 
            – from editing UGC campaigns to filming award-winning documentaries. I bring 
            a mix of creative intuition, technical expertise, and strategic thinking 
            that supports both brand goals and audience engagement.
          </p>
        </div>

        {/* Empty column 9 */}
        <div className="col-span-1"></div>

        {/* Columns 10-12: Clients */}
        <div className="col-span-3">
          <h3 className="text-body uppercase mb-8">CLIENTS</h3>
          <div className="space-y-6">
            <div>
              <Image
                src="/images/commercial/riverside/riverside-logo.png"
                alt="Riverside"
                width={140}
                height={40}
                className="h-auto"
              />
            </div>
            <div>
              <Image
                src="/images/commercial/mixtiles/mixtiles-logo.png"
                alt="Mixtiles"
                width={140}
                height={40}
                className="h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

