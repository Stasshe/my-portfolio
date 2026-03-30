import { type RefObject } from "react";

type MarqueeSectionProps = {
  marqueeRef: RefObject<HTMLDivElement | null>;
  items: string[];
};

export function MarqueeSection({ marqueeRef, items }: MarqueeSectionProps) {
  return (
    <div ref={marqueeRef} className="marquee-section">
      <div className="marquee-track">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <div key={`${item}-${i}`} className="marquee-item">
            <span className="dot" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
