import newsData from "@/data/newsData";

export const dynamic = "force-dynamic";

export async function GET() {
  return new Response(JSON.stringify(newsData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
}
