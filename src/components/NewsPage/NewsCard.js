
// src/components/NewsCard.js
import Image from "next/image";
import Link from "next/link";

export default function NewsCard({ data, index }) {
  return (
    <div className="w-[360px] h-full bg-white hover:bg-cream transition-colors duration-200 relative shrink-0">
      {/* Kart numarası */}
      <div className="absolute top-[20px] left-[30px] text-[60px] leading-[90px] font-semibold text-black opacity-10">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className= "relative w-[360px] h-[492px] top-[calc(50%-204px)]">
        {/* Yayın zamanı */}
        <div className="absolute  left-[30px] text-[14px] leading-[21px] font-normal text-black">
          {data.time}
        </div>

        {/* Başlık */}
        <h2 className="absolute top-[39px] left-[30px] w-[300px] text-[22px] leading-[32px] font-[600] text-black font-poppins">
          {data.title}
        </h2>

        {/* Görsel */}
        <div className="absolute top-[156px] left-[30px] w-[300px] h-[169px]">
          <Image
            src={data.image}
            alt={data.title}
            width={300}
            height={169}
            className="object-cover"
            priority={index < 3}
          />
        </div>

        {/* Açıklama */}
        <p className="absolute top-[345px] left-[30px] w-[300px] h-[95px] text-[16px] leading-[24px] font-normal text-[#95989A]">
          {data.summary}
        </p>

        {/* Detay butonu */}
        <Link
          href={`/news/${data.id}`}
          className="absolute top-[452px] left-[30px] w-[90px] h-[40px] border border-[#DEDEDE] text-[16px] leading-[25px] font-bold text-[#333333] flex items-center justify-center"
        >
          DETAY
        </Link>
      </div>

      {/* Sağ dikey çizgi */}
      <div className="absolute right-0 top-0 h-full w-px bg-[#D9D9D9] opacity-70" />
    </div>
  );
}
