'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FadeInSection } from '@/components/FadeInSection';
import { Reveal } from '@/components/Reveal';
// === MAGNOLIA ===
import magnolia1 from '../../../assetsworks/magnolia1.png';
import magnolia2 from '../../../assetsworks/magnolia2.png';
import magnolia3 from '../../../assetsworks/magnolia3.png';
import magnolia4 from '../../../assetsworks/magnolia4.png';
import magnoliaLogo from '../../../assetsworks/MAGNOLIA LOGO.svg';

// === GENNERO ===
import gennero1 from '../../../assetsworks/gennero1.png';
import gennero2 from '../../../assetsworks/gennero2.png';
import gennero3 from '../../../assetsworks/gennero3.png';
import gennero4 from '../../../assetsworks/gennero4.png';
import genneroLogo from '../../../assetsworks/gennero.svg';

// === DIMENSION ===
import dimension1 from '../../../assetsworks/dimension1.png';
import dimension2 from '../../../assetsworks/dimension2.png';
import dimension3 from '../../../assetsworks/dimension3.png';
import dimensionLogo from '../../../assetsworks/dimension.svg';

// === MONO ===
import monoImg from '../../../assetsworks/mono.png';
import monoLogo from '../../../assetsworks/mono.svg';

// === CAPENCI ===
import capenciImg from '../../../assetsworks/capenci.png';
import capenciLogo from '../../../assetsworks/capenci.svg';

// === AEROFORM ===
import aeroformImg from '../../../assetsworks/aeroform.png';
import aeroformLogo from '../../../assetsworks/aeroform.svg';

// === AVS AUTO ===
import avsImg from '../../../assetsworks/avsauto.png';
import avsLogo from '../../../assetsworks/avs.svg';

// === WOW FLOW ===
import wowflowImg from '../../../assetsworks/wowflow.png';
import wowflowLogo from '../../../assetsworks/wowflow.svg';

// === CAR SEWING ===
import carsewingImg from '../../../assetsworks/carsewing.png';
import carsewingLogo from '../../../assetsworks/carsewing.svg';

// === VONAVKA ===
import vonavkaImg from '../../../assetsworks/vonavka.png';
import vonavkaLogo from '../../../assetsworks/vonavka.svg';

// === TECH ICONS ===
import figmaIcon from '../../../assetsworks/Figma-logo.svg';
import aiIcon from '../../../assetsworks/Adobe_Illustrator_CC_icon.svg';
import psIcon from '../../../assetsworks/Adobe_Photoshop_CC_icon.svg';
import nextjsIcon from '../../../assetsworks/nextjs.svg';
import notionIcon from '../../../assetsworks/notion.svg';
import antigravityIcon from '../../../assetsworks/antigravity-color.png';
import geminiIcon from '../../../assetsworks/gemini-color.png';
import githubIcon from '../../../assetsworks/github.png';
import altegioIcon from '../../../assetsworks/altegio.svg';

const ArrowIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 102 102" fill="currentColor" className={`w-[11px] h-[11px] transition-transform duration-300 group-hover:translate-x-1 ${className}`}>
    <path d="M77.6156 57.375H0V44.625H77.6156L41.9156 8.925L51 0L102 51L51 102L41.9156 93.075L77.6156 57.375Z" />
  </svg>
);

const TelegramIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 293.81 244.52" fill="currentColor" className={`w-[16px] h-[16px] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12 ${className}`}>
    <path d="M293.81,21.97c-3.9,27.05-7.9,57.63-12.81,88.07-5.67,35.17-12.12,70.21-18.27,105.31-.55,3.14-1.25,6.28-2.19,9.33-6.04,19.57-16.89,25.24-34.28,14.45-31.29-19.41-61.65-40.36-91.86-61.45-10.63-7.42-10.65-15.31-.66-25.21,21.64-21.45,43.98-42.2,65.98-63.29,5.5-5.27,11.13-10.48,16.03-16.28,2.22-2.62,2.81-6.6,4.15-9.96-3.57,.45-7.81-.19-10.61,1.52-13.66,8.36-27.03,17.23-40.34,26.15-22.97,15.38-45.92,30.8-68.69,46.47-14.02,9.65-28.75,13.54-45.46,8.24-14.49-4.6-29.3-8.22-43.58-13.37C6.57,130.27,.28,125.33,0,121.52c-.27-3.81,5.27-9.79,9.66-11.86,22.78-10.75,45.89-20.85,69.11-30.62C136.31,54.81,193.94,30.83,251.61,6.93c6.61-2.74,13.58-4.88,20.59-6.28,14.11-2.82,21.46,3.51,21.61,21.32Z"/>
  </svg>
);


const AmberDot = () => (
  <span className="inline-block w-[12px] h-[12px] rounded-full bg-amber mr-[8px] align-middle" />
);

const SolidButton = ({ children, className = "", href, target }: { children: React.ReactNode, className?: string, href?: string, target?: string }) => {
  const commonClasses = `group inline-flex bg-amber text-[#111111] rounded-2xl px-[18px] py-[12px] text-[18px] font-normal leading-none cursor-pointer overflow-hidden hover:-translate-y-[2px] transition-all duration-300 ${className}`;
  const content = (
    <span className="flex items-center gap-[8px]">
      {children}
    </span>
  );
  if (href) {
    if (href.startsWith('http')) {
      return <a href={href} target={target} rel={target === '_blank' ? "noopener noreferrer" : undefined} className={commonClasses}>{content}</a>;
    }
    return <Link href={href} className={commonClasses}>{content}</Link>;
  }
  return <button className={commonClasses}>{content}</button>;
};

const ProjectImages = ({ images }: { images: any[] }) => (
  <div className="w-full md:w-[640px] shrink-0 flex flex-col gap-[24px] md:gap-[40px]">
    {images.map((img, idx) => (
      <div
        key={idx}
        className="overflow-hidden hover:blur-none cursor-pointer group"
      >
        <Image src={img} alt="project image" className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.01]" />
      </div>
    ))}
  </div>
);

const TechIcons = ({ icons }: { icons: any[] }) => (
  <div className="flex items-center gap-[12px] mt-[16px] mb-[24px]">
    {icons.map((IconProps, i) => (
      <Image 
        key={i} 
        src={IconProps.src} 
        alt="tech icon" 
        height={26} 
        className="h-[26px] w-auto object-contain hover:scale-110 transition-transform duration-300 cursor-default" 
      />
    ))}
  </div>
);

const Colors = ({ colors, handleCopy, copiedColor }: { colors: string[], handleCopy: (hex: string) => void, copiedColor: string | null }) => {
  return (
    <div className="flex items-center gap-[12px] mt-[12px] mb-[16px]">
      <div className="flex items-center md:-space-x-[8px] space-x-[12px] md:space-x-0">
        {colors.map((c, i) => {
          const isWhite = c.toLowerCase() === '#ffffff' || c.toLowerCase() === 'white';
          return (
            <div 
              key={i} 
              onClick={(e) => { e.stopPropagation(); handleCopy(c); }}
              className={`w-[24px] h-[24px] rounded-full border cursor-pointer hover:scale-110 transition-transform ${isWhite ? 'border-black/10' : 'border-white'} relative`} 
              style={{ backgroundColor: c, zIndex: colors.length - i }} 
              title={`Click to copy ${c}`}
            >
              <div className="absolute -inset-1 rounded-full cursor-pointer" />
            </div>
          );
        })}
      </div>
      
      {/* COPIED FEEDBACK - STABILIZED */}
      <div className={`transition-all duration-300 flex items-center ${copiedColor && colors.includes(copiedColor) ? 'max-w-[150px] opacity-100' : 'max-w-0 opacity-0 overflow-hidden'}`}>
        <span 
          className="text-[14px] font-medium whitespace-nowrap ml-[8px]"
          style={{ color: copiedColor || '#FFB703' }}
        >
          Copied {copiedColor}!
        </span>
      </div>
    </div>
  );
};


export default function Works() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <main className="max-w-[1400px] mx-auto px-6 md:px-[60px] pt-[60px] pb-[160px] flex flex-col text-[#111111] leading-[1.3] tracking-[-0.03em] bg-white">
      
      <header className="flex items-center justify-between sticky top-0 py-[12px] md:py-[20px] z-50 mb-[40px] -mx-6 px-6 md:mx-0 md:px-0">
        <Link href="/" className="group text-[16px] md:text-[20px] mix-blend-difference text-white hover:text-amber transition-colors flex items-center gap-[6px] md:gap-[8px] -m-2 p-2 focus:outline-none whitespace-nowrap">
          <ArrowIcon className="rotate-180" /> go back
        </Link>
        <div className="flex items-center">
          <SolidButton href="https://t.me/maybellineswag" target="_blank" className="text-[14px] md:text-[18px] px-[12px] py-[8px] md:px-[18px] md:py-[12px] flex items-center gap-[6px] md:gap-[8px] whitespace-nowrap">
            <TelegramIcon className="w-[14px] h-[14px] md:w-[16px] md:h-[16px]" /> get in touch
          </SolidButton>
        </div>
      </header>

      <div className="flex flex-col gap-[160px]">
        
        {/* MAGNOLIA */}
        <FadeInSection>
          <section className="flex flex-col md:flex-row gap-8 md:gap-[100px] items-start">
            <ProjectImages images={[magnolia1, magnolia2, magnolia3, magnolia4]} />
          <div className="flex-1 w-full md:max-w-[540px] md:sticky md:top-[140px]">
            <Image src={magnoliaLogo} alt="Magnolia" className="h-[24px] w-auto object-contain mb-[8px]" />
            <div className="text-[22px]">luxury car import agency</div>
            <Colors colors={['#403864', '#8781A1', '#D2CEE2']} handleCopy={handleCopy} copiedColor={copiedColor} />
            <div className="text-[20px] mb-[8px] flex items-center gap-[8px] -m-2 p-2 group cursor-pointer" onClick={() => handleCopy('#403864')}>
              <ArrowIcon /> full product design & dev, UX & branding
            </div>
            <TechIcons icons={[{src: figmaIcon}, {src: aiIcon}, {src: psIcon}, {src: antigravityIcon}, {src: geminiIcon}, {src: notionIcon}, {src: githubIcon}, {src: nextjsIcon}]} />
            <div className="text-[20px] italic font-serif mb-[32px] text-gray-800">
              "How do we eliminate the stigma of used vehicles from Japan to European customers?"
            </div>
            <Reveal className="flex flex-col gap-[20px] text-[18px] text-gray-700 leading-[1.4]" stagger={0.08}>
              <div><ArrowIcon className="inline-block mr-[8px] align-middle" /> <span className="text-black font-normal font-serif italic text-[1.1em]">Real auction results displayed directly in the Hero</span>, leading with the price gap because that's the only thing that earns a €100k+ buyer's attention before they've even read a word.</div>
              <div><ArrowIcon className="inline-block mr-[8px] align-middle" /> <span className="text-black font-normal font-serif italic text-[1.1em]">"Where Your Savings Come From?"</span> traces the exact journey of a car — manufactured in Europe, bought by a diplomat in Tokyo, acquired at Japanese auction — making the arbitrage tangible and eliminating the grey market fear.</div>
              <div><ArrowIcon className="inline-block mr-[8px] align-middle" /> <span className="text-black font-normal font-serif italic text-[1.1em]">Brand selector leads the intake Request your car form</span> — letting the client pick Porsche or Ferrari makes the process feel personal before any commitment. The proposal document mockup shows exactly what a deposited client receives, making the deliverable concrete.</div>
              <div><ArrowIcon className="inline-block mr-[8px] align-middle" /> <span className="text-black font-normal font-serif italic text-[1.1em]">A four-step process with time estimates ("approve bid — 10 minutes") in the How It Works?</span> section directly addresses the core objection: that importing is complicated. The <span className="text-black font-normal font-serif italic text-[1.1em]">Vehicles</span> page backs it with real auction data and price comparisons to establish expertise.</div>
            </Reveal>
          </div>
        </section>
        </FadeInSection>

        {/* GENNERO */}
        <FadeInSection>
          <section className="flex flex-col md:flex-row gap-8 md:gap-[100px] items-start">
          <ProjectImages images={[gennero1, gennero2, gennero3, gennero4]} />
          <div className="flex-1 w-full md:max-w-[540px] md:sticky md:top-[140px]">
            <Image src={genneroLogo} alt="Gennero" className="h-[24px] w-auto object-contain mb-[8px]" />
            <div className="text-[22px]">modern gynaecology & cosmetology</div>
            <Colors colors={['#112250', '#8FB3D4', '#EFD2DC']} handleCopy={handleCopy} copiedColor={copiedColor} />
            <div className="text-[20px] mb-[8px] flex items-center gap-[8px]"><ArrowIcon /> full product design & dev, UX & booking system integration</div>
            <TechIcons icons={[{src: figmaIcon}, {src: aiIcon}, {src: psIcon}, {src: antigravityIcon}, {src: notionIcon}, {src: githubIcon}, {src: nextjsIcon}, {src: altegioIcon}]} />
            <div className="text-[20px] italic font-serif mb-[32px] text-gray-800">
              "How do we make a small Czech clinic feel like a premium western medical brand that women actually trust?"
            </div>
            <Reveal className="flex flex-col gap-[20px] text-[18px] text-gray-700 leading-[1.4]" stagger={0.08}>
              <div><ArrowIcon className="inline-block mr-[8px] align-middle" /> <span className="text-black font-normal font-serif italic text-[1.1em]">Full medical team Hero image</span> — leading with real faces rather than stock photography immediately signals authenticity and human warmth, directly addressing the "cold clinical" fear.</div>
              <div><ArrowIcon className="inline-block mr-[8px] align-middle" /> <span className="text-black font-normal font-serif italic text-[1.1em]">Individual doctor profile pages</span> — each doctor gets their own dedicated page with photo, specialty and bio, systematically building personal trust before a patient even books.</div>
              <div><ArrowIcon className="inline-block mr-[8px] align-middle" /> <span className="text-black font-normal font-serif italic text-[1.1em]">The Services architecture split across three departments</span> — Gynaecology, Cosmetology and Dermatology — with anchor-based navigation so patients land exactly where they need.</div>
              <div><ArrowIcon className="inline-block mr-[8px] align-middle" /> <span className="text-black font-normal font-serif italic text-[1.1em]">Altegio online booking fully integrated and configured</span> — patients can book directly from the site, a technical deliverable most designers don't handle.</div>
              <div><ArrowIcon className="inline-block mr-[8px] align-middle" /> <span className="text-black font-normal font-serif italic text-[1.1em]">Promotional announcement banner</span> — designed for ongoing marketing use so the clinic can push new services without touching the site.</div>
            </Reveal>
          </div>
        </section>
        </FadeInSection>

        {/* DIMENSION */}
        <FadeInSection>
          <section className="flex flex-col md:flex-row gap-8 md:gap-[100px] items-start">
          <ProjectImages images={[dimension1, dimension2, dimension3]} />
          <div className="flex-1 w-full md:max-w-[540px] md:sticky md:top-[140px]">
             <Image src={dimensionLogo} alt="Dimension" className="h-[32px] w-auto object-contain mb-[8px]" />
            <div className="text-[22px]">ai saas for tiktok shop</div>
            <Colors colors={['#FF5401', '#EF9F39', '#C1C5B4', '#C1C5B4']} handleCopy={handleCopy} copiedColor={copiedColor} />
            <div className="text-[20px] mb-[8px] flex items-center gap-[8px]"><ArrowIcon /> branding & assets</div>
            <TechIcons icons={[{src: figmaIcon}, {src: aiIcon}]} />
            <div className="text-[20px] italic font-serif mb-[32px] text-gray-800">
              "How do we build a brand identity premium enough to sell an AI product to serious e-commerce businesses as a verified TikTok partner?"
            </div>
            <Reveal className="flex flex-col gap-[20px] text-[18px] text-gray-700 leading-[1.4]" stagger={0.08}>
              <div><ArrowIcon className="inline-block mr-[8px] align-middle" /> <span className="text-black font-normal font-serif italic text-[1.1em]">Character mascot designed across multiple states and colorways</span> — giving the AI product a personality that feels approachable rather than cold and technical.</div>
              <div><ArrowIcon className="inline-block mr-[8px] align-middle" /> <span className="text-black font-normal font-serif italic text-[1.1em]">Full logo exploration across multiple directions</span> — from geometric 3D cube marks referencing e-commerce and product boxes, to wordmark and icon combinations, giving the client real strategic options.</div>
              <div><ArrowIcon className="inline-block mr-[8px] align-middle" /> <span className="text-black font-normal font-serif italic text-[1.1em]">Designed for an official TikTok Shop partner</span> — brand needed to signal credibility and modernity to serious e-commerce operators, not just look good.</div>
            </Reveal>
          </div>
        </section>
        </FadeInSection>

        {/* MONO */}
        <FadeInSection>
          <section className="flex flex-col md:flex-row gap-8 md:gap-[100px] items-start">
          <ProjectImages images={[monoImg]} />
          <div className="flex-1 w-full md:max-w-[540px] md:sticky md:top-[140px]">
            <Reveal stagger={0.1}>
              <Image src={monoLogo} alt="Mono" className="h-[24px] w-auto object-contain mb-[8px]" />
              <div className="text-[22px]">premium tuning & vehicle customisation</div>
              <Colors colors={['#000000', '#FFFFFF']} handleCopy={handleCopy} copiedColor={copiedColor} />
              <div className="text-[20px] mb-[8px] flex items-center gap-[8px]"><ArrowIcon /> UI/UX concept & hero design</div>
               <TechIcons icons={[{src: figmaIcon}, {src: aiIcon}, {src: geminiIcon}]} />
              <div className="text-[20px] italic font-serif mb-[32px] text-gray-800">
                "How do we translate a world-class Instagram presence into a product that converts high-end tuning clients?"
              </div>
            </Reveal>
          </div>
        </section>
        </FadeInSection>

        {/* CAPENCI */}
        <FadeInSection>
          <section className="flex flex-col md:flex-row gap-8 md:gap-[100px] items-start">
          <ProjectImages images={[capenciImg]} />
          <div className="flex-1 w-full md:max-w-[540px] md:sticky md:top-[140px]">
            <Reveal stagger={0.1}>
              <Image src={capenciLogo} alt="Capenci" className="h-[24px] w-auto object-contain mb-[8px]" />
              <div className="text-[22px]">premium streetwear clothing label</div>
              <Colors colors={['#0D0701', '#362217', '#CD9F89', '#E6E6E4']} handleCopy={handleCopy} copiedColor={copiedColor} />
              <div className="text-[20px] mb-[8px] flex items-center gap-[8px]"><ArrowIcon /> UI concept & product design</div>
               <TechIcons icons={[{src: figmaIcon}, {src: aiIcon}, {src: psIcon}]} />
              <div className="text-[20px] italic font-serif mb-[32px] text-gray-800">
                "How do we turn a product page into an editorial experience that makes customers feel the brand before they buy?"
              </div>
            </Reveal>
          </div>
        </section>
        </FadeInSection>
        
        {/* AEROFORM */}
        <FadeInSection>
          <section className="flex flex-col md:flex-row gap-8 md:gap-[100px] items-start">
          <ProjectImages images={[aeroformImg]} />
          <div className="flex-1 w-full md:max-w-[540px] md:sticky md:top-[140px]">
            <Image src={aeroformLogo} alt="Aeroform" className="h-[24px] w-auto object-contain mb-[8px]" />
            <div className="text-[22px]">industrial-grade sewing company</div>
            <Colors colors={['#112250', '#5D6B84', '#AAB4C0', '#FFFFFF']} handleCopy={handleCopy} copiedColor={copiedColor} />
            <div className="text-[20px] mb-[8px] flex items-center gap-[8px]"><ArrowIcon /> UI/UX concept & hero design</div>
             <TechIcons icons={[{src: figmaIcon}, {src: aiIcon}, {src: geminiIcon}]} />
            <div className="text-[20px] italic font-serif mb-[32px] text-gray-800">
               "How do we make a manufacturer look credible and professional to the partners and clients that matter?"
            </div>
          </div>
        </section>
        </FadeInSection>

        {/* AVS AUTO */}
        <FadeInSection>
          <section className="flex flex-col md:flex-row gap-8 md:gap-[100px] items-start">
          <div className="w-full md:w-[640px] shrink-0">
            <ProjectImages images={[avsImg]} />
          </div>
          <div className="flex-1 w-full md:max-w-[540px] md:sticky md:top-[140px]">
            <Reveal stagger={0.1}>
              <Image src={avsLogo} alt="AVS Auto" className="h-[18px] md:h-[24px] w-auto object-contain mb-[8px]" />
              <div className="text-[16px] md:text-[22px]">premium car dealership</div>
              <Colors colors={['#000000', '#FFFFFF']} handleCopy={handleCopy} copiedColor={copiedColor} />
              <div className="text-[14px] md:text-[20px] mb-[8px] flex items-center gap-[4px] md:gap-[8px]"><ArrowIcon /> UI/UX concept & hero design</div>
               <TechIcons icons={[{src: figmaIcon}, {src: aiIcon}, {src: geminiIcon}]} />
              <div className="text-[14px] md:text-[20px] italic font-serif mb-[20px] md:mb-[32px] text-gray-800 leading-tight">
                 "How do we design the most premium used car dealership product in Prague — one that matches the quality of the inventory?"
              </div>
            </Reveal>
          </div>
        </section>
        </FadeInSection>

        {/* WOW FLOW */}
        <FadeInSection>
          <section className="flex flex-col md:flex-row gap-8 md:gap-[100px] items-start">
          <ProjectImages images={[wowflowImg]} />
          <div className="flex-1 w-full md:max-w-[540px] md:sticky md:top-[140px]">
            <Reveal stagger={0.1}>
              <Image src={wowflowLogo} alt="Wow Flow" className="h-[32px] w-auto object-contain mb-[8px]" />
              <div className="text-[22px]">flowers, alcohol & gift shop</div>
              <Colors colors={['#DFAE92', '#C5B4A2', '#4F571D', '#FFFFFF']} handleCopy={handleCopy} copiedColor={copiedColor} />
              <div className="text-[20px] mb-[8px] flex items-center gap-[8px]"><ArrowIcon /> UI/UX concept & hero design</div>
               <TechIcons icons={[{src: figmaIcon}, {src: geminiIcon}]} />
              <div className="text-[20px] italic font-serif mb-[32px] text-gray-800">
                 "How do we communicate that this isn't just a flower shop — it's a one-stop gifting destination?"
              </div>
            </Reveal>
          </div>
        </section>
        </FadeInSection>

        {/* CAR SEWING */}
        <FadeInSection>
          <section className="flex flex-col md:flex-row gap-8 md:gap-[100px] items-start">
          <ProjectImages images={[carsewingImg]} />
          <div className="flex-1 w-full md:max-w-[540px] md:sticky md:top-[140px]">
            <Reveal stagger={0.1}>
              <Image src={carsewingLogo} alt="Car Sewing" className="h-[24px] w-auto object-contain mb-[8px]" />
              <div className="text-[22px]">interior upholstery studio</div>
              <Colors colors={['#FBA902', '#000000']} handleCopy={handleCopy} copiedColor={copiedColor} />
              <div className="text-[20px] mb-[8px] flex items-center gap-[8px]"><ArrowIcon /> UI/UX concept & hero design</div>
               <TechIcons icons={[{src: figmaIcon}, {src: aiIcon}, {src: geminiIcon}]} />
              <div className="text-[20px] italic font-serif mb-[32px] text-gray-800">
                 "How do we redesign a craft-based automotive service to feel as premium as the interiors they produce?"
              </div>
            </Reveal>
          </div>
        </section>
        </FadeInSection>

        {/* VONAVKA */}
        <FadeInSection>
          <section className="flex flex-col md:flex-row gap-8 md:gap-[100px] items-start">
          <ProjectImages images={[vonavkaImg]} />
          <div className="flex-1 w-full md:max-w-[540px] md:sticky md:top-[140px]">
            <Reveal stagger={0.1}>
              <Image src={vonavkaLogo} alt="Vonavka" className="h-[40px] w-auto object-contain mb-[8px]" />
              <div className="text-[22px]">detailing studio</div>
              <Colors colors={['#F3C428', '#000000', '#CDA383']} handleCopy={handleCopy} copiedColor={copiedColor} />
              <div className="text-[20px] mb-[8px] flex items-center gap-[8px]"><ArrowIcon /> UI/UX concept & hero design</div>
               <TechIcons icons={[{src: figmaIcon}, {src: aiIcon}, {src: geminiIcon}]} />
              <div className="text-[20px] italic font-serif mb-[32px] text-gray-800">
                 "How do we make a detailing studio feel like a luxury automotive brand rather than just a car wash?"
              </div>
            </Reveal>
          </div>
        </section>
        </FadeInSection>

      </div>
    </main>
  );
}
