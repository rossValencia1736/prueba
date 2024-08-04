import { NextResponse } from "next/server";

export const runtime = "edge";

export default async function handler(req, res) {
  // Tu lógica de manejo de la API
}

export function GET(request) {
  return NextResponse.json("obteniendo un producto");
}

export function POST(request) {
  return NextResponse.json("obteniendo un producto");
}

export function DELETE() {
  return NextResponse.json("eliminando un producto");
}

export function PUT() {
  return NextResponse.json("actualizando un producto");
}
