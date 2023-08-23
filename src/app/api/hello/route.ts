import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json("Hello, Next.js");
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log("🚀 ~ file: route.ts:9 ~ PUT ~ body:", body);
  return NextResponse.json("Hello, Next.js");
}
