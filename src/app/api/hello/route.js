import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ mensaje: "Hola mundo!" });
}
