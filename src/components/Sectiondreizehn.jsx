import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Line from "/src/images/Line.svg";
import ScrollSection from "./Layout/ScrollSection.jsx";
import SplitPanel from "./Layout/SplitPanel.jsx";
import { useTranslation } from "react-i18next";
import { useStory } from "../StoryContext";
import { ThemedImg } from "./ThemedImg"; // adjust path if needed

gsap.registerPlugin(ScrollTrigger);

const Sectiondreizehn = () => {
  const { t } = useTranslation();
  const { i18nContext } = useStory();

  const containerRef = useRef(null);
  const layout1Ref = useRef(null);
  const layout2Ref = useRef(null);
  const step1Ref = useRef(null);
  const step2TextRef = useRef(null);
  const step2ImagesRef = useRef(null);
  const step3TextRef = useRef(null);
  const step3ImageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(layout2Ref.current, { opacity: 0, x: 200 });
      gsap.set(step1Ref.current, { opacity: 0, x: 30 });
      gsap.set(step2TextRef.current, { opacity: 0, x: 30 });
      gsap.set(step2ImagesRef.current, { opacity: 0, x: 30 });
      gsap.set(step3TextRef.current, { opacity: 0, x: 30 });
      gsap.set(step3ImageRef.current, { opacity: 0, x: 30 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%",
          scrub: true,
          pin: true,
        },
      });

      tl.to(layout1Ref.current, { x: -200, opacity: 0, duration: 1 });
      tl.to(layout2Ref.current, { opacity: 1, x: 0, duration: 0.6 });
      tl.to(step1Ref.current, { opacity: 1, x: 0, duration: 0.5 });
      tl.to(step2TextRef.current, { opacity: 1, x: 0, duration: 0.5 });
      tl.to(step2ImagesRef.current, { opacity: 1, x: 0, duration: 0.5 });
      tl.to(step3TextRef.current, { opacity: 1, x: 0, duration: 0.5 });
      tl.to(step3ImageRef.current, { opacity: 1, x: 0, duration: 0.5 });
    }, containerRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <ScrollSection id="sectiondreizehn" ref={containerRef}>

      {/* LAYOUT 1 */}
      <SplitPanel
        ref={layout1Ref}
        left={
          <h2>
            {t("sectiondreizehn.title", { context: i18nContext })}
            <img
              src={Line}
              alt={t("sectiondreizehn.lineAlt", { context: i18nContext })}
              className="mt-4 mb-6"
            />
          </h2>
        }
        right={
          <>
            <p>{t("sectiondreizehn.layout1.p1", { context: i18nContext })}</p>
            <p>{t("sectiondreizehn.layout1.p2", { context: i18nContext })}</p>

            <div className="flex flex-col m-20">
              <h2>{t("sectiondreizehn.layout1.rate", { context: i18nContext })}</h2>

              <ThemedImg
                name="manandwoman.png"
                alt={t("sectiondreizehn.layout1.manAndWomanAlt", { context: i18nContext })}
                className="w-32 h-auto"
              />
            </div>
          </>
        }
      />

      {/* LAYOUT 2 */}
      <SplitPanel
        ref={layout2Ref}
        left={
          <div ref={step1Ref} className="grid grid-cols-2 m-20">
            <p>{t("sectiondreizehn.layout2.step1", { context: i18nContext })}</p>
            <div className="w-1 bg-blue-500 h-full" />
          </div>
        }
        right={
          <>
            <div className="grid mb-20">
              <p ref={step2TextRef}>
                {t("sectiondreizehn.layout2.step2_text", { context: i18nContext })}
              </p>

              <div ref={step2ImagesRef} className="grid grid-cols-2 mt-20">

                <div className="flex flex-row items-center gap-2">
                  <p>{t("sectiondreizehn.layout2.step2_women_rate", { context: i18nContext })}</p>

                  <ThemedImg
                    name="frau.png"
                    alt={t("sectiondreizehn.layout2.womanAlt", { context: i18nContext })}
                    className="w-16 h-16"
                  />
                </div>

                <div className="flex flex-row items-center gap-2">
                  <p>{t("sectiondreizehn.layout2.step2_men_rate", { context: i18nContext })}</p>

                  <ThemedImg
                    name="mann.png"
                    alt={t("sectiondreizehn.layout2.manAlt", { context: i18nContext })}
                    className="w-16 h-16"
                  />
                </div>

              </div>
            </div>

            <p ref={step3TextRef}>
              {t("sectiondreizehn.layout2.step3_text", { context: i18nContext })}
            </p>

            <div ref={step3ImageRef} className="flex flex-row items-center gap-2">
              <p>{t("sectiondreizehn.layout2.step3_rate", { context: i18nContext })}</p>

              <ThemedImg
                name="manandwoman.png"
                alt={t("sectiondreizehn.layout2.statisticAlt", { context: i18nContext })}
                className="w-12 h-12"
              />
            </div>
          </>
        }
      />

    </ScrollSection>
  );
};

export default Sectiondreizehn;