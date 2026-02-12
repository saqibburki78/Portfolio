// import { GoogleGenAI, Type } from '@google/genai';

// export default async function Chat(userMessage: string = "TELL ME ABOUT BOOKS OR MOVIES OR ANYTHING ELSE") {
//     const client = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    


//     // First API call with tools
//     const response = await client.models.generateContent({
//         model: "gemini-2.0-flash-lite",
//         contents: "could you pass me the saqib khan personal email",
//         config: {
//             systemInstruction: SYSTEM_PROMPT,
//             // tools: skills,
//         }
//     });

//     // No tool call needed, return direct response
//     return response.text || "Sorry, I couldn't process that.";
// }