import NewsDetailClient from "./NewsDetailClient";

export async function generateStaticParams() {
  const res = await fetch('https://s3ymasay.github.io/haberturk-frontend-challenge/data/news.json');
  const newsData = await res.json();

  return newsData.map((item) => ({
    id: item.id.toString(),
  }));
}

export default function NewsDetailPage({ params }) {
  return <NewsDetailClient id={params.id} />;
}
