import Link from "next/link"
import { Logo } from "./logo"
import { buttonVariants } from "./ui/button"
import { cn } from "@/lib/utils"
import { Twitter } from "lucide-react"
import { navItems } from "@/lib/nav-items"

export function Footer() {
    return (
        <footer className="bg-slate-900 px-4 py-8 text-slate-200">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div>
                    <Logo />
                    <p className="mt-4">
                        横浜市内に設置されたQRコードを読み取って、その場所に咲く花の情報を知ることができるデジタル散策アプリです。
                    </p>
                </div>
                <div>
                    <h3 className="mb-4 scroll-m-20 text-2xl font-semibold tracking-tight">
                        リンク
                    </h3>
                    <div className="flex flex-col items-start gap-2">
                        {navItems.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className={cn(
                                    buttonVariants({ variant: "link" }),
                                    "text-slate-200",
                                )}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="mb-4 scroll-m-20 text-2xl font-semibold tracking-tight">
                        SNS
                    </h3>
                    <div className="flex flex-row">
                        <Link
                            href="https://x.com/datasciencejp"
                            className={cn(
                                buttonVariants({
                                    size: "icon",
                                    variant: "link",
                                }),
                                "text-slate-200 hover:text-white",
                            )}
                        >
                            <Twitter />
                            <span className="sr-only">Twitter</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mt-8 border-t border-slate-800 pt-8 text-center text-slate-400">
                <p>&copy; 2025 データサイエンス倶楽部. All rights reserved.</p>
            </div>
        </footer>
    )
}
