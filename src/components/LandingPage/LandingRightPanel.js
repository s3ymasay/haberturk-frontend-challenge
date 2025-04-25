// src/components/LandingRightPanel.js
"use client";

import { useEffect, useState } from "react";
import NewsTitleCard from "@/components/LandingPage/NewsTitleCard";
import Loading from "@/components/common/Loading";
import Error from "@/components/common/Error";

export default function LandingRightPanel() {
  const [headlines, setHeadlines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
        const res = await fetch("/api/landing");
        if (!res.ok) throw new Error();
        const data = await res.json();
        setHeadlines(data.headlines);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchHeadlines();
  }, []);

  return (
    <div className="absolute top-0 left-[69.1%] w-[30.9%] h-full bg-white z-10 overflow-hidden">
      
      {/* Gradyan üstü */}
      <div className="absolute top-0 left-0 w-full h-[45%] 
                      bg-gradient-to-b from-white to-transparent 
                      z-30 pointer-events-none" />

      {/* Gradyan altı */}
      <div className="absolute bottom-0 left-0 w-full h-[45%] 
                      bg-gradient-to-t from-white to-transparent 
                      z-30 pointer-events-none" />

      {/* Scroll alanı (sadece kartlar) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 
                      w-[50.6%] 2xl:min-w-[300px] h-full 
                      overflow-y-scroll z-10 scrollbar-hide">
        
        <div className="flex flex-col gap-[10px] pt-[50px]">
          {loading && <Loading />}
          {error && <Error />}
          {!loading && !error &&
            headlines.map((title, index) => (
              <NewsTitleCard key={index} title={title} index={index} />
            ))}
        </div>
      </div>
    </div>
  );
}
