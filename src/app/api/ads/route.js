import adsData from "@/data/adsData";

export const dynamic = "force-dynamic";

export async function GET() {
  return new Response(JSON.stringify(adsData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
}
