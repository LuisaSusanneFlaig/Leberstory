import React from "react";
import ModelLeber from "./Models/ModelLeber";
import Line from '/src/images/Line.svg';
import { useTranslation } from "react-i18next";
import { useStory } from "../StoryContext";

const Leber = () => {
  const { t } = useTranslation();
  const { i18nContext } = useStory();

  return (
    <section id="leber" className="relative h-screen overflow-hidden">
      <div className="flex flex-col gap-7 p-20">
        <h2>
          {t("leber.title", { context: i18nContext })}
          <img
            src={Line}
            alt={t("leber.lineAlt", { context: i18nContext })}
            className="mt-4 mb-6"
          />
        </h2>
      </div>
      <div className="hero-3d-layout">
        <ModelLeber />
      </div>
    </section>
  )
}

export default Leber;