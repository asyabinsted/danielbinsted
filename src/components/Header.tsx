"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import PDFModal from "./PDFModal";
import RollingText from "./RollingText";

export default function Header() {
  const [isPDFModalOpen, setIsPDFModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname();
  const router = useRouter();

  // Scroll detection to determine active section
  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const worksSection = document.getElementById("works");
      if (!worksSection) return;

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const worksTop = worksSection.offsetTop;
      const worksBottom = worksTop + worksSection.offsetHeight;

      if (scrollPosition >= worksTop && scrollPosition < worksBottom) {
        setActiveSection("works");
      } else {
        setActiveSection("");
      }
    };

    handleScroll(); // Check on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  const scrollToWorks = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (pathname !== "/") {
      router.push("/#works");
    } else {
      const worksSection = document.getElementById("works");
      if (worksSection) {
        worksSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const openPDFModal = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsPDFModalOpen(true);
  };

  const isActive = (path: string) => {
    if (path === "works") {
      return pathname === "/" && activeSection === "works";
    }
    if (path === "/about") {
      return pathname === "/about";
    }
    return false;
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 header-progressive-blur">
        <div className="container-grid h-16 items-center">
          {/* Logo - Left */}
          <div className="col-span-3">
            <Link href="/" onClick={handleLogoClick} className="inline-block cursor-pointer">
              <Image
                src="/assets/logos/logo-daniel-binsted.svg"
                alt="Daniel Binsted"
                width={105}
                height={14}
                className="h-auto w-auto"
                priority
              />
            </Link>
          </div>

          {/* Logomark - Center */}
          <div className="col-span-6 flex justify-center">
            <Link href="/" onClick={handleLogoClick} className="inline-block cursor-pointer">
              <Image
                src="/assets/logos/logomark-binsted.svg"
                alt="Binsted"
                width={34}
                height={35}
                className="h-auto w-auto"
                priority
              />
            </Link>
          </div>

          {/* Navigation - Right */}
          <nav className="col-span-3 flex justify-end gap-8">
            <a
              href="/#works"
              onClick={scrollToWorks}
              className={`nav-link text-supporting text-foreground ${
                isActive("works") ? "active" : ""
              }`}
            >
              <RollingText text="Work" />
            </a>

            <Link
              href="/about"
              className={`nav-link text-supporting text-foreground ${
                isActive("/about") ? "active" : ""
              }`}
            >
              <RollingText text="About" />
            </Link>

            <a
              href="#"
              onClick={openPDFModal}
              className="nav-link text-supporting text-foreground"
            >
              <RollingText text="CV (pdf↓)" />
            </a>
          </nav>
        </div>
      </header>

      {/* PDF Modal */}
      <PDFModal
        isOpen={isPDFModalOpen}
        onClose={() => setIsPDFModalOpen(false)}
      />
    </>
  );
}

