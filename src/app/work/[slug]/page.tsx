import Image from "next/image";
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
    <main className="w-full min-h-screen">
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
        <div key={index} className="relative w-full h-screen">
          <Image
            src={image}
            alt={`${work.title} - Image ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
    </main>
  );
}

