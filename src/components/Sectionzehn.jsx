import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Line from '/src/images/Line.svg'; 
import ScrollSection from './Layout/ScrollSection.jsx';
import SplitPanel from "./Layout/SplitPanel.jsx";

gsap.registerPlugin(ScrollTrigger);

const Sectionzehn = () => {

  
  const containerRef = useRef(null);

  // Individual refs for each layout
  const layout1Ref = useRef(null);
  const layout2Ref = useRef(null);
  const layout3Ref = useRef(null);


  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial opacity for all layouts except the first
      gsap.set([layout2Ref.current, layout3Ref.current ], { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=400%",
          scrub: true,
          pin: true,
        },
      });

      // Layout 1 scrolls out to the left
      tl.to(layout1Ref.current, { x: -200, opacity: 0, duration: 1 });

      // Layout 2 slides in from the left
      tl.fromTo(layout2Ref.current, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });

      // Layout 2 scrolls out to the left
      tl.to(layout2Ref.current, { x: -200, opacity: 0, duration: 1 });

      // Layout 3 slides in from the left
      tl.fromTo(layout3Ref.current, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });



    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <ScrollSection
      id="sectionzehn"
      ref={containerRef}
    >
      {/* Layout 1 */}
      <SplitPanel
        ref={layout1Ref}
        left={
          <>
        <h2>Wie wird Leberkrebs behandelt?
          <img 
            src={Line} 
            alt="Decorative line" 
            className="mt-4 mb-6"
            />
        </h2>
        </>
        }
        right={
          <>
        <p>Die Behandlungsplanung hängt davon ab, wie weit die Krankheit  fortgeschritten ist und in welchem Zustand sich die Leber befindet.</p>
        <img src="/src/images/Behandlung.png"  />
        </>
        }
      />

      {/* Layout 2 */}
      <SplitPanel
        ref={layout2Ref}

        left={
          <>
        <p> Außerdem spielen das Alter und der allgemeine Gesundheitszustand der Patienten eine wichtige Rolle.
        Abhängig davon gibt es heilende und palliative Behandlungen.</p>
        </>
        }
        right={
          <>
                  <p>Der Grad der Veränderung lässt sich nur durch eine mikroskopische Untersuchung der Krebszellen feststellen.
        Bei einer Biopsie wird eine kleine Probe des Lebergewebes entnommen und unter dem Mikroskop untersucht.</p>
       </> }
      />


      {/* Layout 3 */}
      <SplitPanel
        ref={layout3Ref}
        left={
 
        <p>Für die Therapieplanung ist es wichtig, das Ausmaß der Veränderung der Zellen zu verstehen.
      Der Schweregrad eines Tumors hängt davon ab, wie stark sich die Zellen bereits bösartig verändert haben.</p>
        }
        right={

        <img src="/src/images/Biopsie.png"/>

          }
          />

    </ScrollSection>
  );
};
export default Sectionzehn;

