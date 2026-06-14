export type NavItem = {
  href: string;
  label: string;
};

/** Primary navigation — labels match on-page section eyebrows. */
export const primaryNav: NavItem[] = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#journey", label: "Career journey" },
  { href: "#digital-twin", label: "AI Digital Twin" },
  { href: "#contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
];

/** Hash links need the home prefix when not on the homepage. */
export function resolveNavHref(href: string, pathname: string): string {
  if (!href.startsWith("#")) return href;
  return pathname === "/" ? href : `/${href}`;
}
