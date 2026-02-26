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

const Sectionelf = () => {
  const { t } = useTranslation();
  const { i18nContext } = useStory();

  const containerRef = useRef(null);
  const layout1Ref = useRef(null);
  const layout2Ref = useRef(null);
  const layout3Ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([layout2Ref.current, layout3Ref.current], { opacity: 0 });

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
      tl.fromTo(layout2Ref.current, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });
      tl.to(layout2Ref.current, { x: -200, opacity: 0, duration: 1 });
      tl.fromTo(layout3Ref.current, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });
    }, containerRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <ScrollSection id="sectionelf" ref={containerRef}>

      {/* Layout 1 */}
      <SplitPanel
        ref={layout1Ref}
        left={
          <h2>
            {t("sectionelf.title", { context: i18nContext })}
            <img
              src={Line}
              alt={t("sectionelf.lineAlt", { context: i18nContext })}
              className="mt-4 mb-6"
            />
          </h2>
        }
        right={
          <>
            <p>{t("sectionelf.layout1.p", { context: i18nContext })}</p>

            <ThemedImg
              name="Curative2.png"
              alt="Curative 2"
              className="max-w-full h-auto"
            />
          </>
        }
      />

      {/* Layout 2 */}
      <SplitPanel
        ref={layout2Ref}
        left={
          <p>{t("sectionelf.layout2.p", { context: i18nContext })}</p>
        }
        right={
          <ThemedImg
            name="Curative3.png"
            alt="Curative 3"
            className="max-w-full h-auto"
          />
        }
      />

      {/* Layout 3 */}
      <SplitPanel
        ref={layout3Ref}
        left={
          <p>{t("sectionelf.layout3.p", { context: i18nContext })}</p>
        }
        right={
          <ThemedImg
            name="Curative4.png"
            alt="Curative 4"
            className="max-w-full h-auto"
          />
        }
      />

    </ScrollSection>
  );
};

export default Sectionelf;