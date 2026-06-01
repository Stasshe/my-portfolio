import type { RefObject } from "react";

type AboutSectionProps = {
  aboutRef: RefObject<HTMLElement | null>;
  skills: string[];
};

const impactStats = [
  {
    value: "10+",
    label: "Products shipped",
    detail: "ブラウザIDE、学校行事支援、学習支援、開発補助ツールなどを継続的に制作。",
  },
  {
    value: "2",
    label: "U-22 selections",
    detail: "U-22プログラミング・コンテスト2025で2作品が同時に事前審査を通過。",
  },
  {
    value: "2",
    label: "U-22 awards",
    detail: "Pyxis-CodeCanvas が経済産業大臣賞〈テクノロジー部門〉とアクセンチュア賞を受賞。",
  },
  {
    value: "2",
    label: "Schools using software",
    detail: "Celeritas と Pyxis が学校現場で実際に利用されている。",
  },
];

const caseStudies = [
  {
    title: "Pyxis-CodeCanvas",
    type: "Browser IDE",
    problem: "自分のPCがなく、iPad中心の開発では既存IDEが重く不安定だった。",
    design: "1秒起動、直感的な編集、Git連携、Node.js/TypeScript実行をブラウザ上に集約。",
    outcome: "U-22で2賞を受賞。現在は中学校の部活動でも利用。",
    href: "/products/pyxis-codecanvas",
  },
  {
    title: "Celeritas",
    type: "Operations Web App",
    problem: "スポーツ祭の準備期間が短く、進行変更と情報共有が属人的になっていた。",
    design: "自動生成に寄せすぎず、当日の例外を人が修正できる運営向け設計を重視。",
    outcome: "出身高校の行事運営で実運用。運営側と閲覧側の情報格差を縮小。",
    href: "/products/celeritas-sports-event",
  },
];

const principles = [
  "実装前に、利用者・制約・例外・運用責任を整理する。",
  "理想的な自動化より、現場が修正できる設計を優先する。",
  "セキュリティ上の問題は、公開ではなく適切な窓口と手順で扱う。",
  "AIの出力は、設計責務・保守性・安全性の観点で検証する。",
];

const growthAreas = [
  "アルゴリズムとデータ構造",
  "OS / ネットワーク",
  "低レイヤシステム",
  "セキュリティ工学",
  "C++ / Rust の読解",
];

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
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 items-start">
          <div className="lg:sticky lg:top-28">
            <span id="about-label" className="label text-[var(--color-brand)] mb-4 block">
              Profile
            </span>
            <h2 id="about-title" className="heading-lg mb-8">
              What I build
              <br />
              and how I
              <br />
              <span className="accent text-[var(--color-dark-accent)] italic">judge it.</span>
            </h2>
            <p id="about-text-0" className="body-text text-[rgba(var(--color-light-rgb),0.66)]">
              TypeScript、React、Next.js、Swift
              を中心に、フロントエンドとブラウザ上の開発環境を作ってきました。画面を作るだけでなく、状態管理、コンポーネント設計、実行環境の制約、導入後の運用までを一続きの問題として扱います。
            </p>
            <p
              id="about-text-1"
              className="body-text text-[rgba(var(--color-light-rgb),0.58)] mt-5"
            >
              AIを使う場面が増えた今は、局所的な実装速度よりも、広い文脈を保持して判断する力を重視しています。生成されたコードが責務として妥当か、後から変えやすいか、安全性や性能を損なわないかを確認する側に立ちます。
            </p>
          </div>

          <div className="space-y-14">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="heading-sm text-[var(--color-light)] mb-5">Principles</h3>
                <ul className="grid gap-3">
                  {principles.map((principle) => (
                    <li
                      key={principle}
                      className="body-text-sm border-l border-[var(--color-brand)] pl-4 text-[rgba(var(--color-light-rgb),0.62)]"
                    >
                      {principle}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="heading-sm text-[var(--color-light)] mb-5">Current Focus</h3>
                <p
                  id="about-text-2"
                  className="body-text-sm text-[rgba(var(--color-light-rgb),0.62)] mb-4"
                >
                  フロントエンドで得た実装経験を土台に、抽象化の背後にある技術を学び直しています。障害の切り分け、設計変更の影響評価、AI生成コードの検証精度を上げるためです。
                </p>
                <div className="flex flex-wrap gap-2">
                  {growthAreas.map((area) => (
                    <span
                      key={area}
                      className="font-mono text-[0.68rem] uppercase tracking-[0.08em] px-3 py-2 rounded-[8px] border border-[rgba(var(--color-light-rgb),0.12)] text-[rgba(var(--color-light-rgb),0.55)]"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="heading-sm text-[var(--color-light)] mb-5">Technical Base</h3>
              <div id="about-skills" data-about="skills" className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span
                    key={skill}
                    id={`about-skill-${i}`}
                    data-about="skill"
                    className="about-skill font-mono text-[0.7rem] uppercase tracking-[0.08em] px-4 py-2 rounded-[8px] border transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
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
      </div>
    </section>
  );
}
