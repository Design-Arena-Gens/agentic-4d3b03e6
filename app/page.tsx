export default function Page() {
  return (
    <main className="page">
      <div className="frame">
        <svg className="stage" viewBox="0 0 900 1600" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Claymation scene">
          <defs>
            {/* Soft morning gradient */}
            <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFEDE6"/>
              <stop offset="60%" stopColor="#F7F2F0"/>
              <stop offset="100%" stopColor="#EAF7FF"/>
            </linearGradient>

            {/* Pastel palette */}
            <linearGradient id="mountainGrad1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#D9C2FF"/>
              <stop offset="100%" stopColor="#BDA9F3"/>
            </linearGradient>
            <linearGradient id="mountainGrad2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFC9D9"/>
              <stop offset="100%" stopColor="#F2AFC3"/>
            </linearGradient>

            {/* Clay wobble filter */}
            <filter id="clay" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.008" numOctaves="3" seed="3" result="noise"/>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="G"/>
            </filter>

            {/* Water surface ripple mask */}
            <filter id="water" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.02 0.05" numOctaves="2" seed="7" result="n"/>
              <feDisplacementMap in="SourceGraphic" in2="n" scale="12"/>
            </filter>

            {/* Fingerprint texture overlay */}
            <pattern id="fp" patternUnits="userSpaceOnUse" width="120" height="120">
              <g opacity="0.18">
                <circle cx="30" cy="30" r="26" fill="none" stroke="#000" strokeWidth="1"/>
                <circle cx="30" cy="30" r="20" fill="none" stroke="#000" strokeWidth="0.8"/>
                <circle cx="30" cy="30" r="14" fill="none" stroke="#000" strokeWidth="0.6"/>
                <circle cx="90" cy="80" r="28" fill="none" stroke="#000" strokeWidth="1"/>
                <circle cx="90" cy="80" r="22" fill="none" stroke="#000" strokeWidth="0.8"/>
              </g>
            </pattern>

            {/* Drop shadow */}
            <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#000" floodOpacity="0.2"/>
            </filter>
          </defs>

          {/* Sky background */}
          <rect x="0" y="0" width="900" height="1600" fill="url(#skyGrad)"/>

          {/* Mountains */}
          <g filter="url(#clay)" className="mountains">
            <path d="M-100 900 Q 200 600 450 900 T 1000 900 L 1000 650 Q 780 500 550 620 T 100 600 Q -80 700 -100 650 Z" fill="url(#mountainGrad1)" opacity="0.85"/>
            <path d="M-100 1000 Q 150 700 430 1000 T 1050 1000 L 1050 760 Q 830 640 580 740 T 120 720 Q -40 800 -100 760 Z" fill="url(#mountainGrad2)" opacity="0.9"/>
          </g>

          {/* Lake */}
          <g>
            <rect x="-50" y="1000" width="1000" height="700" fill="#BFE7FF"/>
            <rect x="-50" y="1000" width="1000" height="700" fill="#BFE7FF" filter="url(#water)" opacity="0.7"/>
            {/* Subtle horizontal streaks */}
            <g opacity="0.12">
              {Array.from({ length: 22 }).map((_, i) => (
                <rect key={i} x="-50" y={1020 + i * 28} width="1000" height="6" fill="#7FC6EA"/>
              ))}
            </g>
          </g>

          {/* Ripples group (reused) */}
          <g className="ripples" transform="translate(450, 1085)">
            <circle r="0" className="r1"/>
            <circle r="0" className="r2"/>
            <circle r="0" className="r3"/>
          </g>

          {/* Fish */}
          <g className="fish" transform="translate(450, 1085)">
            {/* body */}
            <ellipse cx="0" cy="0" rx="70" ry="52" fill="#FF895E" filter="url(#clay)"/>
            {/* fingerprints tint */}
            <rect x="-80" y="-70" width="160" height="140" fill="url(#fp)" opacity="0.15"/>
            {/* tail */}
            <path d="M70,0 Q120,-30 150,0 Q120,30 70,0 Z" fill="#FFB38E" filter="url(#clay)" className="tail"/>
            {/* fins */}
            <path d="M0,30 q30,12 0,22 q-30,-8 0,-22Z" fill="#FFD39F" filter="url(#clay)"/>
            <path d="M-30,-18 q10,-24 26,0 q-16,10 -26,0Z" fill="#FFD39F" filter="url(#clay)"/>
            {/* eye */}
            <circle cx="-20" cy="-10" r="16" fill="#FFF"/>
            <circle cx="-16" cy="-8" r="8" fill="#2B2B2B"/>
            <circle cx="-13" cy="-11" r="3" fill="#FFF"/>
            {/* mouth */}
            <path d="M-10,16 q14,10 28,0" stroke="#7A2E18" strokeWidth="6" fill="none" strokeLinecap="round"/>
          </g>

          {/* Eagle */}
          <g className="eagle" transform="translate(450,-300)">
            {/* body */}
            <ellipse cx="0" cy="0" rx="90" ry="60" fill="#6B5137" filter="url(#clay)"/>
            {/* head */}
            <circle cx="-70" cy="-30" r="34" fill="#EAE6E0" filter="url(#clay)"/>
            {/* beak */}
            <path d="M-96,-28 q-20,14 0,28 q18,-14 0,-28Z" fill="#F5C45A" filter="url(#clay)"/>
            {/* wing left */}
            <path d="M-10,-10 q-60,-40 -130,-10 q70,40 130,10Z" fill="#7B5C3E" filter="url(#clay)" className="wing wing-left"/>
            {/* wing right */}
            <path d="M20,10 q60,40 130,10 q-70,-40 -130,-10Z" fill="#7B5C3E" filter="url(#clay)" className="wing wing-right"/>
            {/* tail feathers */}
            <path d="M70,6 q40,18 70,0 q-30,-26 -70,0Z" fill="#5D452F" filter="url(#clay)"/>
            {/* talons (grabbing point near 450,1085) */}
            <g className="talons" transform="translate(30,40)">
              <path d="M0,0 q12,10 0,20 q-10,-8 0,-20Z" fill="#E9B55A" filter="url(#clay)"/>
              <path d="M20,4 q12,10 0,20 q-10,-8 0,-20Z" fill="#E9B55A" filter="url(#clay)"/>
            </g>
          </g>

          {/* Gentle vignette */}
          <rect x="0" y="0" width="900" height="1600" fill="none" filter="url(#shadow)" opacity="0.2"/>
        </svg>
      </div>
    </main>
  );
}
