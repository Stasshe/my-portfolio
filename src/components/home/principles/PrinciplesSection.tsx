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
      "AIの弱点は知識不足ではなく、文脈を保ち続ける難しさ。設計判断・責務・将来の変更まで見て、生成されたコードを評価します。",
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
      "動くことと、責務として妥当か・保守しやすいか・安全かは別の問題。AIの出力も人間が検証する側に立ちます。",
  },
];

export function PrinciplesSection({ principlesRef }: PrinciplesSectionProps) {
  return (
    <section ref={principlesRef} className="principles-section" id="principles">
      <div className="container">
        <div className="profile-grid">
          <div>
            <span className="accent-italic profile-eyebrow">Profile</span>
            <h2 className="heading-lg profile-title">
              軸から逆算し、
              <br />
              設計判断する。
            </h2>
          </div>
          <div className="profile-body">
            <p className="body-text">
              Next.js を中心に Svelte / SolidJS / Astro / Nuxt を扱い、Rust・Swift
              も手がけます。Wasm・WebWorker・Worklet など Web の先端技術や React
              の最適化に通じ、これまでに 30 ほどのプロダクトを個人開発してきました。
            </p>
            <p className="body-text">
              現在はハッカソンの運営・講師、各サークルでのメンター、摂津市の中学校で教育委員会から委託を受けた部活の技術顧問を務めています。趣味はヴァイオリン。
            </p>
          </div>
        </div>

        <div className="principles-divider" />

        <div id="principles-header" className="principles-header">
          <span className="label principles-label">Operating Principles</span>
          <h2 className="heading-lg principles-title">
            How I think about{" "}
            <span className="accent-italic principles-accent">building software.</span>
          </h2>
          <p className="body-text principles-intro">
            コード生成 AI
            の普及で実装速度は大きく上がりました。けれど、それが良い設計につながるとは限りません。AI
            が見落としやすい文脈を人が補い、出力を批判的に評価することを重視しています。
          </p>
        </div>

        <div className="principles-grid">
          {PRINCIPLES.map(({ icon: Icon, title, detail }) => (
            <div className="principle-card" key={title}>
              <div className="principle-icon">
                <Icon size={20} />
              </div>
              <h3 className="heading-sm principle-card-title">{title}</h3>
              <p className="body-text-sm principle-card-detail">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
