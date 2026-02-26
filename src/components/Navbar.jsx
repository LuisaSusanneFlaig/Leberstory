import React, { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { STORY } from "../story/storyConfig";
import { useStory } from "../StoryContext";

// Navigation groups (nav item → internal sections)
const sectionGroups = {
  definition: ["definition", "leber", "deutschland"],
  anatomie: ["organe", "sectionsechs", "sectionsieben"],
  symptome: ["sectionacht", "sectionneun"],
  diagnose: ["sectionzehn"],
  behandlung: ["sectionelf", "sectionzwoelf"],
  prognose: ["sectiondreizehn"],
  prävention: ["sectionvierzehn"],
};

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { i18nContext, storyVariant } = useStory();

  // Get current story order
  const story = STORY[storyVariant] || STORY.neutral;

  // ✅ ORDER nav items by first appearance in the story
  const visibleNavItems = useMemo(() => {
    const ordered = [];
    const seen = new Set();

    // Build reverse lookup: sectionId -> navKey
    const sectionToNav = {};
    for (const [navKey, sectionIds] of Object.entries(sectionGroups)) {
      sectionIds.forEach((id) => {
        sectionToNav[id] = navKey;
      });
    }

    // Walk story order and collect nav keys in that order (unique)
    story.forEach((sectionId) => {
      const navKey = sectionToNav[sectionId];
      if (navKey && !seen.has(navKey)) {
        seen.add(navKey);
        ordered.push(navKey);
      }
    });

    return ordered;
  }, [story]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const sectionId = entry.target.id;

        let found = false;

        for (const [navId, sections] of Object.entries(sectionGroups)) {
          if (sections.includes(sectionId)) {
            activate(navId);
            found = true;
            break;
          }
        }

        if (!found) activate(null);
      });
    }, observerOptions);

    // Observe only sections that exist in this story
    story.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [storyVariant, story]);

  const activate = (id) => {
    document.querySelectorAll("nav a").forEach((link) => {
      link.classList.toggle("active", link.dataset.link === id);
    });
  };

  const setLang = (lang) => i18n.changeLanguage(lang);
  const isDE = i18n.language?.startsWith("de");
  const isEN = i18n.language?.startsWith("en");

  // Scroll to the first actual section id for this navKey that appears earliest in this story order
  const scrollToNavGroup = (navKey) => {
    const groupSections = sectionGroups[navKey] || [];
    const targetSectionId = story.find((id) => groupSections.includes(id));
    if (!targetSectionId) return;

    const el = document.getElementById(targetSectionId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav>
      {/* TOP WHITE BAR */}
      <div className="nav-top-bar">
        <div className="lang-switch">
          <button
            type="button"
            className={isDE ? "lang-active" : ""}
            onClick={() => setLang("de")}
          >
            DE
          </button>
          <span>|</span>
          <button
            type="button"
            className={isEN ? "lang-active" : ""}
            onClick={() => setLang("en")}
          >
            EN
          </button>
        </div>
      </div>

      {/* MAIN NAVIGATION */}
      <div className="nav-content">
        <ul>
          {visibleNavItems.map((navKey) => (
            <li key={navKey}>
              <a
                href={`#${navKey}`}
                data-link={navKey}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToNavGroup(navKey);
                }}
              >
                {t(`nav.${navKey}`, { context: i18nContext })}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;