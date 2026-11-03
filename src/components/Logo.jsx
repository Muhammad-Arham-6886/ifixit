export default function Logo({ light }) {
  return (
    <span className={`logo ${light ? 'light' : ''}`}>
      <svg viewBox="0 0 40 40" width="38" height="38" aria-hidden="true">
        <rect x="9" y="3" width="22" height="34" rx="5" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M14 22l4 4 8-9" fill="none" stroke="#52c834" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="32" r="1.6" fill="currentColor" />
      </svg>
      <span className="logo-text">
        IFix <b>It</b>
      </span>
    </span>
  )
}
