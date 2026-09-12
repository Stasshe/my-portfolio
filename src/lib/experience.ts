export type ExperienceArea = {
  title: string;
  body: string;
  tags: string[];
};

export const EXPERIENCE = {
  company: "株式会社アルファ・オメガ",
  role: "Software Engineer Intern",
  period: "2026.7 —",
  summary:
    "インターンとして、社内向けローカルLLM基盤の開発中核、既存システムの再設計、社内のオンプレ・AI・CI・ネットワーク基盤を担当しています。技術面の判断を提案し、最終的な意思決定はTLと協働しています。",
  areas: [
    {
      title: "ローカルLLMエージェント基盤の開発中核",
      body: "社内向けのLLMエージェント基盤を、全体アーキテクチャの設計から主要機能の実装まで担当し、技術面を主導しています。agent runtime / harness、context・knowledge・artifact・toolchainの内部設計を整理し、SGLangとQwen系モデルをコンテナ上で動かす推論環境をDGX Sparkに接続して運用しています。",
      tags: ["SGLang", "Qwen", "Agent Runtime", "Docker", "DGX Spark"],
    },
    {
      title: "稼働中の業務システムの再設計",
      body: "React製の既存業務システムに対し、大規模リファクタリングと技術的負債の解消、アーキテクチャ改善を進めています。CI / workflowの整備、依存関係の更新、リリース周りの改善、UI・機能追加に加え、monorepoやReact Native Webを含めた今後の構成も検討しています。",
      tags: ["React", "TypeScript", "CI", "DevEx", "Monorepo"],
    },
    {
      title: "社内プロダクトの本番化",
      body: "プロトタイプ段階だった社内プロダクトを、本番運用を前提に全面的に改修しています。設計と品質をproduction水準へ引き上げることが役割です。",
      tags: ["Production", "Refactoring"],
    },
    {
      title: "オンプレ環境とAIワークステーション",
      body: "オンプレ機器とサーバーの管理、OSセットアップ、Linux環境のトラブルシューティングを担当しています。DGX Sparkは社内AIワークステーションとして構築・運用し、NVIDIA driver / CUDA / NVIDIA Container、GPUとUnified Memoryのリソース管理まで扱います。driverが壊れた際は原因調査・復旧・文書化を行いました。",
      tags: ["Linux", "NVIDIA / CUDA", "Docker", "DGX Spark"],
    },
    {
      title: "CI基盤と社内ネットワーク",
      body: "GitHub Actionsの使用量削減のため、Mini PC上にDockerベースのself-hosted CI（lintからPlaywright E2Eまで、persistent cache付き）を設計し、障害時に再構築しやすく他人へ引き継げる運用にしています。Wi-Fiのchannel設計（2.4 / 5 GHz、DFS、AP間の重複解消、mesh、6 GHzの調査）やTailscale / ZeroTierによるリモート接続も整備しました。",
      tags: ["GitHub Actions", "Playwright", "Tailscale", "Wi-Fi"],
    },
    {
      title: "開発方針とリポジトリ設計",
      body: "AGENTS.mdを含む開発方針への提案・改修、repo構成とmonorepo設計、generated codeの管理方針、CI/CD設計など、開発者が触りやすい環境づくりを進めています。",
      tags: ["AGENTS.md", "CI/CD", "Monorepo"],
    },
  ] satisfies ExperienceArea[],
};

export const INDEPENDENT_EXPERIENCE = {
  company: "U-22プログラミング・コンテスト2025",
  role: "Pyxis-CodeCanvas / Celeritas",
  period: "2025.8 — 12",
  summary:
    "端末と現場運営、それぞれの制約を出発点に2つのプロダクトを設計・開発しました。いずれも制作で終わらず、現在も実際の現場で利用されています。",
  areas: [
    {
      title: "Pyxis-CodeCanvas",
      body: "自分専用のPCを持たずiPadで開発していた経験から、高性能な端末がなくても本格的に開発できるブラウザIDEを開発しました。U-22プログラミング・コンテスト2025で経済産業大臣賞〈テクノロジー部門〉とアクセンチュア賞を受賞し、現在は中学校の部活動でも利用されています。",
      tags: ["Browser IDE", "iPad", "U-22"],
    },
    {
      title: "Celeritas",
      body: "出身高校のスポーツ祭運営を支援するWebシステムです。理想的な自動化に寄せすぎず、当日の急な変更を人が調整できる設計を重視しました。現在も母校の行事運営で利用されています。",
      tags: ["Operations", "Web App", "Production"],
    },
  ] satisfies ExperienceArea[],
};

export const CAREER_ENTRIES = [EXPERIENCE, INDEPENDENT_EXPERIENCE];
