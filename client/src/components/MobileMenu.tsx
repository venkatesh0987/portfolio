import { AnimatePresence, motion } from "framer-motion";

export type NavLink = { label: string; href: string };

type MobileMenuProps = {
  open: boolean;
  links: NavLink[];
  onNavigate: () => void;
};

export function MobileMenu({ open, links, onNavigate }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="overflow-hidden border-t border-ink/10 bg-paper md:hidden dark:border-paper/10 dark:bg-ink"
        >
          <ul className="container-page flex flex-col gap-1 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={onNavigate}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink/80 hover:bg-ink/5 dark:text-paper/80 dark:hover:bg-paper/5"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
