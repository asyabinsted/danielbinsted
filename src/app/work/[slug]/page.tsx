import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// This would typically come from a database or CMS
const works: Record<string, {
  title: string;
  description: string;
  role: string;
  year: string;
  images: string[];
  videoUrl?: string;
}> = {
  "work-01": {
    title: "Project One",
    description: "Detailed description of project one will go here. This is a placeholder for the actual project description that will be added later.",
    role: "Director/Editor/Cinematographer",
    year: "2024",
    images: ["/images/work-pages/work-01-placeholder.jpg"],
  },
  "work-02": {
    title: "Project Two",
    description: "Detailed description of project two will go here. This is a placeholder for the actual project description that will be added later.",
    role: "Director/Editor",
    year: "2024",
    images: ["/images/work-pages/work-02-placeholder.jpg"],
  },
};

export function generateStaticParams() {
  return Object.keys(works).map((slug) => ({
    slug: slug,
  }));
}

export default function WorkDetail({ params }: { params: { slug: string } }) {
  const work = works[params.slug];

  if (!work) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <Link 
          href="/"
          className="inline-block mb-8 text-gray-600 hover:text-gray-900"
        >
          ← Back to Works
        </Link>

        <h1 className="text-5xl font-bold mb-4">{work.title}</h1>
        
        <div className="flex gap-6 text-gray-600 mb-8">
          <div>
            <span className="font-semibold">Role:</span> {work.role}
          </div>
          <div>
            <span className="font-semibold">Year:</span> {work.year}
          </div>
        </div>

        <div className="space-y-8">
          {work.videoUrl && (
            <div className="w-full aspect-video bg-gray-900">
              <video 
                controls 
                className="w-full h-full"
                poster={work.images[0]}
              >
                <source src={work.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}

          {work.images.map((image, index) => (
            <div key={index} className="relative w-full h-96 md:h-[600px]">
              <Image
                src={image}
                alt={`${work.title} - Image ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}

          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold mb-4">About This Project</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {work.description}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

