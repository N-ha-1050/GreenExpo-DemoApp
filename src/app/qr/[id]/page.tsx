import { FlowerChat } from "@/components/flower-chat"
import { FlowerGallery } from "@/components/flower-gallery"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { flowerData } from "@/lib/flower-data"
import { cn } from "@/lib/utils"
import {
    Calendar,
    Clock,
    Flower,
    Heart,
    Info,
    MapPin,
    MessageCircle,
} from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

type Props = { params: Promise<{ id: string }> }

export default async function Detail({ params }: Props) {
    const { id } = await params
    const flower = flowerData.find((d) => d.id === id)
    if (!flower) notFound()
    return (
        <>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                    <FlowerGallery images={flower.images} name={flower.name} />
                </div>
                <div className="mx-4">
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                        {flower.name}
                    </h1>
                    <p className="mb-4 italic text-muted-foreground">
                        {flower.scientificName}
                    </p>

                    <div className="mb-4 flex flex-wrap gap-2">
                        {flower.colors.map((color) => (
                            <Badge key={color} variant="outline">
                                {color}
                            </Badge>
                        ))}
                    </div>
                    <p className="mb-6 leading-7 [&:not(:first-child)]:mt-6">
                        {flower.description}
                    </p>
                    <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="flex items-start gap-2">
                            <Heart className="mt-0.5 size-5 text-pink-500" />
                            <div>
                                <p className="font-medium">花言葉</p>
                                <p className="text-muted-foreground">
                                    {flower.flowerLanguage}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2">
                            <Calendar className="mt-0.5 size-5 text-pink-500" />
                            <div>
                                <p className="font-medium">見頃</p>
                                <p className="text-muted-foreground">
                                    {flower.bestSeason}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2">
                            <Flower className="mt-0.5 size-5 text-pink-500" />
                            <div>
                                <p className="font-medium">分類</p>
                                <p className="text-muted-foreground">
                                    {flower.category}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2">
                            <MapPin className="mt-0.5 size-5 text-pink-500" />
                            <div>
                                <p className="font-medium">原産地</p>
                                <p className="text-muted-foreground">
                                    {flower.origin}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* タブコンテンツ - 詳細情報 */}
            <div className="mx-4 my-8">
                <Tabs defaultValue="details">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="details">詳細情報</TabsTrigger>
                        <TabsTrigger value="locations">
                            観賞スポット
                        </TabsTrigger>
                        <TabsTrigger
                            value="chat"
                            className="flex items-center gap-1"
                        >
                            <MessageCircle className="size-4" />
                            チャット
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="details" className="p-4">
                        <div className="space-y-4">
                            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                                {flower.name}について
                            </h2>
                            <p>{flower.history}</p>

                            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                                <Card>
                                    <CardHeader>
                                        <div className="flex items-center gap-2">
                                            <Clock className="size-4 text-muted-foreground" />
                                            <CardTitle>寿命</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p>{flower.lifespan}</p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <div className="flex items-center gap-2">
                                            <Info className="size-4 text-muted-foreground" />
                                            <CardTitle>高さ</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p>{flower.height}</p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <div className="flex items-center gap-2">
                                            <Calendar className="size-4 text-muted-foreground" />
                                            <CardTitle>開花時期</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p>{flower.bestSeason}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="locations" className="p-4">
                        <div className="space-y-4">
                            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                                横浜市内のバラ観賞スポット
                            </h2>

                            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {flower.locations.map((location) => (
                                    <Card key={location.slug}>
                                        {/* <div className="relative h-40">
                                            <Image
                                                src={`/placeholder.svg?height=200&width=400&text=${location.name}`}
                                                alt={location.name}
                                                fill
                                                className="rounded-t-lg object-cover"
                                            />
                                        </div> */}
                                        <CardHeader>
                                            <CardTitle>
                                                {location.name}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="p-4">
                                            <Link
                                                href={`https://www.google.com/maps/search/?api=1&query=${location.name}`}
                                                className={cn(
                                                    buttonVariants({
                                                        variant: "outline",
                                                    }),
                                                    "w-full",
                                                )}
                                            >
                                                <MapPin className="mr-2 size-4" />
                                                スポット詳細
                                            </Link>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="chat" className="p-4">
                        <FlowerChat flower={flower} />
                    </TabsContent>
                </Tabs>
            </div>
        </>
    )
}
