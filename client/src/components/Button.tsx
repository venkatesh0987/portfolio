import type { ComponentPropsWithoutRef } from "react";
import { Icon } from "./Icon";

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "secondary";
  showArrow?: boolean;
};

export function Button({ variant = "primary", showArrow = false, className = "", children, ...rest }: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";
  const variants = {
    primary: "bg-ink text-paper hover:bg-ink/85 dark:bg-paper dark:text-ink dark:hover:bg-paper/90",
    secondary:
      "border border-ink/15 text-ink hover:border-ink/40 dark:border-paper/20 dark:text-paper dark:hover:border-paper/40",
  };

  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
      {showArrow && <Icon name="arrow-right" className="size-4" />}
    </a>
  );
}
