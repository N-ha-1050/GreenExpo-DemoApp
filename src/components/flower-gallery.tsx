"use client"

import { useState } from "react"
import Image from "next/image"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import { Button } from "@/components/ui/button"

type Props = {
    images: string[]
    name: string
}

export function FlowerGallery({ images, name }: Props) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [dialogOpen, setDialogOpen] = useState(false)
    const [dialogIndex, setDialogIndex] = useState(0)

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }

    const openDialog = (index: number) => {
        setDialogIndex(index)
        setDialogOpen(true)
    }

    const dialogPrevious = () => {
        setDialogIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }

    const dialogNext = () => {
        setDialogIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }

    return (
        <div className="mx-4">
            {/* メイン画像 */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border">
                <Image
                    src={images[currentIndex] || "/placeholder.svg"}
                    alt={`${name}の写真 ${currentIndex + 1}`}
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-between p-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40"
                        onClick={goToPrevious}
                    >
                        <ChevronLeft className="size-6" />
                        <span className="sr-only">前の画像</span>
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40"
                        onClick={goToNext}
                    >
                        <ChevronRight className="size-6" />
                        <span className="sr-only">次の画像</span>
                    </Button>
                </div>
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40"
                    onClick={() => openDialog(currentIndex)}
                >
                    <ZoomIn className="size-5" />
                    <span className="sr-only">拡大表示</span>
                </Button>
            </div>

            {/* サムネイル */}
            <div className="flex gap-2 overflow-x-auto pb-2">
                {images.map((image, index) => (
                    <button
                        key={index}
                        className={`relative size-20 shrink-0 overflow-hidden rounded-md border-2 ${
                            index === currentIndex
                                ? "border-primary"
                                : "border-transparent"
                        }`}
                        onClick={() => setCurrentIndex(index)}
                    >
                        <Image
                            src={image || "/placeholder.svg"}
                            alt={`${name}のサムネイル ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                    </button>
                ))}
            </div>

            {/* 拡大表示ダイアログ */}
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogContent className="max-h-[95vh] max-w-[95vw]">
                    <DialogHeader>
                        <DialogTitle>{name}の拡大写真</DialogTitle>
                    </DialogHeader>
                    <div className="relative aspect-[4/3] size-full overflow-hidden rounded-lg bg-black">
                        <Image
                            src={images[dialogIndex] || "/placeholder.svg"}
                            alt={`${name}の拡大写真 ${dialogIndex + 1}`}
                            fill
                            className="object-contain"
                        />
                        <div className="absolute inset-0 flex items-center justify-between p-4">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    dialogPrevious()
                                }}
                            >
                                <ChevronLeft className="size-8" />
                                <span className="sr-only">前の画像</span>
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    dialogNext()
                                }}
                            >
                                <ChevronRight className="size-8" />
                                <span className="sr-only">次の画像</span>
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
