import {openai} from "../../app";

export const openAI = async (messages: {role: "system" | "user" | "assistant", content: string}[]) => {
    const completion = await openai.chat.completions.create({
        messages: messages.map(message => ({
            role: message.role,
            content: message.content
        })),
        model: "gpt-3.5-turbo",
    });
    return completion.choices[0]
}