"use client";

import { SKILLS } from "@/components/home/data";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { SiteNav } from "@/components/shared/SiteNav";
import {
  bodyTextClass,
  bodyTextSmClass,
  containerClass,
  headingLgClass,
  headingSmClass,
  headingXlClass,
  inkLinkClass,
  labelClass,
  sectionClass,
} from "@/lib/styles";
import { Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const TIMELINE = [
  {
    index: "01",
    title: "Responsible disclosure, before it had a name",
    body: "高校2年生の頃、出身高校の学食システムを利用する中で脆弱性の可能性に気づきました。内容を直接公開するのではなく、学校の事務を通じてEC サイト制作会社へ報告し、後日、複数の指摘を確認した旨の返信を受けました。学んだのは、自分が使うサービスに責任を持つ姿勢と、適切な相手に適切な手順で伝えることの重要性です。",
  },
  {
    index: "02",
    title: "30+ products, and a first for the contest",
    body: "その後、十数個のプロダクト開発を重ね、高校3年生の頃にはU-22プログラミング・コンテスト2025で2作品が同時に事前審査を通過しました。複数作品の同時通過は確認した限り大会初です。",
  },
  {
    index: "03",
    title: "Pyxis-CodeCanvas — two awards at once",
    body: "iPad向けブラウザIDE「Pyxis-CodeCanvas」は、経済産業大臣賞〈テクノロジー部門〉とアクセンチュア賞を同時受賞。自分のPCを持たずiPadで開発していた経験から、高性能な端末がなくても本格的に開発できる環境を目指しました。現在は摂津市立第一中学校の部活動でも利用されています。",
  },
  {
    index: "04",
    title: "Celeritas — still running at my high school",
    body: "「Celeritas-freedom-student-council」は、出身高校のスポーツ祭運営を支援するWebシステムです。理想的な自動化ではなく、当日の急な変更に人が対応できる手動調整機能を重視して設計し、現在も実際に運用されています。",
  },
];

const CASE_STUDIES = [
  {
    title: "Pyxis-CodeCanvas",
    type: "Browser IDE",
    problem: "自分のPCがなく、iPad中心の開発では既存のIDEが重く不安定だった。",
    design:
      "1秒起動、直感的な編集、Git連携、Node.js / TypeScript 実行をブラウザ上に集約。環境制約をUX設計の出発点にした。",
    outcome:
      "U-22で経済産業大臣賞〈テクノロジー部門〉とアクセンチュア賞を受賞。中学校の部活動でも利用中。",
    href: "/products/pyxis-codecanvas",
  },
  {
    title: "Celeritas",
    type: "Operations Web App",
    problem: "スポーツ祭の準備期間が短く、進行変更と情報共有が属人的になっていた。",
    design: "自動生成に寄せすぎず、当日の例外を人が修正できる運営向け設計を重視。",
    outcome: "出身高校の行事運営で実運用。運営・先生・一般生徒の評判も良好。",
    href: "/products/celeritas-sports-event",
  },
];

const STRENGTHS = [
  "AIに何を任せ、何を任せないかを判断する力",
  "コードベース全体の構造を把握する力",
  "機能の責任範囲・境界を考える力",
  "問題の本質を整理し、抽象化する力",
];

const GROWTH_AREAS = [
  "アルゴリズムとデータ構造",
  "OS / ネットワーク",
  "低レイヤシステム",
  "セキュリティ工学",
  "C++ / Rust の読解",
];

const NOW = [
  "ハッカソンの運営・講師",
  "学生サークルでのメンター",
  "大阪府摂津市立中学校 部活動の技術顧問（教育委員会委託・不定期）",
];

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-light">
      <SiteNav solid menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <header className="border-b-2 border-dark pt-[clamp(3rem,7vw,6rem)] pb-[var(--space-lg)] max-sm:pt-[clamp(2.5rem,8vw,4rem)]">
        <div className={containerClass}>
          <span className={`${labelClass} mb-4 block text-dark-accent`}>About</span>
          <h1 className={`${headingXlClass} text-dark`}>
            What I build,
            <br />
            and how I{" "}
            <span className="font-accent font-normal italic text-dark-accent">judge it.</span>
          </h1>
          <p className={`${bodyTextClass} mt-[var(--space-md)] max-w-[640px] text-light-accent`}>
            身近な不便や制約を見つけ、実用性と保守性を重視して課題解決に取り組んできました。単に動くものを作るのではなく、実際の利用者が安心して使い続けられる状態まで設計することを大切にしています。趣味はヴァイオリンです。
          </p>
        </div>
      </header>

      <section className={sectionClass}>
        <div className={containerClass}>
          <span className={`${labelClass} mb-4 block text-dark-accent`}>Story</span>
          <h2 className={`${headingLgClass} mb-[var(--space-lg)] max-w-[22ch] text-dark`}>
            経歴のなかで、軸になったこと。
          </h2>

          <ol className="flex max-w-[760px] flex-col gap-[var(--space-lg)]">
            {TIMELINE.map((item) => (
              <li
                className="flex items-start gap-[var(--space-md)] max-sm:gap-[var(--space-sm)]"
                key={item.index}
              >
                <span className="w-14 flex-shrink-0 font-accent text-[1.6rem] leading-[1.2] text-dark-accent max-sm:w-10 max-sm:text-[1.3rem]">
                  {item.index}
                </span>
                <div>
                  <h3 className={`${headingSmClass} mb-2 text-dark`}>{item.title}</h3>
                  <p className={`${bodyTextSmClass} text-light-accent`}>{item.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <a
            href="https://u22procon.com/2025/report/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${inkLinkClass} mt-[var(--space-lg)] font-sans text-label tracking-[0.14em]`}
          >
            U-22プログラミング・コンテスト2025 大会レポートを見る →
          </a>
        </div>
      </section>

      <section className={`${sectionClass} bg-dark text-white`}>
        <div className={containerClass}>
          <span className={`${labelClass} mb-4 block text-brand`}>Case Studies</span>
          <h2
            className={`${headingLgClass} mb-[var(--space-lg)] max-w-[22ch] text-white max-[900px]:max-w-full`}
          >
            設計で何を優先したか。
          </h2>

          <div className="grid grid-cols-2 gap-[var(--space-md)] max-[900px]:grid-cols-1">
            {CASE_STUDIES.map((item) => (
              <Link
                href={item.href}
                className="block cursor-pointer border border-line-dark bg-white/[0.02] p-[var(--space-md)] transition-[border-color,background-color] duration-[400ms] ease-out-expo hover:border-brand hover:bg-[rgba(var(--color-brand-rgb),0.06)]"
                key={item.title}
              >
                <span className={`${labelClass} mb-2 block text-brand`}>{item.type}</span>
                <h3 className={`${headingSmClass} mb-[var(--space-sm)] text-white`}>
                  {item.title}
                </h3>
                <dl className="flex flex-col gap-[0.85rem]">
                  <div>
                    <dt className={`${labelClass} mb-1 text-brand`}>Problem</dt>
                    <dd className={`${bodyTextSmClass} text-white/75`}>{item.problem}</dd>
                  </div>
                  <div>
                    <dt className={`${labelClass} mb-1 text-brand`}>Design</dt>
                    <dd className={`${bodyTextSmClass} text-white/75`}>{item.design}</dd>
                  </div>
                  <div>
                    <dt className={`${labelClass} mb-1 text-brand`}>Outcome</dt>
                    <dd className={`${bodyTextSmClass} text-white/75`}>{item.outcome}</dd>
                  </div>
                </dl>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={sectionClass}>
        <div className={containerClass}>
          <span className={`${labelClass} mb-4 block text-dark-accent`}>Philosophy</span>
          <h2
            className={`${headingLgClass} mb-[var(--space-lg)] max-w-[22ch] text-dark max-[900px]:max-w-full`}
          >
            情報系人材としての在り方。
          </h2>

          <p className={`${bodyTextClass} mb-[var(--space-lg)] max-w-[74ch] text-dark/80`}>
            コード生成AIの発展で、実装の速度は大きく向上しました。しかし、実装が速くなることは、必ずしも良い設計につながりません。コードはプロジェクトの目的、利用者の要求、過去の設計判断、将来の保守方針と結びついています。AIの出力が一見正しく動いても、責務として妥当か、後から変更しやすいか、安全性や性能を損なわないかは、人間が判断する必要があります。AIの弱点は知識の不足ではなく、文脈を広く保ち続けることの難しさにあると考えています。
          </p>

          <div className="my-[var(--space-lg)] grid grid-cols-2 gap-[var(--space-xl)] max-[900px]:grid-cols-1">
            <div>
              <h3 className={`${headingSmClass} mb-[var(--space-sm)] text-dark`}>
                Where I&apos;m strong
              </h3>
              <ul className="flex flex-col gap-[0.7rem]">
                {STRENGTHS.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-dark/80">
                    <Check size={16} className="mt-0.5 flex-shrink-0 text-dark-accent" />
                    <span className={bodyTextSmClass}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={`${headingSmClass} mb-[var(--space-sm)] text-dark`}>
                Where I&apos;m building
              </h3>
              <p className={`${bodyTextSmClass} mb-[var(--space-sm)] text-light-accent`}>
                この半年はAIを活用した開発が中心になり、ゼロから細かいコードを書く力は相対的に弱くなったと感じています。一方で、AIに任せる範囲を判断する力や、コードベース全体を俯瞰する力は伸びました。今は次の領域の基礎を学び直しています。
              </p>
              <div className="flex flex-wrap gap-2">
                {GROWTH_AREAS.map((item) => (
                  <span
                    key={item}
                    className="border border-dark/20 px-[0.85rem] py-[0.4rem] font-mono text-[0.68rem] uppercase tracking-[0.08em] text-light-accent"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className={`${bodyTextClass} mb-[var(--space-lg)] max-w-[74ch] text-dark/80`}>
            目指しているのは、AIより詳しくなることでも、ミクロな実装でAIと競うことでもありません。AIやフレームワークが扱う局所的な文脈を超えて、要件・設計・実装・評価・運用を連続的な視点で観察し、判断できる情報系人材になることです。Web開発で得た実装経験を出発点に、計算機科学の基礎・低レイヤ・セキュリティ・ソフトウェア設計を学び、AIに適切なコンテキストを与え、その出力を批判的に評価できる人材を目指します。ミクロからマクロへ。
          </p>
        </div>
      </section>

      <section className={`${sectionClass} bg-dark text-white`}>
        <div className={containerClass}>
          <div className="grid grid-cols-2 gap-[var(--space-xl)] max-[900px]:grid-cols-1">
            <div>
              <span className={`${labelClass} mb-4 block text-brand`}>Technical Base</span>
              <h2 className={`${headingLgClass} mb-[var(--space-lg)] max-w-[22ch] text-white`}>
                よく使う技術。
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="border border-white/25 px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.08em] text-white/85 transition-[color,background-color,border-color] duration-[400ms] ease-out-expo hover:border-brand hover:bg-brand hover:text-dark"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className={`${labelClass} mb-4 block text-brand`}>Now</span>
              <h2 className={`${headingLgClass} mb-[var(--space-lg)] max-w-[22ch] text-white`}>
                最近していること。
              </h2>
              <ul className="flex flex-col gap-[0.85rem]">
                {NOW.map((item) => (
                  <li
                    key={item}
                    className={`${bodyTextSmClass} border-l-2 border-brand pl-4 text-white/80`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
