import newsData from "@/data/newsData";

export const dynamic = "force-dynamic";

export async function GET(req, { params }) {
  const { id } = params;

  const item = newsData.find((n) => n.id === parseInt(id));

  if (!item) {
    return new Response(JSON.stringify({ error: "Haber bulunamadı" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    });
  }

  return new Response(JSON.stringify(item), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
}
