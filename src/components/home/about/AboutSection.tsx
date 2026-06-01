import type { RefObject } from "react";

type AboutSectionProps = {
  aboutRef: RefObject<HTMLElement | null>;
  skills: string[];
};

export function AboutSection({ aboutRef, skills }: AboutSectionProps) {
  return (
    <section
      ref={aboutRef}
      id="about"
      className="section relative overflow-hidden bg-[var(--color-dark)] text-[var(--color-light)]"
      data-section="about"
    >
      <div
        id="about-deco-1"
        className="absolute rounded-full opacity-5 pointer-events-none right-[-200px] top-[-150px] w-[500px] h-[500px] bg-[var(--color-brand)]"
      />
      <div
        id="about-deco-2"
        className="absolute rounded-full opacity-5 pointer-events-none left-[-100px] bottom-[-100px] w-[300px] h-[300px] bg-[var(--color-dark-accent)]"
      />

      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 md:gap-32 items-start">
          <div>
            <span id="about-label" className="label text-[var(--color-brand)] mb-4 block">
              About Me
            </span>
            <h2 id="about-title" className="heading-lg mb-8">
              Builder,
              <br />
              solver,
              <br />
              <span className="accent text-[var(--color-dark-accent)] italic">& maker.</span>
            </h2>

            <div
              id="about-stats"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8"
            >
              <div id="about-stat-0">
                <div className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] font-light text-[var(--color-brand)] leading-none mb-2">
                  2×
                </div>
                <div
                  className="font-mono text-[0.7rem] uppercase tracking-[0.12em]"
                  style={{ color: "rgba(var(--color-light-rgb), 0.4)" }}
                >
                  U-22 awards
                </div>
              </div>
              <div id="about-stat-1">
                <div className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] font-light text-[var(--color-brand)] leading-none mb-2">
                  10+
                </div>
                <div
                  className="font-mono text-[0.7rem] uppercase tracking-[0.12em]"
                  style={{ color: "rgba(var(--color-light-rgb), 0.4)" }}
                >
                  Products shipped
                </div>
              </div>
              <div id="about-stat-2">
                <div className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] font-light text-[var(--color-brand)] leading-none mb-2">
                  2
                </div>
                <div
                  className="font-mono text-[0.7rem] uppercase tracking-[0.12em]"
                  style={{ color: "rgba(var(--color-light-rgb), 0.4)" }}
                >
                  Schools using my software
                </div>
              </div>
            </div>
          </div>

          <div>
            <p id="about-text-0" className="body-text text-[rgba(var(--color-light-rgb),0.6)] mb-4">
              十数個のプロダクトを開発してきた。そのうち2つは今も学校で実際に使われている。
            </p>
            <p id="about-text-1" className="body-text text-[rgba(var(--color-light-rgb),0.6)] mb-4">
              U-22プログラミング・コンテスト2025に{" "}
              <a
                href="https://u22procon.com/2025/report/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--color-brand)", textDecoration: "underline" }}
              >
                2作品が同時に事前審査を通過
              </a>
              。複数作品の同時通過は大会初と認識している。うち1作品は経済産業大臣賞〈テクノロジー部門〉とアクセンチュア賞を同時受賞。
            </p>
            <p id="about-text-2" className="body-text text-[rgba(var(--color-light-rgb),0.6)] mb-4">
              大学入学まで自分のPCを持っておらず、iPadで開発していた。環境の制約が、UX設計への関心の出発点になった。
            </p>

            <div id="about-skills" data-about="skills" className="flex flex-wrap gap-2 mt-4">
              {skills.map((skill, i) => (
                <span
                  key={skill}
                  id={`about-skill-${i}`}
                  data-about="skill"
                  className="about-skill font-mono text-[0.7rem] uppercase tracking-[0.08em] px-4 py-2 rounded-full border transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
                  style={{
                    borderColor: "rgba(var(--color-light-rgb),0.12)",
                    color: "rgba(var(--color-light-rgb),0.5)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
