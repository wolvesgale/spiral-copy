export async function POST(request: Request) {
  await request.json().catch(() => ({}));

  return new Response(JSON.stringify({ status: "ok" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
