import { profile } from "../data/profile";
import { SocialLinks } from "../components/SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-ink/10 dark:border-paper/10">
      <div className="top-gradient-bar absolute inset-x-0 top-0 h-[2px] opacity-60" aria-hidden="true" />
      <div className="container-page flex flex-col items-center gap-5 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-gradient font-mono text-sm font-semibold">{profile.name}</p>
          <p className="mt-1 text-sm text-ink/55 dark:text-paper/55">Senior Full-Stack Software Developer</p>
        </div>

        <SocialLinks />

        <p className="text-xs text-ink/45 dark:text-paper/45">
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
