export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "[YOUR GITHUB]", icon: "github" },
  { label: "LinkedIn", href: "[YOUR LINKEDIN]", icon: "linkedin" },
  { label: "Email", href: "mailto:[YOUR EMAIL]", icon: "mail" },
];
