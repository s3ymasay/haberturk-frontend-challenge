// src/app/page.js
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import LandingLeftPanel from "@/components/LandingPage/LandingLeftPanel";
import LandingRightPanel from "@/components/LandingPage/LandingRightPanel";
import useWindowSize from "@/lib/useWindowSize";

export default function LandingPage() {
  const [today, setToday] = useState("");
  const [layout, setLayout] = useState(null);
  const [showRightPanel, setShowRightPanel] = useState(false);

  const { width, height } = useWindowSize();

  useEffect(() => {
    setToday(new Date().toLocaleDateString("tr-TR"));
  }, []);

  useEffect(() => {
    if (width === 0) return; // SSR'da sorun olmaması için

    const isDesktopLayout = width >= 1280 || width >= 1024;
    setLayout(isDesktopLayout ? "desktop" : "mobile");
    setShowRightPanel(isDesktopLayout && width >= 1280);
  }, [width, height]);

  if (layout === null) return null;

  return (
    <div className="relative w-full h-screen overflow-hidden bg-cream">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/assets/images/landingpage.webp"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <LandingLeftPanel date={today} layout={layout} showRightPanel={showRightPanel} />

      {showRightPanel && <LandingRightPanel />}
    </div>
  );
}
