import { Flower, QrCode, Smartphone } from "lucide-react"
import Image from "next/image"

const howToItems = [
    {
        Icon: QrCode,
        title: "1. QRコードを見つける",
        description:
            "横浜市内の公園や観光スポットに設置されたQRコードを探してください。花の近くに設置されています。",
    },
    {
        Icon: Smartphone,
        title: "2. スキャンする",
        description:
            "スマートフォンのカメラでQRコードをスキャンすると、その花の詳細ページが表示されます。",
    },
    {
        Icon: Flower,
        title: "3. 花の情報を楽しむ",
        description:
            "花の名前、特徴、見頃の時期、豆知識などの情報を楽しみながら、横浜の自然を満喫しましょう。",
    },
]

export default function Home() {
    return (
        <>
            <section className="relative">
                <Image
                    src="/flowers.jpg"
                    alt="flowers"
                    fill
                    priority
                    className="absolute inset-0 z-0 object-cover"
                />
                <div className="container relative z-10 max-w-2xl px-4 py-24 text-white md:py-32">
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                        横浜の花をQRで巡る旅
                    </h1>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        横浜市内に設置されたQRコードを読み取って、その場所に咲く花の情報を知ることができるデジタル散策アプリです。
                    </p>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        注意：このサイトはデモサイトです。情報の正確性を保証しません。
                    </p>
                </div>
            </section>

            <section className="container px-4 py-16 text-center">
                <h2 className="mb-8 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                    横浜花巡りの使い方
                </h2>
                <ol className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {howToItems.map(({ Icon, title, description }) => (
                        <li key={title} className="flex flex-col items-center">
                            <div className="mb-4 rounded-full bg-pink-100 p-4">
                                <Icon className="size-12 text-pink-600" />
                            </div>
                            <h3 className="mb-2 scroll-m-20 text-2xl font-semibold tracking-tight">
                                {title}
                            </h3>
                            <p>{description}</p>
                        </li>
                    ))}
                </ol>
            </section>
        </>
    )
}
