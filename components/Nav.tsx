"use client";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#trust", label: "Clients" },
];

export default function Nav() {
  // transparent over the dark hero, solid white once scrolled past it
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight - 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header className="pointer-events-none sticky top-0 z-50">
      <nav
        aria-label="Main"
        className={cn(
          "pointer-events-auto relative flex items-center justify-between py-[14px] px-[max(24px,calc((100%-1200px)/2))] transition-[background-color,border-color,box-shadow] duration-300",
          scrolled
            ? "border-b border-[rgba(23,24,26,0.07)] bg-[rgba(255,255,255,0.92)] shadow-[0_12px_34px_rgba(23,24,26,0.07)] backdrop-blur-[14px] backdrop-saturate-150"
            : "border-b border-transparent bg-gradient-to-b from-[rgba(9,9,11,0.55)] to-transparent"
        )}
      >
        <a href="#hero" className="flex items-center gap-2.5">
          <Logo size={30} />
          <span className="text-[20px] font-extrabold leading-[1.04] tracking-[0.08em] text-[#d93a2b] [font-stretch:112%]">
            SNEHA
            <span
              className={cn(
                "block text-[14px] font-semibold tracking-[0.26em]",
                scrolled ? "text-[#8e9094]" : "text-[#b9bbbf]"
              )}
            >
              ELEV8R
            </span>
          </span>
        </a>

        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-6 max-lg:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "relative py-1 text-[15px] font-medium transition-colors",
                "after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[#d93a2b] after:transition-[width] after:duration-300 hover:after:w-full",
                scrolled ? "text-[#4c4e52] hover:text-[#17181a]" : "text-white/80 hover:text-white"
              )}
            >
              {l.label}
            </a>
          ))}
        </div>

        <Button asChild size="sm" className="h-10 rounded-full px-[22px] text-[13px]">
          <a href="#cta">Get a Quote</a>
        </Button>
      </nav>
    </header>
  );
}
