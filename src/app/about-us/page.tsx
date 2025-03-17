import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Utensils } from "lucide-react"
import Image from "next/image"

const activityItems = [
    {
        Icon: Users,
        label: "メンター活動・勉強会",
        description:
            "定期的にメンター活動や勉強会を開催し、データサイエンスの基礎から応用まで幅広く学んでいます。先輩から後輩へ知識を共有する文化を大切にしています。",
    },
    {
        Icon: BookOpen,
        label: "輪読会・コンペ参加",
        description:
            "データサイエンスの参考書を一緒に読み進める輪読会や、Kaggleなどのデータ分析コンペティションにチームで参加し、実践的なスキルを磨いています。",
    },
    {
        Icon: Utensils,
        label: "レクリエーション",
        description:
            "BBQやゲームなどのレクリエーション活動も不定期に行い、部員同士の親睦を深めています。",
    },
]

export default function AboutUs() {
    return (
        <div className="flex min-h-screen flex-col">
            <section className="bg-gradient-to-b from-pink-50 to-background py-16 dark:from-zinc-900 md:py-24">
                <div className="mx-auto max-w-3xl px-4 text-center">
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                        私たちについて
                    </h1>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        横浜花巡りは、横浜市立大学データサイエンス倶楽部が運営する、横浜市内の美しい花々をQRコードを通じて発見し、学び、楽しむためのデジタル体験プロジェクトです。
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="my-8 flex flex-wrap justify-center gap-6">
                    <Image
                        src="/logo.png"
                        alt="データサイエンス倶楽部ロゴ"
                        width={96}
                        height={96}
                        className="size-24 rounded-full bg-white object-contain"
                    />
                </div>
                <h2 className="mb-4 scroll-m-20 border-b pb-2 text-center text-3xl font-semibold tracking-tight first:mt-0">
                    データサイエンス倶楽部について
                </h2>
                <div className="mb-8 text-center text-lg font-semibold">
                    みんなで仲良くスキルアップ！
                </div>
                <div className="mx-auto max-w-3xl px-4">
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        私たちは横浜市立大学の学生団体データサイエンス倶楽部です
                    </p>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        現在、需要が高まりつつあるデータサイエンスを学べる場所は少ないのが実情
                    </p>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        データサイエンス倶楽部ではデータサイエンスを学ぶための学習プラットフォームを提供しています
                    </p>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        データサイエンスの理論中心だけではなく、生データを実際に解析していく実践重視の活動をしていくことを目的にデータサイエンスを体感できます
                    </p>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        参加対象は学生だけでなく、社会人も可能です！！
                    </p>
                </div>
            </section>

            <section className="py-16">
                <h2 className="mb-4 scroll-m-20 border-b pb-2 text-center text-3xl font-semibold tracking-tight first:mt-0">
                    倶楽部の活動内容
                </h2>
                <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-3">
                    {activityItems.map(({ Icon, label, description }) => (
                        <Card key={label}>
                            <CardHeader>
                                {/* <div className="flex flex-col items-center text-center">
                                    <div className="mb-4 rounded-full bg-pink-100 p-3">
                                        <Icon className="size-6 text-pink-600" />
                                    </div>
                                </div> */}
                                <CardTitle>{label}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex items-center">
                                <div className="mr-4 rounded-full bg-pink-100 p-3">
                                    <Icon className="size-6 text-pink-600" />
                                </div>
                                <p>{description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    )
}
