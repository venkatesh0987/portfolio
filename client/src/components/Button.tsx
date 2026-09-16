import type { ComponentPropsWithoutRef } from "react";
import { Icon } from "./Icon";

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "secondary";
  showArrow?: boolean;
};

export function Button({ variant = "primary", showArrow = false, className = "", children, ...rest }: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";
  const variants = {
    primary:
      "bg-gradient-to-r from-accent to-violet text-white shadow-md shadow-accent/20 hover:shadow-lg hover:shadow-violet/30 hover:brightness-105",
    secondary:
      "border border-ink/15 text-ink hover:border-accent/50 hover:text-accent dark:border-paper/20 dark:text-paper dark:hover:border-accent/50 dark:hover:text-accent",
  };

  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
      {showArrow && <Icon name="arrow-right" className="size-4" />}
    </a>
  );
}
