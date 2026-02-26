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

const Sectionfuenfzehn = () => {
  const { t } = useTranslation();
  const { i18nContext } = useStory();

  const containerRef = useRef(null);
  const layout1Ref = useRef(null);
  const layout2Ref = useRef(null);
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);
  const step4Ref = useRef(null);
  const step5Ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(layout2Ref.current, { opacity: 0, x: 200 });
      gsap.set(step1Ref.current, { opacity: 0, x: 30 });
      gsap.set(step2Ref.current, { opacity: 0, x: 30 });
      gsap.set(step3Ref.current, { opacity: 0, x: 30 });
      gsap.set(step4Ref.current, { opacity: 0, x: 30 });
      gsap.set(step5Ref.current, { opacity: 0, x: 30 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=400%",
          scrub: true,
          pin: true,
        },
      });

      tl.to(layout1Ref.current, { x: -200, opacity: 0, duration: 1 });
      tl.to(layout2Ref.current, { opacity: 1, x: 0, duration: 0.8 });
      tl.to(step1Ref.current, { opacity: 1, x: 0, duration: 0.6 });
      tl.to(step2Ref.current, { opacity: 1, x: 0, duration: 0.6 });
      tl.to(step3Ref.current, { opacity: 1, x: 0, duration: 0.6 });
      tl.to(step4Ref.current, { opacity: 1, x: 0, duration: 0.6 });
      tl.to(step5Ref.current, { opacity: 1, x: 0, duration: 0.6 });
    }, containerRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <ScrollSection id="sectionfuenfzehn" ref={containerRef}>

      {/* Layout 1 */}
      <SplitPanel
        ref={layout1Ref}
        left={
          <h2>
            {t("sectionfuenfzehn.title", { context: i18nContext })}
            <img
              src={Line}
              alt={t("sectionfuenfzehn.lineAlt", { context: i18nContext })}
              className="mt-4 mb-6"
            />
          </h2>
        }
        right={
          <p>
            {t("sectionfuenfzehn.layout1.p", { context: i18nContext })}
          </p>
        }
      />

      {/* Layout 2 */}
      <SplitPanel
        ref={layout2Ref}
        left={
          <>
            <p ref={step1Ref}>
              {t("sectionfuenfzehn.layout2.intro", { context: i18nContext })}
            </p>

            <div ref={step2Ref} className="flex items-center gap-4">
              <ThemedImg
                name="Smoking.png"
                alt={t("sectionfuenfzehn.layout2.smokingAlt", { context: i18nContext })}
                className="w-12 h-12"
              />
              <p>{t("sectionfuenfzehn.layout2.smokingText", { context: i18nContext })}</p>
            </div>

            <div ref={step3Ref} className="flex items-center gap-4">
              <ThemedImg
                name="Alcohol.png"
                alt={t("sectionfuenfzehn.layout2.alcoholAlt", { context: i18nContext })}
                className="w-12 h-12"
              />
              <p>{t("sectionfuenfzehn.layout2.alcoholText", { context: i18nContext })}</p>
            </div>

            <div ref={step4Ref} className="flex items-center gap-4">
              <ThemedImg
                name="sport.png"
                alt={t("sectionfuenfzehn.layout2.sportAlt", { context: i18nContext })}
                className="w-12 h-12"
              />
              <p>{t("sectionfuenfzehn.layout2.sportText", { context: i18nContext })}</p>
            </div>
          </>
        }
        right={
          <ThemedImg
            ref={step5Ref}
            name="Thomas_healthy.png"
            alt={t("sectionfuenfzehn.layout2.thomasAlt", { context: i18nContext })}
            className="max-w-full h-auto"
          />
        }
      />

    </ScrollSection>
  );
};

export default Sectionfuenfzehn;