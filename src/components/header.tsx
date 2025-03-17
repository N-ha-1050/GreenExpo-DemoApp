"use client"

import Link from "next/link"
import { Logo } from "./logo"
import { Button, buttonVariants } from "./ui/button"
import { useState } from "react"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet"
import { Menu } from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import { navItems } from "@/lib/nav-items"

export function Header() {
    const [open, setOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 flex w-full items-center justify-between bg-background/60 p-4 backdrop-blur">
            <Logo />

            <nav className="hidden gap-6 md:flex">
                {navItems.map(({ href, label }) => (
                    <Link
                        key={href}
                        href={href}
                        className={buttonVariants({ variant: "link" })}
                    >
                        {label}
                    </Link>
                ))}
                <ModeToggle />
            </nav>

            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild className="md:hidden">
                    <Button variant="ghost" size="icon">
                        <Menu />
                        <span className="sr-only">メニューを開く</span>
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader className="gap-4">
                        <SheetTitle>
                            <Logo onClick={() => setOpen(false)} />
                        </SheetTitle>
                        <SheetDescription>メニュー</SheetDescription>
                    </SheetHeader>
                    <nav className="flex flex-col items-start gap-4">
                        {navItems.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className={buttonVariants({ variant: "link" })}
                                onClick={() => setOpen(false)}
                            >
                                {label}
                            </Link>
                        ))}
                        <div className="self-end">
                            <ModeToggle />
                        </div>
                    </nav>
                </SheetContent>
            </Sheet>
        </header>
    )
}
