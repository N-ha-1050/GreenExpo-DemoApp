"use client"

import { Flower as FlowerData } from "@/lib/flower-data"
import { cn } from "@/lib/utils"
import { useChat } from "@ai-sdk/react"
import { Flower, SendHorizontal, User } from "lucide-react"
// import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar } from "@/components/ui/avatar"

type Props = {
    flower: FlowerData
}
export function FlowerChat({ flower }: Props) {
    // const messagesEndRef = useRef<HTMLDivElement>(null)

    // 花の情報をシステムプロンプトとして提供
    const systemPrompt = `
        あなたは横浜花巡りアプリの花専門AIアシスタントです。
        横浜花巡りは、横浜市内に設置されたQRコードを読み取って、その場所に咲く花の情報を知ることができるデジタル散策アプリです。
        以下の花の情報を参考に質問に答えてください。ただし、以下の情報が間違っている場合は正しい情報を使用して回答してください。また、以下の情報だけでは回答に不十分な場合は別の情報を用いても構いません。
        質問に関連することで横浜の魅力としてアピールできる点があれば回答に加えてください。
        このアプリは横浜市に特化したアプリであるのでユーザーから特別に指定がない限り質問は横浜市での事柄であると解釈してください。
        例えば、この花は南区に咲いていますか？という質問があった場合、日本の神奈川県横浜市南区に関する情報を提供してください。
        
        花の名前: ${flower.name}
        学名: ${flower.scientificName}
        説明: ${flower.description}
        花言葉: ${flower.flowerLanguage}
        見頃: ${flower.bestSeason}
        分類: ${flower.category}
        原産地: ${flower.origin}
        高さ: ${flower.height}
        寿命: ${flower.lifespan}
        歴史: ${flower.history}
        育て方: ${flower.care}
        
        回答は簡潔で親しみやすい日本語で行ってください。Markdown形式は利用せずに、テキストのみで回答してください。
        質問が${flower.name}に関係ない場合は、「申し訳ありませんが、${flower.name}に関する質問にのみお答えできます」と回答してください。
    `
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        initialMessages: [
            {
                id: "welcome",
                role: "assistant",
                content: `こんにちは！${flower.name}について質問があればお気軽にお聞きください。育て方や特徴、歴史などにお答えできるます。`,
            },
        ],
        body: { systemPrompt },
    })

    // メッセージが追加されたら自動スクロール
    // useEffect(() => {
    //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    // }, [messages])

    return (
        <div className="flex flex-col overflow-hidden rounded-lg border">
            {/* チャットメッセージ表示エリア */}
            <div className="flex-1 space-y-4 overflow-y-auto p-4">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={cn(
                            "mb-4 flex items-start gap-3",
                            message.role === "user" ? "justify-end" : "",
                        )}
                    >
                        {message.role !== "user" && (
                            <Avatar className="size-12 bg-pink-100 p-2">
                                <Flower className="size-8 text-pink-500" />
                            </Avatar>
                        )}
                        <div
                            className={cn(
                                "max-w-[80%] rounded-lg px-4 py-2",
                                message.role === "user"
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted",
                            )}
                        >
                            <p className="whitespace-pre-wrap">
                                {message.content}
                            </p>
                        </div>
                        {message.role === "user" && (
                            <Avatar className="size-12 bg-primary/25 p-2">
                                <User className="size-8 text-primary" />
                            </Avatar>
                        )}
                    </div>
                ))}
                {/* <div ref={messagesEndRef} /> */}
            </div>

            {/* 入力フォーム */}
            <div className="border-t p-4">
                <form onSubmit={handleSubmit} className="flex gap-2">
                    <Textarea
                        value={input}
                        onChange={handleInputChange}
                        placeholder={`${flower.name}について質問してみましょう...`}
                        className="min-h-[60px] flex-1 resize-none"
                    />
                    <Button type="submit" size="icon" disabled={!input.trim()}>
                        <SendHorizontal className="size-5" />
                        <span className="sr-only">送信</span>
                    </Button>
                </form>
            </div>
        </div>
    )
}
