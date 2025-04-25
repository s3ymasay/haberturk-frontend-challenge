# Haberturk – Front-End Challenge

Bu proje, Habertürk için hazırlanmış bir front-end değerlendirme çalışmasıdır. Next.js App Router ve TailwindCSS kullanılarak, tasarıma birebir sadık, responsive bir haber arayüzü geliştirilmiştir.

Projede sayfa içerikleri Next.js API Routes üzerinden sağlanmış; mobil, tablet ve masaüstü cihazlarda sorunsuz çalışan, performansa duyarlı bir yapı hedeflenmiştir.  
Uygulama boyunca tasarıma pixel-perfect düzeyde sadık kalınması ve yapının teknik olarak verimli kurgulanması öncelikli hedefler arasında yer almıştır.

---

## Kullanılan Teknolojiler

- Next.js 13+ (App Router)
- React
- Tailwind CSS
- Next.js API Routes
- fetch API

---

## Klasör Yapısı (Özet)

```
src/
├── app/
│   ├── api/
│   │   ├── ads/
│   │   ├── highlight/
│   │   ├── landing/
│   │   └── news/
│   │       └── [id]/
│   ├── news/
│   │   └── [id]/
│   └── page.js
├── components/
│   ├── common/
│   ├── LandingPage/
│   ├── NewsDetailPage/
│   └── NewsPage/
├── data/
├── lib/
├── styles/

public/
└── assets/
    ├── icons/
    ├── images/
    └── logo/
```

Not: Yapılandırma ve metadata dosyaları (örneğin: package.json, tailwind.config.js, .gitignore) proje kök dizinindedir.

---

## Kurulum ve Çalıştırma

1. Bu repoyu klonlayın:
   ```bash
   git clone https://github.com/s3ymasay/haberturk-frontend-challenge.git
   cd haberturk-frontend-challenge
   ```

2. Paketleri yükleyin:
   ```bash
   npm install
   ```

3. Projeyi başlatın:
   ```bash
   npm run dev
   ```

4. Tarayıcıda açın:  
   http://localhost:3000

---

## Özellikler

- Responsive tasarım (mobil, tablet, masaüstü)
- Dinamik sayfa yönlendirme (/news, /news/[id])
- Bileşen bazlı mimari
- API Routes üzerinden veri sağlama
- Pixel-perfect UI hedefi
- Custom hook: useWindowSize ile merkezi responsive kontrol

---