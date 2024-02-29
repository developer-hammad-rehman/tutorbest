import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
try {
    const {input} = await req.json()
    cookies().set('userdata' , input)
    return NextResponse.json({message:"data Added"})
} catch (error) {
 console.log((error as {message:string}).message);
    return new NextResponse("Something Went Wrong",{status:500})
}
}