export type NavItem = {
  href: string;
  label: string;
};

/** Primary navigation — labels match on-page section eyebrows. */
export const primaryNav: NavItem[] = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "/hire", label: "For businesses" },
  { href: "#about", label: "About" },
  { href: "#journey", label: "Career journey" },
  { href: "#certifications", label: "Certifications" },
  { href: "#digital-twin", label: "Career Twin" },
  { href: "#contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
];

/** In-page jumps on /hire — conversion landing, not a second brand. */
export const hirePageNav: NavItem[] = [
  { href: "#problems", label: "Problems" },
  { href: "#desk", label: "What you get" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

/** Hash links need the home prefix when not on the homepage. */
export function resolveNavHref(href: string, pathname: string): string {
  if (!href.startsWith("#")) return href;
  return pathname === "/" ? href : `/${href}`;
}
