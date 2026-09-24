import { OTHER_ACTIVITIES } from "@/lib/experience";
import { bodyTextSmClass, containerClass, headingMdClass, labelClass } from "@/lib/styles";

export function ActivitiesSection() {
  return (
    <section className="relative border-t border-dark/25 py-[var(--space-lg)]" id="activities">
      <div className={containerClass}>
        <span className={`${labelClass} mb-4 block text-dark-accent`}>Activities</span>
        <h2 className={`${headingMdClass} mb-[var(--space-md)] text-dark`}>その他の活動</h2>
        <div className="border-t border-dark">
          {OTHER_ACTIVITIES.map((activity) => (
            <article
              className="grid grid-cols-[minmax(0,0.75fr)_minmax(0,1.6fr)] gap-[var(--space-lg)] border-b border-dark/25 py-[var(--space-md)] max-[900px]:grid-cols-1 max-[900px]:gap-[var(--space-sm)]"
              key={activity.title}
            >
              <div>
                <p className="font-mono text-[0.78rem] tracking-[0.08em] text-light-accent">
                  {activity.period} · {activity.event}
                </p>
                <h3 className="mt-2 font-serif text-[1.05rem] font-semibold leading-[1.4] text-dark">
                  <a
                    href={activity.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dark-accent"
                  >
                    {activity.title}
                  </a>
                </h3>
              </div>
              <p className={`${bodyTextSmClass} max-w-[720px] text-dark/80`}>{activity.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
