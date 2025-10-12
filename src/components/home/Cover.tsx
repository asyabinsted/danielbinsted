import Image from "next/image";

export default function Cover() {
  return (
    <section className="w-full min-h-screen">
      <div className="relative w-full h-screen">
        <Image
          src="/images/cover/cover-placeholder.jpg"
          alt="Daniel Binsted - Director/Editor/Cinematographer"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}

