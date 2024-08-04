import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ mensaje: "listando de productos" });
}

export async function POST(request, { params }) {
  let datos = await request.json();

  const { searchParams } = new URL(request.url);
  // http://localhost:3000/api/5?id=bryan
  console.log(searchParams.get("id"));

  //[products]
  console.log("parmas", params);

  return NextResponse.json([datos]);
}
