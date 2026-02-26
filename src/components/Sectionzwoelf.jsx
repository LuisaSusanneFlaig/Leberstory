import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Line from '/src/images/Line.svg';
import ScrollSection from './Layout/ScrollSection.jsx';
import SplitPanel from "./Layout/SplitPanel.jsx";
import { useTranslation } from "react-i18next";
import { useStory } from "../StoryContext";

gsap.registerPlugin(ScrollTrigger);

const svgs = [
  { src: "/src/images/svga.svg", textKey: "sectionzwoelf.symptoms.0" },
  { src: "/src/images/svgb.svg", textKey: "sectionzwoelf.symptoms.1" },
  { src: "/src/images/svgh.svg", textKey: "sectionzwoelf.symptoms.2" },
  { src: "/src/images/svgd.svg", textKey: "sectionzwoelf.symptoms.3" },
  { src: "/src/images/svgj.svg", textKey: "sectionzwoelf.symptoms.4" },
  { src: "/src/images/svgf.svg", textKey: "sectionzwoelf.symptoms.5" },
  { src: "/src/images/svgi.svg", textKey: "sectionzwoelf.symptoms.6" }
];

const Sectionzwoelf = () => {
  const { t } = useTranslation();
  const { i18nContext } = useStory();

  const containerRef = useRef(null);
  const initialRef = useRef(null);
  const remainingRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(initialRef.current, { autoAlpha: 1, x: 0 });
      gsap.set(remainingRef.current, { autoAlpha: 0, x: 200 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%",
          scrub: true,
          pin: true,
        },
      });

      tl.to(initialRef.current, {
        autoAlpha: 0,
        x: -200,
        duration: 1,
        ease: "none",
      });

      tl.set(remainingRef.current, { autoAlpha: 1 });

      tl.to(
        remainingRef.current,
        {
          x: 0,
          duration: 1,
          ease: "none",
        },
        "<"
      );
    }, containerRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <ScrollSection id="sectionzwoelf" ref={containerRef}>
      {/* PANEL 1 */}
      <SplitPanel
        ref={initialRef}
        left={
          <h2>
            {t("sectionzwoelf.title", { context: i18nContext })}
            <img
              src={Line}
              alt={t("sectionzwoelf.lineAlt", { context: i18nContext })}
              className="mt-4 mb-6"
            />
          </h2>
        }
        right={
          <>
            <p>
              {t("sectionzwoelf.panel1.p", { context: i18nContext })}
            </p>

            <div className="grid grid-cols-3 gap-6 mt-6">
              {svgs.slice(0, 3).map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center"
                >
                  <div className="h-32 w-full flex items-center justify-center">
                    <img
                      src={item.src}
                      alt={t(item.textKey, { context: i18nContext })}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <p className="mt-2">
                    {t(item.textKey, { context: i18nContext })}
                  </p>
                </div>
              ))}
            </div>
          </>
        }
      />

      {/* PANEL 2 */}
      <SplitPanel
        ref={remainingRef}
        left={
          <p>
            {t("sectionzwoelf.panel2.p", { context: i18nContext })}
          </p>
        }
        right={
          <div className="w-1/2 grid grid-cols-3 gap-6">
            {svgs.slice(3, 6).map((item, idx) => (
              <div
                key={idx + 3}
                className="flex flex-col items-center text-center"
              >
                <div className="h-32 w-full flex items-center justify-center">
                  <img
                    src={item.src}
                    alt={t(item.textKey, { context: i18nContext })}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <p className="mt-2">
                  {t(item.textKey, { context: i18nContext })}
                </p>
              </div>
            ))}
          </div>
        }
      />
    </ScrollSection>
  );
};

export default Sectionzwoelf;