# 青空教室（Aozora Classroom）公式サイト

学生のための体験型教育プロジェクト「青空教室」の公式ウェブサイト。

## 技術スタック

- Next.js 15（App Router / Static Export）
- React 19
- Tailwind CSS 3
- TypeScript

## 開発

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # out/ に静的サイトを生成
```

## デプロイ

GitHub にpushすると Cloudflare Pages が自動でビルド・公開します。

- Build command: `pnpm build`
- Build output: `out`
- NODE_VERSION: `20`
