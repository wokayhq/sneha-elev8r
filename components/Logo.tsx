export default function Logo({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M20 4 L34 15 H27 L20 9.5 L13 15 H6 Z" fill="#D93A2B" />
      <path d="M20 36 L6 25 H13 L20 30.5 L27 25 H34 Z" fill="#8E9094" />
    </svg>
  );
}
