import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-surface-border/80 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm text-foreground transition-colors hover:text-accent"
        >
          <span className="text-accent">~/</span>dagmawi
        </a>
        <ul className="hidden items-center gap-5 font-mono text-xs text-muted sm:flex sm:gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
