import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Line from '/src/images/Line.svg'; 
import ScrollSection from './Layout/ScrollSection.jsx';
import SplitPanel from "./Layout/SplitPanel.jsx";

gsap.registerPlugin(ScrollTrigger);

const svgs = [
  { src: "/src/images/svga.svg", text: "Abnehmen ohne Anstrengung" },
  { src: "/src/images/svgb.svg", text: "Appetitlosigkeit" },
  { src: "/src/images/svgh.svg", text: "Erhöhte Temperatur" },
  { src: "/src/images/svgd.svg", text: "Schmerzen im Oberbauch" },
  { src: "/src/images/svgj.svg", text: "Schwäche und Müdigkeit" },
  { src: "/src/images/svgf.svg", text: "Schwellungen des Bauches" },
  { src: "/src/images/svgi.svg", text: "Gelbe Hautverfärbung" },
];

const Sectionzwoelf = () => {
  const containerRef = useRef(null);
  const initialRef = useRef(null);
  const remainingRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states
      gsap.set(initialRef.current, {
        autoAlpha: 1,
        x: 0,
      });

      gsap.set(remainingRef.current, {
        autoAlpha: 0,
        x: 200,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%",
          scrub: true,
          pin: true,
        },
      });

      // Animate first panel out
      tl.to(initialRef.current, {
        autoAlpha: 0,
        x: -200,
        duration: 1,
        ease: "none",
      });

      // Hard switch visibility (prevents blending)
      tl.set(remainingRef.current, { autoAlpha: 1 });

      // Animate second panel in
      tl.to(
        remainingRef.current,
        {
          x: 0,
          duration: 1,
          ease: "none",
        },
        "<"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <ScrollSection
      id="sectionzwoelf"
      ref={containerRef}
    >
      {/* PANEL 1 */}
      <SplitPanel
        ref={initialRef}
        left={



           <h2>Palliative Behandlung für Leberkrebs
                                                       <img 
                                            src={Line} 
                                            alt="Decorative line" 
                                            className="mt-4 mb-6"
                                            />
            </h2>
        }

        right={
          <>
            <p>
              Wenn keine Aussicht auf Heilung besteht, kann eine palliative
              Therapie das Wachstum des Tumors verlangsamen und die Symptome
              lindern.
            </p>
      

            <div className="grid grid-cols-3 gap-6 mt-6">
              {svgs.slice(0, 3).map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center"
                >
                  <div className="h-32 w-full flex items-center justify-center">
                    <img
                      src={item.src}
                      alt={item.text}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <p className="mt-2">{item.text}</p>
                </div>
              ))}
            </div>
            </>
        }
      />  

      {/* PANEL 2 */}
      <SplitPanel
        ref={remainingRef}
        left={
            <p>
              Spezielle Chemotherapien verlangsamen das Tumorwachstum.
              Schmerzmittel und kalorienreiches Essen reduzieren die Symptome.
            </p>
          }
        right={

          <div className="w-1/2 grid grid-cols-3 gap-6">
            {svgs.slice(3, 6).map((item, idx) => (
              <div
                key={idx + 3}
                className="flex flex-col items-center text-center"
              >
                <div className="h-32 w-full flex items-center justify-center">
                  <img
                    src={item.src}
                    alt={item.text}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <p className="mt-2">{item.text}</p>
              </div>
            ))}
          </div>
        }
      />
    </ScrollSection>
  );
};

export default Sectionzwoelf;
