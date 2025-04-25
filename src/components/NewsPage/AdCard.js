// src/components/AdCard.js
import Image from "next/image";

export default function AdCard({ data }) {
  return (
    <div className="w-[360px] h-full bg-white relative shrink-0">
      {/* REKLAM yazısı */}
      <div className="absolute top-[20px] left-[30px] text-[60px] leading-[90px] font-semibold text-black opacity-10">
        REKLAM
      </div>

      {/* Görsel */}
      <div className="absolute inset-0 flex items-center justify-center">
  <div className="relative top-[1px] w-[300px] h-[250px]">
    <Image
      src={data.image}
      alt="Reklam"
      width={300}
      height={250}
      className="object-cover"
    />
  </div>
</div>

      {/* Sağ dikey çizgi */}
      <div className="absolute right-0 top-0 h-full w-px bg-[#D9D9D9] opacity-70" />
    </div>
  );
}
