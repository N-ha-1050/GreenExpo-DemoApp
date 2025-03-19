import { google } from "@ai-sdk/google"
import { streamText } from "ai"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
    const { messages, systemPrompt } = await req.json()

    const result = streamText({
        model: google("gemini-2.0-flash-lite-preview-02-05"),
        messages,
        system: systemPrompt,
    })

    return result.toDataStreamResponse()
}
