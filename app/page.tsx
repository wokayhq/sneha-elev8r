"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import Lobby from "../components/Lobby";
import Doors from "../components/Doors";
import Nav from "../components/Nav";
import Reveal from "../components/Reveal";
import { InstallArt, MaintainArt, ModernArt } from "../components/ServiceArt";
import Logo from "../components/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Home as HomeIcon,
  Building,
  Sun,
  Weight,
  Award,
  Users,
  MapPin,
  PhoneCall,
  Landmark,
  Factory,
  HardHat,
  Wrench,
  Sparkles,
  Check,
  ChevronDown,
  Star,
  ShieldCheck,
} from "lucide-react";

/* ─────────────────────────── shared class tokens ─────────────────────────── */
const WRAP = "mx-auto w-[min(1200px,100%-48px)]";
const FLOOR_TAG =
  "inline-flex items-center gap-2 rounded-full border border-[rgba(23,24,26,0.06)] bg-white py-2 pl-[14px] pr-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6a6c70] shadow-[0_10px_28px_rgba(23,24,26,0.09)] before:text-[8px] before:leading-none before:text-[#d93a2b] before:content-['▲']";

function SectionHead({
  tag,
  title,
  sub,
  headClass,
  titleClass,
  subClass,
}: {
  tag: ReactNode;
  title: ReactNode;
  sub: ReactNode;
  headClass?: string;
  titleClass?: string;
  subClass?: string;
}) {
  return (
    <Reveal className={cn("mx-auto mb-12 flex max-w-[780px] flex-col items-center gap-[18px] text-center", headClass)}>
      <span className={FLOOR_TAG}>{tag}</span>
      <div className="flex flex-col items-center gap-[6px]">
        <h2 className={cn("text-[clamp(30px,3.6vw,44px)] font-bold leading-[1.06] tracking-[-0.02em] text-[#17181a]", titleClass)}>
          {title}
        </h2>
        <p className={cn("max-w-[640px] text-[16px] leading-[1.65] text-[#5a5c60]", subClass)}>{sub}</p>
      </div>
    </Reveal>
  );
}

/* ─────────────────────────── data ─────────────────────────── */
const PARTNERS = [
  "Raymond", "Vasmiram", "MyHome", "UrbanX", "Hallmark", "Vasavi Group",
  "Muppa", "Rajapushpa", "PMR Group", "APR Group", "Magna", "Virchows",
];

type HeroStat = { icon: ReactNode; n: string; s: string; l: string };
const HERO_STATS: HeroStat[] = [
  { icon: <Star strokeWidth={1.6} />, n: "3,500", s: "+", l: "Live Installations" },
  { icon: <HardHat strokeWidth={1.6} />, n: "24", s: "×7", l: "Service Engineers" },
  { icon: <ShieldCheck strokeWidth={1.6} />, n: "98", s: "%", l: "AMC Renewal" },
  { icon: <MapPin strokeWidth={1.6} />, n: "15", s: "+", l: "Cities Across South India" },
];

type Product = {
  code: string; sub: string; badge: string; title: string;
  specs: [string, string][]; icon: ReactNode; img: string; featured?: boolean;
};
const PRODUCTS: Product[] = [
  {
    code: "SL Series", sub: "Home & villa elevator", badge: "For homes & villas",
    title: "Elegant lifts for villas and existing homes",
    specs: [["Drive", "Compact MRL"], ["Capacity", "Up to 272 kg"], ["Best for", "Villas & duplexes"]],
    icon: <HomeIcon strokeWidth={1.9} />, img: "/design/prod-sl.png",
  },
  {
    code: "VL Series", sub: "Residential elevator", badge: "For residential apartments",
    title: "Smart, space-efficient elevators",
    specs: [["Drive", "Machine-Room-Less"], ["Capacity", "4–30 persons"], ["Best for", "Apartments & offices"]],
    icon: <HomeIcon strokeWidth={1.9} />, img: "/design/prod-vl.png",
  },
  {
    code: "RMG Series", sub: "Highrise elevator", badge: "For highrise places",
    title: "Performance and economy for mid-to-high-rise",
    specs: [["Drive", "Gearless traction"], ["Capacity", "4–30 persons"], ["Best for", "Mid to high-rise"]],
    icon: <HomeIcon strokeWidth={1.9} />, img: "/design/prod-rmg.png", featured: true,
  },
];
const SPEC_ICONS = [Sun, Weight, Building];

type Advantage = { icon: ReactNode; title: string; desc: string };
const WHY: Advantage[] = [
  { icon: <Award strokeWidth={1.8} />, title: "ISO 9001:2015 Certified", desc: "Our manufacturing and service processes are certified to ISO 9001:2015, ensuring consistent quality from production through installation and inspection." },
  { icon: <Users strokeWidth={1.8} />, title: "In-House Service Team", desc: "A dedicated in-house team of certified engineers and technicians across three states. No third-party AMC handover — the team that installs also services." },
  { icon: <MapPin strokeWidth={1.8} />, title: "3,500+ Live AMC Sites", desc: "A growing post-installation track record since 2017. Proven response times and parts availability at scale." },
  { icon: <PhoneCall strokeWidth={1.8} />, title: "24/7 Emergency Response", desc: "For AMC clients, a dedicated breakdown line with structured escalation. Same-day response in Hyderabad metro area." },
  { icon: <Landmark strokeWidth={1.8} />, title: "Part of the Sneha Group", desc: "Decades of group operating history across multiple industries gives our customers institutional-grade reliability and continuity." },
  { icon: <Factory strokeWidth={1.8} />, title: "Manufactured in Hyderabad", desc: "Our factory at Bollaram lets us customise every installation to your civil layout and shorten lead times for South India projects." },
];

type Service = { icon: ReactNode; art: ReactNode; title: string; desc: string; points: string[] };
const SERVICES: Service[] = [
  { icon: <HardHat strokeWidth={1.8} />, art: <InstallArt />, title: "New Installation", desc: "End-to-end installation of new elevators from our manufacturing facility. Site survey, civil verification, electrical coordination, commissioning, and handover.", points: ["Free site survey and proposal", "Civil drawing verification", "Commissioning and BIS handover", "3 months of free service"] },
  { icon: <Wrench strokeWidth={1.8} />, art: <MaintainArt />, title: "Maintenance & Repair", desc: "Quick, efficient repair to restore elevator operation. Available for AMC customers and as standalone callouts.", points: ["Breakdown troubleshooting", "Genuine spare-parts replacement", "Rapid response by trained technicians", "Transparent labour and parts pricing"] },
  { icon: <Sparkles strokeWidth={1.8} />, art: <ModernArt />, title: "Modernisation & Upgrades", desc: "Upgrade ageing elevators with modern technology for better performance, safety and energy efficiency. Suitable for elevators 10+ years old.", points: ["Control panel and VVVF drive upgrades", "Cabin and interior refresh", "Safety system enhancement", "Manual-to-automatic conversion"] },
];

type Project = { title: string; meta: string; img: string };
const PROJECTS_PORTFOLIO: Project[] = [
  { title: "Residential Tower — Hyderabad", meta: "8 VL SERIES ELEVATORS · 32 FLOORS · 2024", img: "/design/proj-1.png" },
  { title: "Multi-Specialty Hospital — Vijayawada", meta: "6 RMG SERIES + 2 GOODS LIFTS · 12 FLOORS · 2024", img: "/design/proj-2.png" },
  { title: "Corporate Office — Bangalore", meta: "4 RMG SERIES ELEVATORS · 15 FLOORS · 2024", img: "/design/proj-3.png" },
  { title: "Premium Villa Project — Hyderabad", meta: "28 SL SERIES VILLA LIFTS · GATED COMMUNITY · 2023", img: "/design/proj-4.png" },
];

type Metric = { value: string; label: string; tag: string; tone: "pink1" | "pink2" | "pink3" | "red" };
const METRICS: Metric[] = [
  { value: "3,500+", label: "Live AMC sites", tag: "and growing", tone: "pink1" },
  { value: "2017", label: "Operating since", tag: "family-run", tone: "pink2" },
  { value: "3", label: "States served", tag: "AP · TG · KA", tone: "pink3" },
  { value: "100%", label: "Built in-house", tag: "Own factory", tone: "red" },
];
const METRIC_BG: Record<Metric["tone"], string> = {
  pink1: "bg-[#fbe4e1]", pink2: "bg-[#fdeeec]", pink3: "bg-[#fff0ed]", red: "bg-[#d93a2b] text-white",
};

type Testimonial = { initials: string; name: string; meta: string; rating: string; text: string };
const TESTIMONIALS: Testimonial[] = [
  { initials: "PD", name: "Project Developer", meta: "Bulk-order client · Telangana", rating: "5.0 ★", text: "We’ve worked with Sneha Elev8r across multiple residential towers. Response times on AMC calls stay consistent, and the factory customises to our civil drawings — saving time on every project." },
  { initials: "HO", name: "Homeowner", meta: "Verified install · Hyderabad", rating: "5.0 ★", text: "Excellent service from start to finish. The installation was smooth, with quality materials and proper safety standards. Special appreciation to Site Engineer T. Siva Krishna — knowledgeable, responsive, and on time." },
];

type Faq = { q: string; a: string };
const FAQS: Faq[] = [
  { q: "How long does a new elevator installation take?", a: "From order confirmation to commissioning, a typical residential VL Series installation takes 8–12 weeks. SL Series villa installations are usually 6–8 weeks. RMG Series and larger commercial installations can take 10–16 weeks depending on the number of elevators and civil readiness." },
  { q: "What does an Annual Maintenance Contract include?", a: "Our Standard AMC includes monthly preventive maintenance visits, basic repair labour, safety-compliance checks, and priority breakdown response. Our Comprehensive AMC additionally includes most common spare parts and a guaranteed response-time SLA. Both tiers are available for SL, VL and RMG Series elevators, and we also service most other manufacturers’ elevators." },
  { q: "Which series should I choose for my project?", a: "It depends on three things: your building height, your space constraints, and your power supply. SL Series is purpose-built for villas, duplexes and existing homes. VL Series is best for residential apartments and low- to high-rise commercial buildings without space for a separate machine room. RMG Series suits buildings where a machine room is available and consistent operation under heavy daily usage is critical." },
  { q: "Do you handle civil work for the elevator shaft?", a: "We don’t do civil construction directly, but we provide detailed civil drawings and specifications to your contractor, and our site engineers verify the civil work before installation begins. We can also recommend trusted civil contractors in Hyderabad, Bangalore, Vijayawada and Visakhapatnam." },
  { q: "What warranty do you provide?", a: "All new Sneha Elev8r elevators come with a standard 12-month warranty from the date of commissioning, covering manufacturing defects in equipment we supply. The warranty is transferable to subsequent owners with prior notice. Extended warranty options are available as part of the Comprehensive AMC." },
  { q: "Do you service elevators not installed by Sneha Elev8r?", a: "Yes. Our technicians are trained to service most major elevator brands — Otis, Kone, Schindler, ThyssenKrupp, Mitsubishi, and many regional manufacturers. We do an initial system evaluation and offer an appropriate AMC contract, and we stock multi-brand-compatible parts at our Hyderabad warehouse." },
];

/* card hover shadow + border helpers reused across sections */
const CARD_HOVER =
  "hover:[translate:0_-6px] hover:border-[rgba(217,58,43,0.28)] hover:shadow-[0_30px_60px_rgba(23,24,26,0.13)]";

export default function Home() {
  const [phase, setPhase] = useState("lobby"); // lobby | arming | open | done
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  /* soft two-tone elevator ding via WebAudio, no asset files */
  function ding() {
    try {
      const Ctor = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new Ctor();
      ([[830, 0], [622, 0.18]] as [number, number][]).forEach(([f, t]) => {
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

  function enter(target = "") {
    const r = reduced.current;
    setPhase("arming");
    setTimeout(() => { ding(); setPhase("open"); }, r ? 50 : 700);
    setTimeout(() => {
      setPhase("done");
      /* once the doors are open and the page is unlocked, ride to the chosen floor */
      if (target) {
        setTimeout(() => {
          document.getElementById(target)?.scrollIntoView({ behavior: r ? "auto" : "smooth", block: "start" });
        }, 80);
      }
    }, r ? 120 : 2050);
  }

  const preArrival = phase === "lobby" || phase === "arming";
  const locked = phase !== "done";

  return (
    <>
      {phase !== "done" && <Doors phase={phase} />}
      {preArrival && <Lobby onSelect={enter} fading={phase !== "lobby"} reduced={reduced.current} />}

      {/* the page rides up like an arriving lift while the doors open; the
          wrapper also locks scroll during the intro (no document.body needed).
          Nav lives inside so the locked region spans the full page height. */}
      <div
        className={cn(
          "transition-transform duration-[1600ms] [transition-timing-function:var(--ease-out)]",
          locked && "h-screen overflow-hidden",
          preArrival ? "translate-y-[7vh]" : "translate-y-0"
        )}
      >
        <Nav />
        {/* ─── FLOOR G · HERO ─── */}
        <section id="hero" className="hero-bg relative isolate -mt-20 flex min-h-[100svh] flex-col overflow-hidden pt-[20px] pb-10 text-white">
          <div className="absolute inset-y-0 right-0 -z-10 w-[62%]" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/design/hero-cabin.png" alt="" className="h-full w-full object-cover object-[43%_center]" />
            {/* <div className="hero-shade absolute inset-0" /> */}
          </div>

          <div className={cn(WRAP, "mt-auto flex flex-col items-start")}>
            <div className="mb-[17px] inline-flex items-center gap-2.5 rounded-full border border-white/[0.22] bg-white/[0.06] py-2 pl-[15px] pr-[18px] text-[10px] font-medium uppercase tracking-[0.2em] text-white/[0.82] backdrop-blur-[10px] [animation:heroRise_0.8s_var(--ease-out)_both_0.04s] before:h-[7px] before:w-[7px] before:rounded-full before:bg-[#d93a2b] before:content-['']">
              Built in Hyderabad · Trusted across South India
            </div>
            <h1 className="text-[clamp(40px,4.8vw,66px)] font-bold leading-[1.02] tracking-[-0.01em] [animation:heroRise_0.8s_var(--ease-out)_both_0.1s]">
              South India’s
              <br />
              <span className="text-[#d93a2b]">Most Trusted</span>
              <br />
              Elevator Company<span className="text-[#d93a2b]">.</span>
            </h1>
            <p className="mt-5 mb-11 max-w-[520px] text-[17px] leading-[1.59] text-white/[0.72] [animation:heroRise_0.8s_var(--ease-out)_both_0.18s]">
              Designing, manufacturing and maintaining elevators for homes, apartments, hospitals, hotels and commercial buildings since 2017.
            </p>
            <div className="flex flex-wrap items-center gap-4 [animation:heroRise_0.8s_var(--ease-out)_both_0.26s]">
              <Button asChild size="lg" className="[&_svg]:transition-transform [&:hover_svg]:translate-x-[3px]">
                <a href="#cta">Get Free Site Survey <ArrowRight aria-hidden="true" /></a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 bg-transparent text-white shadow-none hover:border-white/60 hover:bg-white/10">
                <a href="#products">View Elevator Series</a>
              </Button>
            </div>
          </div>

          <div className={cn(WRAP, "mt-auto")}>
            <Reveal className="flex min-h-[84px] flex-wrap items-center justify-between gap-y-4 rounded-3xl border border-white/[0.21] bg-black/[0.32] px-10 py-3 backdrop-blur-[33px]">
              {HERO_STATS.flatMap((st, i) => {
                const item = (
                  <div key={st.l} className="flex items-center gap-3">
                    <span className="flex shrink-0 text-[#d93a2b] [&_svg]:h-[40px] [&_svg]:w-[40px]" aria-hidden="true">{st.icon}</span>
                    <span className="flex flex-col gap-0.5">
                      <b className="text-[28px] font-bold leading-none text-white">
                        {st.n}<em className="not-italic text-white ">{st.s}</em>
                      </b>
                      <span className="text-[12px] font-medium text-white/55">{st.l}</span>
                    </span>
                  </div>
                );
                return i < HERO_STATS.length - 1
                  ? [item, <span key={`div-${i}`} aria-hidden="true" className="h-[50px] w-px shrink-0 bg-white/20 max-md:hidden" />]
                  : [item];
              })}
            </Reveal>
          </div>
        </section>

        {/* ─── CLIENT LOGO STRIP ─── */}
        <section aria-label="Clients we’ve worked with" className="overflow-hidden bg-[#f7f7f7] py-[30px] text-center">
          <div className="mb-[22px] text-[11px] font-semibold uppercase tracking-[0.24em] text-black">Clients we’ve worked with</div>
          <div className="group relative [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)] [-webkit-mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]" aria-hidden="true">
            <div className="flex w-max items-center gap-[68px] [animation:marquee_42s_linear_infinite] group-hover:[animation-play-state:paused]">
              {[...PARTNERS, ...PARTNERS].map((name, i) => (
                <span key={i} className="shrink-0 whitespace-nowrap text-[16px] font-bold uppercase tracking-[0.06em] text-black/40">{name}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FLOOR 1 · PRODUCTS ─── */}
        <section id="products" className="bg-white pt-[46px] pb-[76px]">
          <div className={WRAP}>
            <SectionHead
              tag={<><span className="text-[#d93a2b]">FLOOR 1</span> · Our range</>}
              title={<>Built for <span className="text-[#d93a2b]">villas</span>, apartments, offices &amp; hospitals.</>}
              titleClass="max-w-[644px] leading-[1.04]"
              subClass="max-w-[760px]"
              sub="Three product series cover residential through high-rise commercial. Every installation is custom-engineered to the building’s civil layout, usage pattern and power conditions."
            />
            <div className="grid grid-cols-3 items-stretch gap-[22px] max-lg:grid-cols-2 max-[680px]:grid-cols-1">
              {PRODUCTS.map((p, i) => (
                <Reveal
                  key={p.code}
                  delay={i * 80}
                  className={cn("group flex flex-col overflow-hidden rounded-3xl border border-[rgba(23,24,26,0.1)] bg-white", CARD_HOVER)}
                >
                  <div className="relative h-[191px] shrink-0 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.img} alt="" loading="lazy" className="h-full w-full object-cover" />
                    <span className="absolute left-4 top-3 rounded-full border border-white/35 bg-black/[0.42] px-[13px] py-[7px] text-[11px] font-medium uppercase tracking-[0.14em] text-white backdrop-blur-[6px]">{p.badge}</span>
                  </div>
                  <div className="flex flex-1 flex-col px-[26px] pt-[26px] pb-[28px]">
                    <div className="flex items-center gap-[14px] pb-5">
                      <span className="flex h-[37px] w-[37px] shrink-0 items-center justify-center rounded-xl bg-gradient-to-b from-[#e8503f] to-[#b22a1e] text-white [&_svg]:h-[21px] [&_svg]:w-[21px]" aria-hidden="true">{p.icon}</span>
                      <span className="flex flex-col">
                        <b className="text-[20px] font-bold leading-none text-[#17181a]">{p.code}</b>
                        <span className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[#494949]">{p.sub}</span>
                      </span>
                    </div>
                    <h3 className="max-w-[240px] text-[16px] font-bold leading-[1.18] text-[#17181a]">{p.title}</h3>
                    <div className="mt-[18px] flex flex-col">
                      {p.specs.map(([k, v], si) => {
                        const Ico = SPEC_ICONS[si] ?? Sun;
                        return (
                          <div key={k} className="flex items-center gap-[13px] py-2">
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[rgba(217,58,43,0.16)] bg-white text-[#d93a2b] [&_svg]:h-[19px] [&_svg]:w-[19px]" aria-hidden="true">
                              <Ico strokeWidth={1.9} />
                            </span>
                            <span className="flex flex-col">
                              <span className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-[#8e9094]">{k}</span>
                              <span className="mt-0.5 text-[15px] font-bold text-[#17181a]">{v}</span>
                            </span>
                          </div>
                        );
                      })}
                    </div>
                    <a
                      href="#cta"
                      className={cn(
                        "mt-[18px] inline-flex h-11 items-center justify-center gap-[9px] rounded-xl text-[14.5px] font-bold transition-[transform,background-color] [&_svg]:h-[17px] [&_svg]:w-[17px] [&_svg]:transition-transform hover:[&_svg]:translate-x-[3px]",
                        p.featured
                          ? "bg-[#e33a27] text-white hover:bg-[#b22a1e]"
                          : "border border-black/[0.04] bg-[#fff7f6] text-[#9b180c] hover:-translate-y-px hover:bg-[#ffece8]"
                      )}
                    >
                      Explore {p.code} <ArrowRight aria-hidden="true" />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FLOOR 2 · WHY US ─── */}
        <section id="why" className="bg-[#fff7f6] py-[55px]">
          <div className={WRAP}>
            <SectionHead
              headClass="max-w-[620px]"
              tag={<><span className="text-[#d93a2b]">FLOOR 2</span> · Why Sneha Elev8r</>}
              title={<>Manufacturing, installation and service — <span className="font-semibold text-[#ff4b36]">one team</span>.</>}
              titleClass="max-w-none text-[clamp(28px,3vw,36px)] leading-[1.08]"
              subClass="max-w-none text-[15px] leading-[1.7] text-[#777]"
              sub="Six practical advantages that builders, developers and homeowners tell us matter most."
            />
            <div className="grid grid-cols-3 gap-x-[18px] gap-y-[17px] max-lg:grid-cols-2 max-[680px]:grid-cols-1">
              {WHY.map((w, i) => (
                <Reveal
                  key={w.title}
                  delay={i * 80}
                  className="rounded-[18px] border border-[rgba(23,24,26,0.05)] bg-white p-[26px_24px] hover:[translate:0_-5px] hover:border-[rgba(217,58,43,0.18)] hover:shadow-[0_26px_52px_rgba(23,24,26,0.1)]"
                >
                  <div className="mb-[18px] flex h-[46px] w-[46px] items-center justify-center rounded-[13px] bg-[#d93a2b] text-white [&_svg]:h-5 [&_svg]:w-5">{w.icon}</div>
                  <h3 className="mb-2 text-[17px] font-bold leading-[1.2] text-[#17181a]">{w.title}</h3>
                  <p className="text-[14px] leading-[1.62] text-[#5a5c60]">{w.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FLOOR 3 · SERVICES ─── */}
        <section id="services" className="bg-white pt-[53px] pb-[84px]">
          <div className={WRAP}>
            <SectionHead
              headClass="gap-[14px]"
              tag={<><span className="text-[#d93a2b]">FLOOR 3</span> · Our services</>}
              title={<>End-to-end elevator <span className="text-[#d93a2b]">service</span> solutions.</>}
              subClass="max-w-[600px]"
              sub="From new installation to spare-parts support, we cover every stage of the elevator’s operating life. Choose the right service for your situation."
            />
            <div className="grid grid-cols-3 items-stretch gap-[22px] max-lg:grid-cols-2 max-[680px]:grid-cols-1">
              {SERVICES.map((s, i) => (
                <Reveal
                  key={s.title}
                  delay={i * 80}
                  className={cn("group flex flex-col overflow-hidden rounded-[20px] border border-[rgba(23,24,26,0.1)] bg-white", "hover:[translate:0_-6px] hover:border-[rgba(217,58,43,0.22)] hover:shadow-[0_30px_60px_rgba(23,24,26,0.13)]")}
                >
                  <div className="relative h-[190px] shrink-0 bg-[#fffafa]">
                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden [&>*]:h-auto [&>*]:max-h-[76%] [&>*]:w-[68%]">{s.art}</div>
                    <span className="absolute right-5 top-[13px] z-[2] text-[32px] font-semibold leading-none text-[#d93a2b]" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                    <div className="absolute -bottom-[22px] left-4 z-[3] flex h-[44px] w-[44px] items-center justify-center rounded-[13px] border border-[rgba(23,24,26,0.1)] bg-[#d93a2b] text-white shadow-[0_8px_18px_rgba(217,58,43,0.3)] [&_svg]:h-5 [&_svg]:w-5">{s.icon}</div>
                  </div>
                  <div className="flex flex-1 flex-col p-[36px_28px_32px]">
                    <h3 className="mb-2.5 text-[19px] font-bold text-[#17181a]">{s.title}</h3>
                    <p className="text-[14.5px] leading-[1.65] text-[#5a5c60]">{s.desc}</p>
                    <ul className="mt-[22px] flex flex-col gap-3 border-t border-[rgba(23,24,26,0.08)] pt-3">
                      {s.points.map((pt) => (
                        <li key={pt} className="flex items-center gap-2.5 text-[14px] text-[#3a3c40]">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[rgba(217,58,43,0.1)] text-[#d93a2b] [&_svg]:h-3 [&_svg]:w-3" aria-hidden="true"><Check strokeWidth={2.6} /></span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FLOOR 4 · PROJECTS ─── */}
        <section id="projects" className="bg-[#f9f9f9] pt-[51px] pb-[84px]">
          <div className={WRAP}>
            <SectionHead
              tag={<><span className="text-[#d93a2b]">FLOOR 4</span> · Project portfolio</>}
              title={<>Installed across <span className="text-[#d93a2b]">South India</span>.</>}
              subClass="max-w-[600px] text-[#404040]"
              sub="A selection of residential, commercial, hospital and industrial installations backed by our own AMC service network."
            />
            <div className="grid grid-cols-2 gap-5 max-[680px]:grid-cols-1">
              {PROJECTS_PORTFOLIO.map((p, i) => (
                <Reveal key={p.title} delay={i * 80} className="group relative h-[300px] overflow-hidden rounded-[20px] border border-[rgba(23,24,26,0.06)] hover:[translate:0_-5px] hover:shadow-[0_26px_54px_rgba(23,24,26,0.18)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.img} alt={p.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(12,13,14,0.92)_62%)] px-[21px] pt-16 pb-5 text-white">
                    <h4 className="text-[17px] font-bold">{p.title}</h4>
                    <span className="mt-1.5 block text-[11px] uppercase tracking-[0.12em] text-white/90">{p.meta}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FLOOR 5 · TRUST ─── */}
        <section id="trust" className="bg-white pt-[59px] pb-[84px]">
          <div className={WRAP}>
            <SectionHead
              headClass="gap-3"
              tag={<><span className="text-[#d93a2b]">FLOOR 5</span> · Voices of trust</>}
              title={<>What our <span className="text-[#d93a2b]">customers</span> say.</>}
              subClass="max-w-[600px]"
              sub="The results our clients and their buildings see, in their own words — backed by third-party-verified compliance."
            />
            <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-[680px]:grid-cols-1">
              <MetricCard m={METRICS[0]} delay={0} />
              <MetricCard m={METRICS[1]} delay={80} />
              <QuoteCard t={TESTIMONIALS[0]} delay={160} />
              <QuoteCard t={TESTIMONIALS[1]} delay={0} />
              <MetricCard m={METRICS[2]} delay={80} />
              <MetricCard m={METRICS[3]} delay={160} />
            </div>
          </div>
        </section>

        {/* ─── FLOOR 6 · FAQ ─── */}
        <section id="faq" className="relative z-[2] bg-[#f4f3f2] pt-10">
          <div className={WRAP}>
            <div className="relative z-[2] -mb-[140px] rounded-[44px] border border-black/10 bg-white px-[clamp(24px,6vw,120px)] pt-[43px] pb-[64px] shadow-[0_63px_88px_rgba(118,118,118,0.25)]">
              <SectionHead
                headClass="mb-10"
                tag={<><span className="text-[#d93a2b]">FLOOR 6</span> · Frequently asked questions</>}
                title={<>Answers to common <span className="text-[#d93a2b]">questions</span>.</>}
                sub="Practical answers to the questions buyers, building managers and project consultants most often ask before specifying or contracting Sneha Elev8r."
              />
              <div className="mx-auto flex max-w-[760px] flex-col">
                {(showAllFaqs ? FAQS : FAQS.slice(0, 4)).map((f, i) => (
                  <details key={f.q} open={i === 0 && !showAllFaqs} className="group border-b border-[rgba(23,24,26,0.12)] first:border-t">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-[19px] text-[16px] font-semibold text-[#17181a] transition-colors marker:hidden hover:text-[#d93a2b] [&::-webkit-details-marker]:hidden">
                      <span>{f.q}</span>
                      <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border border-[rgba(23,24,26,0.24)] text-[15px] leading-none text-[#17181a] transition-[transform,background-color,color,border-color] duration-[250ms] group-open:rotate-45 group-open:border-[#d93a2b] group-open:bg-[#d93a2b] group-open:text-white" aria-hidden="true">+</span>
                    </summary>
                    <p className="pb-[19px] text-[14px] leading-[1.65] text-[#5a5c60]">{f.a}</p>
                  </details>
                ))}
              </div>
              {FAQS.length > 4 && (
                <div className="mt-[30px] flex justify-center">
                  <Button variant="outline" size="sm" onClick={() => setShowAllFaqs((v) => !v)}>
                    {showAllFaqs ? "Show less" : `Show ${FAQS.length - 4} more`}
                    <ChevronDown aria-hidden="true" style={{ transform: showAllFaqs ? "rotate(180deg)" : "none" }} />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ─── FLOOR 7 · CTA + FOOTER ─── */}
        <section id="cta" className="cta-bg relative overflow-hidden pt-[220px] text-white">
          <Reveal className={cn(WRAP, "relative z-[1] flex flex-col items-center text-center")}>
            <span className={cn(FLOOR_TAG, "mb-[21px] shadow-[0_10px_30px_rgba(0,0,0,0.22)]")}>
              <span className="text-[#d93a2b]">FLOOR 7</span> · Enquire
            </span>
            <h2 className="max-w-[640px] text-[clamp(36px,4.6vw,58px)] font-bold leading-[1.04] tracking-[-0.02em] text-white">
              Let’s find the right lift for your building.
            </h2>
            <p className="mx-auto mt-4 max-w-[634px] text-[17px] leading-[1.7] text-white/[0.84]">
              A 30-minute site survey gives you a costed proposal, a delivery timeline, and a clear picture of what your civil and electrical work needs to look like.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-[14px]">
              <Button size="lg" className="bg-[#ff9e95] text-[#5a2420] shadow-none hover:bg-[#ffb0a8]">Book a Site Survey</Button>
              <Button asChild variant="outline" size="lg" className="border-white/40 bg-transparent text-white shadow-none hover:border-white hover:bg-white/10">
                <a href="tel:+919100812345">Call +91 91008 12345</a>
              </Button>
            </div>
          </Reveal>

          <footer className="relative pt-[88px]">
            <div className={WRAP}>
              <div className="grid grid-cols-[340px_1fr_1fr_1fr] gap-10 max-[680px]:grid-cols-2">
                <div className="max-w-[340px] max-[680px]:col-span-2">
                  <div className="mb-[18px] flex items-center gap-2.5 text-[16px] font-bold tracking-[0.08em] text-white">
                    <Logo size={26} />
                    <span><b className="font-bold text-[#ff4b36]">SNEHA</b> ELEV8R</span>
                  </div>
                  <p className="max-w-[300px] text-[14px] leading-[1.65] text-white/55">
                    Engineered in Hyderabad, installed across South India. A flagship brand of the Sneha Group — manufacturing, installation and in-house service under one team.
                  </p>
                </div>
                <FooterCol title="Products" links={[["#products", "SL Series"], ["#products", "VL Series"], ["#products", "RMG Series"], ["#products", "Compare series"]]} />
                <FooterCol title="Company" links={[["#why", "Why Sneha Elev8r"], ["#services", "Services & AMC"], ["#projects", "Projects"], ["#faq", "FAQ"]]} />
                <FooterCol title="Reach us" links={[["#cta", "Enquire now"], ["tel:+919100812345", "+91 91008 12345"], ["mailto:sales@snehaelev8r.com", "sales@snehaelev8r.com"], ["#hero", "Kondapur, Hyderabad"]]} />
              </div>
              <div className="mt-[52px] flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.12] py-[22px] text-[11px] tracking-[0.08em] text-white/50 max-[680px]:justify-start">
                <span>© 2026 Sneha Elevators LLP. All rights reserved.</span>
                <span>Kondapur, Hyderabad — 500084 · Telangana, India</span>
              </div>
            </div>
            <div className="select-none pb-2 text-center text-[clamp(60px,15vw,190px)] font-bold leading-[0.8] tracking-[-0.02em] text-white/[0.05]" aria-hidden="true">
              SNEHA ELEV8R
            </div>
          </footer>
        </section>
      </div>
    </>
  );
}

function MetricCard({ m, delay }: { m: Metric; delay: number }) {
  const red = m.tone === "red";
  return (
    <Reveal delay={delay} className={cn("flex min-h-[262px] flex-col justify-between rounded-[20px] p-[28px]", METRIC_BG[m.tone])}>
      <div>
        <b className={cn("block text-[44px] font-bold leading-none", red ? "text-white" : "text-[#17181a]")}>{m.value}</b>
        <span className={cn("mt-1.5 block text-[15px]", red ? "text-white/90" : "text-[#9a6a62]")}>{m.label}</span>
      </div>
      <span className={cn("text-[13px] font-semibold uppercase tracking-wide", red ? "text-white" : "text-[#d93a2b]")}>{m.tag}</span>
    </Reveal>
  );
}

function QuoteCard({ t, delay }: { t: Testimonial; delay: number }) {
  return (
    <Reveal delay={delay} className="col-span-2 flex min-h-[262px] flex-col justify-center gap-4 rounded-[20px] border border-[#d1d0d0] bg-white p-8 max-[680px]:col-span-1">
      <div className="flex items-start justify-between text-[#d93a2b]">
        <span className="text-[40px] font-bold leading-[0.7]">“</span>
        <span className="text-[15px] tracking-[2px]">★★★★★</span>
      </div>
      <blockquote className="text-[16.5px] font-normal italic leading-[1.5] text-[#17181a]">{t.text}</blockquote>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[#d93a2b] text-[15px] font-bold text-white">{t.initials}</span>
          <span>
            <b className="block text-[15px] font-bold text-[#17181a]">{t.name}</b>
            <span className="mt-0.5 block text-[13.5px] text-[#5a5c60]">{t.meta}</span>
          </span>
        </div>
        <span className="whitespace-nowrap text-[16px] font-bold text-[#17181a]">{t.rating}</span>
      </div>
    </Reveal>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h5 className="mb-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">{title}</h5>
      {links.map(([href, label]) => (
        <a key={label} href={href} className="block py-1.5 text-[14.5px] text-white/[0.82] transition-[color,translate] duration-200 hover:text-white hover:[translate:3px_0]">
          {label}
        </a>
      ))}
    </div>
  );
}
