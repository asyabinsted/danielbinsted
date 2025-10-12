import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <Link 
          href="/"
          className="inline-block mb-8 text-gray-600 hover:text-gray-900"
        >
          ← Back to Home
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative w-full h-96 md:h-auto">
            <Image
              src="/images/about/about-placeholder.jpg"
              alt="Daniel Binsted"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div>
            <h1 className="text-5xl font-bold mb-6">About Me</h1>
            <div className="space-y-4 text-gray-700">
              <p>
                I'm Daniel Binsted, a passionate director, editor, and cinematographer 
                with a keen eye for visual storytelling.
              </p>
              <p>
                With years of experience in the film and video production industry, 
                I specialize in creating compelling visual narratives that resonate 
                with audiences.
              </p>
              <p>
                My work spans across various genres and formats, from commercial 
                projects to artistic endeavors, always maintaining a commitment to 
                quality and creative excellence.
              </p>
              <h2 className="text-2xl font-semibold mt-8 mb-4">Skills</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Directing</li>
                <li>Video Editing</li>
                <li>Cinematography</li>
                <li>Color Grading</li>
                <li>Visual Storytelling</li>
              </ul>
              <div className="mt-8 pt-8 border-t border-gray-300">
                <h3 className="text-xl font-semibold mb-4">Contact</h3>
                <p>Feel free to reach out for collaboration opportunities.</p>
                <p className="mt-2 text-gray-600">Email: contact@danielbinsted.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

