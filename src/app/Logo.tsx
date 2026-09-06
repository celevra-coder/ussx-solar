type LogoProps = {
  footer?: boolean;
};

export default function Logo({ footer = false }: LogoProps) {
  return (
    <span className={`ussx-logo ${footer ? "ussx-logo--footer" : ""}`}>
      <svg
        className="ussx-logo__mark"
        viewBox="0 0 110 66"
        aria-hidden="true"
      >
        <circle cx="29" cy="11" r="7" fill="#D7AF47" />

        <g
          stroke="#D7AF47"
          strokeWidth="1.7"
          strokeLinecap="round"
          opacity="0.95"
        >
          <line x1="29" y1="0.5" x2="29" y2="4" />
          <line x1="29" y1="18" x2="29" y2="21.5" />
          <line x1="18.5" y1="11" x2="22" y2="11" />
          <line x1="36" y1="11" x2="39.5" y2="11" />
          <line x1="21.5" y1="3.5" x2="24" y2="6" />
          <line x1="34" y1="16" x2="36.5" y2="18.5" />
          <line x1="21.5" y1="18.5" x2="24" y2="16" />
          <line x1="34" y1="6" x2="36.5" y2="3.5" />
        </g>

        <g transform="translate(2 8)">
          <polygon
            points="4,30 33,20 42,45 13,55"
            fill="#234F7F"
            stroke="#B7C5D0"
            strokeWidth="2"
            strokeLinejoin="round"
          />

          <polygon
            points="34,21 65,10 75,36 44,47"
            fill="#234F7F"
            stroke="#B7C5D0"
            strokeWidth="2"
            strokeLinejoin="round"
          />

          <g stroke="rgba(255,255,255,0.88)" strokeWidth="1">
            <line x1="12" y1="27" x2="21" y2="52" />
            <line x1="21" y1="24" x2="30" y2="49" />
            <line x1="30" y1="21" x2="39" y2="46" />

            <line x1="7" y1="38" x2="36" y2="28" />
            <line x1="10" y1="46" x2="39" y2="36" />
          </g>

          <g stroke="rgba(255,255,255,0.88)" strokeWidth="1">
            <line x1="43" y1="18" x2="52" y2="44" />
            <line x1="52" y1="15" x2="61" y2="41" />
            <line x1="61" y1="12" x2="70" y2="38" />

            <line x1="38" y1="29" x2="69" y2="18" />
            <line x1="41" y1="37" x2="72" y2="26" />
          </g>
        </g>
      </svg>

      <span className="ussx-logo__type">
        <strong>USS X</strong>
        <small>SOLAR</small>
      </span>
    </span>
  );
}
