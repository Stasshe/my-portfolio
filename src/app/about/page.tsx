"use client";

import { SKILLS } from "@/components/home/data";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { SiteNav } from "@/components/shared/SiteNav";
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
    <div className="about-page">
      <SiteNav solid menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* ── Header ── */}
      <header className="section about-hero">
        <div className="container">
          <span className="label about-eyebrow">About</span>
          <h1 className="heading-xl about-title">
            What I build,
            <br />
            and how I <span className="accent">judge it.</span>
          </h1>
          <p className="body-text about-intro">
            身近な不便や制約を見つけ、実用性と保守性を重視して課題解決に取り組んできました。単に動くものを作るのではなく、実際の利用者が安心して使い続けられる状態まで設計することを大切にしています。趣味はヴァイオリンです。
          </p>
        </div>
      </header>

      {/* ── Story / Timeline ── */}
      <section className="section about-section">
        <div className="container">
          <span className="label section-label">Story</span>
          <h2 className="heading-lg section-heading">経歴のなかで、軸になったこと。</h2>

          <ol className="about-timeline">
            {TIMELINE.map((item) => (
              <li className="about-timeline-item" key={item.index}>
                <span className="about-timeline-index font-mono">{item.index}</span>
                <div>
                  <h3 className="heading-sm about-timeline-title">{item.title}</h3>
                  <p className="body-text-sm about-timeline-body">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <a
            href="https://u22procon.com/2025/report/"
            target="_blank"
            rel="noopener noreferrer"
            className="about-report-link label"
          >
            U-22プログラミング・コンテスト2025 大会レポートを見る →
          </a>
        </div>
      </section>

      {/* ── Case studies ── */}
      <section className="section about-section about-section--muted">
        <div className="container">
          <span className="label section-label">Case Studies</span>
          <h2 className="heading-lg section-heading">設計で何を優先したか。</h2>

          <div className="about-cases-grid">
            {CASE_STUDIES.map((item) => (
              <Link href={item.href} className="about-case-card" key={item.title}>
                <span className="label about-case-type">{item.type}</span>
                <h3 className="heading-sm about-case-title">{item.title}</h3>
                <dl className="about-case-rows">
                  <div>
                    <dt className="label">Problem</dt>
                    <dd className="body-text-sm">{item.problem}</dd>
                  </div>
                  <div>
                    <dt className="label">Design</dt>
                    <dd className="body-text-sm">{item.design}</dd>
                  </div>
                  <div>
                    <dt className="label">Outcome</dt>
                    <dd className="body-text-sm">{item.outcome}</dd>
                  </div>
                </dl>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="section about-section">
        <div className="container about-philosophy">
          <span className="label section-label">Philosophy</span>
          <h2 className="heading-lg section-heading">情報系人材としての在り方。</h2>

          <p className="body-text about-philosophy-text">
            コード生成AIの発展で、実装の速度は大きく向上しました。しかし、実装が速くなることは、必ずしも良い設計につながりません。コードはプロジェクトの目的、利用者の要求、過去の設計判断、将来の保守方針と結びついています。AIの出力が一見正しく動いても、責務として妥当か、後から変更しやすいか、安全性や性能を損なわないかは、人間が判断する必要があります。AIの弱点は知識の不足ではなく、文脈を広く保ち続けることの難しさにあると考えています。
          </p>

          <div className="about-assessment-grid">
            <div>
              <h3 className="heading-sm about-assessment-title">Where I&apos;m strong</h3>
              <ul className="about-strengths">
                {STRENGTHS.map((item) => (
                  <li key={item}>
                    <Check size={16} className="about-strength-icon" />
                    <span className="body-text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="heading-sm about-assessment-title">Where I&apos;m building</h3>
              <p className="body-text-sm about-growth-lead">
                この半年はAIを活用した開発が中心になり、ゼロから細かいコードを書く力は相対的に弱くなったと感じています。一方で、AIに任せる範囲を判断する力や、コードベース全体を俯瞰する力は伸びました。今は次の領域の基礎を学び直しています。
              </p>
              <div className="about-growth-tags">
                {GROWTH_AREAS.map((item) => (
                  <span key={item} className="about-growth-tag font-mono">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className="body-text about-philosophy-text">
            目指しているのは、AIより詳しくなることでも、ミクロな実装でAIと競うことでもありません。AIやフレームワークが扱う局所的な文脈を超えて、要件・設計・実装・評価・運用を連続的な視点で観察し、判断できる情報系人材になることです。Web開発で得た実装経験を出発点に、計算機科学の基礎・低レイヤ・セキュリティ・ソフトウェア設計を学び、AIに適切なコンテキストを与え、その出力を批判的に評価できる人材を目指します。ミクロからマクロへ。
          </p>
        </div>
      </section>

      {/* ── Skills & Now ── */}
      <section className="section about-section about-section--muted">
        <div className="container">
          <div className="about-skills-now-grid">
            <div>
              <span className="label section-label">Technical Base</span>
              <h2 className="heading-lg section-heading">よく使う技術。</h2>
              <div className="about-skills">
                {SKILLS.map((skill) => (
                  <span key={skill} className="about-skill font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="label section-label">Now</span>
              <h2 className="heading-lg section-heading">最近していること。</h2>
              <ul className="about-now-list">
                {NOW.map((item) => (
                  <li key={item} className="body-text-sm">
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
