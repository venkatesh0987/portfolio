import { SectionHeading } from "../components/SectionHeading";
import { ContactForm } from "../components/ContactForm";
import { SocialLinks } from "../components/SocialLinks";
import { profile } from "../data/profile";

export function Contact() {
  return (
    <section id="contact" className="bg-accent/[0.04] py-20 sm:py-28 dark:bg-accent/[0.06]">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let's work together"
            description="Whether it's a new application, an existing codebase, or ongoing technical support — I'd like to hear about it."
          />

          <div className="mt-8 space-y-4 text-sm text-ink/70 dark:text-paper/70">
            <p>{profile.email}</p>
            <SocialLinks />
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
