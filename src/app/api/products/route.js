import { NextResponse } from "next/server";

export const config = {
  runtime: "edge",
};

export function GET() {
  return NextResponse.json({ mensaje: "listando de productos" });
}

export async function POST(request) {
  let datos = await request.json();

  return NextResponse.json([datos]);
}
