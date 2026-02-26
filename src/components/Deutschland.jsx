import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ScrollSection from "./Layout/ScrollSection.jsx";
import SplitPanel from "./Layout/SplitPanel.jsx";
import CenterPanel from "./Layout/CenterPanel.jsx";
import { useTranslation } from "react-i18next";
import { useStory } from "../StoryContext";
import { ThemedImg } from "./ThemedImg";

gsap.registerPlugin(ScrollTrigger);

const Deutschland = () => {
  const { t } = useTranslation();
  const { i18nContext } = useStory();

  const containerRef = useRef(null);
  const panel1 = useRef(null);
  const panel2 = useRef(null);
  const panel3 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([panel2.current, panel3.current], { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=400%",
          scrub: true,
          pin: true,
        },
      });

      tl.to([panel1.current], {
        x: -100,
        opacity: 0,
        duration: 1,
      });

      tl.fromTo(
        panel2.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 1 }
      );

      tl.to([panel2.current], {
        x: -100,
        opacity: 0,
        duration: 1,
      });

      tl.fromTo(
        panel3.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 1 }
      );
    }, containerRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <ScrollSection id="deutschland" ref={containerRef}>
      {/* PANEL 1 */}
      <SplitPanel
        ref={panel1}
        left={<p>{t("deutschland.p1_left", { context: i18nContext })}</p>}
        right={<p>{t("deutschland.p1_right", { context: i18nContext })}</p>}
      />

      {/* PANEL 2 */}
      <SplitPanel
        ref={panel2}
        left={<p>{t("deutschland.p2_left", { context: i18nContext })}</p>}
        right={
          <ThemedImg
            name="img1.png"
            alt={t("deutschland.img1_alt", { context: i18nContext })}
            className="max-w-full max-h-full"
          />
        }
      />

      {/* PANEL 3 */}
      <CenterPanel ref={panel3}>
        <p>{t("deutschland.p3", { context: i18nContext })}</p>
      </CenterPanel>
    </ScrollSection>
  );
};

export default Deutschland;