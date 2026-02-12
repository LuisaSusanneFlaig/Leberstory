import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Line from '/src/images/Line.svg';
import ScrollSection from './Layout/ScrollSection.jsx';
import SplitPanel from "./Layout/SplitPanel.jsx";

gsap.registerPlugin(ScrollTrigger);

const Sectiondreizehn = () => {
  const containerRef = useRef(null);
  const layout1Ref = useRef(null);
  const layout2Ref = useRef(null);
  const step1Ref = useRef(null);
  const step2TextRef = useRef(null);
  const step2ImagesRef = useRef(null);
  const step3TextRef = useRef(null);
  const step3ImageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states
      gsap.set(layout2Ref.current, { opacity: 0, x: 200 });
      gsap.set(step1Ref.current, { opacity: 0, x: 30 });
      gsap.set(step2TextRef.current, { opacity: 0, x: 30 });
      gsap.set(step2ImagesRef.current, { opacity: 0, x: 30 });
      gsap.set(step3TextRef.current, { opacity: 0, x: 30 });
      gsap.set(step3ImageRef.current, { opacity: 0, x: 30 });

      // Timeline for pinned scroll animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%",
          scrub: true,
          pin: true,
        },
      });

      // Layout 1 exits
      tl.to(layout1Ref.current, { x: -200, opacity: 0, duration: 1 });

      // Layout 2 enters
      tl.to(layout2Ref.current, { opacity: 1, x: 0, duration: 0.6 });

      // STEP 1
      tl.to(step1Ref.current, { opacity: 1, x: 0, duration: 0.5 });

      // STEP 2 TEXT
      tl.to(step2TextRef.current, { opacity: 1, x: 0, duration: 0.5 });

      // STEP 2 IMAGES
      tl.to(step2ImagesRef.current, { opacity: 1, x: 0, duration: 0.5, stagger: 0.2 });

      // STEP 3 TEXT
      tl.to(step3TextRef.current, { opacity: 1, x: 0, duration: 0.5 });

      // STEP 3 IMAGE
      tl.to(step3ImageRef.current, { opacity: 1, x: 0, duration: 0.5 });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <ScrollSection
      id="sectiondreizehn"
      ref={containerRef}
    >
      {/* LAYOUT 1 */}
      <SplitPanel
        ref={layout1Ref}
        left={
          <h2>Prognose von Leberkrebs
                                                                   <img 
                                                        src={Line} 
                                                        alt="Decorative line" 
                                                        className="mt-4 mb-6"
                                                        />
          </h2>
        }
        right={

          <>
            <p>Das hängt vom Stadium des Krebses und dem Zustand der Leber ab.</p>
            <p>5 Jahres Überlebensrate:</p>
          <div className="flex flex-col m-20">
            <h2>18%</h2>
            <img
              src="src/images/manandwoman.png"
              alt="manandwoman"
              className="w-32 h-auto"
            />
          </div>
        </>
        }
      />  

      {/* LAYOUT 2 */}
      <SplitPanel
        ref={layout2Ref}
        left={
        <div 
          ref={step1Ref}
        className="grid grid-cols-2 m-20">
          <p>Tumor entfernt:</p>
          <div className="w-1 bg-blue-500 h-full" />
        </div>
        }
        right={
          <>
        <div className="grid mb-20">
          {/* STEP 2 TEXT */}
          <p ref={step2TextRef}>
            Stadium I Tumore (einzelne Tumore, ohne Befall der Blutgefäße oder
            Lymphknoten und ohne Fernmetastasen)
          </p>

          {/* STEP 2 IMAGES */}
          <div ref={step2ImagesRef} className="grid grid-cols-2 mt-20">
            <div className="flex flex-row">
              <p>54%</p>
              <img
                src="/src/images/frau.png"
                alt="woman"
                className="w-16 h-16"
              />
            </div>
            <div className="flex flex-row">
              <p>62%</p>
              <img
                src="/src/images/mann.png"
                alt="man"
                className="w-16 h-16"
              />
            </div>
          </div>
          </div>
 


          {/* STEP 3 TEXT */}
          <p ref={step3TextRef}>
            Stadium IV Tumore (Lymphknotenbefall oder Fernmetastasen)
          </p>

          {/* STEP 3 IMAGE */}
          <div ref={step3ImageRef} className="flex flex-row">
            <p>2%</p>
            <img
              src="/src/images/manandwoman.png"
              alt="statistic"
              className="w-12 h-12"
            />
          </div>
       </>
       }
      />

    </ScrollSection>
  );
};

export default Sectiondreizehn;
