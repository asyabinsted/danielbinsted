import Image from "next/image";
import Link from "next/link";

const works = [
  {
    id: 1,
    slug: "the-unknown-soldier",
    title: "The Unknown Soldier",
    description: "Documentary · Short · Drama",
    thumbnail: "/images/works/the-unknown-soldier/unknown-soldier-placeholder.jpg",
  },
  {
    id: 2,
    slug: "the-war-of-raya-sinitsina",
    title: "The War of Raya Sinitsina",
    description: "Documentary · Biography",
    thumbnail: "/images/works/the-war-of-raya-sinitsina/war-of-raya-cover.jpg",
  },
  {
    id: 3,
    slug: "the-first-lady",
    title: "The First Lady",
    description: "Documentary",
    thumbnail: "/images/works/the-first-lady/first-lady-placeholder.jpg",
  },
  {
    id: 4,
    slug: "julian-edelman",
    title: "100% Julian Edelman",
    description: "Documentary",
    thumbnail: "/images/works/julian-edelman/julian-edelman-placeholder.jpg",
  },
  {
    id: 5,
    slug: "kuya-noy",
    title: "Kuya Noy",
    description: "Documentary",
    thumbnail: "/images/works/kuya-noy/kuya-noy-placeholder.jpg",
  },
];

export default function Works() {
  return (
    <section id="works" className="w-full py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-h1 mb-12 text-center text-foreground">Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {works.map((work) => (
            <Link key={work.id} href={`/work/${work.slug}`}>
              <div className="relative group cursor-pointer overflow-hidden">
                <div className="relative w-full h-96">
                  <Image
                    src={work.thumbnail}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-h1 text-foreground">{work.title}</h3>
                  <p className="text-body text-foreground mt-2">{work.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

