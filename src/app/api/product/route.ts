import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const product = {
name: "good",
price: 100
  }
  return NextResponse.json(product)
}