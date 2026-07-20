"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import Lobby from "../components/Lobby";
import Doors from "../components/Doors";
import Nav from "../components/Nav";
import ShaftRail from "../components/ShaftRail";
import Logo from "../components/Logo";
import { InstallArt, MaintainArt, ModernArt } from "../components/ServiceArt";
import type { Floor } from "../components/types";
import { Button } from "@/components/ui/button";
import slSeriesImg from "./assets/SL-Series.webp";
import {
  ArrowRight,
  ArrowUpRight,
  Home as HomeIcon,
  Building2,
  Building,
  Hexagon,
  Shield,
  Circle,
  Box,
  Triangle,
  Boxes,
  HardHat,
  Wrench,
  Sparkles,
  Check,
  Quote,
  ChevronDown,
  ChevronUp,
  BadgeCheck,
  Users,
  Factory,
  Award,
  MapPin,
  PhoneCall,
  Landmark,
  Star,
  ShieldCheck,
  Cog,
  Weight,
} from "lucide-react";

const FLOORS: Floor[] = [
  { id: "hero", floor: "G", name: "GROUND" },
  { id: "products", floor: "1", name: "PRODUCTS" },
  { id: "why", floor: "2", name: "WHY US" },
  { id: "services", floor: "3", name: "SERVICES" },
  { id: "projects", floor: "4", name: "PROJECTS" },
  { id: "trust", floor: "5", name: "CLIENTS" },
  { id: "faq", floor: "6", name: "FAQ" },
  { id: "cta", floor: "7", name: "ENQUIRE" },
];

type Advantage = { icon: ReactNode; title: string; desc: string };

const WHY: Advantage[] = [
  {
    icon: <Award strokeWidth={1.8} />,
    title: "ISO 9001:2015 Certified",
    desc: "Our manufacturing and service processes are certified to ISO 9001:2015, ensuring consistent quality from production through installation and inspection.",
  },
  {
    icon: <Users strokeWidth={1.8} />,
    title: "In-House Service Team",
    desc: "A dedicated in-house team of certified engineers and technicians across three states. No third-party AMC handover — the team that installs also services.",
  },
  {
    icon: <MapPin strokeWidth={1.8} />,
    title: "3,500+ Live AMC Sites",
    desc: "A growing post-installation track record since 2017. Proven response times and parts availability at scale.",
  },
  {
    icon: <PhoneCall strokeWidth={1.8} />,
    title: "24/7 Emergency Response",
    desc: "For AMC clients, a dedicated breakdown line with structured escalation. Same-day response in Hyderabad metro area.",
  },
  {
    icon: <Landmark strokeWidth={1.8} />,
    title: "Part of the Sneha Group",
    desc: "Decades of group operating history across multiple industries gives our customers institutional-grade reliability and continuity.",
  },
  {
    icon: <Factory strokeWidth={1.8} />,
    title: "Manufactured in Hyderabad",
    desc: "Our factory at Bollaram lets us customise every installation to your civil layout and shorten lead times for South India projects.",
  },
];

const PARTNERS: string[] = [
  "Vasavi Group",
  "Raymond",
  "Vasmiram",
  "MyHome",
  "UrbanX",
  "Hallmark",
  "Muppa",
  "Kinara",
  "Rajapushpa",
  "Jyothi Woods",
  "PMR Group",
  "Raichandani",
  "Zudio",
  "APR Group",
  "Vessella Meadows",
  "Magna",
  "Sri Srinivasa",
  "Virchows",
];

const PARTNER_ICONS = [Building2, Landmark, Factory, Building, Hexagon, Shield];


type Faq = { q: string; a: string };

const FAQS: Faq[] = [
  {
    q: "How long does a new elevator installation take?",
    a: "From order confirmation to commissioning, a typical residential VL Series installation takes 8–12 weeks. SL Series villa installations are usually 6–8 weeks. RMG Series and larger commercial installations can take 10–16 weeks depending on the number of elevators and civil readiness. Lead times start once your civil work is complete and ready to receive the equipment.",
  },
  {
    q: "What does an Annual Maintenance Contract include?",
    a: "Our Standard AMC includes monthly preventive maintenance visits, basic repair labour, safety-compliance checks, and priority breakdown response. Our Comprehensive AMC additionally includes most common spare parts (excluding cabin components and major rope replacements), and a guaranteed response time SLA. Both tiers are available for SL, VL, RMG Series elevators, and we also service most other manufacturer’s elevators.",
  },
  {
    q: "Which series should I choose for my project?",
    a: "It depends on three things: your building height, your space constraints, and your power supply. SL Series is purpose-built for villas, duplexes and existing homes — small pit, single- or three-phase, up to 4 floors. VL Series is best for residential apartments and low- to high-rise commercial buildings without space for a separate machine room. RMG Series suits low to high-rise buildings where a machine room is available and consistent operation under heavy daily usage is critical.",
  },
  {
    q: "Do you handle civil work for the elevator shaft?",
    a: "We don’t do civil construction directly, but we provide detailed civil drawings and specifications to your contractor. Our site engineers verify the civil work before equipment installation begins. We also have a network of trusted civil contractors in Hyderabad, Bangalore, Vijayawada and Visakhapatnam who we can recommend if you don’t already have a contractor.",
  },
  {
    q: "What warranty do you provide?",
    a: "All new Sneha Elev8r elevators come with a standard 12-month warranty from the date of commissioning, covering manufacturing defects in equipment we supply. The warranty is transferable to subsequent owners with prior notice. Extended warranty options are available as part of the Comprehensive AMC.",
  },
  {
    q: "Do you service elevators not installed by Sneha Elev8r?",
    a: "Yes. Our technicians are trained to service most major elevator brands — Otis, Kone, Schindler, ThyssenKrupp, Mitsubishi, and many regional manufacturers. We’ll do an initial system evaluation and offer an appropriate AMC contract. For spare parts, we stock multi-brand-compatible parts at our Hyderabad warehouse.",
  },
  {
    q: "What safety standards do your elevators follow, and why does it matter?",
    a: "Our elevators are engineered to ISO 8100 — the international standard for the design, construction, installation and inspection of lifts (equivalent to the EN 81-20/50 series) — and built under an ISO 9001:2015-certified quality management system. Following recognised safety standards matters because buildings with non-compliant lifts can face issues during fire-safety audits, insurance reviews and building completion certificates.",
  },
  {
    q: "Do you provide emergency breakdown service?",
    a: "Yes. AMC customers have access to our 24/7 breakdown line. Hyderabad metro response is targeted at 4 working hours; other cities follow structured escalation. Non-AMC customers can also call for emergency callouts, billed at standard labour and parts rates.",
  },
  {
    q: "Where is your factory and head office?",
    a: "Our head office is at Kondapur, Hyderabad. Our manufacturing facility is at Bollaram, Hyderabad. Both are open for visits by serious prospective customers — please contact us to schedule.",
  },
  {
    q: "What states and cities do you serve?",
    a: "We have active operations in Telangana, Andhra Pradesh, and Karnataka. Cities with dedicated service teams include Hyderabad, Vijayawada, Visakhapatnam, Nellore and Bangalore. For projects in other South Indian locations, we’ll evaluate on a project-by-project basis.",
  },
];

type Product = {
  id: string;
  code: string;
  title: string;
  desc: string;
  specs: [string, string][];
  icon: ReactNode;
  img: string;
  featured?: boolean;
};

const PRODUCTS: Product[] = [
  {
    id: "p-sl",
    code: "SL",
    title: "Elegant lifts for villas and existing homes",
    desc: "Engineered specifically for villas, duplexes and existing structures with space constraints. Single-phase power, 150 mm minimum pit, and a motor that fits within the hoistway make it ideal for adding a lift to an existing home.",
    specs: [
      ["Drive", "Compact MRL"],
      ["Capacity", "Up to 272 kg"],
      ["Best for", "Villas & duplexes"],
    ],
    icon: <HomeIcon strokeWidth={1.8} />,
    img: slSeriesImg.src,
  },
  {
    id: "p-vl",
    code: "VL",
    title: "Smart, space-efficient elevators",
    desc: "Designed for residential apartments, office buildings and mid-rise commercial. The VL Series eliminates the need for a separate machine room, reducing civil work while delivering smooth, quiet, energy-efficient performance.",
    specs: [
      ["Drive", "Machine-Room-Less"],
      ["Capacity", "4–30 persons"],
      ["Best for", "Apartments & offices"],
    ],
    icon: <Building2 strokeWidth={1.8} />,
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=900&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "p-rmg",
    code: "RMG",
    title: "Performance and economy for mid-to-high-rise",
    desc: "Gearless traction with a machine room. The RMG Series combines proven traction technology with modern controls for low to high-rise residential and commercial buildings where long-term operating cost matters.",
    specs: [
      ["Drive", "Gearless traction"],
      ["Capacity", "4–30 persons"],
      ["Best for", "Mid to high-rise"],
    ],
    icon: <Building strokeWidth={1.8} />,
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=900&auto=format&fit=crop",
  },
];

type Service = { icon: ReactNode; art: ReactNode; title: string; desc: string; points: string[] };

const SERVICES: Service[] = [
  {
    icon: <HardHat strokeWidth={1.8} />,
    art: <InstallArt />,
    title: "New Installation",
    desc: "End-to-end installation of new elevators from our manufacturing facility. Site survey, civil verification, electrical coordination, commissioning, and handover.",
    points: [
      "Free site survey and proposal",
      "Civil drawing verification",
      "Commissioning and BIS handover",
      "3 months of free service",
    ],
  },
  {
    icon: <Wrench strokeWidth={1.8} />,
    art: <MaintainArt />,
    title: "Maintenance & Repair",
    desc: "Quick, efficient repair to restore elevator operation. Available for AMC customers and as standalone callouts.",
    points: [
      "Breakdown troubleshooting",
      "Genuine spare-parts replacement",
      "Rapid response by trained technicians",
      "Transparent labour and parts pricing",
    ],
  },
  {
    icon: <Sparkles strokeWidth={1.8} />,
    art: <ModernArt />,
    title: "Modernisation & Upgrades",
    desc: "Upgrade ageing elevators with modern technology for better performance, safety and energy efficiency. Suitable for elevators 10+ years old.",
    points: [
      "Control panel and VVVF drive upgrades",
      "Cabin and interior refresh",
      "Safety system enhancement",
      "Manual-to-automatic conversion",
    ],
  },
];

type Project = { title: string; meta: string; img: string };

// Unsplash placeholders — swap for real project photos when available.
const PROJECTS_PORTFOLIO: Project[] = [
  {
    title: "Residential Tower — Hyderabad",
    meta: "8 VL SERIES ELEVATORS · 32 FLOORS · 2024",
    img: "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Multi-Specialty Hospital — Vijayawada",
    meta: "6 RMG SERIES + 2 GOODS LIFTS · 12 FLOORS · 2024",
    img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Corporate Office — Bangalore",
    meta: "4 RMG SERIES ELEVATORS · 15 FLOORS · 2024",
    img: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Premium Villa Project — Hyderabad",
    meta: "28 SL SERIES VILLA LIFTS · GATED COMMUNITY · 2023",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  },
];

type Testimonial = { initials: string; name: string; meta: string; text: string };

const TESTIMONIALS: Testimonial[] = [
  {
    initials: "RP",
    name: "Verified Customer",
    meta: "Residential project · Hyderabad",
    text: "Sneha Elev8r provided excellent service from start to finish. The installation was done smoothly, with good quality materials and proper safety standards. A special appreciation to Site Engineer T. Siva Krishna—he was knowledgeable, responsive, and ensured everything was completed on time. A reliable and professional team.",
  },
  {
    initials: "PD",
    name: "Project Developer",
    meta: "Bulk-order client · Telangana",
    text: "We’ve worked with Sneha Elev8r across multiple residential towers. Response time on AMC calls is consistent, and their factory’s ability to customise to our civil drawings has saved time on every project we’ve handed over.",
  },
];

/* Mouse-reactive dot field for the hero: a loose grid of dots that
   scatter away from the cursor and ease back home. Dots fade out
   toward the hero's edges, echoing the old static texture. */
function HeroDots() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const parent = canvas.parentElement as HTMLElement;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const GAP = 26;
    const RADIUS = 120;
    const PUSH = 26;
    let w = 0;
    let h = 0;
    let raf = 0;
    let dots: { x: number; y: number; ox: number; oy: number; r: number; a: number }[] = [];
    const mouse = { x: -9999, y: -9999 };

    function build() {
      const dpr = window.devicePixelRatio || 1;
      w = parent.clientWidth;
      h = parent.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots = [];
      for (let y = GAP / 2; y < h; y += GAP) {
        for (let x = GAP / 2; x < w; x += GAP) {
          const ox = x + (Math.random() * 12 - 6);
          const oy = y + (Math.random() * 12 - 6);
          // quiet zone over the headline, dots ring around it, fading at the edges
          const dx = (ox - w / 2) / (w * 0.5);
          const dy = (oy - h * 0.3) / (h * 0.48);
          const e = Math.hypot(dx, dy);
          const edge = Math.max(0, Math.min(1, 1.15 - e));
          const quiet = Math.max(0, Math.min(1, (e - 0.22) / 0.35));
          const a = edge * quiet * 0.2;
          if (a > 0.01) dots.push({ x: ox, y: oy, ox, oy, r: 1.2 + Math.random() * 0.9, a });
        }
      }
    }

    function frame() {
      ctx!.clearRect(0, 0, w, h);
      for (const d of dots) {
        let tx = d.ox;
        let ty = d.oy;
        const mx = d.x - mouse.x;
        const my = d.y - mouse.y;
        const dist = Math.hypot(mx, my);
        if (!reduced && dist < RADIUS && dist > 0.01) {
          const f = (1 - dist / RADIUS) * PUSH;
          tx = d.ox + (mx / dist) * f;
          ty = d.oy + (my / dist) * f;
        }
        d.x += (tx - d.x) * 0.14;
        d.y += (ty - d.y) * 0.14;
        ctx!.beginPath();
        ctx!.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(23, 24, 26, ${d.a})`;
        ctx!.fill();
      }
      raf = requestAnimationFrame(frame);
    }

    function onMove(e: MouseEvent) {
      const rect = parent.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }
    function onLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    build();
    frame();
    parent.addEventListener("mousemove", onMove);
    parent.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", build);
    return () => {
      cancelAnimationFrame(raf);
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", build);
    };
  }, []);

  return <canvas ref={ref} className="hero-dots" aria-hidden="true" />;
}

export default function Home() {
  const [phase, setPhase] = useState("lobby"); // lobby | arming | open | done
  const [selected, setSelected] = useState("");
  const [floorIdx, setFloorIdx] = useState(0);
  const [goingUp, setGoingUp] = useState(false);
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const [toyFloor, setToyFloor] = useState(0);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    document.body.classList.toggle("locked", phase !== "done");
    return () => document.body.classList.remove("locked");
  }, [phase]);

  /* soft two-tone elevator ding via WebAudio, no asset files */
  function ding() {
    try {
      const Ctor =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new Ctor();
      (
        [
          [830, 0],
          [622, 0.18],
        ] as [number, number][]
      ).forEach(([f, t]) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = "sine";
        o.frequency.value = f;
        g.gain.setValueAtTime(0.0001, ctx.currentTime + t);
        g.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + t + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + t + 0.9);
        o.connect(g);
        g.connect(ctx.destination);
        o.start(ctx.currentTime + t);
        o.stop(ctx.currentTime + t + 1);
      });
    } catch {
      /* audio blocked, no problem */
    }
  }

  function enter(targetId: string) {
    const r = reduced.current;
    setPhase("arming");
    setTimeout(
      () => {
        ding();
        setPhase("open");
      },
      r ? 50 : 700
    );
    setTimeout(
      () => {
        setPhase("done");
        if (targetId) {
          setSelected(targetId);
          document
            .getElementById(targetId)
            ?.scrollIntoView({ behavior: r ? "auto" : "smooth", block: "center" });
        }
      },
      r ? 120 : 2050
    );
  }

  /* floor indicator + shaft car follow scroll */
  useEffect(() => {
    let lastY = 0;
    const onScroll = () => {
      const mid = window.scrollY + window.innerHeight * 0.4;
      let idx = 0;
      FLOORS.forEach((f, i) => {
        const el = document.getElementById(f.id);
        if (el && el.offsetTop <= mid) idx = i;
      });
      setFloorIdx(idx);
      if (window.scrollY !== lastY) setGoingUp(window.scrollY > lastY);
      lastY = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* reveal on scroll */
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".rv").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const goEnquire = () =>
    document.getElementById("cta")?.scrollIntoView({ behavior: reduced.current ? "auto" : "smooth" });
  const goProducts = () =>
    document
      .getElementById("products")
      ?.scrollIntoView({ behavior: reduced.current ? "auto" : "smooth" });

  return (
    <>
      {phase !== "done" && <Doors phase={phase} />}
      {(phase === "lobby" || phase === "arming") && (
        <Lobby onSelect={enter} fading={phase !== "lobby"} reduced={reduced.current} />
      )}

      <Nav floor={FLOORS[floorIdx]} goingUp={goingUp} onEnquire={goEnquire} />
      <ShaftRail floors={FLOORS} activeIdx={floorIdx} reduced={reduced.current} />

      {/* page content rides up like an arriving lift while the doors open */}
      <div className={`page-lift ${phase === "lobby" || phase === "arming" ? "pre-arrival" : ""}`}>
      {/* ─── FLOOR G · HERO V1 — commented out, kept for easy revert.
           To restore: delete the HERO V2 section below and unwrap this comment. ───
      <section id="hero" className="hero">
        <HeroDots />
        <button className="hero-call" onClick={goProducts} aria-label="Scroll to our range">
          <ChevronDown strokeWidth={2.2} />
        </button>
        <div className="wrap hero-center">
          <div className="hero-eyebrow">Built in Hyderabad · Trusted across South India</div>
          <h1>
            Elevators{" "}
            <span className="h1-chip" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path
                  d="M12 6 L20 18 H4 Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
              </svg>
            </span>{" "}
            that last.
            <br />
            <span className="up">Service that shows up.</span>
          </h1>
          <p className="hero-sub">
            We design, build, install and maintain elevators across South India — 3,500+ live
            sites, backed by our own in-house service network.
          </p>
          <div className="hero-cta">
            <Button size="lg" onClick={goEnquire}>
              Book a Free Site Survey
              <ArrowRight aria-hidden="true" />
            </Button>
            <Button variant="outline" size="lg" onClick={goProducts}>
              Compare Our Series
            </Button>
          </div>
          <div className="hero-marquee rv" aria-hidden="true">
            <div className="marquee">
              <div className="marquee-track">
                {[...PARTNERS, ...PARTNERS].map((name, i) => {
                  const Icon = PARTNER_ICONS[i % PARTNER_ICONS.length];
                  return (
                    <span className="hlogo" key={i}>
                      <Icon strokeWidth={1.6} />
                      <span>{name}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="hero-trust rv">
            <div className="trust-card">
              <span className="trust-tab">Trusted at scale across South India</span>
              <div className="trust-stats">
                <div className="mstat">
                  <b>2017</b>
                  <span>Operating since</span>
                </div>
                <div className="mstat">
                  <b>3,500+</b>
                  <span>Live AMC sites</span>
                </div>
                <div className="mstat">
                  <b>3</b>
                  <span>States served</span>
                </div>
                <div className="mstat">
                  <b>24/7</b>
                  <span>Emergency response</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      ─── END HERO V1 ─── */}

      {/* FLOOR G · HERO V2 — dark, photo-backed */}
      <section id="hero" className="hero2">
        <div className="hero2-bg" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hero.png" alt="" />
          <div className="hero2-shade" />
        </div>
        <div className="wrap hero2-inner">
          <div className="hero2-eyebrow">Built in Hyderabad · Trusted across South India</div>
          <h1>
            South India’s
            <br />
            <span className="up">Most Trusted</span>
            <br />
            Elevator Company<span className="up">.</span>
          </h1>
          <p className="hero2-sub">
            Designing, manufacturing and maintaining elevators for homes, apartments, hospitals,
            hotels and commercial buildings since 2017.
          </p>
          <div className="hero-cta">
            <Button size="lg" onClick={goEnquire}>
              Get Free Site Survey
              <ArrowRight aria-hidden="true" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={goProducts}
              className="border-white/30 bg-transparent text-white shadow-none hover:border-white/60 hover:bg-white/10"
            >
              View Elevator Series
            </Button>
          </div>
          <div className="hero-marquee rv" aria-hidden="true">
            <div className="hero2-logos-head">Clients we’ve worked with</div>
            <div className="marquee">
              <div className="marquee-track">
                {[...PARTNERS, ...PARTNERS].map((name, i) => {
                  const Icon = PARTNER_ICONS[i % PARTNER_ICONS.length];
                  return (
                    <span className="hlogo" key={i}>
                      <Icon strokeWidth={1.6} />
                      <span>{name}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="wrap hero2-stats-wrap">
          <div className="hero2-stats">
            <div className="h2stat">
              <Star strokeWidth={1.5} aria-hidden="true" />
              <span className="h2stat-txt">
                <b>
                  3,500<em>+</em>
                </b>
                <span>Live Installations</span>
              </span>
            </div>
            <div className="h2stat">
              <HardHat strokeWidth={1.5} aria-hidden="true" />
              <span className="h2stat-txt">
                <b>
                  24<em>×</em>7
                </b>
                <span>Service Engineers</span>
              </span>
            </div>
            <div className="h2stat">
              <MapPin strokeWidth={1.5} aria-hidden="true" />
              <span className="h2stat-txt">
                <b>
                  15<em>+</em>
                </b>
                <span>Cities Across South India</span>
              </span>
            </div>
            <div className="h2stat">
              <ShieldCheck strokeWidth={1.5} aria-hidden="true" />
              <span className="h2stat-txt">
                <b>
                  98<em>%</em>
                </b>
                <span>AMC Renewal</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FLOOR 1 · PRODUCTS */}
      <section id="products" className="products">
        <div className="wrap">
          <div className="sec-head" data-floor="01">
            <div className="floor-tag rv">
              <b>FLOOR 1</b> · Our Range
            </div>
            <h2 className="sec rv">
              Built for <span className="accent">homes</span>, offices, hospitals and industry.
            </h2>
            <p className="sec-sub rv">
              Three product series cover residential through high-rise commercial. Every
              installation is custom-engineered to the building’s civil layout, usage pattern and
              power conditions.
            </p>
          </div>
          <div className="prod-grid">
            {PRODUCTS.map((p, i) => {
              /* First card (SL Series) uses a redesigned, series-forward layout.
                 The other two keep the original .prod design for comparison. */
              if (i === 0) {
                const specIcons = [Cog, Weight, Building2];
                return (
                  <div key={p.id} id={p.id} className="slx-card rv">
                    <div className="slx-media" aria-hidden="true">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img className="slx-img" src={p.img} alt="" loading="lazy" />
                      <span className="slx-badge">For homes &amp; villas</span>
                    </div>
                    <div className="slx-body">
                      <div className="slx-series">
                        <span className="slx-series-ico" aria-hidden="true">
                          <HomeIcon strokeWidth={1.9} />
                        </span>
                        <span className="slx-series-txt">
                          <b>SL Series</b>
                          <span>Home &amp; villa elevator</span>
                        </span>
                      </div>
                      <h3 className="slx-title">{p.title}</h3>
                      <p className="slx-desc">{p.desc}</p>
                      <div className="slx-specs">
                        {p.specs.map(([k, v], si) => {
                          const Ico = specIcons[si] ?? Cog;
                          return (
                            <div className="slx-spec" key={k}>
                              <span className="slx-spec-ico" aria-hidden="true">
                                <Ico strokeWidth={1.9} />
                              </span>
                              <span className="slx-spec-txt">
                                <span className="slx-spec-k">{k}</span>
                                <span className="slx-spec-v">{v}</span>
                              </span>
                            </div>
                          );
                        })}
                      </div>
                      <a className="slx-cta" href="#cta">
                        Explore SL Series
                        <ArrowRight aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                );
              }
              return (
                <div
                  key={p.id}
                  id={p.id}
                  className={`prod rv ${p.featured ? "featured" : ""} ${selected === p.id ? "selected" : ""}`}
                >
                  {p.featured && <span className="prod-badge">Most specified</span>}
                  <div className="prod-head" aria-hidden="true">
                    <div className="art-clip">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img className="art-img" src={p.img} alt="" loading="lazy" />
                    </div>
                    <div className="prod-lamp">
                      <b>{p.code}</b>
                      <span>Series</span>
                    </div>
                    <div className="pbtn">{p.icon}</div>
                  </div>
                  <h3>
                    <span className="sr-only">{p.code} Series — </span>
                    {p.title}
                  </h3>
                  <p>{p.desc}</p>
                  <ul className="prod-specs">
                    {p.specs.map(([k, v]) => (
                      <li key={k}>
                        <span className="k">{k}</span>
                        <i aria-hidden="true" />
                        <span className="v">{v}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FLOOR 2 · WHY US */}
      <section id="why" className="why">
        <div className="wrap">
          <div className="why-split">
            <div className="why-panel rv">
              <div className="floor-tag">
                <b>FLOOR 2</b> · Why Sneha Elev8r
              </div>
              <h2>
                Manufacturing, installation and service — <span className="accent">one team.</span>
              </h2>
              <p>
                Six practical advantages that builders, developers and homeowners tell us matter
                most.
              </p>
              <div className="why-route" aria-hidden="true">
                <div className="wr-step">
                  <i />
                  <span>Manufacture</span>
                  <em>Bollaram, Hyderabad</em>
                </div>
                <div className="wr-step">
                  <i />
                  <span>Install</span>
                  <em>Custom to your civil layout</em>
                </div>
                <div className="wr-step">
                  <i />
                  <span>Service</span>
                  <em>Same team, 24×7 AMC</em>
                </div>
              </div>
              <div className="why-stats">
                <div>
                  <b>2017</b>
                  <span>Operating since</span>
                </div>
                <div>
                  <b>3,500+</b>
                  <span>Live AMC sites</span>
                </div>
                <div>
                  <b>3</b>
                  <span>States served</span>
                </div>
              </div>
              <span className="cert-chip">
                <ShieldCheck strokeWidth={1.8} />
                ISO 9001:2015 certified processes
              </span>
            </div>
            <div className="why-cards">
              {WHY.map((w, i) => (
                <div key={w.title} className="why-card rv">
                  <div className="why-top">
                    <div className="why-ico">{w.icon}</div>
                    <span className="why-num" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED PARTNERS · marquee — hidden for now; the names live in the hero logo strip
      <section className="partners" aria-label="Trusted partners">
        <div className="wrap">
          <div className="partners-head rv">Clients we’ve worked with</div>
        </div>
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...PARTNERS, ...PARTNERS].map((name, i) => (
              <span className="chip" key={i}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* FLOOR 3 · SERVICES */}
      <section id="services" className="services">
        <div className="wrap">
          <div className="sec-head" data-floor="03">
            <div className="floor-tag rv">
              <b>FLOOR 3</b> · Our Services
            </div>
            <h2 className="sec rv">
              End-to-end elevator <span className="accent">service</span> solutions.
            </h2>
            <p className="sec-sub rv">
              From new installation to spare-parts support, we cover every stage of the elevator’s
              operating life. Choose the right service for your situation.
            </p>
          </div>
          <div className="svc-grid">
            {SERVICES.map((s, i) => (
              <div className="svc rv" key={s.title}>
                <div className="svc-art">
                  <div className="art-clip">{s.art}</div>
                  <div className="svc-chip">{s.icon}</div>
                  <span className="svc-num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul>
                  {s.points.map((pt) => (
                    <li key={pt}>
                      <Check strokeWidth={2.4} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLOOR 4 · PROJECTS */}
      <section id="projects" className="projects">
        <div className="wrap">
          <div className="sec-head" data-floor="04">
            <div className="floor-tag rv">
              <b>FLOOR 4</b> · Project Portfolio
            </div>
            <h2 className="sec rv">
              Installed across <span className="accent">South India.</span>
            </h2>
            <p className="sec-sub rv">
              A selection of residential, commercial, hospital and industrial installations backed
              by our own AMC service network.
            </p>
          </div>
          <div className="proj-grid">
            {PROJECTS_PORTFOLIO.map((p) => (
              <div className="proj rv" key={p.title}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="proj-img" src={p.img} alt={p.title} loading="lazy" />
                <div className="proj-go" aria-hidden="true">
                  <ArrowUpRight strokeWidth={2} />
                </div>
                <div className="meta">
                  <h4>{p.title}</h4>
                  <span>{p.meta}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLOOR 5 · TRUST */}
      <section id="trust" className="trust">
        <div className="wrap">
          <div className="sec-head" data-floor="05">
            <div className="floor-tag rv">
              <b>FLOOR 5</b> · Voices of Trust
            </div>
            <h2 className="sec rv">
              What our <span className="accent">customers</span> say.
            </h2>
            <p className="sec-sub rv">
              The results our clients and their buildings see, in their own words — backed by
              third-party-verified compliance.
            </p>
          </div>
          <div className="trust-bento">
            <div className="tq tq-featured rv">
              <div className="tq-top">
                <div className="quote-mark" aria-hidden="true">
                  <Quote />
                </div>
                <div className="stars" aria-hidden="true">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} strokeWidth={1.5} />
                  ))}
                </div>
              </div>
              <blockquote className="tq-text">{TESTIMONIALS[0].text}</blockquote>
              <div className="tq-who">
                <span className="tq-avatar" aria-hidden="true">
                  {TESTIMONIALS[0].initials}
                </span>
                <span className="tq-id">
                  <span className="tq-name">
                    {TESTIMONIALS[0].name}
                    <BadgeCheck strokeWidth={2} aria-hidden="true" />
                  </span>
                  <span className="tq-meta">{TESTIMONIALS[0].meta}</span>
                </span>
              </div>
            </div>

            <div className="tb-cert rv">
              <div className="cert-ico" aria-hidden="true">
                <Award strokeWidth={1.8} />
              </div>
              <h3>ISO 9001:2015</h3>
              <p>
                Manufacturing and service processes certified to ISO 9001:2015 — consistent quality
                from production through installation and inspection.
              </p>
              <span className="cert-chip">
                <ShieldCheck strokeWidth={1.8} />
                Third-party verified, not self-declared
              </span>
            </div>

            <div className="tq tq-wide rv">
              <div className="tq-top">
                <div className="quote-mark" aria-hidden="true">
                  <Quote />
                </div>
                <div className="stars" aria-hidden="true">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} strokeWidth={1.5} />
                  ))}
                </div>
              </div>
              <blockquote className="tq-text">{TESTIMONIALS[1].text}</blockquote>
              <div className="tq-who">
                <span className="tq-avatar" aria-hidden="true">
                  {TESTIMONIALS[1].initials}
                </span>
                <span className="tq-id">
                  <span className="tq-name">
                    {TESTIMONIALS[1].name}
                    <BadgeCheck strokeWidth={2} aria-hidden="true" />
                  </span>
                  <span className="tq-meta">{TESTIMONIALS[1].meta}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLOOR 6 · FAQ */}
      <section id="faq" className="faq">
        <div className="wrap">
          <div className="sec-head" data-floor="06">
            <div className="floor-tag rv">
              <b>FLOOR 6</b> · Frequently Asked Questions
            </div>
            <h2 className="sec rv">
              Answers to common <span className="accent">questions.</span>
            </h2>
            <p className="sec-sub rv">
              Practical answers to the questions buyers, building managers and project consultants
              most often ask before specifying or contracting Sneha Elev8r.
            </p>
          </div>
          <div className="faq-list rv">
            {(showAllFaqs ? FAQS : FAQS.slice(0, 4)).map((f) => (
              <details className="faq-item" key={f.q}>
                <summary>
                  <span>{f.q}</span>
                  <span className="faq-ico" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
          {FAQS.length > 4 && (
            <div className="faq-more">
              <Button variant="outline" size="sm" onClick={() => setShowAllFaqs((v) => !v)}>
                {showAllFaqs ? "Show less" : `Show ${FAQS.length - 4} more`}
                <ChevronDown
                  aria-hidden="true"
                  style={{ transform: showAllFaqs ? "rotate(180deg)" : "none" }}
                />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* FLOOR 7 · CTA */}
      <section id="cta" className="cta">
        {/* mini playable lift */}
        <div className="mini-lift">
          <div className="toy-lamp" aria-hidden="true">
            {["G", "1", "2", "3"][toyFloor]}
          </div>
          <div className="toy-shaft" aria-hidden="true">
            <i className="toy-cab" style={{ bottom: `${8 + toyFloor * 40}px` }} />
          </div>
          <div className="toy-controls">
            <button
              className="toy-btn"
              aria-label="Toy lift up"
              disabled={toyFloor === 3}
              onClick={() => setToyFloor((f) => Math.min(3, f + 1))}
            >
              <ChevronUp strokeWidth={2.4} />
            </button>
            <button
              className="toy-btn"
              aria-label="Toy lift down"
              disabled={toyFloor === 0}
              onClick={() => setToyFloor((f) => Math.max(0, f - 1))}
            >
              <ChevronDown strokeWidth={2.4} />
            </button>
          </div>
        </div>
        <div className="wrap cta-inner">
          <div className="floor-tag rv">
            <b>FLOOR 7</b> · Enquire
          </div>
          <h2 className="rv">
            Let’s find the right
            <br />
            lift for <span className="accent">your building.</span>
          </h2>
          <p className="rv">
            A 30-minute site survey gives you a costed proposal, a delivery timeline, and a clear
            picture of what your civil and electrical work needs to look like.
          </p>
          <div className="cta-actions rv">
            <Button size="lg">Book a Site Survey</Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/40 bg-transparent text-white shadow-none hover:border-white hover:bg-white/10"
            >
              <a href="tel:+919100812345">Call +91 91008 12345</a>
            </Button>
          </div>
          <div className="cta-note rv">
            Free survey <i /> Costed proposal <i /> Delivery timeline included
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="foot-top">
            <div className="foot-brand">
              <div className="word">
                <Logo size={28} />
                <span>
                  <b>SNEHA</b> ELEV8R
                </span>
              </div>
              <p>
                Engineered in Hyderabad, installed across South India. A flagship brand of the Sneha
                Group — manufacturing, installation and in-house service under one team.
              </p>
            </div>
            <div className="foot-col">
              <h5>Products</h5>
              <a href="#products">SL Series</a>
              <a href="#products">VL Series</a>
              <a href="#products">RMG Series</a>
              <a href="#products">Compare series</a>
            </div>
            <div className="foot-col">
              <h5>Company</h5>
              <a href="#why">Why Sneha Elev8r</a>
              <a href="#services">Services &amp; AMC</a>
              <a href="#projects">Projects</a>
              <a href="#faq">FAQ</a>
            </div>
            <div className="foot-col">
              <h5>Reach us</h5>
              <a href="#cta">Enquire now</a>
              <a href="tel:+919100812345">+91 91008 12345</a>
              <a href="mailto:sales@snehaelev8r.com">sales@snehaelev8r.com</a>
              <a href="#hero">Kondapur, Hyderabad</a>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© 2026 Sneha Elevators LLP. All rights reserved.</span>
            <span>Kondapur, Hyderabad — 500084 · Telangana, India</span>
          </div>
        </div>
        <div className="foot-wordmark" aria-hidden="true">
          SNEHA ELEV8R
        </div>
      </footer>
      </div>
    </>
  );
}
