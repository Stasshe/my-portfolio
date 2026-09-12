import { EXPERIENCE } from "@/lib/experience";
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
        <div className="mb-[var(--space-lg)] grid grid-cols-[minmax(0,0.75fr)_minmax(0,1.6fr)] items-end gap-[var(--space-lg)] max-[900px]:grid-cols-1 max-[900px]:gap-[var(--space-md)]">
          <div>
            <span className={`${labelClass} mb-4 block text-dark-accent`}>Experience</span>
            <h2 className={`${headingLgClass} text-dark`}>経歴</h2>
          </div>
          <p className={`${bodyTextClass} max-w-[720px] text-light-accent`}>{EXPERIENCE.summary}</p>
        </div>

        <div className="grid grid-cols-[1.4fr_1fr_0.55fr] items-baseline gap-[var(--space-md)] border-y border-dark py-[var(--space-sm)] max-[700px]:grid-cols-1 max-[700px]:gap-1">
          <p className={`${headingSmClass} text-dark`}>{EXPERIENCE.company}</p>
          <p className="font-accent text-[1.05rem] italic text-dark-accent">{EXPERIENCE.role}</p>
          <p className="font-mono text-[0.78rem] tracking-[0.08em] text-light-accent">
            {EXPERIENCE.period}
          </p>
        </div>

        <dl className="mt-[var(--space-lg)] grid grid-cols-2 gap-x-[var(--space-lg)] max-[900px]:grid-cols-1">
          {EXPERIENCE.areas.map((area) => (
            <div className="border-t border-dark/15 py-[var(--space-md)]" key={area.title}>
              <dt className={`${headingSmClass} text-dark`}>{area.title}</dt>
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
      </div>
    </section>
  );
}
