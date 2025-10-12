import Image from "next/image";
import Link from "next/link";

const works = [
  {
    id: 1,
    slug: "work-01",
    title: "Project One",
    description: "Description for project one",
    thumbnail: "/images/works/works-placeholder.jpg",
  },
  {
    id: 2,
    slug: "work-02",
    title: "Project Two",
    description: "Description for project two",
    thumbnail: "/images/works/works-placeholder.jpg",
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

