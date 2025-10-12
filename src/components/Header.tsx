"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import RollingText from "./RollingText";

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname();
  const router = useRouter();

  // Scroll detection to determine active section
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const handleScroll = () => {
      const worksSection = document.getElementById("works");
      if (!worksSection) return;

      const rect = worksSection.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Works section is active when a significant portion is visible in the viewport
      // Start showing when top enters middle of screen, stop when bottom leaves middle
      const middleOfViewport = viewportHeight / 2;
      const isInViewport = rect.top < middleOfViewport && rect.bottom > middleOfViewport;

      if (isInViewport) {
        setActiveSection("works");
      } else {
        setActiveSection("");
      }
    };

    handleScroll(); // Check on mount
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
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
        <div className="container-grid h-14 items-center">
          {/* Logo - Left */}
          <div className="col-span-3">
            <Link href="/" onClick={handleLogoClick} className="inline-block cursor-pointer">
              <Image
                src="/assets/logos/logo-daniel-binsted.svg"
                alt="Daniel Binsted"
                width={95}
                height={13}
                style={{ width: '95px', height: 'auto' }}
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
                width={30}
                height={31}
                style={{ width: '30px', height: 'auto' }}
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
              href="/assets/documents/daniel-binsted-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link text-supporting text-foreground"
            >
              <RollingText text="CV (pdf↓)" />
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}

