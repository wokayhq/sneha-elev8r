"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Reveals its children on scroll-into-view. Replaces the old
 * `document.querySelectorAll(".rv")` observer with a self-contained,
 * ref-based component. The `.reveal` / `.reveal-in` transition lives in
 * globals.css (it needs per-property durations Tailwind can't express cleanly).
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  id,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id={id}
      style={delay ? ({ "--d": `${delay}ms` } as React.CSSProperties) : undefined}
      className={cn("reveal", shown && "reveal-in", className)}
    >
      {children}
    </div>
  );
}
