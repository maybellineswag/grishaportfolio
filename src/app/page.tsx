'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLenis } from 'lenis/react';
import { FadeInSection } from '@/components/FadeInSection';
import { Reveal } from '@/components/Reveal';
import heroPortrait from '../../assetshomepage/hero.jpeg';
import howIWorkImg from '../../assetshomepage/howiwork.png';
import notionImg from '../../assetshomepage/notion.png';
import merchImg from '../../assetshomepage/nett.png';
import europeIcon from '../../assetshomepage/europe-icon.svg';
import worksIcon from '../../assetshomepage/works.svg';

import telegramIcon from '../../assetshomepage/telegram.svg';

const AmberDot = () => (
  <span className="inline-block w-[12px] h-[12px] rounded-full bg-amber mr-[8px] align-middle" />
);

const TelegramIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 293.81 244.52" fill="currentColor" className={`w-[16px] h-[16px] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12 ${className}`}>
    <path d="M293.81,21.97c-3.9,27.05-7.9,57.63-12.81,88.07-5.67,35.17-12.12,70.21-18.27,105.31-.55,3.14-1.25,6.28-2.19,9.33-6.04,19.57-16.89,25.24-34.28,14.45-31.29-19.41-61.65-40.36-91.86-61.45-10.63-7.42-10.65-15.31-.66-25.21,21.64-21.45,43.98-42.2,65.98-63.29,5.5-5.27,11.13-10.48,16.03-16.28,2.22-2.62,2.81-6.6,4.15-9.96-3.57,.45-7.81-.19-10.61,1.52-13.66,8.36-27.03,17.23-40.34,26.15-22.97,15.38-45.92,30.8-68.69,46.47-14.02,9.65-28.75,13.54-45.46,8.24-14.49-4.6-29.3-8.22-43.58-13.37C6.57,130.27,.28,125.33,0,121.52c-.27-3.81,5.27-9.79,9.66-11.86,22.78-10.75,45.89-20.85,69.11-30.62C136.31,54.81,193.94,30.83,251.61,6.93c6.61-2.74,13.58-4.88,20.59-6.28,14.11-2.82,21.46,3.51,21.61,21.32Z"/>
  </svg>
);

const MailIcon = ({ className = "" }: { className?: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const ArrowIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 102 102" fill="currentColor" className={`w-[11px] h-[11px] transition-transform duration-300 group-hover:translate-x-1 ${className}`}>
    <path d="M77.6156 57.375H0V44.625H77.6156L41.9156 8.925L51 0L102 51L51 102L41.9156 93.075L77.6156 57.375Z" />
  </svg>
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

export default function Portfolio() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lenis = useLenis();

  useLenis(({ scroll }) => {
    if (scroll > 50) setScrolled(true);
    else setScrolled(false);
  });

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('advantagesofkindness@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <main className="max-w-[1400px] mx-auto px-6 md:px-[60px] pt-[80px] pb-[100px] flex flex-col text-[#111111] text-[19px] leading-[1.3] tracking-[-0.03em]">
      
      {/* HERO WRAPPER TO TAKE FULL SCREEN */}
      <div className="h-[calc(100vh-40px)] flex flex-col justify-between relative">
        {/* SECTION 1: HERO */}
        <FadeInSection>
          <section className="flex flex-col md:flex-row justify-center gap-10 md:gap-[100px] items-start text-left">
            <div className="hidden md:flex w-full md:w-[440px] shrink-0 justify-center md:justify-end">
               <div className="relative md:left-[-40px]">
                <Image
                  src={heroPortrait}
                  alt="grisha obolenskiy profile"
                  className="w-[300px] h-auto object-cover shadow-2xl md:shadow-none"
                  priority
                />
               </div>
            </div>
             <div className="w-full md:w-[440px]">
            <div className="text-[23px] font-normal leading-[1.4]">
              <AmberDot />
              grisha obolenskiy
            </div>
            
            <Reveal className="leading-[1.4] mt-[20px]" stagger={0.15} threshold={0}>
              <div>ui ux & product designer</div>
              <div className="flex items-center gap-[8px] inline-flex">
                based in <Image src={europeIcon} alt="europe" width={32} height={32} /> europe
              </div>
              <div>open to remote & on-site roles</div>
              <div>fluent in english, russian & czech</div>
            </Reveal>
            
            <Reveal className="mt-[28px] leading-[1.4] text-left" stagger={0.1} delay={0.4} threshold={0}>
              <div>
                experience in building
              </div>
              <div>
                <Link href="/works" className="group underline font-serif italic text-black tracking-normal hover:text-amber transition-colors inline-flex items-center gap-[4px] -m-2 p-2">
                  real websites
                </Link> across <span className="text-amber">multiple industries</span> focusing on
              </div>
              <div>
                user experience & solving client problems
              </div>
            </Reveal>
            
            <Reveal className="block md:hidden mt-[28px] text-[#111111] font-normal space-y-1" stagger={0.1} threshold={0}>
               <a href="https://t.me/maybellineswag" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group -m-2 p-2 w-fit">
                 <TelegramIcon className="text-amber" />
                 <span className="group-hover:text-amber transition-colors">maybellineswag</span>
               </a>
               <a href="mailto:advantagesofkindness@gmail.com" className="flex items-center gap-2 group -m-2 p-2 w-fit">
                 <MailIcon className="text-amber" />
                 <span className="group-hover:text-amber transition-colors">advantagesofkindness@gmail.com</span>
               </a>
            </Reveal>

            <Reveal className="mt-[28px] leading-[1.4] hidden md:block" boxClassName="inline-block mr-[0.22em]">
              <span>past clients: </span>
              <a href="https://www.instagram.com/theweeknd/" target="_blank" className="hover:text-amber transition-colors -m-2 p-2 inline-block">The Weeknd</a>
              <span>, </span>
              <a href="https://www.instagram.com/sp5derworldwide/" target="_blank" className="hover:text-amber transition-colors -m-2 p-2 inline-block">Sp5der</a>
              <span>, </span>
              <a href="https://www.instagram.com/pinkpantheress/" target="_blank" className="hover:text-amber transition-colors -m-2 p-2 inline-block">PinkPantheress</a>
              <span>, </span>
              <a href="https://www.instagram.com/nettspend_/" target="_blank" className="hover:text-amber transition-colors -m-2 p-2 inline-block">Nettspend</a>
              <span> & </span>
              <button 
                onClick={() => lenis?.scrollTo('#background', { duration: 2 })}
                className="hover:text-amber transition-colors cursor-pointer -m-2 p-2"
              >
                more
              </button>
            </Reveal>

            {/* MOBILE CLIENTS LIST */}
            <Reveal className="mt-[28px] leading-[1.4] block md:hidden text-[19px]" delay={0.2} threshold={0}>
              past clients: The Weeknd, Sp5der, PinkPantheress, Nettspend & more
            </Reveal>

            <Reveal className="mt-[28px] leading-[1.4] hidden md:flex flex-col gap-1 text-[#888888]" stagger={0.1} delay={0.8}>
               <a href="https://t.me/maybellineswag" target="_blank" rel="noopener noreferrer" className="flex items-center gap-[8px] group -m-2 p-2 w-fit">
                 <TelegramIcon className="text-amber" /> 
                 <div className="text-[#111111] group-hover:text-amber transition-colors">
                    @maybellineswag
                 </div>
               </a>
               <div className="flex items-center gap-[8px] group cursor-pointer -m-2 p-2 select-none w-fit" onClick={handleCopyEmail}>
                   <MailIcon className="text-amber" /> 
                   <div className="flex items-center relative">
                     <span className="text-[#111111] hover:text-amber transition-colors">
                       advantagesofkindness@gmail.com
                     </span>
                     
                     {/* ABSOLUTE FEEDBACK */}
                     <div className="absolute left-full ml-[12px] flex items-center whitespace-nowrap pointer-events-none group-hover:pointer-events-auto">
                        <div className="overflow-hidden transition-all duration-300 max-w-0 opacity-0 group-hover:max-w-[120px] group-hover:opacity-100 flex items-center">
                          <a 
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=advantagesofkindness@gmail.com&su=We+searched+the+whole+internet+and+found+you&body=Hello+Grisha%2C%0A%0AWe+came+across+your+work+and+honestly+we+weren%27t+expecting+to+be+this+impressed.+We+have+an+open+position+/+project+that+feels+like+it+was+made+for+you+%E2%80%94+good+pay%2C+interesting+work%2C+and+people+who+actually+have+taste.%0AWould+love+to+get+on+a+call+and+tell+you+more.%0A%0ALooking+forward+to+hearing+from+you+Grisha%21" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-[14px] text-[#888888] hover:text-amber underline mr-[12px]"
                          >
                            open in gmail
                          </a>
                        </div>
                        <div className={`overflow-hidden transition-all duration-300 flex items-center ${emailCopied ? 'max-w-[80px] opacity-100' : 'max-w-0 opacity-0'}`}>
                          <span className="text-[14px] text-amber font-medium">
                            Copied!
                          </span>
                        </div>
                     </div>
                   </div>
                 </div>
            </Reveal>

            
            <Reveal className="flex items-center justify-start gap-[24px] mt-[32px]" delay={1.2} threshold={0}>
              <SolidButton href="/works" className="flex items-center gap-[10px] w-full md:w-auto justify-center md:justify-start bg-amber py-[16px] md:py-[12px] rounded-2xl">
                 <ArrowIcon /> view works
              </SolidButton>
            </Reveal>
          </div>
        </section>
        </FadeInSection>

        {/* SCROLL HINT */}
        <div className={`hidden md:flex justify-center gap-[100px] mb-[60px] transition-opacity duration-500 ${scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <div className="md:w-[440px] shrink-0" />
          <div className="md:w-[440px] text-[16px] text-[#888888] animate-bounce-slow">
            ↓ scroll to see how i work
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[80px] md:gap-[140px]">
        {/* SECTION 2: HOW I WORK */}
        <FadeInSection>
          <section className="flex flex-col md:flex-row justify-center gap-10 md:gap-[100px] items-start text-left">
          <div className="w-full md:w-[440px] shrink-0 relative md:top-[40px]">
            <Image
              src={howIWorkImg}
              alt="how i work screenshot"
              width={440}
              height={264}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full md:w-[440px] pt-4 md:pt-[32px]">
            <div className="text-[23px] font-normal leading-tight">
              <AmberDot />
              how i work
            </div>
            
            <Reveal className="mt-[20px] flex flex-col gap-[6px] items-center md:items-start" stagger={0.1} duration={1.8}>
              <div className="text-[18px] leading-[1.4]"><ArrowIcon className="inline-block mr-[8px] align-middle" /> understand the business problem & define what the site needs to achieve</div>
              <div className="text-[18px] leading-[1.4]"><ArrowIcon className="inline-block mr-[8px] align-middle" /> design full layout, components & visual system in Figma</div>
              <div className="text-[18px] leading-[1.4]"><ArrowIcon className="inline-block mr-[8px] align-middle" /> build it in code using modern frameworks — pixel perfect to the design</div>
              <div className="text-[18px] leading-[1.4]"><ArrowIcon className="inline-block mr-[8px] align-middle" /> handle SEO basics, performance & deployment so it's ready to go live</div>
            </Reveal>
            
            <div className="mt-[28px]">
              <SolidButton href="/works" className="flex items-center gap-[8px]">
                 <ArrowIcon /> view works
              </SolidButton>
            </div>
          </div>
        </section>
        </FadeInSection>

        {/* SECTION 3: NOTION */}
        <FadeInSection>
          <section className="flex flex-col md:flex-row justify-center gap-10 md:gap-[100px] items-start text-left">
          <div className="w-full md:w-[440px] shrink-0 relative md:top-[40px]">
            <Image
              src={notionImg}
              alt="notion board screenshot"
              width={440}
              height={264}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full md:w-[440px] pt-4 md:pt-[32px]">
            <div className="text-[23px] font-normal leading-tight">
              <AmberDot />
              every project lives in notion
            </div>
            
            <Reveal className="mt-[20px] flex flex-col gap-[6px] items-center md:items-start" stagger={0.1} duration={1.8}>
              <div className="text-[18px] leading-[1.4]"><ArrowIcon className="inline-block mr-[8px] align-middle" /> each section / page grouped</div>
              <div className="text-[18px] leading-[1.4]"><ArrowIcon className="inline-block mr-[8px] align-middle" /> tasks ranked by difficulty, assignee, due date, etc</div>
              <div className="text-[18px] leading-[1.4]"><ArrowIcon className="inline-block mr-[8px] align-middle" /> nothing slips through the cracks</div>
            </Reveal>
            
            <div className="mt-[28px]">
              <SolidButton href="https://t.me/maybellineswag" target="_blank" className="flex items-center gap-[10px]">
                <TelegramIcon /> contact me
              </SolidButton>
            </div>
          </div>
        </section>
        </FadeInSection>

        {/* SECTION 4: BACKGROUND */}
        <FadeInSection>
          <section id="background" className="flex flex-col md:flex-row justify-center gap-10 md:gap-[100px] items-start text-left">
          <div className="w-full md:w-[440px] shrink-0 relative md:top-[40px]">
            <Image
              src={merchImg}
              alt="my background"
              width={440}
              height={237}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full md:w-[440px] pt-4 md:pt-[32px]">
            <div className="text-[23px] font-normal leading-tight">
              <AmberDot />
              my background
            </div>
            
            <Reveal className="mt-[20px] flex flex-col gap-[6px] items-start" stagger={0.1} duration={1.8}>
              <div className="text-[18px] leading-[1.4]"><ArrowIcon className="inline-block mr-[8px] align-middle" /> i have a background in merch, cover art & general graphic design for various music artists & clothing brands</div>
              <div className="text-[18px] leading-[1.4]" >
                <ArrowIcon className="inline-block mr-[8px] align-middle" /> 
                some of my past clients are{" "}
                <a href="https://www.instagram.com/theweeknd/" target="_blank" className="hover:text-amber transition-colors">The Weeknd</a>,{" "}
                <a href="https://www.instagram.com/skyrompiendo/" target="_blank" className="hover:text-amber transition-colors">Sky Rompiendo</a>,{" "}
                <a href="https://www.instagram.com/sp5derworldwide/" target="_blank" className="hover:text-amber transition-colors">Sp5der Worldwide</a>,{" "}
                <a href="https://www.instagram.com/pinkpantheress/" target="_blank" className="hover:text-amber transition-colors">PinkPantheress</a>,{" "}
                <a href="https://www.instagram.com/krisrofficial/" target="_blank" className="hover:text-amber transition-colors">Kris R</a>,{" "}
                <a href="https://www.instagram.com/nettspend_/" target="_blank" className="hover:text-amber transition-colors">Nettspend</a>,{" "}
                <a href="https://www.instagram.com/sahbabii/" target="_blank" className="hover:text-amber transition-colors">Sahbabii</a>,{" "}
                <a href="https://www.instagram.com/mollysantana00/" target="_blank" className="hover:text-amber transition-colors">Molly Santana</a>,{" "}
                <a href="https://www.instagram.com/maluma/" target="_blank" className="hover:text-amber transition-colors">Maluma</a>,{" "}
                <a href="https://www.instagram.com/untiljapan/" target="_blank" className="hover:text-amber transition-colors">Untiljapan</a>,{" "}
                <a href="https://www.instagram.com/seventhheaven/" target="_blank" className="hover:text-amber transition-colors">Seventh Heaven</a> & more
              </div>
            </Reveal>
            
            <div className="mt-[28px]">
              <SolidButton href="/works" className="flex items-center gap-[10px]">
                 <ArrowIcon /> view works
              </SolidButton>
            </div>
          </div>
        </section>
        </FadeInSection>
      </div>
    </main>
  );
}
