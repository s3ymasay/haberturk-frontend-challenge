// src/components/NewsDetail.js
import { useEffect, useState } from "react";
import Image from "next/image";

export default function NewsDetail({ newsItem, isMobile }) {
  const [splitDetail, setSplitDetail] = useState([]);

  useEffect(() => {
    if (newsItem?.detail) {
      const paragraphs = newsItem.detail
        .split(".. ")
        .map((p) => p.trim())
        .filter(Boolean);
      setSplitDetail(paragraphs);
    }
  }, [newsItem]);

  if (!newsItem) return null;

  return isMobile ? (
    // ✅ Mobil Tasarım
    <div className="w-full h-full">
      <div className="p-[20px]">
        <h1 className="h-[72px] leading-[36px] text-[30px] font-bold font-poppins text-black uppercase overflow-hidden">
          {newsItem.title}
        </h1>
        <p className="mt-[10px] ml-[1.5px] italic text-[14px] leading-[18px] text-[#333333]">
          {newsItem.spot}
        </p>
        <div className="mt-[12px] ml-[1px] w-full border-b border-dashed border-[#707070] opacity-50" />
        <div className="mt-[20px] w-full h-auto">
          <Image
            src={newsItem.image}
            alt={newsItem.title}
            className="w-full h-auto object-cover"
            width={0}
            height={0}
            sizes="100vw"
            priority
          />
        </div>
        <div className="mt-[10px] ml-[10px] mr-[30px] h-full text-[14px] leading-[22px] text-[#333333]">
          {splitDetail.map((paragraph, index) => (
            <p key={index} className="mb-[20px]">
              {paragraph}.
            </p>
          ))}
        </div>
      </div>
    </div>
  ) : (
    // ✅ Desktop ve Small Desktop Tasarım
    <div className="flex-1 overflow-y-auto">
      <div className="2xl:w-[calc(100%-143px)] w-full 2xl:ml-[53px] 2xl:mr-[90px] 2xl:px-0 sm:px-[40px]">
        {/* Başlık */}
        <div className="2xl:ml-[70px] mt-[59px]">
          <h1 className="2xl:w-[813px] w-full 2xl:h-[106px] text-[32px] 2xl:text-[40px] 2xl:leading-[50px] sm:max-w-[700px] leading-[38px] font-bold font-poppins text-black uppercase">
            {newsItem.title}
          </h1>
        </div>

        {/* Spot */}
        <div className="2xl:ml-[70px] 2xl:mr-[412px] mt-[20px] mb-[20px]">
          <p className="2xl:w-[669px] 2xl:h-[58px] italic text-[16px] 2xl:text-[18px] leading-[24px] 2xl:leading-[26px] text-[#333333]">
            {newsItem.spot.substring(0, 145)}
          </p>
          <div className="w-full 2xl:w-[665px] mt-[10px] border-b border-dashed border-[#707070] opacity-50" />
        </div>

        {/* Görsel */}
        <div className="w-full mb-[30px]">
          <Image
            src={newsItem.image}
            alt={newsItem.title}
            className="w-full h-auto object-cover"
            width={0}
            height={0}
            sizes="100vw"
            priority
          />
        </div>

        {/* Detay Yazı */}
        <div className="w-full mt-[30px] text-[16px] 2xl:text-[18px] leading-[26px] pb-[178px] text-[#333333]">
          {splitDetail.map((paragraph, index) => (
            <p
              key={index}
              className="mb-[20px] 2xl:ml-[40px] 2xl:mr-[99px] px-[16px]"
            >
              {paragraph}.
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
