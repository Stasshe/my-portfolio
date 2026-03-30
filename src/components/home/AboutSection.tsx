import { type RefObject } from "react";

type AboutSectionProps = {
  aboutRef: RefObject<HTMLElement | null>;
  skills: string[];
};

export function AboutSection({ aboutRef, skills }: AboutSectionProps) {
  return (
    <section ref={aboutRef} className="section about-section" id="about">
      <div className="about-deco about-deco-1" />
      <div className="about-deco about-deco-2" />

      <div className="container">
        <div className="about-grid">
          <div>
            <span className="label about-label">About Me</span>
            <h2 className="heading-lg about-title">
              Designer,
              <br />
              developer,
              <br />
              <span className="accent">& dreamer.</span>
            </h2>

            <div className="about-stats">
              <div className="about-stat">
                <div className="about-stat-number">5+</div>
                <div className="about-stat-label">Years of experience</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">30+</div>
                <div className="about-stat-label">Projects completed</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">&infin;</div>
                <div className="about-stat-label">Cups of coffee</div>
              </div>
            </div>
          </div>

          <div>
            <p className="body-text about-text">{/* User will fill this in later */}</p>
            <p className="body-text about-text">{/* User will fill this in later */}</p>

            <div className="about-skills">
              {skills.map((skill) => (
                <span key={skill} className="about-skill">
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
