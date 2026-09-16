export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/venkatesh0987/", icon: "github" },
  { label: "LinkedIn", href: "[YOUR LINKEDIN]", icon: "linkedin" },
  { label: "Email", href: "mailto:mailtovenki87@gmail.com", icon: "mail" },
];
