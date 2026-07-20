"use client";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import type { Floor } from "./types";
import { Button } from "@/components/ui/button";

const LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#trust", label: "Clients" },
];

export default function Nav({
  floor,
  goingUp,
  onEnquire,
}: {
  floor: Floor;
  goingUp: boolean;
  onEnquire: () => void;
}) {
  // dark pill while the hero is on screen, white once scrolled past it
  const [pastHero, setPastHero] = useState(false);
  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const onScroll = () => setPastHero(hero.getBoundingClientRect().bottom < 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header className={pastHero ? "" : "nav-dark"}>
      <nav className="nav" aria-label="Main">
        <a className="logo" href="#hero">
          <Logo />
          <span className="word">
            SNEHA<span>ELEV8R</span>
          </span>
        </a>
        <div className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
        <div className="nav-right">
          <Button size="sm" onClick={onEnquire}>
            Get a Quote
          </Button>
        </div>
      </nav>
      <div className="floor-dock">
        <div className="floor-pill" aria-live="polite">
          <span className={`arrow ${goingUp ? "up" : ""}`}>▼</span>
          <span className="digit">{floor.floor}</span>
          <span className="sep" />
          <span className="label">{floor.name}</span>
        </div>
      </div>
    </header>
  );
}
