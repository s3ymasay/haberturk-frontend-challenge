## 🇬🇧 

# Haberturk – Front-End Challenge

[Live Demo on GitHub Pages](https://s3ymasay.github.io/haberturk-frontend-challenge)


This project was developed as part of a front-end evaluation assignment for Habertürk. A responsive news interface was built using Next.js App Router and TailwindCSS, staying as close to the provided design as possible with pixel-perfect attention to detail.

Content is served through Next.js API Routes, and the structure was implemented with a focus on user experience, modular component architecture, and performance across mobile, tablet, and desktop devices.

Staying faithful to the design and maintaining an efficient and technically sound structure were the top priorities throughout the implementation.

---

## Technologies and Techniques Used

- Next.js 13+ (App Router)
- React
- Tailwind CSS
- Next.js API Routes
- Fetch API for data handling
- Pixel-perfect layout implementation
- Custom hook: `useWindowSize` for responsive behavior
- SSR-safe logic and conditional rendering based on screen size

---

## Project Structure (Overview)

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

Note: Configuration and metadata files (e.g., package.json, tailwind.config.js, .gitignore) are located in the root directory.

---

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/s3ymasay/haberturk-frontend-challenge.git
   cd haberturk-frontend-challenge
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open in browser:  
   http://localhost:3000

---

## Features

- Responsive layout for mobile, tablet, and desktop
- Dynamic routing (`/news`, `/news/[id]`)
- Modular and reusable component architecture
- Data served through custom API routes
- Pixel-perfect fidelity to the design
- Centralized responsive logic with `useWindowSize`

---



## 🇹🇷

# Haberturk – Front-End Challenge

[Canlı Demo (GitHub Pages)](https://s3ymasay.github.io/haberturk-frontend-challenge)

Bu proje, Habertürk için hazırlanmış bir front-end değerlendirme çalışmasıdır. Next.js App Router ve TailwindCSS kullanılarak, tasarıma birebir sadık, responsive bir haber arayüzü geliştirilmiştir.

Projede sayfa içerikleri Next.js API Routes üzerinden sağlanmış; mobil, tablet ve masaüstü cihazlarda sorunsuz çalışan, performansa duyarlı bir yapı hedeflenmiştir.  
Uygulama boyunca tasarıma pixel-perfect düzeyde sadık kalınması ve yapının teknik olarak verimli kurgulanması öncelikli hedefler arasında yer almıştır.

---

## Kullanılan Teknolojiler ve Teknikler

- Next.js 13+ (App Router)
- React
- Tailwind CSS
- Next.js API Routes
- fetch API 
- `useWindowSize` custom hook'u ile responsive kontrol
- SSR uyumu ve ekran bazlı conditional render mantığı


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
