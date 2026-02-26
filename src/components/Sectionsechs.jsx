import { useTranslation } from "react-i18next";
import { useStory } from "../StoryContext";

const Sectionsechs = () => {
  const { t } = useTranslation();
  const { i18nContext } = useStory();

  return (
    <section
      id="sectionsechs"
      className="relative h-screen overflow-hidden"
    >
      <div className="absolute inset-0 flex pt-50">
        <div className="w-1/2 h-full flex justify-center m-20">
          <p>
            {t("sectionsechs.p1", { context: i18nContext })}
          </p>
        </div>
        <div className="w-1/2 h-full flex justify-center m-20">
          <p>
            {t("sectionsechs.p2", { context: i18nContext })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sectionsechs;