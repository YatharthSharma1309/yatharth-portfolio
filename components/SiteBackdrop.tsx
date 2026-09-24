export function SiteBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="bg-atmosphere absolute inset-0" />
      <div className="bg-grid absolute inset-0" />
    </div>
  );
}
