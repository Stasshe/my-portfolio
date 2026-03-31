import type { RefObject } from "react";

type SkewSectionProps = {
  skewRef: RefObject<HTMLElement | null>;
};

export function SkewSection({ skewRef }: SkewSectionProps) {
  return (
    <section ref={skewRef} className="skew-section">
      <div id="skew-content" className="skew-content">
        <div className="skew-text-row">
          <div id="skew-text-0" className="skew-text">
            <span className="filled">Creative</span>
            &nbsp;&nbsp;&nbsp;
            <span className="stroke">Direction</span>
            &nbsp;&nbsp;&nbsp;
            <span className="italic">& Vision</span>
          </div>
        </div>
        <div className="skew-text-row">
          <div id="skew-text-1" className="skew-text">
            <span className="stroke">Interface</span>
            &nbsp;&nbsp;&nbsp;
            <span className="filled">Design</span>
            &nbsp;&nbsp;&nbsp;
            <span className="italic">Systems</span>
          </div>
        </div>
        <div className="skew-text-row">
          <div id="skew-text-2" className="skew-text">
            <span className="italic">Full-Stack</span>
            &nbsp;&nbsp;&nbsp;
            <span className="filled">Development</span>
            &nbsp;&nbsp;&nbsp;
            <span className="stroke">& Craft</span>
          </div>
        </div>
      </div>
    </section>
  );
}
