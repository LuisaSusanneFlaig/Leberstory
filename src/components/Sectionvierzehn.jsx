import React, { useLayoutEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Line from "/src/images/Line.svg";
import ScrollSection from "./Layout/ScrollSection.jsx";
import SplitPanel from "./Layout/SplitPanel.jsx";
import CenterPanel from "./Layout/CenterPanel.jsx";
import { useTranslation } from "react-i18next";
import { useStory } from "../StoryContext";
import { ThemedImg } from "./ThemedImg";

gsap.registerPlugin(ScrollTrigger);

const icons = [
  { name: "Prevention.png", textKey: "sectionvierzehn.cards.0" },
  { name: "Alcohol.png", textKey: "sectionvierzehn.cards.1" },
  { name: "Wheight.png", textKey: "sectionvierzehn.cards.2" },
  { name: "Smoking.png", textKey: "sectionvierzehn.cards.3" },
];

const Sectionvierzehn = () => {
  const { t } = useTranslation();
  const { i18nContext } = useStory();

  const sectionRef = useRef(null);
  const introRef = useRef(null);
  const svgRefs = useRef([]);
  svgRefs.current = [];

  const addToRefs = useCallback((el) => {
    if (el && !svgRefs.current.includes(el)) {
      svgRefs.current.push(el);
    }
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(introRef.current, { x: 0, opacity: 1 });
      gsap.set(svgRefs.current, { x: 120, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=400%",
          scrub: true,
          pin: true,
        },
      });

      tl.to(introRef.current, {
        xPercent: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      });

      tl.to(
        svgRefs.current,
        {
          x: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.3"
      );
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <ScrollSection ref={sectionRef} id="sectionvierzehn">
      <SplitPanel
        ref={introRef}
        left={
          <h2>
            {t("sectionvierzehn.title", { context: i18nContext })}
            <img
              src={Line}
              alt={t("sectionvierzehn.lineAlt", { context: i18nContext })}
              className="mt-4 mb-6"
            />
          </h2>
        }
        right={
          <>
            <p>{t("sectionvierzehn.intro", { context: i18nContext })}</p>
            <ul className="list-disc m-10">
              <li>{t("sectionvierzehn.risks.0", { context: i18nContext })}</li>
              <li>{t("sectionvierzehn.risks.1", { context: i18nContext })}</li>
              <li>{t("sectionvierzehn.risks.2", { context: i18nContext })}</li>
              <li>{t("sectionvierzehn.risks.3", { context: i18nContext })}</li>
            </ul>
          </>
        }
      />

      <CenterPanel>
        <div className="grid grid-cols-2 gap-8">
          {icons.map((item, idx) => (
            <div
              key={idx}
              ref={addToRefs}
              className="flex flex-col items-center text-center"
            >
              <div className="h-32 w-full flex items-center justify-center">
                <ThemedImg
                  name={item.name}
                  alt={t(item.textKey, { context: i18nContext })}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <p className="mt-4">
                {t(item.textKey, { context: i18nContext })}
              </p>
            </div>
          ))}
        </div>
      </CenterPanel>
    </ScrollSection>
  );
};

export default Sectionvierzehn;