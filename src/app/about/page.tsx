import Image from "next/image";

export default function About() {
  return (
    <main className="w-full min-h-screen">
      <div className="relative w-full h-screen">
        <Image
          src="/images/about/about-placeholder.jpg"
          alt="Daniel Binsted"
          fill
          className="object-cover"
          priority
        />
      </div>
    </main>
  );
}

