import { google } from "@ai-sdk/google"
import { streamText } from "ai"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
    const { messages, systemPrompt } = await req.json()

    // const system = systemPrompt
    //     ? { role: "system", content: systemPrompt }
    //     : undefined

    const result = streamText({
        model: google("gemini-1.5-flash"),
        messages,
        system: systemPrompt,
    })

    return result.toDataStreamResponse()
}
