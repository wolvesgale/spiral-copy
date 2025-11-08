import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body || !body.roomId || !body.date || !body.name || !body.email) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }
  await new Promise((resolve) => setTimeout(resolve, 700));
  const reservationId = `RSV-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
  return NextResponse.json({ ok: true, reservationId });
}
