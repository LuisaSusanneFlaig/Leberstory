import React from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./ThemeContext";

import { StoryProvider, useStory } from "./StoryContext";

import { STORY } from "./story/storyConfig";
import { SECTION_REGISTRY } from "./story/sectionRegistry";

gsap.registerPlugin(ScrollTrigger, SplitText);

const AppContent = () => {
    const { storyVariant } = useStory();

    // Get story for current storyVariant
    const story = STORY[storyVariant] || STORY.neutral;

    return (
        <main>
            <Navbar />

            {/* Dynamically render sections based on story */}
            {story.map((sectionId) => {
                const SectionComponent = SECTION_REGISTRY[sectionId];
                return SectionComponent ? <SectionComponent key={sectionId} /> : null;
            })}
        </main>
    );
};

const App = () => {
    return (
        <ThemeProvider>
            <StoryProvider>
                <AppContent />
            </StoryProvider>
        </ThemeProvider>
    );
};

export default App;