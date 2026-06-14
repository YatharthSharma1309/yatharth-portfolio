type Props = {
  children: React.ReactNode;
  className?: string;
};

export function SectionEyebrow({ children, className = "" }: Props) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span
        className="from-accent h-px w-10 shrink-0 bg-gradient-to-r to-transparent"
        aria-hidden
      />
      <p className="font-mono text-accent text-[11px] font-semibold tracking-[0.22em] uppercase">
        {children}
      </p>
    </div>
  );
}
