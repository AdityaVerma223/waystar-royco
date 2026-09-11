export function WaystarCrest({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Waystar Royco Heraldic Crest"
    >
      {/* Outer shield frame with double border */}
      <path
        d="M50 5 L88 20 V50 C88 72 50 95 50 95 C50 95 12 72 12 50 V20 L50 5Z"
        stroke="#d4af37"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#070d1a"
      />
      <path
        d="M50 11 L82 24 V49 C82 68 50 88 50 88 C50 88 18 68 18 49 V24 L50 11Z"
        stroke="#d4af37"
        strokeWidth="1"
        strokeOpacity="0.6"
        fill="#091326"
      />

      {/* Heraldic eagle / wings stylized chevron */}
      <path
        d="M26 36 L50 24 L74 36 L68 42 L50 33 L32 42 L26 36Z"
        fill="url(#goldGrad)"
      />

      {/* Monogram W and R intersecting in sharp serif lines */}
      {/* Letter W */}
      <path
        d="M27 44 L34 72 L42 52 L50 72 L58 52 L66 72 L73 44 H68 L64 61 L56 44 H53 L60 63 L51 44 H49 L40 63 L47 44 H44 L36 61 L32 44 H27Z"
        fill="#ffffff"
        fillOpacity="0.95"
      />

      {/* Central Star of Brightstar */}
      <polygon
        points="50,16 52,21 57,21 53,24 55,29 50,26 45,29 47,24 43,21 48,21"
        fill="#d4af37"
      />

      {/* Bottom Laurel Accent */}
      <path
        d="M34 78 C40 82 46 84 50 84 C54 84 60 82 66 78"
        stroke="#d4af37"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <defs>
        <linearGradient id="goldGrad" x1="26" y1="24" x2="74" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fce08b" />
          <stop offset="0.5" stopColor="#d4af37" />
          <stop offset="1" stopColor="#aa8423" />
        </linearGradient>
      </defs>
    </svg>
  );
}
