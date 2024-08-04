import { NextResponse } from "next/server";

export const runtime = "edge";

export default async function handler(req, res) {
  // Tu lógica de manejo de la API
}

export function GET() {
  return NextResponse.json({ mensaje: "listando de productos" });
}

export async function POST(request) {
  let datos = await request.json();

  return NextResponse.json([datos]);
}
