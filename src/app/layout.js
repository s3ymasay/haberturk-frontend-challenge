import { Poppins, Abril_Fatface } from 'next/font/google';
import '../styles/globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

const abril = Abril_Fatface({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-abril',
});

export const metadata = {
  title: 'HaberTürk',
  description: 'Frontend Case Study',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${poppins.variable} ${abril.variable}`}>
      <body className="font-sans bg-cream text-dark">
        {children}
      </body>
    </html>
  );
}
