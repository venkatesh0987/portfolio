import { stats } from "../data/experience";
import { StatCard } from "../components/StatCard";

export function Stats() {
  return (
    <section aria-label="Experience overview" className="border-y border-ink/10 py-14 dark:border-paper/10">
      <div className="container-page grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((stat, index) => (
          <StatCard key={stat.label} {...stat} index={index} />
        ))}
      </div>
    </section>
  );
}
