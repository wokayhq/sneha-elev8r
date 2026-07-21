"use client";
import { useEffect, useState } from "react";
import Logo from "./Logo";

type Lift = { key: string; target: string; title: string; desc: string; wide?: boolean };

/* Call-panel buttons double as a site directory — each floor lands you at a
   section once the doors open. Empty target = home (top of the page). */
const LIFTS: Lift[] = [
  { key: "P", target: "", title: "Villa lifts", desc: "Apartments & offices", wide: true },
  { key: "+", target: "products", title: "Apartment lifts", desc: "Stretcher & bed lifts" },
  { key: "G", target: "services", title: "Hospital lifts", desc: "Warehouses & factories" },
  { key: "C", target: "why", title: "Service lifts", desc: "Panoramic glass cabins" },
  { key: "↑", target: "trust", title: "Home", desc: "Take me to the lobby" },
];

export default function Lobby({
  onSelect,
  fading,
  reduced,
}: {
  onSelect: (target: string) => void;
  fading: boolean;
  reduced: boolean;
}) {
  const [lit, setLit] = useState<string | null>(null);

  /* no choice after 4s? open the doors anyway */
  useEffect(() => {
    if (lit !== null || fading) return;
    const t = setTimeout(() => onSelect(""), 4000);
    return () => clearTimeout(t);
  }, [lit, fading, onSelect]);

  function press(lift: Lift) {
    if (lit !== null) return;
    setLit(lift.key);
    setTimeout(() => onSelect(lift.target), reduced ? 0 : 450);
  }

  return (
    <div className={`lobby ${fading ? "gone" : ""}`} role="dialog" aria-label="Choose your lift">
      {/* lift-cabin decor */}
      <div className="cab-ceiling" aria-hidden="true" />
      <div className="cab-rail" aria-hidden="true" />
      <div className="cab-floor" aria-hidden="true" />
      <div className="lobby-inner">
        <div className="lobby-brand">
          <Logo size={40} />
          <div className="word">
            SNEHA<span>ELEV8R</span>
          </div>
        </div>
        <div className="lobby-kicker">Call panel · Please select</div>
        <div className="lobby-title">Which lift are you looking&nbsp;for?</div>
        <p className="lobby-sub">Press a button. We'll take you up.</p>
        <div className="cop">
          <div className="plate">
            <div className="plate-display" aria-hidden="true">
              <div className="pd-top">
                <span className={`pd-arrow ${lit ? "go" : ""}`}>▲</span>
                <span className="pd-floor">{lit ?? "G"}</span>
              </div>
              <span className="pd-rule" />
              <span className="pd-label">{lit ? "Going up" : "Select floor"}</span>
            </div>
            <div className="plate-head" aria-hidden="true">
              Select destination
            </div>
            {LIFTS.map((lift) => (
              <button
                key={lift.title}
                className={`call-btn ${lift.wide ? "wide" : ""} ${lit === lift.key ? "lit" : ""}`}
                onClick={() => press(lift)}
              >
                <span className="btn-ring">{lift.key}</span>
                <span>
                  <span className="text-base">{lift.title}</span>
                  <span className="d">{lift.desc}</span>
                </span>
              </button>
            ))}
            <div className="plate-cert" aria-hidden="true">
              Rated load 544 kg · 8 passengers · IS 14665
            </div>
          </div>
          <button className="lobby-skip" onClick={() => onSelect("")}>
            Skip · Enter site
          </button>
        </div>
      </div>
    </div>
  );
}
