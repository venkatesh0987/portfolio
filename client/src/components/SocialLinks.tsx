import { socialLinks } from "../data/social";
import { Icon } from "./Icon";

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.icon === "mail" ? undefined : "_blank"}
          rel={link.icon === "mail" ? undefined : "noreferrer noopener"}
          aria-label={link.label}
          className="flex size-9 items-center justify-center rounded-full border border-ink/10 text-ink/70 transition-colors duration-200 hover:border-accent/50 hover:text-accent dark:border-paper/15 dark:text-paper/70"
        >
          <Icon name={link.icon} className="size-4" />
        </a>
      ))}
    </div>
  );
}
