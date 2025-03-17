import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                404 Not Found
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                指定されたページはありません。
            </p>
            <Link href="/" className={buttonVariants({ variant: "link" })}>
                トップに戻る
            </Link>
        </div>
    )
}
