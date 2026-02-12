import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import ScrollSection from './Layout/ScrollSection.jsx';
import SplitPanel from './Layout/SplitPanel.jsx';
import CenterPanel from './Layout/CenterPanel.jsx';
import Line from '/src/images/Line.svg'; 


gsap.registerPlugin(ScrollTrigger);

const Definition = () => {
  const triggerRef = useRef(null);
  const panel1Ref = useRef(null);
  const imageRef = useRef(null);

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

      // Text raus
      tl.to([panel1Ref.current], {
        opacity: 0,
        x: (i) => (i === 0 ? -100 : -100),
        duration: 1,
      });

      // Bild rein (horizontal)
      tl.fromTo(
        imageRef.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 1 },
       
      );
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <ScrollSection
      id="definition"
      ref={triggerRef}
    >
{/* PANEL 1 – TEXT */}
      <SplitPanel
        ref={panel1Ref}
        left={  
          <h2>
            Wie findet man zurück ins Leben?
                     <img 
          src={Line} 
          alt="Decorative line" 
          className="mt-4 mb-6"
          />
          </h2>
        

        }
        right={
          <p>
            Thomas ist ein 52-jähriger Mann, bei dem bei einer
            Routineuntersuchung Leberkrebs diagnostiziert wurde...
          </p>
        }
      />

      {/* PANEL 2 – IMAGE */}
      <CenterPanel ref={imageRef}>
        <img
          src="/src/images/Thomas_ill.png"
          alt="Thomas"
        />
      </CenterPanel>
    </ScrollSection>
  );
};

export default Definition;
