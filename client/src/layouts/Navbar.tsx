import { useState } from "react";
import { profile } from "../data/profile";
import { MobileMenu, type NavLink } from "../components/MobileMenu";
import { ThemeToggle } from "../components/ThemeToggle";
import { Button } from "../components/Button";
import { Icon } from "../components/Icon";

const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Expertise", href: "#expertise" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#how-i-work" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/80 backdrop-blur-md dark:border-paper/10 dark:bg-ink/80">
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#hero" className="font-mono text-sm font-semibold tracking-tight text-ink dark:text-paper">
          {profile.name}
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-accent dark:text-paper/70"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button variant="primary" href="#contact" className="!px-5 !py-2.5">
            Let's Talk
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex size-9 items-center justify-center rounded-full border border-ink/10 text-ink/70 dark:border-paper/15 dark:text-paper/70"
          >
            <Icon name={open ? "x" : "menu"} className="size-4" />
          </button>
        </div>
      </div>

      <MobileMenu open={open} links={navLinks} onNavigate={() => setOpen(false)} />
    </header>
  );
}
