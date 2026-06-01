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
            <span className="filled">Requirements</span>
            &nbsp;&nbsp;&nbsp;
            <span className="stroke">Design</span>
            &nbsp;&nbsp;&nbsp;
            <span className="italic">& Operation</span>
          </div>
        </div>
        <div className="skew-text-row">
          <div id="skew-text-1" className="skew-text">
            <span className="stroke">Responsible</span>
            &nbsp;&nbsp;&nbsp;
            <span className="filled">Disclosure</span>
            &nbsp;&nbsp;&nbsp;
            <span className="italic">& Trust</span>
          </div>
        </div>
        <div className="skew-text-row">
          <div id="skew-text-2" className="skew-text">
            <span className="italic">AI-Aware</span>
            &nbsp;&nbsp;&nbsp;
            <span className="filled">Engineering</span>
            &nbsp;&nbsp;&nbsp;
            <span className="stroke">& Fundamentals</span>
          </div>
        </div>
      </div>
    </section>
  );
}
