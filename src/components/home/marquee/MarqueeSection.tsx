import type { RefObject } from "react";

type MarqueeSectionProps = {
  marqueeRef: RefObject<HTMLDivElement | null>;
  items: string[];
};

export function MarqueeSection({ marqueeRef, items }: MarqueeSectionProps) {
  const repeatCount = 4;
  const repeatedItems = Array.from({ length: repeatCount }).flatMap((_, rep) =>
    items.map((item, idx) => ({ key: `${item}-${idx}-${rep}`, value: item })),
  );

  return (
    <div ref={marqueeRef} className="marquee-section">
      <div id="marquee-track" className="marquee-track">
        {repeatedItems.map(({ key, value }) => (
          <div key={key} className="marquee-item">
            <span className="dot" />
            {value}
          </div>
        ))}
      </div>
    </div>
  );
}
