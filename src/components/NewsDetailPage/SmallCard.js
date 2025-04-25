// src/components/SmallCard.js

import Image from "next/image";
import Link from "next/link";

export default function SmallCard({ data, index, isMobile, isSmallDesktop }) {
  return (
    <Link href={`/news/${data.id}`}>
      {isMobile ? (
        // Mobil tasarım
        <div className="flex-shrink-0 w-[284px] h-[161px] relative bg-white border-b border-r border-[#D9D9D9] hover:bg-cream transition-colors duration-300">
          {/* Kart numarası - saydam */}
          <div className="absolute top-[1px] left-[11px] text-[60px] leading-[90px] font-semibold text-black opacity-10">
            {String(index + 1).padStart(2, "0")}
          </div>

 {/* Görsel */}
<div className="absolute top-[40px] left-[21px] w-[100px] h-[100px] overflow-hidden rounded-sm">
  <Image
    src={data.image}
    alt={data.title}
    width={100}
    height={100}
    className="w-full h-full object-cover"
  />
</div>

          {/* Başlık - fazla içeriği gizle, alanı sınırla */}
          <h2 className="absolute top-[40px] left-[131px] w-[133px] h-[64px] text-[14px] leading-[22px] font-semibold text-black font-poppins overflow-hidden">
            <div className="line-clamp-3 break-words">{data.title}</div>
          </h2>

          {/* Yayın zamanı */}
          <div className="absolute top-[120px] left-[131px] text-[14px] leading-[22px] font-normal text-black">
            {data.time}
          </div>
       
        </div>
         ) : isSmallDesktop ? (
        // Küçük desktop tasarımı
        <div className="w-[420px] h-[180px] bg-white hover:bg-cream transition-colors duration-300 relative border-b border-r border-[#D9D9D9]">
          {/* Kart numarası */}
          <div className="absolute top-[8px] left-[20px] text-[50px] leading-[70px] font-semibold text-black opacity-10">
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Görsel */}
          <div className="absolute top-[50px] left-[20px]">
            <Image
              src={data.image}
              alt={data.title}
              width={170}
              height={100}
              className="object-cover"
            />
          </div>

          {/* Başlık */}
          <h2 className="absolute top-[50px] left-[200px] w-[190px] h-[64px] text-[16px] leading-[22px] font-semibold text-black font-poppins overflow-hidden">
            <div className="line-clamp-3">{data.title}</div>
          </h2>

          {/* Yayın zamanı */}
          <div className="absolute top-[130px] left-[200px] text-[12px] leading-[18px] font-normal text-black">
            {data.time}
          </div>
        </div>
      ) : (
        // Desktop tasarım
        <div className="w-[564px] h-[220px] bg-white hover:bg-cream transition-colors duration-300 relative border-b border-r border-[#D9D9D9] ">
          {/* Kart numarası - saydam */}
          <div className="absolute top-[12px] left-[37px] text-[60px] leading-[90px] font-semibold text-black opacity-10">
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Görsel */}
          <div className="absolute top-[68px] left-[37px]">
            <Image
              src={data.image}
              alt={data.title}
              width={217}
              height={122}
              className="object-cover"
            />
          </div>

          {/* Başlık */}
          <h2 className="absolute top-[68px] left-[269px] w-[256px] h-[91px] text-[20px] leading-[28px] font-semibold text-black font-poppins overflow-hidden">
            <div className="line-clamp-3">{data.title}</div>
          </h2>

          {/* Yayın zamanı */}
          <div className="absolute top-[170px] left-[271px] text-[14px] leading-[22px] font-normal text-black">
            {data.time}
          </div>
        </div>
      )}
    </Link>
  );
}
