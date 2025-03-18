---
title: README
---

GreenExpo 花巡りのデモサイトです

## リンク

* ばら
  * <https://green-expo-demo-app.vercel.app/qr/ab04dcf2-3bdc-4df4-9073-c4eef80d21f1>
* チューリップ
  * <https://green-expo-demo-app.vercel.app/qr/5d75525c-592f-4b67-a21e-323e6cfd7f9d>
* アジサイ
  * <https://green-expo-demo-app.vercel.app/qr/548cc8f1-8026-4a18-8a4a-6e5d8b6abbe0>
* コスモス
  * <https://green-expo-demo-app.vercel.app/qr/e22f591a-a0c0-4f78-b36b-a90f1a056b8b>

## 今後の課題

* ユーザーの識別(アカウント登録等)とデータの収集
  * 現在は一切データを収集していない
  * 動きを分析するなら必要
  * 個人情報の収集については教授や市と要相談
  * 集めるならデータベースサーバーも必要
* 画像
  * 現在はフリー画像
  * 市に提供してもらえるか？
* AIチャット
  * 現在は個人のGeminiのAPIキー
  * ChatGPTやGeminiの利用は可能かどうか、可能ならコストは払ってもらえるのか
* サーバー
  * 現在はVercelの無料枠
  * 詳細は未確認だが商用利用は不可だったはずなので市に払ってもらえるか
* ドメイン(URL)
  * 現在はVercelからもらえるURL←管理者権限はない
  * 市のドメイン内でホストできるのか、ホストしなければならないのか
  * 別で取得するならその費用は払ってもらえるか

## 利用技術

* Next.js
* TailwindCSS
* shadcn/ui

## ローカル環境

```shell
pnpm i
pnpm dev
```

AIチャットを使うには `.env.local` ファイルをプロジェクト直下に作りGoogleのAPIキーを指定

```.env.local
GOOGLE_GENERATIVE_AI_API_KEY=<APIキー>
```
