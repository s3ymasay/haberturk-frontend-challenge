// src/components/NewsTitleCard.js

export default function NewsTitleCard({ title, index }) {
  return (
    <div className="w-full h-[164px] relative text-center">
      {/* Kart numarası */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-[42px] overflow-hidden">
        <div className="w-full h-[84px] text-[60px] leading-[90px] font-semibold opacity-10 text-black font-poppins">
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* Başlık */}
      <p
        className="absolute top-[42px] left-1/2 -translate-x-1/2 w-full
                   text-[#333] font-poppins font-normal line-clamp-3
                   xl:text-[22px] xl:leading-[28px]
                   2xl:text-[24px] 2xl:leading-[32px]"
      >
        {title}
      </p>

      {/* Alt çizgi */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-black opacity-100" />
    </div>
  );
}
