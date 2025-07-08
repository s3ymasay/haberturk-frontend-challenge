// app/news/[id]/page.js
import { readFileSync } from 'fs';
import { join } from 'path';
import NewsDetailClient from "./NewsDetailClient";

export async function generateStaticParams() {
  try {
    // Build time'da dosyayı file system'den okuyun
    const filePath = join(process.cwd(), 'public', 'data', 'news.json');
    const fileContent = readFileSync(filePath, 'utf8');
    const newsData = JSON.parse(fileContent);

    return newsData.map((item) => ({
      id: item.id.toString(),
    }));
  } catch (error) {
    console.error('Error reading news.json:', error);
    // Eğer dosya bulunamazsa boş array döndür
    return [];
  }
}

export default function NewsDetailPage({ params }) {
  return <NewsDetailClient id={params.id} />;
}