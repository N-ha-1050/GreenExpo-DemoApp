import { Flower } from "lucide-react"
import Link from "next/link"

export function Logo(props: { onClick?: () => void }) {
    return (
        <Link href="/" className="flex items-center gap-2" {...props}>
            <Flower className="size-6 text-pink-500" />
            <span className="text-xl font-bold">
                横浜花巡り（2025/3/24 デモ）
            </span>
        </Link>
    )
}
