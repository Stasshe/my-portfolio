import {
  bodyTextClass,
  bodyTextSmClass,
  containerClass,
  headingLgClass,
  headingSmClass,
  labelClass,
} from "@/lib/styles";
import { Compass, Layers, ShieldCheck } from "lucide-react";
import type { RefObject } from "react";

type PrinciplesSectionProps = {
  principlesRef: RefObject<HTMLElement | null>;
};

const PRINCIPLES = [
  {
    icon: Layers,
    title: "Context over code",
    detail:
      "AIの弱点は知識不足だけではなく、文脈を保ち続ける難しさにあります。設計判断・責務・将来の変更まで見て、生成されたコードを評価します。",
  },
  {
    icon: Compass,
    title: "Constraints become requirements",
    detail:
      "端末の制約、短い準備期間、現場の例外、利用者の不安——実装前にこれらを整理し、設計対象として扱います。",
  },
  {
    icon: ShieldCheck,
    title: "Verify, don't just ship",
    detail:
      "動くことと、責務として妥当か、保守しやすいか、安全かは別の問題です。AIの出力も、人間が検証する側に立ちます。",
  },
];

export function PrinciplesSection({ principlesRef }: PrinciplesSectionProps) {
  return (
    <section
      ref={principlesRef}
      className="bg-dark py-[clamp(4.5rem,9vw,8rem)] text-white"
      id="principles"
    >
      <div className={containerClass}>
        <div className="grid grid-cols-[1fr_1.3fr] items-start gap-[clamp(2rem,5vw,4rem)] max-[900px]:grid-cols-1">
          <div>
            <span className="font-accent text-base italic text-brand">Profile</span>
            <h2 className={`${headingLgClass} mt-[0.85rem] text-white`}>
              目的から逆算し、
              <br />
              設計する。
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            <p className={`${bodyTextClass} text-white/80`}>
              Next.js を中心に Svelte / SolidJS / Astro / Nuxt を扱い、Rust・Swift
              も手がけます。Wasm・Web Worker・Worklet など Web の先端技術や React
              の最適化に取り組み、これまでに 30 件ほどのプロダクトを個人開発してきました。
            </p>
            <p className={`${bodyTextClass} text-white/80`}>
              現在はハッカソンの運営・講師、学生サークルでのメンター、摂津市の中学校で教育委員会から委託を受けた部活動の技術顧問を務めています。趣味はヴァイオリンです。
            </p>
          </div>
        </div>

        <div className="my-[clamp(3rem,6vw,5rem)] mb-[clamp(2.5rem,5vw,4rem)] h-px bg-line-dark" />

        <div id="principles-header" className="mb-[clamp(2.5rem,5vw,4rem)] max-w-[680px]">
          <span className={`${labelClass} mb-4 block text-brand`}>Operating Principles</span>
          <h2 className={`${headingLgClass} text-white`}>
            How I think about{" "}
            <span className="font-accent font-normal italic text-brand">building software.</span>
          </h2>
          <p className={`${bodyTextClass} mt-[var(--space-md)] text-white/70`}>
            コード生成 AI
            の普及で実装速度は大きく上がりました。しかし、それが良い設計につながるとは限りません。AI
            が見落としやすい文脈を人が補い、出力を批判的に評価することを重視しています。
          </p>
        </div>

        <div className="grid grid-cols-3 gap-[clamp(1rem,2vw,1.5rem)] max-[900px]:grid-cols-1">
          {PRINCIPLES.map(({ icon: Icon, title, detail }) => (
            <div
              className="principle-card border-l-2 border-l-brand/40 bg-white/[0.02] p-[clamp(1.5rem,2.5vw,2rem)] transition-colors duration-[400ms] ease-out-expo"
              key={title}
            >
              <div className="mb-[var(--space-sm)] flex h-11 w-11 items-center justify-center rounded-full bg-brand/10 text-brand">
                <Icon size={20} />
              </div>
              <h3 className={`${headingSmClass} mb-2 text-white`}>{title}</h3>
              <p className={`${bodyTextSmClass} text-white/70`}>{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
