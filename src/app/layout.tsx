import { Metadata } from "next";

export const metadata: Metadata = {
  title: "横浜花巡り（デモ）",
  description: "横浜の花を巡るデモアプリ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
