export default function Doors({ phase }: { phase: string }) {
  return (
    <div
      className={`doors ${phase === "arming" ? "arming" : ""} ${phase === "open" ? "open" : ""}`}
      aria-hidden="true"
    >
      <div className="panel left" />
      <div className="seam" />
      <div className="panel right" />
    </div>
  );
}
