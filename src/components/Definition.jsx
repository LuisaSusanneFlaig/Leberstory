import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useTranslation } from "react-i18next";
import { useStory } from "../StoryContext";

import ScrollSection from "./Layout/ScrollSection.jsx";
import SplitPanel from "./Layout/SplitPanel.jsx";
import CenterPanel from "./Layout/CenterPanel.jsx";
import Line from "/src/images/Line.svg";
import { ThemedImg } from "./ThemedImg";

gsap.registerPlugin(ScrollTrigger);

const Definition = () => {
  const triggerRef = useRef(null);
  const panel1Ref = useRef(null);
  const imageRef = useRef(null);

  const { t } = useTranslation();
  const { i18nContext } = useStory();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=100%",
          scrub: true,
          pin: true,
        },
      });

      tl.to([panel1Ref.current], {
        opacity: 0,
        x: -100,
        duration: 1,
      });

      tl.fromTo(
        imageRef.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 1 }
      );
    }, triggerRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <ScrollSection id="definition" ref={triggerRef}>
      {/* PANEL 1 – TEXT */}
      <SplitPanel
        ref={panel1Ref}
        left={
          <h2>
            {t("definition.h2", { context: i18nContext })}
            <img
              src={Line}
              alt={t("definition.lineAlt", { context: i18nContext })}
              className="mt-4 mb-6"
            />
          </h2>
        }
        right={<p>{t("definition.p", { context: i18nContext })}</p>}
      />

      {/* PANEL 2 – IMAGE */}
      <CenterPanel ref={imageRef}>
        <ThemedImg
          name="Thomas_ill.png"
          alt={t("definition.thomasAlt", { context: i18nContext })}
        />
      </CenterPanel>
    </ScrollSection>
  );
};

export default Definition;