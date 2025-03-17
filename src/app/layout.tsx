import "@/app/globals.css"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: {
        template: "%s - 横浜花巡り（2025/3/24 デモ）",
        default: "横浜花巡り（2025/3/24 デモ）",
    },
    description:
        "横浜市内に設置されたQRコードを読み取って、その場所に咲く花の情報を知ることができるデジタル散策アプリです。",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ja" suppressHydrationWarning>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}
