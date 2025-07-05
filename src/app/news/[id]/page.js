import NewsDetailClient from "./NewsDetailClient";
import newsData from "@/data/news.json";

export async function generateStaticParams() {
  return newsData.map((item) => ({
    id: item.id.toString(),
  }));
}

export default function NewsDetailPage({ params }) {
  return <NewsDetailClient id={params.id} />;
}

