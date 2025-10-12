import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-16 px-4 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative w-full h-64">
            <Image
              src="/images/footer/footer-placeholder.jpg"
              alt="Footer image"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
            <p className="text-gray-300 mb-6">
              Available for directing, editing, and cinematography projects.
            </p>
            <Link 
              href="/about"
              className="inline-block px-6 py-3 bg-white text-gray-900 font-semibold rounded hover:bg-gray-200 transition-colors"
            >
              About Me
            </Link>
            <div className="mt-8">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Daniel Binsted. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

