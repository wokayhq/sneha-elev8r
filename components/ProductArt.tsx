/* Brand-matched line illustrations for the Products cards.
   Same language as ServiceArt: ink #17181A strokes, red #D93A2B accents,
   #FBE7E4 tint fills. Motion is transform-only (a-float / a-spin / a-pulse)
   and disabled by the global prefers-reduced-motion rule in globals.css. */

/* SL — a villa with a compact home lift attached */
export function SlArt() {
  return (
    <svg className="art" viewBox="0 0 320 190" fill="none" aria-hidden="true">
      {/* ground */}
      <line x1="52" y1="160" x2="268" y2="160" stroke="#17181A" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="276" y1="160" x2="294" y2="160" stroke="#17181A" strokeOpacity="0.25" strokeWidth="1.6" strokeLinecap="round" />
      <ellipse cx="160" cy="164" rx="66" ry="4.5" fill="#17181A" fillOpacity="0.05" />
      {/* villa body + pitched roof */}
      <rect x="88" y="94" width="98" height="66" fill="#FFFFFF" stroke="#17181A" strokeWidth="1.8" />
      <path d="M80 94 L137 56 L194 94 Z" fill="#FFFFFF" stroke="#17181A" strokeWidth="1.8" strokeLinejoin="round" />
      {/* door + handle */}
      <rect x="103" y="126" width="20" height="34" rx="2" fill="#FBE7E4" stroke="#17181A" strokeOpacity="0.35" strokeWidth="1.4" />
      <circle cx="119" cy="144" r="1.4" fill="#17181A" fillOpacity="0.5" />
      {/* window with panes */}
      <rect x="138" y="108" width="24" height="18" rx="2" fill="#FBE7E4" stroke="#17181A" strokeOpacity="0.35" strokeWidth="1.4" />
      <path d="M150 108 V126 M138 117 H162" stroke="#17181A" strokeOpacity="0.3" strokeWidth="1.2" />
      {/* attached compact lift tower */}
      <rect x="206" y="70" width="38" height="90" rx="5" fill="#FFFFFF" stroke="#17181A" strokeWidth="1.8" />
      <line x1="214" y1="78" x2="214" y2="152" stroke="#17181A" strokeOpacity="0.25" strokeWidth="1.4" />
      <line x1="236" y1="78" x2="236" y2="152" stroke="#17181A" strokeOpacity="0.25" strokeWidth="1.4" />
      {/* cab riding the tower */}
      <g className="a-float">
        <rect x="216" y="102" width="18" height="26" rx="3" fill="#FBE7E4" stroke="#17181A" strokeWidth="1.6" />
        <path d="M225 105 V125" stroke="#17181A" strokeOpacity="0.4" strokeWidth="1.2" />
        <circle cx="225" cy="98.5" r="1.8" fill="#D93A2B" />
      </g>
      {/* landing link into the house */}
      <path d="M186 118 H206" stroke="#17181A" strokeOpacity="0.3" strokeWidth="1.4" strokeDasharray="3 4" />
      {/* shallow-pit dimension marker */}
      <path d="M258 132 V160" stroke="#17181A" strokeOpacity="0.28" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M254 132 H262 M254 160 H262" stroke="#17181A" strokeOpacity="0.35" strokeWidth="1.4" strokeLinecap="round" />
      {/* single-phase bolt */}
      <path
        className="a-pulse"
        d="M256 42 l-7 12 h5 l-4 11 11 -14 h-5 l4 -9 z"
        fill="#D93A2B"
        fillOpacity="0.9"
      />
      {/* rising chevrons */}
      <path className="a-pulse" d="M60 108 l7 -7 7 7" stroke="#D93A2B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path className="a-pulse d2" d="M60 122 l7 -7 7 7" stroke="#D93A2B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* VL — a mid-rise apartment block, machine room crossed out (MRL) */
export function VlArt() {
  return (
    <svg className="art" viewBox="0 0 320 190" fill="none" aria-hidden="true">
      {/* ground */}
      <line x1="58" y1="160" x2="272" y2="160" stroke="#17181A" strokeWidth="1.8" strokeLinecap="round" />
      <ellipse cx="166" cy="164" rx="62" ry="4.5" fill="#17181A" fillOpacity="0.05" />
      {/* neighbour slabs */}
      <path d="M74 160 V120 q0 -5 5 -5 h16 q5 0 5 5 v40" stroke="#17181A" strokeOpacity="0.25" strokeWidth="1.4" strokeLinejoin="round" />
      <line x1="80" y1="128" x2="94" y2="128" stroke="#17181A" strokeOpacity="0.18" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="80" y1="140" x2="94" y2="140" stroke="#17181A" strokeOpacity="0.18" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M238 160 V126 q0 -5 5 -5 h14 q5 0 5 5 v34" stroke="#17181A" strokeOpacity="0.25" strokeWidth="1.4" strokeLinejoin="round" />
      <line x1="244" y1="134" x2="256" y2="134" stroke="#17181A" strokeOpacity="0.18" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="244" y1="146" x2="256" y2="146" stroke="#17181A" strokeOpacity="0.18" strokeWidth="1.4" strokeLinecap="round" />
      {/* apartment block, flat roof */}
      <rect x="118" y="46" width="96" height="114" fill="#FFFFFF" stroke="#17181A" strokeWidth="1.8" />
      {/* windows */}
      <rect x="128" y="56" width="18" height="12" rx="1.5" fill="#FBE7E4" stroke="#17181A" strokeOpacity="0.25" strokeWidth="1.2" />
      <rect x="154" y="56" width="18" height="12" rx="1.5" fill="#FBE7E4" stroke="#17181A" strokeOpacity="0.25" strokeWidth="1.2" />
      <rect x="128" y="76" width="18" height="12" rx="1.5" fill="#FBE7E4" stroke="#17181A" strokeOpacity="0.25" strokeWidth="1.2" />
      <rect x="154" y="76" width="18" height="12" rx="1.5" fill="#FBE7E4" stroke="#17181A" strokeOpacity="0.25" strokeWidth="1.2" />
      <rect x="128" y="96" width="18" height="12" rx="1.5" fill="#FBE7E4" stroke="#17181A" strokeOpacity="0.25" strokeWidth="1.2" />
      <rect x="154" y="96" width="18" height="12" rx="1.5" fill="#FBE7E4" stroke="#17181A" strokeOpacity="0.25" strokeWidth="1.2" />
      <rect x="128" y="116" width="18" height="12" rx="1.5" fill="#FBE7E4" stroke="#17181A" strokeOpacity="0.25" strokeWidth="1.2" />
      <rect x="154" y="116" width="18" height="12" rx="1.5" fill="#FBE7E4" stroke="#17181A" strokeOpacity="0.25" strokeWidth="1.2" />
      {/* entrance */}
      <rect x="136" y="136" width="20" height="24" rx="2" fill="#FBE7E4" stroke="#17181A" strokeOpacity="0.35" strokeWidth="1.4" />
      {/* internal shaft */}
      <rect x="182" y="46" width="24" height="114" fill="#FBE7E4" fillOpacity="0.45" stroke="#17181A" strokeOpacity="0.3" strokeWidth="1.4" />
      <g className="a-float">
        <rect x="186" y="86" width="16" height="22" rx="3" fill="#FFFFFF" stroke="#17181A" strokeWidth="1.6" />
        <path d="M194 88.5 V105.5" stroke="#17181A" strokeOpacity="0.4" strokeWidth="1.2" />
        <circle cx="194" cy="82.5" r="1.8" fill="#D93A2B" />
      </g>
      {/* machine room? crossed out — that's the point of MRL */}
      <rect x="180" y="16" width="28" height="22" rx="3" stroke="#17181A" strokeOpacity="0.3" strokeWidth="1.4" strokeDasharray="4 4" />
      <path className="a-pulse" d="M182 18 L206 36 M206 18 L182 36" stroke="#D93A2B" strokeWidth="1.8" strokeLinecap="round" />
      {/* rising chevrons */}
      <path className="a-pulse" d="M96 92 l7 -7 7 7" stroke="#D93A2B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path className="a-pulse d2" d="M96 106 l7 -7 7 7" stroke="#D93A2B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* height dimension */}
      <path d="M262 52 V156" stroke="#17181A" strokeOpacity="0.28" strokeWidth="1.4" strokeDasharray="3 6" strokeLinecap="round" />
      <path d="M257 52 H267 M257 156 H267" stroke="#17181A" strokeOpacity="0.35" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

/* RMG — a high-rise tower with a rooftop machine room and traction pulley */
export function RmgArt() {
  return (
    <svg className="art" viewBox="0 0 320 190" fill="none" aria-hidden="true">
      {/* ground */}
      <line x1="48" y1="160" x2="284" y2="160" stroke="#17181A" strokeWidth="1.8" strokeLinecap="round" />
      <ellipse cx="166" cy="164" rx="70" ry="4.5" fill="#17181A" fillOpacity="0.05" />
      {/* neighbour towers */}
      <path d="M64 160 V105 q0 -5 5 -5 h26 q5 0 5 5 v55" stroke="#17181A" strokeOpacity="0.25" strokeWidth="1.4" strokeLinejoin="round" />
      <line x1="72" y1="114" x2="92" y2="114" stroke="#17181A" strokeOpacity="0.18" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="72" y1="128" x2="92" y2="128" stroke="#17181A" strokeOpacity="0.18" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="72" y1="142" x2="92" y2="142" stroke="#17181A" strokeOpacity="0.18" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M240 160 V88 q0 -5 5 -5 h22 q5 0 5 5 v72" stroke="#17181A" strokeOpacity="0.25" strokeWidth="1.4" strokeLinejoin="round" />
      <line x1="247" y1="98" x2="265" y2="98" stroke="#17181A" strokeOpacity="0.18" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="247" y1="112" x2="265" y2="112" stroke="#17181A" strokeOpacity="0.18" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="247" y1="126" x2="265" y2="126" stroke="#17181A" strokeOpacity="0.18" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="247" y1="140" x2="265" y2="140" stroke="#17181A" strokeOpacity="0.18" strokeWidth="1.4" strokeLinecap="round" />
      {/* tower */}
      <rect x="126" y="34" width="80" height="126" fill="#FFFFFF" stroke="#17181A" strokeWidth="1.8" />
      {/* windows */}
      <rect x="134" y="44" width="12" height="8" rx="1.5" fill="#FBE7E4" stroke="#17181A" strokeOpacity="0.25" strokeWidth="1.1" />
      <rect x="154" y="44" width="12" height="8" rx="1.5" fill="#FBE7E4" stroke="#17181A" strokeOpacity="0.25" strokeWidth="1.1" />
      <rect x="134" y="58" width="12" height="8" rx="1.5" fill="#FBE7E4" stroke="#17181A" strokeOpacity="0.25" strokeWidth="1.1" />
      <rect x="154" y="58" width="12" height="8" rx="1.5" fill="#FBE7E4" stroke="#17181A" strokeOpacity="0.25" strokeWidth="1.1" />
      <rect x="134" y="72" width="12" height="8" rx="1.5" fill="#FBE7E4" stroke="#17181A" strokeOpacity="0.25" strokeWidth="1.1" />
      <rect x="154" y="72" width="12" height="8" rx="1.5" fill="#FBE7E4" stroke="#17181A" strokeOpacity="0.25" strokeWidth="1.1" />
      <rect x="134" y="86" width="12" height="8" rx="1.5" fill="#FBE7E4" stroke="#17181A" strokeOpacity="0.25" strokeWidth="1.1" />
      <rect x="154" y="86" width="12" height="8" rx="1.5" fill="#FBE7E4" stroke="#17181A" strokeOpacity="0.25" strokeWidth="1.1" />
      <rect x="134" y="100" width="12" height="8" rx="1.5" fill="#FBE7E4" stroke="#17181A" strokeOpacity="0.25" strokeWidth="1.1" />
      <rect x="154" y="100" width="12" height="8" rx="1.5" fill="#FBE7E4" stroke="#17181A" strokeOpacity="0.25" strokeWidth="1.1" />
      <rect x="134" y="114" width="12" height="8" rx="1.5" fill="#FBE7E4" stroke="#17181A" strokeOpacity="0.25" strokeWidth="1.1" />
      <rect x="154" y="114" width="12" height="8" rx="1.5" fill="#FBE7E4" stroke="#17181A" strokeOpacity="0.25" strokeWidth="1.1" />
      <rect x="134" y="128" width="12" height="8" rx="1.5" fill="#FBE7E4" stroke="#17181A" strokeOpacity="0.25" strokeWidth="1.1" />
      <rect x="154" y="128" width="12" height="8" rx="1.5" fill="#FBE7E4" stroke="#17181A" strokeOpacity="0.25" strokeWidth="1.1" />
      {/* entrance */}
      <rect x="138" y="142" width="18" height="18" rx="2" fill="#FBE7E4" stroke="#17181A" strokeOpacity="0.35" strokeWidth="1.4" />
      {/* internal shaft */}
      <rect x="178" y="34" width="17" height="126" fill="#FBE7E4" fillOpacity="0.45" stroke="#17181A" strokeOpacity="0.3" strokeWidth="1.4" />
      {/* rooftop machine room */}
      <rect x="166" y="12" width="40" height="22" rx="3" fill="#FFFFFF" stroke="#17181A" strokeWidth="1.8" />
      <line x1="198" y1="12" x2="198" y2="4" stroke="#17181A" strokeOpacity="0.4" strokeWidth="1.4" strokeLinecap="round" />
      <circle className="a-pulse" cx="198" cy="3" r="2" fill="#D93A2B" />
      {/* traction pulley */}
      <g className="a-spin">
        <circle cx="186.5" cy="23" r="6" fill="#FFFFFF" stroke="#17181A" strokeWidth="1.6" />
        <line x1="182.5" y1="19" x2="190.5" y2="27" stroke="#17181A" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="190.5" y1="19" x2="182.5" y2="27" stroke="#17181A" strokeWidth="1.2" strokeLinecap="round" />
      </g>
      <circle cx="186.5" cy="23" r="1.8" fill="#D93A2B" />
      {/* cable + cab */}
      <g className="a-float">
        <line x1="186.5" y1="34" x2="186.5" y2="72" stroke="#17181A" strokeWidth="1.4" />
        <rect x="179.5" y="72" width="14" height="20" rx="3" fill="#FFFFFF" stroke="#17181A" strokeWidth="1.6" />
        <path d="M186.5 74.5 V89.5" stroke="#17181A" strokeOpacity="0.4" strokeWidth="1.2" />
        <circle cx="186.5" cy="95.5" r="1.6" fill="#D93A2B" />
      </g>
      {/* full-height dimension */}
      <path d="M222 34 V156" stroke="#17181A" strokeOpacity="0.28" strokeWidth="1.4" strokeDasharray="3 6" strokeLinecap="round" />
      <path d="M217 34 H227 M217 156 H227" stroke="#17181A" strokeOpacity="0.35" strokeWidth="1.4" strokeLinecap="round" />
      {/* rising chevrons */}
      <path className="a-pulse" d="M103 62 l7 -7 7 7" stroke="#D93A2B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path className="a-pulse d2" d="M103 76 l7 -7 7 7" stroke="#D93A2B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
