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
  title: 'grisha obolenskiy — ui/ux & product designer',
  description: 'ui ux & product designer based in europe. open to remote & on-site roles.',
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
