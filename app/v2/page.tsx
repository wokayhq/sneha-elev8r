"use client";
import { useEffect, useRef, useState } from "react";
import "./v2.css";
import Logo from "../../components/Logo";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Layers,
  Users,
  MapPin,
  PhoneCall,
  Factory,
  Award,
  Landmark,
  Wrench,
  Sparkles,
  Quote,
  Star,
  BadgeCheck,
  Phone,
} from "lucide-react";

/* ---------------- exact copy pulled from Sneha_Elev8r_WITH_transitions.html ---------------- */

const NAV_LINKS = [
  { href: "#top", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#why", label: "Why Us" },
  { href: "#services", label: "Services" },
  { href: "#clients", label: "Clients" },
];

const HERO_STATS = [
  { icon: Calendar, value: "2017", label: "Operating Since" },
  { icon: Layers, value: "3,500", sup: "+", label: "Live AMC Sites" },
  { icon: Users, value: "In‑House", label: "Engineering & Service Team" },
  { icon: MapPin, value: "3", label: "States Served" },
  { icon: PhoneCall, value: "24/7", label: "Emergency Response" },
];

const PRODUCTS = [
  {
    num: "01",
    tag: "Compact MRL · Up to 272 kg",
    title: "SL Series — Elegant lifts for villas and existing homes",
    desc: "Engineered specifically for villas, duplexes and existing structures with space constraints. Single-phase power, 150 mm minimum pit, and a motor that fits within the hoistway make it ideal for adding a lift to an existing home.",
    link: "Explore SL Series",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=900&auto=format&fit=crop",
  },
  {
    num: "02",
    tag: "Machine-Room-Less · 4–30 Persons",
    title: "VL Series — Smart, space-efficient elevators",
    desc: "Designed for residential apartments, office buildings and mid-rise commercial. The VL Series eliminates the need for a separate machine room, reducing civil work while delivering smooth, quiet, energy-efficient performance.",
    link: "Explore VL Series",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=900&auto=format&fit=crop",
  },
  {
    num: "03",
    tag: "Gearless Drive · 4–30 Persons",
    title: "RMG Series — Performance and economy for mid-to-high-rise",
    desc: "Gearless traction with a machine room. The RMG Series combines proven traction technology with modern controls for low to high-rise residential and commercial buildings where long-term operating cost matters.",
    link: "Explore RMG Series",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=900&auto=format&fit=crop",
  },
];

const WHY = [
  {
    icon: Factory,
    title: "Manufactured in Hyderabad",
    desc: "Our factory at Bollaram lets us customise every installation to your civil layout and shorten lead times for South India projects.",
  },
  {
    icon: Award,
    title: "ISO 9001:2015 Certified",
    desc: "Our manufacturing and service processes are certified to ISO 9001:2015, ensuring consistent quality from production through installation and inspection.",
  },
  {
    icon: Users,
    title: "In-House Service Team",
    desc: "A dedicated in-house team of certified engineers and technicians across three states. No third-party AMC handover — the team that installs also services.",
  },
  {
    icon: MapPin,
    title: "3,500+ Live AMC Sites",
    desc: "A growing post-installation track record since 2017. Proven response times and parts availability at scale.",
  },
  {
    icon: PhoneCall,
    title: "24/7 Emergency Response",
    desc: "For AMC clients, a dedicated breakdown line with structured escalation. Same-day response in Hyderabad metro area.",
  },
  {
    icon: Landmark,
    title: "Part of the Sneha Group",
    desc: "Decades of group operating history across multiple industries gives our customers institutional-grade reliability and continuity.",
  },
];

const PARTNERS = [
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

const SERVICES = [
  {
    icon: Wrench,
    title: "Maintenance & Repair",
    desc: "Breakdown troubleshooting, genuine spare-parts replacement, structured response times for AMC customers.",
  },
  {
    icon: Sparkles,
    title: "Modernisation & Upgrade",
    desc: "Control panel and drive upgrades, cabin refresh, safety system enhancement for elevators 10+ years old.",
  },
];

const TESTIMONIALS = [
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

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".v2-rv");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function V2Home() {
  const [solid, setSolid] = useState(false);
  useReveal();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="v2" id="top">
      {/* ---------------- NAV ---------------- */}
      <header className={`v2-header ${solid ? "solid" : ""}`}>
        <nav className="v2-nav" aria-label="Main">
          <a className="v2-logo" href="#top">
            <Logo size={34} />
            <span className="v2-logo-word">
              SNEHA<span>ELEV8R</span>
            </span>
          </a>
          <div className="v2-nav-links">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
          <a className="v2-btn v2-btn-primary v2-btn-sm" href="#cta">
            Enquire Now
          </a>
        </nav>
      </header>

      {/* ---------------- HERO ---------------- */}
      <section className="v2-hero v2-grain">
        <div className="v2-hero-bg" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hero.png" alt="" />
        </div>
        <div className="v2-hero-shade" aria-hidden="true" />

        <div className="v2-wrap v2-hero-inner">
          <div className="v2-hero-eyebrow">Built in Hyderabad · Trusted across South India</div>
          <h1>
            Elevators that last. <span>Service that shows up.</span>
          </h1>
          <p className="v2-hero-sub">
            We design, build, install and maintain residential, commercial, hospital and industrial
            elevators across Telangana, Andhra Pradesh and Karnataka — with 3,500+ live sites backed
            by our own in-house service network.
          </p>
          <div className="v2-hero-cta">
            <a className="v2-btn v2-btn-primary v2-btn-lg" href="#cta">
              Book a Free Site Survey
              <ArrowRight aria-hidden="true" />
            </a>
            <a className="v2-btn v2-btn-ghost v2-btn-lg" href="#products">
              Compare Our Series
            </a>
          </div>
        </div>

        <div className="v2-wrap v2-hero-stats-wrap">
          <div className="v2-stats">
            {HERO_STATS.map((s) => (
              <div className="v2-stat" key={s.label}>
                <s.icon strokeWidth={1.5} aria-hidden="true" />
                <span className="v2-stat-txt">
                  <b>
                    {s.value}
                    {s.sup && <em>{s.sup}</em>}
                  </b>
                  <span>{s.label}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- PRODUCTS · Our Range ---------------- */}
      <section id="products" className="v2-sec v2-products">
        <div className="v2-wrap">
          <div className="v2-head v2-rv">
            <div className="v2-eyebrow">Our Range</div>
            <h2 className="v2-h2">
              Built for homes, offices, hospitals and <i>industry</i>
            </h2>
            <p className="v2-sub">
              Three product series cover residential through high-rise commercial. Every installation
              is custom-engineered to the building’s civil layout, usage pattern and power
              conditions. All three series run on energy-efficient gearless drives.
            </p>
          </div>
          <div className="v2-prod-grid">
            {PRODUCTS.map((p, i) => (
              <article className="v2-prod v2-rv" key={p.num} style={{ "--d": `${i * 90}ms` } as React.CSSProperties}>
                <div className="v2-prod-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.img} alt="" loading="lazy" />
                  <span className="v2-prod-num" aria-hidden="true">
                    {p.num}
                  </span>
                  <span className="v2-prod-tag">{p.tag}</span>
                </div>
                <div className="v2-prod-body">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <span className="v2-prod-link">
                    {p.link}
                    <ArrowRight aria-hidden="true" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- WHY US ---------------- */}
      <section id="why" className="v2-sec v2-why">
        <div className="v2-wrap">
          <div className="v2-head v2-rv">
            <div className="v2-eyebrow">Why Sneha Elev8r</div>
            <h2 className="v2-h2">
              Manufacturing, installation and service in <i>one team</i>
            </h2>
            <p className="v2-sub">
              Five practical advantages that builders, developers and homeowners tell us matter most.
            </p>
          </div>
          <div className="v2-why-grid">
            {WHY.map((w, i) => (
              <article className="v2-why-card v2-rv" key={w.title} style={{ "--d": `${(i % 3) * 90}ms` } as React.CSSProperties}>
                <div className="v2-why-top">
                  <div className="v2-why-ico">
                    <w.icon strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <span className="v2-why-num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- TRUSTED PARTNERS ---------------- */}
      <section id="clients" className="v2-partners v2-grain">
        <div className="v2-wrap">
          <div className="v2-eyebrow">Trusted Partners</div>
          <h2>Clients we’ve worked with</h2>
        </div>
        <div className="v2-marquee" aria-hidden="true">
          <div className="v2-marquee-track">
            {[...PARTNERS, ...PARTNERS].map((name, i) => (
              <span className="v2-chip" key={i}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SERVICES · Beyond Installation ---------------- */}
      <section id="services" className="v2-sec v2-services">
        <div className="v2-wrap">
          <div className="v2-head v2-rv">
            <div className="v2-eyebrow">Beyond Installation</div>
            <h2 className="v2-h2">
              Service that keeps you <i>moving</i>
            </h2>
            <p className="v2-sub">
              From preventive maintenance to emergency repairs, our service network covers every
              stage of an elevator’s operating life.
            </p>
          </div>
          <div className="v2-svc-grid">
            {SERVICES.map((s) => (
              <article className="v2-svc v2-rv" key={s.title}>
                <div className="v2-svc-ico">
                  <s.icon strokeWidth={1.8} aria-hidden="true" />
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </article>
            ))}
          </div>
          <div className="v2-svc-more v2-rv">
            <a className="v2-btn v2-btn-ghost v2-btn-lg" href="#services">
              See All Services
              <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- TESTIMONIALS · Voices of Trust ---------------- */}
      <section className="v2-sec v2-trust">
        <div className="v2-wrap">
          <div className="v2-head v2-rv">
            <div className="v2-eyebrow">Voices of Trust</div>
            <h2 className="v2-h2">
              What our <i>customers</i> say
            </h2>
          </div>
          <div className="v2-tq-grid">
            {TESTIMONIALS.map((t) => (
              <article className="v2-tq v2-rv" key={t.initials}>
                <div className="v2-tq-top">
                  <span className="v2-tq-mark" aria-hidden="true">
                    <Quote />
                  </span>
                  <span className="v2-tq-stars" aria-hidden="true">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star key={i} strokeWidth={1.5} />
                    ))}
                  </span>
                </div>
                <blockquote>{t.text}</blockquote>
                <div className="v2-tq-who">
                  <span className="v2-tq-avatar" aria-hidden="true">
                    {t.initials}
                  </span>
                  <span>
                    <span className="v2-tq-name">
                      {t.name}
                      <BadgeCheck strokeWidth={2} aria-hidden="true" />
                    </span>
                    <span className="v2-tq-meta">{t.meta}</span>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section id="cta" className="v2-cta v2-grain">
        <div className="v2-wrap v2-cta-inner v2-rv">
          <h2>
            Let’s find the right lift for <span>your building</span>
          </h2>
          <p>
            A 30-minute site survey gives you a costed proposal, a delivery timeline, and a clear
            picture of what your civil and electrical work needs to look like.
          </p>
          <div className="v2-cta-actions">
            <a className="v2-btn v2-btn-primary v2-btn-lg" href="#cta">
              Book a Site Survey
              <ArrowRight aria-hidden="true" />
            </a>
            <a className="v2-btn v2-btn-ghost v2-btn-lg" href="tel:+919100812345">
              <Phone aria-hidden="true" />
              Call us
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="v2-footer">
        <div className="v2-wrap">
          <div className="v2-foot-top">
            <div className="v2-foot-brand">
              <div className="v2-foot-word">
                <Logo size={28} />
                <span>
                  SNEHA <b style={{ color: "var(--v2-red)" }}>ELEV8R</b>
                </span>
              </div>
              <p>
                Engineered in Hyderabad. Installed across South India. A flagship brand of the Sneha
                Group.
              </p>
            </div>
            <div className="v2-foot-col">
              <h5>Products</h5>
              <a href="#products">SL Series</a>
              <a href="#products">VL Series</a>
              <a href="#products">RMG Series</a>
              <a href="#products">Compare All</a>
            </div>
            <div className="v2-foot-col">
              <h5>Company</h5>
              <a href="#why">Why Sneha Elev8r</a>
              <a href="#services">Services &amp; AMC</a>
              <a href="#clients">Projects</a>
              <a href="#cta">Enquire now</a>
            </div>
            <div className="v2-foot-col">
              <h5>Reach Us</h5>
              <a href="tel:+919100812345">+91 91008 12345</a>
              <a href="mailto:enquiries@snehaelev8r.com">enquiries@snehaelev8r.com</a>
              <span>Kondapur, Hyderabad — 500084</span>
            </div>
          </div>
          <div className="v2-foot-bottom">
            <span>© 2026 Sneha Elevators LLP. All rights reserved.</span>
            <span>GSTIN (Telangana): [TO BE SUPPLIED]</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
