import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Line from '/src/images/Line.svg'; 
import ScrollSection from './Layout/ScrollSection.jsx';
import SplitPanel from "./Layout/SplitPanel.jsx";
import CenterPanel from './Layout/CenterPanel.jsx'; 

const Sectionelf = () => {
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
      id="sectionelf"
      ref={containerRef}
    >
      {/* Layout 1 */}
      <SplitPanel
        ref={layout1Ref}
        left={
          <>
        <h2>Heilende Behandlung für Leberkrebs
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
        <p>Bei chirurgischen Eingriffen werden Teile der Leber, die Tumore enthalten, entfernt.</p>
        <img src="/src/images/Curative2.png" />   
        </> 
         }
      />

      {/* Layout 2 */}
      <SplitPanel
        ref={layout2Ref}
        left={

        <p>Tumore können auch mit einer Ablation behandelt werden.
        Dabei wird eine Nadel in den Tumor eingeführt, durch die Hitze oder Mikrowellen geleitet werden, um den Tumor zu zerstören.</p>
        }
        right={
        <img src="/src/images/Curative3.png" />
        }
      />

      {/* Layout 3 */}
      <SplitPanel
        ref={layout3Ref}
        left={
        <p>Darüber hinaus können winzige, mit radioaktivem Material gefüllte Kügelchen in die Lebergefäße eingebracht werden.
        Der Tumor wird lokal von innen bestrahlt, was zum Absterben der Tumorzellen führt.</p>
        }
        right={

        <img src="/src/images/Curative4.png" />
          } 
      />

    </ScrollSection>
  );
}   
export default Sectionelf;