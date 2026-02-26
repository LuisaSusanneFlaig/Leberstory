import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ScrollSection from "./Layout/ScrollSection.jsx";
import SplitPanel from "./Layout/SplitPanel.jsx";
import CenterPanel from "./Layout/CenterPanel.jsx";
import Line from "/src/images/Line.svg";
import { useTranslation } from "react-i18next";
import { useStory } from "../StoryContext";
import { ThemedImg } from "./ThemedImg"; // adjust path if needed

gsap.registerPlugin(ScrollTrigger);

const Sectionneun = () => {
  const { t } = useTranslation();
  const { i18nContext } = useStory();

  const containerRef = useRef(null);
  const layout1Ref = useRef(null);
  const layout2Ref = useRef(null);
  const layout3Ref = useRef(null);
  const layout4Ref = useRef(null);
  const layout5Ref = useRef(null);
  const layout6Ref = useRef(null);
  const layout7Ref = useRef(null);
  const layout8Ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          layout2Ref.current,
          layout3Ref.current,
          layout4Ref.current,
          layout5Ref.current,
          layout6Ref.current,
          layout7Ref.current,
          layout8Ref.current
        ],
        { opacity: 0 }
      );

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
      tl.fromTo(layout8Ref.current, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });
      tl.to(layout8Ref.current, { x: -200, opacity: 0, duration: 1 });
      tl.fromTo(layout2Ref.current, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });
      tl.to(layout2Ref.current, { x: -200, opacity: 0, duration: 1 });
      tl.fromTo(layout3Ref.current, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });
      tl.to(layout3Ref.current, { x: -200, opacity: 0, duration: 1 });
      tl.fromTo(layout4Ref.current, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });
      tl.to(layout4Ref.current, { x: -200, opacity: 0, duration: 1 });
      tl.fromTo(layout5Ref.current, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });
      tl.to(layout5Ref.current, { x: -200, opacity: 0, duration: 1 });
      tl.fromTo(layout6Ref.current, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });
      tl.to(layout6Ref.current, { x: -200, opacity: 0, duration: 1 });
      tl.fromTo(layout7Ref.current, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });

    }, containerRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <ScrollSection id="sectionneun" ref={containerRef}>

      {/* Layout 1 */}
      <SplitPanel
        ref={layout1Ref}
        left={
          <h2>
            {t("sectionneun.title", { context: i18nContext })}
            <img
              src={Line}
              alt={t("sectionneun.lineAlt", { context: i18nContext })}
              className="mt-4 mb-6"
            />
          </h2>
        }
        right={
          <p>{t("sectionneun.layout1.p", { context: i18nContext })}</p>
        }
      />

      {/* Layout 8 */}
      <CenterPanel ref={layout8Ref}>
        <p>{t("sectionneun.layout8.q1", { context: i18nContext })}</p>
        <ThemedImg
          name="LT1.png"
          alt={t("sectionneun.layout8.imgAlt", { context: i18nContext })}
        />
      </CenterPanel>

      {/* Layout 2 */}
      <SplitPanel
        ref={layout2Ref}
        className="absolute inset-0 w-full flex pt-50"
        left={
          <p>{t("sectionneun.layout2.p", { context: i18nContext })}</p>
        }
        right={
          <>
            <ThemedImg
              name="Ultrasound.png"
              alt={t("sectionneun.layout2.ultrasoundAlt", { context: i18nContext })}
            />
            <p>{t("sectionneun.layout2.ultrasound", { context: i18nContext })}</p>
          </>
        }
      />

      {/* Layout 3 */}
      <CenterPanel ref={layout3Ref}>
        <ThemedImg
          name="CT.png"
          alt={t("sectionneun.layout3.ctAlt", { context: i18nContext })}
          className="max-w"
        />
        <p>{t("sectionneun.layout3.ct", { context: i18nContext })}</p>
      </CenterPanel>

      {/* Layout 4 */}
      <CenterPanel ref={layout4Ref}>
        <ThemedImg
          name="MRI.png"
          alt={t("sectionneun.layout4.mriAlt", { context: i18nContext })}
          className="max-w"
        />
        <p>{t("sectionneun.layout4.mri", { context: i18nContext })}</p>
      </CenterPanel>

      {/* Layout 5 */}
      <CenterPanel ref={layout5Ref}>
        <p>{t("sectionneun.layout5.q2", { context: i18nContext })}</p>
        <ThemedImg
          name="LT2.png"
          alt={t("sectionneun.layout5.imgAlt", { context: i18nContext })}
        />
      </CenterPanel>

      {/* Layout 6 */}
      <CenterPanel ref={layout6Ref}>
        <p>{t("sectionneun.layout6.q3", { context: i18nContext })}</p>
        <ThemedImg
          name="LT3.png"
          alt={t("sectionneun.layout6.imgAlt", { context: i18nContext })}
        />
      </CenterPanel>

      {/* Layout 7 */}
      <CenterPanel ref={layout7Ref}>
        <p>{t("sectionneun.layout7.q4", { context: i18nContext })}</p>
        <ThemedImg
          name="LT4.png"
          alt={t("sectionneun.layout7.imgAlt", { context: i18nContext })}
        />
      </CenterPanel>

    </ScrollSection>
  );
};

export default Sectionneun;