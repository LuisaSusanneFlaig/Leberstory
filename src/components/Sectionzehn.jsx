import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

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
      tl.fromTo(layout2Ref.current, { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });

      // Layout 2 scrolls out to the left
      tl.to(layout2Ref.current, { x: -200, opacity: 0, duration: 1 });

      // Layout 3 slides in from the left
      tl.fromTo(layout3Ref.current, { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });



    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="sectionneun"
      ref={containerRef}
      className="relative h-screen overflow-hidden"
    >
      {/* Layout 1 */}
      <div
        ref={layout1Ref}
        className="absolute inset-0  w-full flex pt-50"
      >
        <div className="w-1/2 flex flex-col m-20">
        <h2>Wie wird Leberkrebs behandelt?</h2>
        </div>
        <div className="w-1/2 flex flex-col m-20">
        <p>Die Behandlungsplanung hängt davon ab, wie weit die Krankheit  fortgeschritten ist und in welchem Zustand sich die Leber befindet.</p>
        <img src="/src/images/Behandlung.png" alt="Layout 1" className="w-3/4" />
        </div>
      </div>

      {/* Layout 2 */}
      <div
        ref={layout2Ref}
        className="absolute inset-0 w-full flex pt-50" 
      >
        <div className=" flex flex-col m-20">
        <p> Außerdem spielen das Alter und der allgemeine Gesundheitszustand der Patienten eine wichtige Rolle.</p>
        <p>Abhängig davon gibt es heilende und palliative Behandlungen.</p>
        </div>
        <div className="  flex flex-col m-20">
        <p>Der Grad der Veränderung lässt sich nur durch eine mikroskopische Untersuchung der Krebszellen feststellen.</p>
        <p>Bei einer Biopsie wird eine kleine Probe des Lebergewebes entnommen und unter dem Mikroskop untersucht.</p>
        </div>
      </div>

      {/* Layout 3 */}
      <div
        ref={layout3Ref}
        className="absolute inset-0 w-full flex pt-50"
      >
        <div className=" w-1/3flex flex-col m-20">
        <p>Für die Therapieplanung ist es wichtig, das Ausmaß der Veränderung der Zellen zu verstehen.</p>
        <p>Der Schweregrad eines Tumors hängt davon ab, wie stark sich die Zellen bereits bösartig verändert haben.</p>
        </div>
        <div className=" w-2/3 flex flex-col m-20">
        <img src="/src/images/Biopsie.png" alt="Layout 3" className="max-w" />
        </div>
      </div>

    </section>
  );
};
export default Sectionzehn;

