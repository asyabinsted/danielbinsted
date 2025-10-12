import Image from "next/image";

export default function Cover() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-7xl px-4">
        <div className="relative w-full h-[80vh]">
          <Image
            src="/images/cover/cover-placeholder.jpg"
            alt="Daniel Binsted - Director/Editor/Cinematographer"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
            <h1 className="text-white text-6xl font-bold text-center">
              Daniel Binsted
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

