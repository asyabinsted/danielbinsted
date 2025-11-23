"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import RollingText from "./RollingText";
import Lottie from "lottie-react";
import preloaderAnimation from "../../public/preloader.json";

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
      const footerSection = document.querySelector("footer");
      
      const viewportHeight = window.innerHeight;
      const middleOfViewport = viewportHeight / 2;

      // Check footer first (footer takes priority when visible)
      if (footerSection) {
        const footerRect = footerSection.getBoundingClientRect();
        const isFooterInViewport = footerRect.top < middleOfViewport && footerRect.bottom > middleOfViewport;
        
        if (isFooterInViewport) {
          setActiveSection("footer");
          return;
        }
      }

      // Check works section
      if (worksSection) {
        const worksRect = worksSection.getBoundingClientRect();
        const isWorksInViewport = worksRect.top < middleOfViewport && worksRect.bottom > middleOfViewport;
        
        if (isWorksInViewport) {
          setActiveSection("works");
          return;
        }
      }

      setActiveSection("");
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

  const scrollToFooter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (pathname !== "/") {
      router.push("/#footer");
    } else {
      const footerSection = document.querySelector("footer");
      if (footerSection) {
        footerSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isActive = (path: string) => {
    if (path === "works") {
      return pathname === "/" && activeSection === "works";
    }
    if (path === "footer") {
      return pathname === "/" && activeSection === "footer";
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
          {/* Logo - Left (bigger on mobile, spans more columns) */}
          <div className="col-span-9 md:col-span-3 flex items-center pl-5 md:px-0">
            <Link href="/" onClick={handleLogoClick} className="inline-block cursor-pointer">
              <Image
                src="/assets/logos/logo-daniel-binsted.svg"
                alt="Daniel Binsted"
                width={95}
                height={13}
                style={{ width: '120px', height: 'auto' }}
                className="md:!w-[95px]"
                priority
              />
            </Link>
          </div>

          {/* Logomark - Center on desktop, Right corner on mobile */}
          <div className="col-span-3 md:col-span-6 flex justify-end md:justify-center pr-5 md:px-0">
            <Link href="/" onClick={handleLogoClick} className="inline-block cursor-pointer">
              <div style={{ width: '30px', height: '30px' }}>
                <Lottie
                  animationData={preloaderAnimation}
                  loop={true}
                  autoplay={true}
                />
              </div>
            </Link>
          </div>

          {/* Navigation - Right (hidden on mobile) */}
          <nav className="hidden md:flex col-span-3 justify-end gap-8">
            <a
              href="/#works"
              onClick={scrollToWorks}
              className={`nav-link text-supporting text-foreground ${
                isActive("works") ? "active" : ""
              }`}
            >
              <RollingText text="Work" />
            </a>

            <a
              href="/#footer"
              onClick={scrollToFooter}
              className={`nav-link text-supporting text-foreground ${
                isActive("footer") ? "active" : ""
              }`}
            >
              <RollingText text="Contact" />
            </a>

            {/* <a
              href="/assets/documents/daniel-binsted-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link text-supporting text-foreground"
            >
              <RollingText text="CV (pdf↓)" />
            </a> */}
          </nav>
        </div>
      </header>
    </>
  );
}

