// src/app/news/[id]/page.js
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import LayoutWrapper from "@/components/LayoutWrapper";
import SmallCard from "@/components/NewsDetailPage/SmallCard";
import NewsDetail from "@/components/NewsDetailPage/NewsDetail";
import useWindowSize from "@/lib/useWindowSize";

export default function NewsDetailPage() {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const [relatedNews, setRelatedNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isSmallDesktop, setIsSmallDesktop] = useState(false);

  const { width } = useWindowSize();

  // Ekran genişliğine göre layout sınıflandırmaları
  useEffect(() => {
    setIsMobile(width < 768);
    setIsTablet(width >= 768 && width < 1024);
    setIsSmallDesktop(width >= 1024 && width < 1280);
  }, [width]);

  // API'den haber detayı ve liste verilerini çek
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [detailRes, listRes] = await Promise.all([
          fetch(`/api/news/${id}`),
          fetch("/api/news"),
        ]);

        if (!detailRes.ok || !listRes.ok) throw new Error();

        const selected = await detailRes.json();
        const list = await listRes.json();

        setNewsItem(selected);
        setRelatedNews(list.slice(0, 10));
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchData();
  }, [id]);

  return (
    <LayoutWrapper
      isLoading={loading || !newsItem}
      error={error}
      isMobile={isMobile}
      isTablet={isTablet}
    >
      {isMobile ? (
        // Mobil görünüm
        <div className="relative w-[calc(100%-60px)] left-[60px] h-full bg-cream flex flex-col">
          <div className="absolute top-0 w-full h-[161px] overflow-x-auto flex scrollbar-hide">
            {relatedNews.map((item, i) => (
              <SmallCard key={item.id} data={item} index={i} isMobile={true} />
            ))}
          </div>
          <div className="absolute top-[161px] w-full bottom-0 overflow-y-auto scrollbar-hide">
            <NewsDetail newsItem={newsItem} isMobile={true} />
          </div>
        </div>
      ) : isTablet ? (
        // Tablet görünüm
        <div className="relative w-[calc(100%-60px)] left-[60px] h-full bg-cream flex flex-col">
          <div className="absolute top-0 w-full h-[220px] overflow-x-auto flex scrollbar-hide">
            {relatedNews.map((item, i) => (
              <SmallCard
                key={item.id}
                data={item}
                index={i}
                isMobile={false}
                isSmallDesktop={false}
              />
            ))}
          </div>
          <div className="absolute top-[220px] w-full bottom-0 overflow-y-auto scrollbar-hide">
            <NewsDetail newsItem={newsItem} isMobile={false} />
          </div>
        </div>
      ) : (
        // Desktop ve küçük desktop
        <div className="w-full h-screen bg-cream flex">
          <div
            className={`h-full bg-white overflow-y-scroll scrollbar-hide ${
              isSmallDesktop ? "w-[481px]" : "w-[625px]"
            }`}
          >
            <div className="relative pl-[61px]">
              {relatedNews.map((item, i) => (
                <SmallCard
                  key={item.id}
                  data={item}
                  index={i}
                  isMobile={false}
                  isSmallDesktop={isSmallDesktop}
                />
              ))}
            </div>
          </div>
          <NewsDetail newsItem={newsItem} isMobile={false} />
        </div>
      )}
    </LayoutWrapper>
  );
}
