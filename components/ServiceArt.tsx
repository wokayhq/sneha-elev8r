/* Brand-matched line illustrations for the Services cards.
   Palette: ink #17181A strokes, red #D93A2B accents, #FBE7E4 tint fills,
   soft vertical gradients for depth. Motion is transform-only
   (a-float / a-spin / a-pulse) and disabled by the global
   prefers-reduced-motion rule in globals.css. */

export function InstallArt() {
  return (
    <svg className="art" viewBox="0 0 320 190" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="g-inst-steel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#EFECE4" />
        </linearGradient>
        <linearGradient id="g-inst-cab" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#F1EDE3" />
        </linearGradient>
      </defs>
      {/* ground */}
      <line x1="44" y1="162" x2="276" y2="162" stroke="#17181A" strokeWidth="2" strokeLinecap="round" />
      <line x1="284" y1="162" x2="298" y2="162" stroke="#17181A" strokeOpacity="0.25" strokeWidth="1.6" strokeLinecap="round" />
      <ellipse cx="160" cy="166.5" rx="64" ry="4.5" fill="#17181A" fillOpacity="0.05" />
      {/* neighbouring buildings */}
      <path d="M60 162 V116 q0 -6 6 -6 h22 q6 0 6 6 v46" stroke="#17181A" strokeOpacity="0.28" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="66" y1="124" x2="88" y2="124" stroke="#17181A" strokeOpacity="0.16" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="66" y1="136" x2="88" y2="136" stroke="#17181A" strokeOpacity="0.16" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="66" y1="148" x2="88" y2="148" stroke="#17181A" strokeOpacity="0.16" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M236 162 V102 q0 -6 6 -6 h24 q6 0 6 6 v60" stroke="#17181A" strokeOpacity="0.28" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="243" y1="112" x2="265" y2="112" stroke="#17181A" strokeOpacity="0.16" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="243" y1="124" x2="265" y2="124" stroke="#17181A" strokeOpacity="0.16" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="243" y1="136" x2="265" y2="136" stroke="#17181A" strokeOpacity="0.16" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="243" y1="148" x2="265" y2="148" stroke="#17181A" strokeOpacity="0.16" strokeWidth="1.4" strokeLinecap="round" />
      {/* shaft rails + floor ticks */}
      <line x1="122" y1="30" x2="122" y2="162" stroke="#17181A" strokeWidth="2" strokeLinecap="round" />
      <line x1="198" y1="30" x2="198" y2="162" stroke="#17181A" strokeWidth="2" strokeLinecap="round" />
      <line x1="110" y1="70" x2="122" y2="70" stroke="#17181A" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="110" y1="100" x2="122" y2="100" stroke="#17181A" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="110" y1="130" x2="122" y2="130" stroke="#17181A" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="198" y1="70" x2="210" y2="70" stroke="#17181A" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="198" y1="100" x2="210" y2="100" stroke="#17181A" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="198" y1="130" x2="210" y2="130" stroke="#17181A" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" />
      {/* crane beam */}
      <rect x="104" y="16" width="112" height="10" rx="5" fill="url(#g-inst-steel)" stroke="#17181A" strokeWidth="2" />
      <line x1="160" y1="26" x2="160" y2="33" stroke="#17181A" strokeWidth="1.8" />
      {/* pulley */}
      <g className="a-spin">
        <circle cx="160" cy="41" r="7.5" fill="#FFFFFF" stroke="#17181A" strokeWidth="2" />
        <line x1="155" y1="36" x2="165" y2="46" stroke="#17181A" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="165" y1="36" x2="155" y2="46" stroke="#17181A" strokeWidth="1.4" strokeLinecap="round" />
      </g>
      <circle cx="160" cy="41" r="2.2" fill="#D93A2B" />
      {/* hoisted cab on sling */}
      <g className="a-float">
        <line x1="160" y1="48.5" x2="160" y2="78" stroke="#17181A" strokeWidth="1.8" />
        <circle cx="160" cy="81" r="3.2" fill="#FFFFFF" stroke="#17181A" strokeWidth="1.8" />
        <line x1="157.5" y1="83.5" x2="140" y2="96" stroke="#17181A" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="162.5" y1="83.5" x2="180" y2="96" stroke="#17181A" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="134" y="96" width="52" height="48" rx="8" fill="url(#g-inst-cab)" stroke="#17181A" strokeWidth="2" />
        <circle cx="160" cy="101" r="2" fill="#D93A2B" />
        <rect x="141" y="106" width="16" height="31" rx="3" fill="#FBE7E4" stroke="#17181A" strokeOpacity="0.3" strokeWidth="1.4" />
        <rect x="163" y="106" width="16" height="31" rx="3" fill="#FBE7E4" stroke="#17181A" strokeOpacity="0.3" strokeWidth="1.4" />
      </g>
      {/* dimension guide */}
      <line x1="224" y1="44" x2="224" y2="156" stroke="#17181A" strokeOpacity="0.28" strokeWidth="1.4" strokeDasharray="3 6" strokeLinecap="round" />
      <line x1="219" y1="44" x2="229" y2="44" stroke="#17181A" strokeOpacity="0.35" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="219" y1="156" x2="229" y2="156" stroke="#17181A" strokeOpacity="0.35" strokeWidth="1.4" strokeLinecap="round" />
      {/* rising chevrons + plus mark */}
      <path className="a-pulse" d="M84 92 l8 -8 8 8" stroke="#D93A2B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path className="a-pulse d2" d="M84 106 l8 -8 8 8" stroke="#D93A2B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="262" y1="52" x2="262" y2="64" stroke="#17181A" strokeOpacity="0.3" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="256" y1="58" x2="268" y2="58" stroke="#17181A" strokeOpacity="0.3" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="96" cy="40" r="2" fill="#17181A" fillOpacity="0.18" />
    </svg>
  );
}

export function MaintainArt() {
  return (
    <svg className="art" viewBox="0 0 320 190" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="g-mnt-face" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#F5F1E9" />
        </linearGradient>
        <linearGradient id="g-mnt-door" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#EFEBE1" />
        </linearGradient>
      </defs>
      {/* ground */}
      <line x1="52" y1="162" x2="268" y2="162" stroke="#17181A" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="160" cy="166.5" rx="58" ry="5" fill="#17181A" fillOpacity="0.06" />
      {/* service-zone outline */}
      <rect x="108" y="18" width="104" height="152" rx="12" stroke="#17181A" strokeOpacity="0.14" strokeWidth="1.4" strokeDasharray="5 7" />
      {/* portal frame */}
      <rect x="118" y="28" width="84" height="134" rx="10" fill="url(#g-mnt-face)" stroke="#17181A" strokeWidth="2" />
      <circle cx="127" cy="37" r="1.7" fill="#17181A" fillOpacity="0.35" />
      <circle cx="193" cy="37" r="1.7" fill="#17181A" fillOpacity="0.35" />
      {/* indicator pill + arrow */}
      <rect x="146" y="35" width="28" height="13" rx="6.5" fill="#FFFFFF" stroke="#17181A" strokeOpacity="0.5" strokeWidth="1.4" />
      <g className="a-pulse">
        <path d="M160 45 V40 M156.6 43 L160 39.6 L163.4 43" stroke="#D93A2B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      {/* open doors revealing mechanism */}
      <rect x="127" y="56" width="66" height="100" fill="#FBE7E4" stroke="#17181A" strokeWidth="1.6" />
      <rect x="127" y="56" width="21" height="100" rx="2" fill="url(#g-mnt-door)" stroke="#17181A" strokeWidth="1.6" />
      <rect x="172" y="56" width="21" height="100" rx="2" fill="url(#g-mnt-door)" stroke="#17181A" strokeWidth="1.6" />
      <path d="M143 98 V114" stroke="#17181A" strokeOpacity="0.35" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M177 98 V114" stroke="#17181A" strokeOpacity="0.35" strokeWidth="1.6" strokeLinecap="round" />
      {/* traction gear */}
      <g className="a-spin">
        <circle cx="160" cy="98" r="11.5" stroke="#17181A" strokeWidth="5.5" strokeDasharray="4.5 4.5" />
      </g>
      <circle cx="160" cy="98" r="4.4" fill="#FFFFFF" stroke="#D93A2B" strokeWidth="2" />
      {/* wrench leaning on the sill */}
      <g transform="translate(170,140) rotate(-52)">
        <path
          d="M-3 -17 L-3 -7 L3 -7 L3 -17 C7.5 -15.5 10 -11.5 10 -7.5 C10 -3.5 7.5 -0.5 4 1 L4 25 C4 30 -4 30 -4 25 L-4 1 C-7.5 -0.5 -10 -3.5 -10 -7.5 C-10 -11.5 -7.5 -15.5 -3 -17 Z"
          fill="#FFFFFF"
          stroke="#17181A"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </g>
      {/* floating service checklist with verified badge */}
      <g className="a-float">
        <rect x="58" y="52" width="48" height="62" rx="8" fill="#FFFFFF" stroke="#17181A" strokeWidth="2" />
        <rect x="73" y="46" width="18" height="10" rx="4" fill="#FBE7E4" stroke="#17181A" strokeWidth="1.4" />
        <path d="M66 68 H98" stroke="#17181A" strokeOpacity="0.28" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M66 78 H92" stroke="#17181A" strokeOpacity="0.28" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M66 92 L70 96 L77 88.5" stroke="#D93A2B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M84 93 H98" stroke="#17181A" strokeOpacity="0.28" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="102" cy="110" r="8" fill="#D93A2B" />
        <path d="M98.6 110 L101 112.4 L105.4 107.6" stroke="#FFFFFF" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      {/* dimension line */}
      <line x1="232" y1="48" x2="232" y2="150" stroke="#17181A" strokeOpacity="0.28" strokeWidth="1.4" strokeDasharray="3 6" strokeLinecap="round" />
      <line x1="227" y1="48" x2="237" y2="48" stroke="#17181A" strokeOpacity="0.35" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="227" y1="150" x2="237" y2="150" stroke="#17181A" strokeOpacity="0.35" strokeWidth="1.4" strokeLinecap="round" />
      {/* sparkle */}
      <path className="a-pulse d2" d="M250 26 l2.2 4.6 4.6 2.2 -4.6 2.2 -2.2 4.6 -2.2 -4.6 -4.6 -2.2 4.6 -2.2z" fill="#17181A" fillOpacity="0.22" />
    </svg>
  );
}

export function ModernArt() {
  return (
    <svg className="art" viewBox="0 0 320 190" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="g-mod-cab" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#F2EEE5" />
        </linearGradient>
        <radialGradient id="r-mod-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#D93A2B" stopOpacity="0.14" />
          <stop offset="1" stopColor="#D93A2B" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* ground */}
      <path d="M60 160 H132" stroke="#17181A" strokeOpacity="0.15" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M144 160 H288" stroke="#17181A" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="99" cy="160" rx="26" ry="3.5" fill="#17181A" fillOpacity="0.04" />
      <ellipse cx="222" cy="164" rx="44" ry="5" fill="#17181A" fillOpacity="0.06" />
      {/* old tilted cab, cracked */}
      <g transform="rotate(-4 99 128)" stroke="#17181A" strokeOpacity="0.3">
        <rect x="76" y="98" width="46" height="56" rx="8" strokeWidth="1.8" strokeDasharray="5 4" />
        <rect x="90" y="90" width="18" height="8" rx="4" strokeWidth="1.4" strokeDasharray="3 3" />
        <path d="M99 106 V148" strokeWidth="1.4" strokeDasharray="4 4" />
        <path d="M86 98 l5 11 -6 9 5 12" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      {/* performance spark-line */}
      <path d="M70 34 V62 H112" stroke="#17181A" strokeOpacity="0.18" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M74 57 L86 47 L97 51 L110 38" stroke="#17181A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle className="a-pulse" cx="110" cy="38" r="3" fill="#D93A2B" />
      {/* upgrade arrow */}
      <path d="M126 92 C143 70 155 62 172 56" stroke="#D93A2B" strokeWidth="2.2" strokeLinecap="round" strokeDasharray="0.1 6.8" />
      <path d="M170 47 L180 54 L172 62" stroke="#D93A2B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      {/* VVVF controller chip wired toward the new cab */}
      <rect x="132" y="124" width="30" height="24" rx="5" fill="#FFFFFF" stroke="#17181A" strokeWidth="1.8" />
      <rect x="140" y="131" width="14" height="10" rx="2" fill="#FBE7E4" />
      <path d="M126 129 h6 M126 136 h6 M126 143 h6 M162 129 h6 M162 136 h6 M162 143 h6" stroke="#17181A" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M168 136 H186" stroke="#17181A" strokeOpacity="0.35" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="2 4" />
      <circle cx="186" cy="136" r="2" fill="#17181A" fillOpacity="0.5" />
      {/* new cab with soft glow */}
      <g className="a-float">
        <ellipse cx="222" cy="104" rx="54" ry="60" fill="url(#r-mod-glow)" />
        <rect x="210" y="54" width="24" height="8" rx="4" fill="#D93A2B" />
        <rect x="190" y="62" width="64" height="86" rx="12" fill="url(#g-mod-cab)" stroke="#17181A" strokeWidth="2" />
        <rect x="210" y="70" width="24" height="7" rx="3.5" fill="#FBE7E4" />
        <rect x="202" y="84" width="40" height="56" rx="4" stroke="#17181A" strokeOpacity="0.3" strokeWidth="1.4" />
        <path d="M222 84 V140" stroke="#17181A" strokeOpacity="0.55" strokeWidth="1.5" />
        <circle cx="248" cy="108" r="1.7" fill="#17181A" fillOpacity="0.45" />
        <circle cx="248" cy="115" r="1.7" fill="#17181A" fillOpacity="0.45" />
      </g>
      {/* sparkles */}
      <path className="a-pulse" d="M272 30 l2.8 5.2 5.2 2.8 -5.2 2.8 -2.8 5.2 -2.8 -5.2 -5.2 -2.8 5.2 -2.8z" fill="#D93A2B" />
      <path className="a-pulse d2" d="M156 32 l2 4 4 2 -4 2 -2 4 -2 -4 -4 -2 4 -2z" fill="#17181A" fillOpacity="0.3" />
      <path className="a-pulse d3" d="M286 88 l1.8 3.2 3.2 1.8 -3.2 1.8 -1.8 3.2 -1.8 -3.2 -3.2 -1.8 3.2 -1.8z" fill="#17181A" fillOpacity="0.25" />
    </svg>
  );
}
