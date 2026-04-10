import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { SmoothScroll } from '@/components/SmoothScroll';
import ClickSpark from '@/components/ClickSpark';
import './globals.css';
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const sfPro = localFont({
  src: '../../fonts/SF Pro Display Regular.woff2',
  variable: '--font-sf-pro',
  fallback: ['sans-serif'],
  display: 'swap',
});

const appleGaramond = localFont({
  src: '../../fonts/AppleGaramond-Italic.ttf',
  variable: '--font-garamond',
  fallback: ['Times New Roman', 'serif'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'grisha obolenskiy — ui & ux product design',
  description: 'ui & ux product design based in europe. open to remote & on-site roles.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'grisha obolenskiy — ui & ux product design',
    description: 'ui & ux product design based in europe. open to remote & on-site roles.',
    url: 'https://grishaobolenskiy.com',
    siteName: 'Grisha Obolenskiy',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Grisha Obolenskiy Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'grisha obolenskiy — ui & ux product design',
    description: 'ui & ux product design based in europe. open to remote & on-site roles.',
    images: ['/opengraph-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${sfPro.variable} ${appleGaramond.variable} antialiased`}>
        <ClickSpark
          sparkColor='#000'
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ClickSpark>
      </body>
    </html>
  );
}
