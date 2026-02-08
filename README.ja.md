<h1 align=center> 恋と深空バトルガイド</h1>

<div align="left">
  <img src="https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/next--intl-4-0070F3?style=for-the-badge&logo=next.js&logoColor=white" alt="Next-Intl" />
  <img src="https://img.shields.io/badge/i18n-EN/JA/RU-4ECDC4?style=for-the-badge" alt="i18n 3 Languages" />
  <img src="https://img.shields.io/badge/Deployment-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</div>

## 📋 プロジェクト概要
「恋と深空（Love and Deepspace）」の戦闘メカニズムに特化したファンメイドガイドサイトです。パートナーの詳細なガイド、武器情報、スキル解説、ゲームプレイ戦略を多言語で提供します。

> **詳細な技術解説は英語版READMEをご覧ください** ➞ [README.md](README.md) | [GitHub プロフィール](https://github.com/rue-eru)</br>
> 🖥️ [デモはこちら](https://lads-battles.vercel.app/ja)


<details>
<summary>スクリーンショットと動画</summary>

後日追加予定

</details>

---

## ✨ 主な機能

### 1. 多言語対応 (EN/JA/RU)
- 完全な日本語ローカライゼーション実装
- 日本語フォント最適化 (Noto Serif JP: Google Font ➞ Local Font WOFF2)
- 動的ルーティングによる言語切り替え

### 2. パフォーマンス最適化
- 日本語フォントサイズ 90%削減 (1.3MBのみ)
- 画像最適化 (Image/next)
- Lighthouse によるパフォーマンス計測（Vercel 本番環境）
- デスクトップ表示: 90〜100 点
- モバイル表示: 80〜90 点（コンテンツ量を考慮）
- Accessibility / Best Practices / SEO: 安定して 100 点

![Lighthouse Performance](https://img.shields.io/badge/performance-80+%25-brightgreen)
![Lighthouse Accessibility](https://img.shields.io/badge/accessibility-100%25-brightgreen)
![Lighthouse Best Practices](https://img.shields.io/badge/best%20practices-100%25-brightgreen)
![Lighthouse SEO](https://img.shields.io/badge/seo-100%25-brightgreen)

## ⚙️ 技術スタック
- **Next.js 16**: App Router を活用した最新アーキテクチャ
- **TypeScript**: 型安全なデータ管理
- **Tailwind CSS 4**: 効率的なスタイリング
- **next-intl**: スケーラブルな国際化対応

## 🏗️ アーキテクチャの特徴

### データ層
- JSONファイルによる動的データ管理
- TypeScriptインターフェースによる型安全

### コンポーネント構造
- 機能ベースのコンポーネント分割
- Server / Client Component の責務分離

### 国際化
- 名前空間ベースの翻訳ファイル構造
- 3言語完全対応 (英語/日本語/ロシア語)

## 📊 プロジェクト実績

- **6ページ**の詳細なキャラクターガイド（ホムラ）
- **100+** 画像の最適化処理
- **3言語**の完全なローカライゼーション
- **レスポンシブデザイン** (モバイル/タブレット/デスクトップ対応)

## 🎯 採用担当者様へ

このプロジェクトは以下のスキルを実証しています：
1. **国際化対応能力**: 日本語を含む多言語Webアプリケーション開発経験
2. **パフォーマンス最適化**: Lighthouseを用いた計測と改善実績
3. **モダンなフロントエンド技術**: Next.js App Router, React 19, TypeScript
4. **実務を意識したコード品質**: ESLint / TypeScript strict mode

---
<div align="right">
<i>
最初公開: 2026年2月7日<br>
最終更新: 2026年2月7日
</i>
</div>