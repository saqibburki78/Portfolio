import { NextResponse } from 'next/server';
import openai from '@/app/actions/openai';

// export async function GET(request: Request) {
//     try {
//         const response = await openai("what is the status address education  and some of its projects")
//         return NextResponse.json({ ai_response: response });
//     } catch (error: any) {
//         console.error("API Error:", error);
//         return NextResponse.json({ error: "There is some error occurred: " + error.message }, { status: 500 });
//     }
// }
export async function POST(request:Request){
    try {
        const {userMessage} = await request.json();
        const response = await openai(userMessage);
        return NextResponse.json({ ai_response: response });
    } catch (error:any) {
        console.error("API Error:", error);
        return NextResponse.json({ error: "There is some error occurred: " + error.message }, { status: 500 });
    }
}