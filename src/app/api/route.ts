import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({ message: "Woah! You've found my portfolio's API" })
}
