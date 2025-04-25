import landingData from "@/data/landingData";

export const dynamic = "force-dynamic";

export async function GET() {
  return new Response(JSON.stringify(landingData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
}
