// src/components/LandingLeftPanel.js
"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Loading from "@/components/common/Loading";
import Error from "@/components/common/Error";

export default function LandingLeftPanel({ date, layout, showRightPanel }) {
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const panelRef = useRef(null);
  const [panelWidth, setPanelWidth] = useState(0);

  useEffect(() => {
    const fetchDescription = async () => {
      try {
        const res = await fetch("/api/landing");
        if (!res.ok) throw new Error();
        const data = await res.json();
        setDescription(data.dateDescription);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchDescription();
  }, []);

  useEffect(() => {
    const updateLayout = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setIsDesktop(layout === "desktop" || w >= 880);
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, [layout]);

  useEffect(() => {
    const updateWidth = () => {
      if (panelRef.current) {
        setPanelWidth(panelRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const titleClass =
    panelWidth >= 1060
      ? "text-[202px] leading-[182px] h-[409px] top-[40px]"
      : panelWidth >= 1000
      ? "text-[180px] leading-[160px] h-[370px] top-[40px]"
      : panelWidth >= 880
      ? "text-[150px] leading-[130px] h-[310px] top-[40px]"
      : panelWidth >= 768
      ? "text-[110px] leading-[90px] h-[220px] top-[40px]"
      : "text-[60px] leading-[60px] h-[128px] w-[235px] left-[84px] top-[23px]";

  const contentBoxClass =
    panelWidth >= 1060
      ? "h-[547px] w-[790px] top-[calc(0.896*(100%-547px)/1.896)] bottom-[calc((100%-547px)/1.896)] left-[194px]"
      : panelWidth >= 1000
      ? "h-[500px] w-[710px] top-[calc(0.89*(100%-500px)/1.89)] bottom-[calc((100%-500px)/1.89)] left-[194px]"
      : panelWidth >= 880
      ? "h-[440px] w-[588px] top-[calc(0.88*(100%-440px)/1.88)] bottom-[calc((100%-440px)/1.88)] left-[180px]"
      : panelWidth >= 768
      ? "h-[400px] w-[430px] top-[calc(0.875*(100%-400px)/1.875)] bottom-[calc((100%-400px)/1.875)] left-[150px]"
      : "h-[319px] w-full top-[calc(0.914*(100%-319px)/1.914)] bottom-[calc((100%-319px)/1.914)] left-0";

  const dateClass =
    panelWidth >= 1060
      ? "top-0 text-[40px] leading-[40px] w-[202px] h-[44px]"
      : panelWidth >= 1000
      ? "top-0 text-[32px] leading-[32px] w-[180px] h-[40px]"
      : panelWidth >= 880
      ? "top-0 text-[26px] leading-[26px] w-[160px] h-[34px]"
      : panelWidth >= 768
      ? "top-0 text-[24px] leading-[24px] w-[140px] h-[28px]"
      : "top-0 w-[101px] h-[22px] left-[84px] text-[20px] leading-[20px]";

  const descriptionClass =
    panelWidth >= 1060
      ? "bottom-[calc((100%-547px)/1.896+70px)] left-[2px] w-[658px] h-[57px] font-poppins text-[18px] leading-[26px]"
      : panelWidth >= 1000
      ? "bottom-[calc((100%-500px)/1.89+68px)] left-[2px] w-[658px] h-[57px] font-poppins text-[18px] leading-[26px]"
      : panelWidth >= 880
      ? "bottom-[calc((100%-440px)/1.88+65px)] left-[2px] w-[555px] h-[57px] font-poppins text-[16px] leading-[24px]"
      : panelWidth >= 768
      ? "bottom-[calc((100%-400px)/1.875+95px)] left-[2px] w-[400px] h-[57px] font-poppins text-[16px] leading-[24px]"
      : "top-[151px] left-[84px] w-[235px] h-[110px] font-calibri text-[14px] leading-[22px]";

  const buttonClass =
    panelWidth >= 1060
      ? "bottom-[calc((100%-547px)/1.896)] left-[60px] w-[170px] h-[50px] text-[20px] leading-[30px]"
      : panelWidth >= 1000
      ? "bottom-[calc((100%-500px)/1.89)] left-[60px] w-[170px] h-[50px] text-[20px] leading-[30px]"
      : panelWidth >= 880
      ? "bottom-[calc((100%-440px)/1.88)] left-[60px] w-[170px] h-[50px] text-[20px] leading-[30px]"
      : panelWidth >= 768
      ? "bottom-[calc((100%-400px)/1.875)] left-[60px] w-[150px] h-[45px] text-[18px] leading-[28px]"
      : "top-[280px] left-[145px] w-[130px] h-[40px] text-[16px] leading-[25px]";

  const linesClass =
    panelWidth >= 1060
      ? "bottom-[calc((100%-547px)/1.896)] left-[2px] w-[45px] h-[48px]"
      : panelWidth >= 1000
      ? "bottom-[calc((100%-500px)/1.89)] left-[2px] w-[45px] h-[48px]"
      : panelWidth >= 880
      ? "bottom-[calc((100%-440px)/1.88)] left-[2px] w-[45px] h-[48px]"
      : panelWidth >= 768
      ? "bottom-[calc((100%-400px)/1.875)] left-[2px] w-[45px] h-[44px]"
      : "top-[282px] left-[88px] w-[45px] h-[37px]";

  return (
    <div
      ref={panelRef}
      className={`absolute top-0 left-0 h-screen text-white font-poppins ${
        showRightPanel ? "w-[69.1%] bg-primary/95" : "w-full bg-primary/90"
      }`}
    >
      {/* Sidebar benzeri beyaz şerit */}
      <div
        className={`absolute left-0 bg-white ${
          isDesktop
            ? "top-[158px] w-[61px] h-[calc(100vh-158px)]"
            : "top-[109px] w-[50px] h-[calc(100vh-109px)]"
        }`}
      />

      {/* Kırmızı nokta */}
      <div
        className={`absolute rounded-full bg-primary z-10 ${
          isDesktop
            ? "bottom-[47px] left-[26px] w-[10px] h-[10px]"
            : "bottom-[30px] left-[20px] w-[10px] h-[10px]"
        }`}
      />

      {/* Logo */}
      <div
        className={`absolute z-10 w-[79px] h-[38px] ${
          isDesktop ? "top-[59px] left-[31px]" : "top-[34px] left-[32px]"
        }`}
      >
        <Image
          src="/assets/logo/whitelogo.svg"
          alt="Logo"
          width={79}
          height={38}
        />
      </div>

      {/* İçerik Kutusu */}
      <div className={`absolute ${contentBoxClass}`}>
        {/* Tarih */}
        <div className={`absolute font-abril font-normal ${dateClass}`}>
          {date}
        </div>

        {/* Başlık */}
        <div
          className={`absolute font-abril
          } ${titleClass}`}
        >
          Bugün ne oldu?
        </div>

        {/* Açıklama metni */}
        <div className={`absolute opacity-90 ${descriptionClass}`}>
          {loading && <Loading />}
          {error && <Error />}
          {!loading && !error && description}
        </div>

        {/* Çizgili ikon */}
        <div className={`absolute flex flex-col justify-between ${linesClass}`}>
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-full border-t border-white h-0" />
          ))}
        </div>

        {/* Görüntüle Butonu */}
        <Link href="/news">
          <button
            className={`absolute bg-white z-50 text-primary font-bold font-poppins ${buttonClass}`}
          >
            GÖRÜNTÜLE
          </button>
        </Link>
      </div>

      {/* Telif hakkı */}
      <div
        className={`absolute font-normal whitespace-nowrap ${
          isDesktop
            ? "bottom-[33px] left-[201px] w-[231px] h-[35px] text-[12px] leading-[18px]"
            : "bottom-[30px] left-[72px] h-[31px] w-[193px] text-[10px] leading-[16px]"
        }`}
      >
        Copyright © 2017 - Tüm hakları saklıdır.
        <br />
        Habertürk Gazetecilik A.Ş
      </div>
    </div>
  );
}
