// src/components/LayoutWrapper.js

"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Loading from "./common/Loading";
import Error from "./common/Error";

export default function LayoutWrapper({
  children,
  isLoading,
  error,
  isMobile,
  isTablet,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const sizeClass = "w-screen h-screen";

  // Hata durumu varsa sadece sidebar + hata mesajı gösterilir
  if (error) {
    return (
      <div className={`relative mx-auto bg-cream overflow-hidden ${sizeClass}`}>
        {isMobile !== null && (
          <Sidebar
            isOpen={isMenuOpen}
            toggleMenu={toggleMenu}
            isMobile={isMobile}
            isTablet={isTablet}
          />
        )}
        <Error message={error} />
      </div>
    );
  }

  // Yükleniyor durumu varsa sadece sidebar + loading gösterilir
  if (isLoading) {
    return (
      <div className={`relative mx-auto bg-cream overflow-hidden ${sizeClass}`}>
        {isMobile !== null && (
          <Sidebar
            isOpen={isMenuOpen}
            toggleMenu={toggleMenu}
            isMobile={isMobile}
            isTablet={isTablet}
          />
        )}
        <Loading />
      </div>
    );
  }

  // Normal durumda içerik + sidebar gösterilir
  return (
    <div className={`relative mx-auto bg-cream overflow-hidden ${sizeClass}`}>
      {isMobile !== null && (
        <Sidebar
          isOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          isMobile={isMobile}
          isTablet={isTablet}
        />
      )}
      <main className="absolute top-0 left-0 h-full w-full">{children}</main>
    </div>
  );
}
