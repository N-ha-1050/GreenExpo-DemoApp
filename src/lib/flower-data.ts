export type Flower = {
    id: string
    name: string
    scientificName: string
    description: string
    flowerLanguage: string
    bestSeason: string
    category: string
    origin: string
    height: string
    lifespan: string
    colors: string[]
    images: string[]
    history: string
    care: string
    locations: {
        name: string
        slug: string
    }[]
}

// AI生成のデータ
// 事実確認は行っていない
export const flowerData: Flower[] = [
    {
        id: "ab04dcf2-3bdc-4df4-9073-c4eef80d21f1",
        name: "ばら",
        scientificName: "Rosa",
        description:
            "バラは美しい花と香りで知られる花木です。世界中で愛され、様々な品種が作られています。横浜市内の公園や庭園で見ることができます。",
        flowerLanguage: "愛、美、情熱",
        bestSeason: "5月〜6月、10月〜11月",
        category: "バラ科バラ属",
        origin: "ヨーロッパ、アジア、北アメリカなど広域",
        height: "30cm〜3m（品種による）",
        lifespan: "多年草",
        colors: ["赤", "ピンク", "白", "黄", "オレンジ", "紫"],
        images: ["/rose1.jpg", "/rose2.jpg", "/rose3.jpg"],
        history:
            "バラの栽培の歴史は古く、紀元前から観賞用や香料として栽培されていました。18世紀以降、ヨーロッパで品種改良が盛んになり、現在では数万種類の品種があると言われています。",
        care: "日当たりと風通しの良い場所を好みます。定期的な剪定と肥料、病害虫対策が必要です。",
        locations: [
            { name: "山下公園", slug: "yamashita-park" },
            { name: "港の見える丘公園", slug: "minato-no-mieru-oka-park" },
            { name: "アメリカ山公園", slug: "america-yama-park" },
        ],
    },
    {
        id: "5d75525c-592f-4b67-a21e-323e6cfd7f9d",
        name: "チューリップ",
        scientificName: "Tulipa",
        description:
            "春の訪れを告げる代表的な花の一つです。色とりどりの花を咲かせ、横浜市内の公園や庭園でも春に見ることができます。",
        flowerLanguage: "思いやり、博愛",
        bestSeason: "4月〜5月",
        category: "ユリ科チューリップ属",
        origin: "中央アジア、トルコ",
        height: "15cm〜70cm（品種による）",
        lifespan: "秋植え一年草",
        colors: ["赤", "ピンク", "白", "黄", "オレンジ", "紫", "黒"],
        images: ["/tulip1.jpg", "/tulip2.jpg", "/tulip3.jpg"],
        history:
            "16世紀にトルコからヨーロッパに伝わり、オランダで広く栽培されるようになりました。日本には江戸時代末期に伝わりました。",
        care: "日当たりが良く、水はけの良い場所を好みます。球根を秋に植え付けます。",
        locations: [
            { name: "山下公園", slug: "yamashita-park" },
            { name: "横浜公園", slug: "yokohama-park" },
            { name: "根岸森林公園", slug: "negishi-forest-park" },
        ],
    },
    {
        id: "548cc8f1-8026-4a18-8a4a-6e5d8b6abbe0",
        name: "アジサイ",
        scientificName: "Hydrangea macrophylla",
        description:
            "梅雨の時期に美しい花を咲かせることで知られています。土壌の酸度によって花の色が変わることが特徴です。横浜市内でも梅雨の時期に様々な場所で見られます。",
        flowerLanguage: "移り気、辛抱強い愛情",
        bestSeason: "6月〜7月",
        category: "アジサイ科アジサイ属",
        origin: "日本、東アジア",
        height: "1m〜2m",
        lifespan: "多年草",
        colors: ["青", "ピンク", "紫", "白"],
        images: ["/hydrangea1.jpg", "/hydrangea2.jpg", "/hydrangea3.jpg"],
        history:
            "日本原産で、江戸時代には観賞用として広く栽培されるようになりました。ヨーロッパでも人気があります。",
        care: "半日陰で、水持ちの良い肥沃な土壌を好みます。乾燥に注意が必要です。",
        locations: [
            { name: "横浜公園", slug: "yokohama-park" },
            { name: "三溪園", slug: "sankeien-garden" },
            { name: "大倉山公園", slug: "okurayama-park" },
        ],
    },
    {
        id: "e22f591a-a0c0-4f78-b36b-a90f1a056b8b",
        name: "コスモス",
        scientificName: "Cosmos bipinnatus",
        description:
            "秋風に揺れる姿が美しい、秋の代表的な花です。比較的育てやすく、横浜市内でも秋になると公園や花壇で見かけることができます。",
        flowerLanguage: "乙女の真心、調和",
        bestSeason: "9月〜10月",
        category: "キク科コスモス属",
        origin: "メキシコ",
        height: "30cm〜1.5m",
        lifespan: "一年草",
        colors: ["ピンク", "白", "赤", "黄", "オレンジ"],
        images: ["/cosmos1.jpg", "/cosmos2.jpg", "/cosmos3.jpg"],
        history:
            "メキシコ原産で、19世紀にヨーロッパに渡り、日本には明治時代に渡来しました。",
        care: "日当たりの良い場所を好みます。水はけの良い土壌で育てます。",
        locations: [
            { name: "横浜市庁舎前広場", slug: "yokohama-city-hall-plaza" },
            { name: "港の見える丘公園", slug: "minato-no-mieru-oka-park" },
            { name: "久良岐公園", slug: "kuraki-park" },
        ],
    },
]
