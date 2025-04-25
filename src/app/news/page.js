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

  // Ekran boyutuna göre mobil/tablet kontrolü
  useEffect(() => {
    setIsMobile(width < 768);
    setIsTablet(width >= 768 && width < 1024);
  }, [width]);

  // API'den verileri al
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [newsRes, adsRes] = await Promise.all([
          fetch("/api/news"),
          fetch("/api/ads"),
        ]);

        if (!newsRes.ok || !adsRes.ok) throw new Error();

        const news = await newsRes.json();
        const ads = await adsRes.json();

        setNewsData(news);
        setAdsData(ads);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <LayoutWrapper
      isLoading={loading}
      error={error}
      isMobile={isMobile}
      isTablet={isTablet}
    >
      {/* Sol panel (her zaman gösteriliyor) */}
      <NewsHighlight isMobile={isMobile} isTablet={isTablet} />

      {/* Sağ panel (sadece geniş ekranlarda) */}
      {!isMobile && !isTablet && (
        <div className="absolute top-0 right-0 w-[calc(100%-625px)] h-full flex bg-cream">
          {/* Haber kartları */}
          <div className="flex-1 flex flex-col overflow-y-scroll scrollbar-hide">
            {newsData.map((newsItem) => (
              <NewsCard key={newsItem.id} data={newsItem} />
            ))}
          </div>

          {/* Reklam alanı */}
          <div className="w-[300px] flex-shrink-0 bg-white border-l border-[#D9D9D9]">
            {adsData && <AdCard data={adsData} />}
          </div>
        </div>
      )}
    </LayoutWrapper>
  );
}
