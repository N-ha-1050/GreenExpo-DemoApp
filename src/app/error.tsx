"use client"

import { Button } from "@/components/ui/button"

export default function Error({ reset }: { reset: () => void }) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Server Error
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                サーバーとの接続ができませんでした。
            </p>
            <Button variant="link" onClick={() => reset()}>
                再読み込み
            </Button>
        </div>
    )
}
