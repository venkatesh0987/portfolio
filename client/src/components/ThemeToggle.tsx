import { useTheme } from "../hooks/useTheme";
import { Icon } from "./Icon";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="flex size-9 items-center justify-center rounded-full border border-ink/10 text-ink/70 transition-colors duration-200 hover:border-accent/50 hover:text-accent dark:border-paper/15 dark:text-paper/70"
    >
      <Icon name={theme === "dark" ? "sun" : "moon"} className="size-4" />
    </button>
  );
}
