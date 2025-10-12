import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="relative w-full h-screen">
        <Image
          src="/images/footer/footer-placeholder.jpg"
          alt="Footer image"
          fill
          className="object-cover"
        />
      </div>
    </footer>
  );
}

