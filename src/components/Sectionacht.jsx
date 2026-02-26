import React, { useLayoutEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ScrollSection from "./Layout/ScrollSection.jsx";
import SplitPanel from "./Layout/SplitPanel.jsx";
import Line from "/src/images/Line.svg";
import { useTranslation } from "react-i18next";
import { useStory } from "../StoryContext";
import { ThemedImg } from "./ThemedImg"; // <-- adjust path if your file lives elsewhere

gsap.registerPlugin(ScrollTrigger);

const icons = [
  { name: "svga.png", textKey: "sectionacht.symptoms.0" },
  { name: "svgb.png", textKey: "sectionacht.symptoms.1" },
  { name: "svgc.png", textKey: "sectionacht.symptoms.2" },
  { name: "svgd.png", textKey: "sectionacht.symptoms.3" },
  { name: "svge.png", textKey: "sectionacht.symptoms.4" },
  { name: "svgf.png", textKey: "sectionacht.symptoms.5" },
  { name: "svgg.png", textKey: "sectionacht.symptoms.6" },
];

const Sectionacht = () => {
  const { t } = useTranslation();
  const { i18nContext } = useStory();

  const sectionRef = useRef(null);
  const introRef = useRef(null);
  const iconRefs = useRef([]);
  iconRefs.current = [];

  const addToRefs = useCallback((el) => {
    if (el && !iconRefs.current.includes(el)) {
      iconRefs.current.push(el);
    }
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(iconRefs.current, { opacity: 0, x: 120 });
      gsap.set(introRef.current, { x: 0 });

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
        x: -100,
        opacity: 0,
        duration: 1,
      });

      tl.to(
        iconRefs.current,
        {
          opacity: 1,
          x: 0,
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
    <ScrollSection ref={sectionRef} id="sectionacht">
      <SplitPanel
        ref={introRef}
        left={
          <h2>
            {t("sectionacht.title", { context: i18nContext })}
            <img
              src={Line}
              alt={t("sectionacht.lineAlt", { context: i18nContext })}
              className="mt-4 mb-6"
            />
          </h2>
        }
        right={<p>{t("sectionacht.intro", { context: i18nContext })}</p>}
      />

      <div className="absolute inset-0 flex items-center justify-center p-20">
        <div className="grid grid-cols-3 gap-8">
          {icons.slice(0, 3).map((item, idx) => (
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
              <p className="mt-4">{t(item.textKey, { context: i18nContext })}</p>
            </div>
          ))}

          <div className="col-span-3 grid grid-cols-4 gap-8">
            {icons.slice(3).map((item, idx) => (
              <div
                key={idx + 3}
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
                <p className="mt-4">{t(item.textKey, { context: i18nContext })}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollSection>
  );
};

export default Sectionacht;