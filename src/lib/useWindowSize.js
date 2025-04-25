// lib/useWindowSize.js
import { useState, useEffect } from "react";

/**
 * Ekran genişliği ve yüksekliğini takip eden custom hook
 * Her yerde useEffect ile window.innerWidth ölçmek yerine tek merkezden ölçüm sağlar
 */
export default function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Sayfa yüklendiğinde boyutları al
    const updateSize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return size;
}
