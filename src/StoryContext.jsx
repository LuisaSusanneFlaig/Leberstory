import React, { createContext, useContext, useMemo, useState } from "react";

const StoryContext = createContext();
export const useStory = () => useContext(StoryContext);

// map story variant -> i18next context
const storyToI18nContext = {
  neutral: undefined,
  positive: "positive",
  disturbing: "disturbing",
};

const pickRandomStory = () => {
  const stories = ["neutral", "positive", "disturbing"];
  return stories[Math.floor(Math.random() * stories.length)];
};

export const StoryProvider = ({ children }) => {
  // pick once before first render
  const [storyVariant, setStoryVariant] = useState(() => pickRandomStory());

  const i18nContext = useMemo(
    () => storyToI18nContext[storyVariant],
    [storyVariant]
  );

  return (
    <StoryContext.Provider value={{ storyVariant, setStoryVariant, i18nContext }}>
      {children}
    </StoryContext.Provider>
  );
};