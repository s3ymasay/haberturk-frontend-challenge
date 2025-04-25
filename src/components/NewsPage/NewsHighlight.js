// src/components/NewsHighlight.js
"use client";

import { useEffect, useState } from "react";
import Loading from "../common/Loading";
import Error from "../common/Error";

export default function NewsHighlight({ isMobile, isTablet }) {
  const [highlight, setHighlight] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchHighlight = async () => {
      try {
        const res = await fetch("/api/highlight");
        if (!res.ok) throw new Error();
        const data = await res.json();
        setHighlight(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchHighlight();
  }, []);

  if (loading || error || !highlight) {
    return (
      <div
        className={`${
          isMobile
            ? "absolute top-0 left-[60px] w-[315px] h-[812px] bg-white"
            : isTablet
            ? "absolute top-0 left-[61px] w-[564px] h-full bg-white"
            : "absolute top-0 left-[61px] w-[564px] h-full bg-white"
        } z-10`}
      >
        {loading ? <Loading /> : <Error />}
      </div>
    );
  }

  if (isMobile) {
    // Mobil Görünüm
    return (
      <div className="absolute top-0 left-[60px] w-[calc(100%-60px)] h-full bg-white z-10">
        <div className="absolute top-1/2 -translate-y-1/2 left-[30px] right-[44px] w-[241px] h-[272px]">
          <div className="text-[14px] leading-[20px] text-black opacity-50 font-poppins">
            {highlight.date}
          </div>
          <h2 className="mt-[15px] text-[34px] leading-[39px] text-black font-abril whitespace-nowrap">
            Bugün ne oldu?
          </h2>
          <p className="mt-[17px] text-[14px] leading-[22px] text-[#95989A] font-poppins">
            {highlight.summary}
          </p>
        </div>
        <div className="absolute bottom-[26px] left-[30px] w-[231px] h-[35px] text-[12px] leading-[18px] text-[#95989A] font-poppins whitespace-nowrap">
          Copyright © 2017 - Tüm hakları saklıdır.
          <br />
          Habertürk Gazetecilik A.Ş
        </div>
      </div>
    );
  }

  if (isTablet) {
    // Tablet Görünüm (Desktop görünümünün sadece xl hali, lg class yok)
    return (
      <div className="absolute top-0 left-[61px] w-full h-full bg-white z-10">
        <div className="absolute top-1/2 -translate-y-1/2 left-[calc(50%-282px)] right-[68px] w-[426px] h-[299px]">
          <div className="text-[22px] leading-[31px] font-normal text-black opacity-50 font-poppins">
            {highlight.date}
          </div>
          <h2 className="text-[60px] leading-[50px] h-[68px] w-[426px] mt-[20px] font-normal text-black font-abril">
            {highlight.title}
          </h2>
          <p className="text-[18px] leading-[26px] h-[162px] w-[426px] mt-[18px] font-normal text-[#95989A] font-poppins">
            {highlight.summary}
          </p>
        </div>
        <div className="absolute bottom-[47px] left-[70px] w-[231px] text-[12px] leading-[18px] font-normal text-black opacity-50 font-poppins whitespace-nowrap">
          Copyright © 2017 - Tüm hakları saklıdır.
          <br />
          Habertürk Gazetecilik A.Ş
        </div>
      </div>
    );
  }

  // Desktop Görünüm
  return (
    <div className="absolute top-0 left-[61px] xl:w-[564px] lg:w-[420px] h-full bg-white z-10">
      <div className="absolute top-1/2 -translate-y-1/2 xl:left-[70px] lg:left-[40px] xl:right-[68px] lg:right-[30px] xl:w-[426px] lg:w-[320px] xl:h-[299px] lg:h-[260px]">
        <div className="xl:text-[22px] lg:text-[18px] xl:leading-[31px] lg:leading-[26px] font-normal text-black opacity-50 font-poppins">
          {highlight.date}
        </div>
        <h2 className="xl:text-[60px] lg:text-[36px] xl:leading-[50px] lg:leading-[40px] xl:h-[68px] lg:h-auto xl:w-[426px] lg:w-[320px] mt-[20px] font-normal text-black font-abril">
          {highlight.title}
        </h2>
        <p className="xl:text-[18px] lg:text-[14px] xl:leading-[26px] lg:leading-[22px] xl:h-[162px] lg:h-auto xl:w-[426px] lg:w-[320px] mt-[18px] font-normal text-[#95989A] font-poppins">
          {highlight.summary}
        </p>
      </div>
      <div className="absolute bottom-[47px] left-[70px] w-[231px] text-[12px] leading-[18px] font-normal text-black opacity-50 font-poppins whitespace-nowrap">
        Copyright © 2017 - Tüm hakları saklıdır.
        <br />
        Habertürk Gazetecilik A.Ş
      </div>
      <div className="absolute right-0 top-0 h-full w-px bg-[#D9D9D9] opacity-70"></div>
    </div>
  );
}
