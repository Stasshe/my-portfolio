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
            <span className="filled">Problem</span>
            &nbsp;&nbsp;&nbsp;
            <span className="stroke">Finding</span>
            &nbsp;&nbsp;&nbsp;
            <span className="italic">& Solving</span>
          </div>
        </div>
        <div className="skew-text-row">
          <div id="skew-text-1" className="skew-text">
            <span className="stroke">Security</span>
            &nbsp;&nbsp;&nbsp;
            <span className="filled">Mindset</span>
            &nbsp;&nbsp;&nbsp;
            <span className="italic">& Disclosure</span>
          </div>
        </div>
        <div className="skew-text-row">
          <div id="skew-text-2" className="skew-text">
            <span className="italic">Real-World</span>
            &nbsp;&nbsp;&nbsp;
            <span className="filled">Software</span>
            &nbsp;&nbsp;&nbsp;
            <span className="stroke">& Impact</span>
          </div>
        </div>
      </div>
    </section>
  );
}
