import { NextResponse } from "next/server"

export async function GET() {
  console.log("In here")
  return NextResponse.json({ message: "Woah! You've found my portfolio's API" })
}
