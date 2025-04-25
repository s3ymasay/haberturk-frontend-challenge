// src/app/news/page.js
"use client";

import { useEffect, useState } from "react";
import NewsCard from "@/components/NewsPage/NewsCard";
import AdCard from "@/components/NewsPage/AdCard";
import NewsHighlight from "@/components/NewsPage/NewsHighlight";
import LayoutWrapper from "@/components/LayoutWrapper";
import useWindowSize from "@/lib/useWindowSize";

export default function NewsPage() {
  const [newsData, setNewsData] = useState([]);
  const [adsData, setAdsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isMobile, setIsMobile] = useState(null);
  const [isTablet, setIsTablet] = useState(false);

  const { width } = useWindowSize();

  // Ekran tipi belirle (mobile, tablet)
  useEffect(() => {
    if (width === 0) return;
    setIsMobile(width < 768);
    setIsTablet(width >= 768 && width < 1024);
  }, [width]);

  // Veri çek
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [newsRes, adsRes] = await Promise.all([
          fetch("/api/news"),
          fetch("/api/ads"),
        ]);

        if (!newsRes.ok || !adsRes.ok) throw new Error();

        const [newsJson, adsJson] = await Promise.all([
          newsRes.json(),
          adsRes.json(),
        ]);

        setNewsData(newsJson);
        setAdsData(adsJson);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  // Kartlar sadece desktop’ta render edilir
  const shouldRenderCards = !isMobile && !isTablet;

  // İçerik alanı
  const renderContent = () => {
    if (newsData.length === 0) {
      return (
        <div className="w-full h-full flex items-center justify-center text-dark text-lg font-semibold">
          Henüz içerik bulunamadı.
        </div>
      );
    }

    const result = [];

    newsData.forEach((item, i) => {
      result.push(
        <NewsCard key={item.id} data={item} index={i} isMobile={isMobile} />
      );

      if ((i === 2 || i === 5) && adsData) {
        result.push(
          <AdCard key={`ad-${i}`} data={adsData} isMobile={isMobile} />
        );
      }
    });

    return result;
  };

  // SSR için isMobile belirlenmemişse loading göster
  if (isMobile === null) {
    return (
      <LayoutWrapper
        isLoading={true}
        error={false}
        isMobile={false}
        isTablet={false}
      />
    );
  }

  return (
    <LayoutWrapper
      isLoading={loading}
      error={error}
      isMobile={isMobile}
      isTablet={isTablet}
    >
      <div className="relative overflow-hidden bg-cream w-full h-full">
        <NewsHighlight isMobile={isMobile} isTablet={isTablet} />

        {shouldRenderCards && (
          <div className="absolute top-0 xl:left-[625px] lg:left-[481px] h-full xl:w-[calc(100%-625px)] lg:w-[calc(100%-481px)] overflow-x-auto flex scrollbar-hide">
            {renderContent()}
          </div>
        )}
      </div>
    </LayoutWrapper>
  );
}
