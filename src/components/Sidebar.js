"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Sidebar({ isOpen, toggleMenu, isMobile, isTablet }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  const menuItems = [
    { name: "Anasayfa", href: "/" },
    { name: "Gündem", href: "/gundem" },
    { name: "Ekonomi", href: "/ekonomi" },
    { name: "Spor", href: "/spor" },
    { name: "Magazin", href: "/magazin" },
    { name: "Dünya", href: "/dunya", highlight: true },
    { name: "Teknoloji", href: "/teknoloji" },
    { name: "Sağlık", href: "/saglik" },
  ];

  const renderLines = () => (
    <div
      className={`absolute w-[26px] h-[37px] cursor-pointer ${
        isMobile ? "top-[calc(50%-118px)] left-[18px]" : "top-[calc(50%-123.5px)] left-[18px]"
      }`}
      onClick={toggleMenu}
    >
      {/* Çizgi 1 */}
      <div
        className={`absolute w-0 h-[37px] border transition-all duration-300 ease-out ${
          isOpen
            ? `${isMobile ? "left-[12px]" : "left-[13px]"} border-white rotate-45`
            : `${isMobile ? "left-[8px]" : "left-[8px]"} border-black rotate-0`
        }`}
        style={{ transformOrigin: "center" }}
      />
      {/* Çizgi 2 */}
      <div
        className={`absolute w-0 h-[37px] border transition-all duration-300 ease-out ${
          isOpen
            ? `${isMobile ? "left-[12px]" : "left-[13px]"} border-white -rotate-45`
            : `${isMobile ? "left-[18px]" : "left-[18px]"} border-black rotate-0`
        }`}
        style={{ transformOrigin: "center" }}
      />
    </div>
  );

  return (
    <div
      className={`fixed left-0 h-screen z-50 flex transition-all duration-300 ease-in-out ${
        isOpen ? "bg-primary" : "bg-white"
      } ${
        isOpen
          ? isMobile || isTablet
            ? "w-screen"
            : "xl:w-[625px] lg:w-[481px]"
          : isMobile
          ? "w-[60px]"
          : "w-[61px]"
      }`}
    >
      {/* Sol sabit bar */}
      <div
        className={`h-screen flex flex-col relative transition-all duration-300 ease-in-out ${
          isOpen ? "bg-primary" : "bg-white"
        } ${isMobile ? "w-[60px]" : "w-[61px]"}`}
      >
        {/* Dikey çizgi */}
        <div
  className={`absolute top-0 h-full w-[1px] z-40 transition-colors duration-300 ease-in-out ${
    isMobile
      ? `left-[60px] ${isOpen ? "bg-[#980C10]" : "bg-[#D9D9D9]"}`
      : `left-[61px] ${isOpen ? "bg-[#980C10]" : "bg-[#D9D9D9]"}`
  }`}
/>


        {/* Logo */}
        <Link
          href="/"
          className={`block bg-primary z-50 relative ${
            isMobile ? "w-[60px] h-[200px]" : "w-[61px] h-[220px]"
          }`}
        >
          <div
            className={`absolute opacity-100 ${
              isMobile ? "top-[17px] left-[10px]" : "top-[17px] left-[11px]"
            }`}
          >
            <Image
              src="/assets/logo/whitelogo.svg"
              alt="Logo"
              width={isMobile ? 40 : 39.9}
              height={isMobile ? 19 : 19.05}
            />
          </div>
        </Link>

        {/* Menü toggle buton */}
        <div
          className="flex-grow relative cursor-pointer transition-all duration-300 ease-out"
          onClick={toggleMenu}
        >
          {renderLines()}
        </div>

        {/* Nokta */}
        <div
          className={`absolute w-[10px] h-[10px] rounded-full ${
            isOpen ? "bg-white" : "bg-[#CF161C]"
          } ${isMobile ? "bottom-[30px] left-[25px]" : "bottom-[47px] left-[26px]"}`}
        />
      </div>

      {/* Menü içeriği */}
      <div
        className={`relative h-full text-white font-poppins font-bold text-[40px] overflow-hidden transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100 w-full" : "opacity-0 w-0"
        }`}
      >
        <div
          className={`absolute inset-y-0 my-auto w-[200px] ${
            isMobile ? "left-[40px] h-[378px]" : "left-[64px] h-[402px]"
          } transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
        >
          <nav className="w-full h-full flex flex-col justify-between py-[8px]">
            {menuItems.map((item, i) =>
              item.name === "Anasayfa" ? (
                <Link
                  key={i}
                  href={item.href}
                  className={`text-left ${
                    item.highlight ? "text-[#980C10]" : "text-white"
                  } ${isMobile ? "leading-[40px]" : "leading-[50px]"}`}
                >
                  {item.name}
                </Link>
              ) : (
                <span
                  key={i}
                  className={`text-left cursor-default ${
                    item.highlight ? "text-[#980C10]" : "text-white"
                  } ${isMobile ? "leading-[40px]" : "leading-[50px]"}`}
                >
                  {item.name}
                </span>
              )
            )}
          </nav>
        </div>

        {/* Sosyal ikonlar */}
        <div
          className={`absolute w-[80px] h-[20px] flex gap-[14px] items-end ${
            isMobile ? "bottom-[95px] left-[40px]" : "bottom-[112px] left-[64px]"
          } ${isOpen ? "opacity-100" : "opacity-0"}`}
        >
          <Image src="/assets/icons/facebook.svg" alt="Facebook" width={10} height={20} />
          <Image src="/assets/icons/twitter.svg" alt="Twitter" width={22} height={19} />
          <Image src="/assets/icons/linkedin.svg" alt="LinkedIn" width={20} height={20} />
        </div>

        {/* Copyright */}
        <div
          className={`absolute w-[231px] h-[35px] text-[12px] leading-[18px] font-normal text-white text-left font-poppins whitespace-nowrap ${
            isMobile ? "bottom-[30px] left-[40px]" : "bottom-[47px] left-[64px]"
          } ${isOpen ? "opacity-100" : "opacity-0"}`}
        >
          Copyright © 2017 - Tüm hakları saklıdır.
          <br />
          Habertürk Gazetecilik A.Ş
        </div>
      </div>
    </div>
  );
}
