import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React from 'react';
import { SplitText } from 'gsap/all';
import Line from '/src/images/Line.svg';
import { useStory } from '../StoryContext';
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { i18nContext } = useStory();
  const { t } = useTranslation();

  useGSAP(() => {
    const heroSplit = new SplitText('.title', { type: 'lines' });
    const paragraphSplit = new SplitText('.subtitle', { type: 'lines' });

    gsap.from(heroSplit.lines, {
      yPercent: 150,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 150,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06,
      delay: 1,
    });

    gsap.to('.scroll-indicator', {
      y: 10,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      duration: 1,
      delay: 2
    });
  }, []);

  const scrollToDefinition = () => {
    gsap.to(window, {
      scrollTo: '#definition',
      duration: 1.2,
      ease: 'power2.inOut',
    });
  };

  return (
    <section id="hero" className="h-screen w-full">
      <div className="h-full w-full flex flex-col items-center justify-center text-center px-6">

        {/* TITLE */}
        <h1
          className="title font-normal leading-[1.05] tracking-normal max-w-[863px]
                     text-[40px] sm:text-[56px] md:text-[72px] lg:text-[96px]"
        >
          {t("hero.title", { context: i18nContext })}
        </h1>

        {/* SUBTITLE */}
        <h3
          className="subtitle mt-10 font-normal leading-[1.2] tracking-normal
                     text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px]"
        >
          {t("hero.subtitle", { context: i18nContext })}
        </h3>

        {/* LINE + BYLINE */}
        <div className="relative mt-4 w-full max-w-[505px] h-[44px] flex items-center justify-center">
          <img
            src={Line}
            alt={t("hero.lineAlt", { context: i18nContext })}
            className="w-full"
          />

          {/* by LUISA FLAIG — Inter Regular 16 */}
          <p
            className="subtitle absolute left-1/2 -translate-x-1/2 top-[60%]
                       font-normal tracking-normal text-[16px] leading-none"
          >
            {t("hero.byline", { context: i18nContext })}
          </p>
        </div>

        {/* SCROLL TO START — Inter Regular 24 */}
        <button
          type="button"
          className="subtitle scroll-indicator mt-10 cursor-pointer font-normal tracking-normal
                     text-[24px] leading-none"
          onClick={scrollToDefinition}
        >
          {t("hero.scroll", { context: i18nContext })}
        </button>

        {/* ARROW — exactly 45x24 */}
        <div className="mt-4 flex items-center justify-center">
          <svg
            width="45"
            height="24"
            viewBox="0 0 45 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M22.5 24L0 0H45L22.5 24Z" fill="currentColor" />
          </svg>
        </div>

      </div>
    </section>
  );
};

export default Hero;