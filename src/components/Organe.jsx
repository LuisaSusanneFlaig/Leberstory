import React from "react";
import ModelOrgane from "./Models/ModelOrgane";
import Line from '/src/images/Line.svg';
import { useTranslation } from "react-i18next";
import { useStory } from "../StoryContext";

const Organe = () => {
    const { t } = useTranslation();
    const { i18nContext } = useStory();

    return (
        <section id="organe" className="relative h-screen overflow-hidden">
            <div className="flex flex-col gap-7">
                <h2>
                    {t("organe.title", { context: i18nContext })}
                    <img
                        src={Line}
                        alt={t("organe.lineAlt", { context: i18nContext })}
                        className="mt-4 mb-6"
                    />
                </h2>
            </div>
            <div className="hero-3d-layout">
                <ModelOrgane />
            </div>
        </section>
    )
}

export default Organe;