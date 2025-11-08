export const runtime = "edge";

export async function GET() {
  try {
    const response = await fetch("https://api.github.com/repos/vercel/next.js", {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "eggs-email-site",
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub request failed with ${response.status}`);
    }

    const data = await response.json();
    const stars = typeof data.stargazers_count === "number" ? data.stargazers_count : 0;

    return new Response(JSON.stringify({ stars }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ stars: 0 }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
}
