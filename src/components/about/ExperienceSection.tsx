import { CAREER_ENTRIES } from "@/lib/experience";
import {
  bodyTextClass,
  bodyTextSmClass,
  containerClass,
  headingLgClass,
  headingSmClass,
  labelClass,
  sectionClass,
} from "@/lib/styles";

export function ExperienceSection() {
  return (
    <section className={`${sectionClass} border-t-2 border-dark`} id="experience">
      <div className={containerClass}>
        <span className={`${labelClass} mb-4 block text-dark-accent`}>Experience</span>
        <h2 className={`${headingLgClass} mb-[var(--space-lg)] text-dark`}>主な経歴・実績</h2>

        <div className="flex flex-col gap-[var(--space-xl)]">
          {CAREER_ENTRIES.map((entry) => (
            <article key={entry.company}>
              <div className="grid grid-cols-[minmax(0,0.75fr)_minmax(0,1.6fr)] gap-[var(--space-lg)] border-y border-dark py-[var(--space-md)] max-[900px]:grid-cols-1 max-[900px]:gap-[var(--space-md)]">
                <div>
                  <h3 className={`${headingSmClass} text-dark`}>{entry.company}</h3>
                  <div className="mt-2 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <p className="font-accent text-[1.05rem] italic text-dark-accent">
                      {entry.role}
                    </p>
                    <p className="font-mono text-[0.78rem] tracking-[0.08em] text-light-accent">
                      {entry.period}
                    </p>
                  </div>
                </div>
                <p className={`${bodyTextClass} max-w-[720px] text-light-accent`}>
                  {entry.summary}
                </p>
              </div>

              <dl className="ml-[clamp(0.75rem,3vw,3rem)] mt-[var(--space-md)] grid grid-cols-2 gap-x-[var(--space-lg)] border-l-2 border-dark-accent/50 pl-[clamp(1rem,2vw,2rem)] max-[900px]:grid-cols-1">
                {entry.areas.map((area) => (
                  <div className="border-t border-dark/15 py-[var(--space-md)]" key={area.title}>
                    <dt className="font-serif text-[1.05rem] font-semibold leading-[1.4] text-dark">
                      {area.title}
                    </dt>
                    <dd className="mt-3">
                      <p className={`${bodyTextSmClass} text-dark/80`}>{area.body}</p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {area.tags.map((tag) => (
                          <li
                            className="border border-dark/20 px-[0.75rem] py-[0.3rem] font-mono text-[0.66rem] uppercase tracking-[0.08em] text-light-accent"
                            key={tag}
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
