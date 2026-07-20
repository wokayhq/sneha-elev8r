"use client";
import type { Floor } from "./types";

const TRACK_H = 280;

export default function ShaftRail({
  floors,
  activeIdx,
  reduced,
}: {
  floors: Floor[];
  activeIdx: number;
  reduced: boolean;
}) {
  const n = floors.length;

  function goTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
  }

  return (
    <div className="shaft" aria-hidden="true">
      <div className="track">
        <div
          className="car"
          style={{ top: TRACK_H - 18 - (activeIdx * (TRACK_H - 18)) / (n - 1) + "px" }}
        />
        {floors.map((f, i) => (
          <button
            key={f.id}
            className="stop"
            style={{ top: TRACK_H - 8 - (i * (TRACK_H - 18)) / (n - 1) + "px" }}
            aria-label={`Go to ${f.name}`}
            onClick={() => goTo(f.id)}
          >
            <span className="tip">
              {f.floor} · {f.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
