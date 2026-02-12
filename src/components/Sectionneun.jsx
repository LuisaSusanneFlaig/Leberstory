import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ScrollSection from './Layout/ScrollSection.jsx';
import SplitPanel from './Layout/SplitPanel.jsx';
import CenterPanel from './Layout/CenterPanel.jsx';
import Line from '/src/images/Line.svg'; 

gsap.registerPlugin(ScrollTrigger);

const Sectionneun = () => {
  const containerRef = useRef(null);

  // Individual refs for each layout
  const layout1Ref = useRef(null);
  const layout2Ref = useRef(null);
  const layout3Ref = useRef(null);
  const layout4Ref = useRef(null);
  const layout5Ref = useRef(null);
  const layout6Ref = useRef(null);
  const layout7Ref = useRef(null);
  const layout8Ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial opacity for all layouts except the first
      gsap.set([layout2Ref.current, layout3Ref.current, layout4Ref.current, layout5Ref.current, layout6Ref.current, layout7Ref.current, layout8Ref.current], { opacity: 0 });

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

      tl.fromTo(layout8Ref.current, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });

      tl.to(layout8Ref.current, { x: -200, opacity: 0, duration: 1 });

      // Layout 2 slides in from the left
      tl.fromTo(layout2Ref.current, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });

      // Layout 2 scrolls out to the left
      tl.to(layout2Ref.current, { x: -200, opacity: 0, duration: 1 });

      // Layout 3 slides in from the left
      tl.fromTo(layout3Ref.current, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });

      // Layout 3 scrolls out to the left
      tl.to(layout3Ref.current, { x: -200, opacity: 0, duration: 1 });

      // Layout 4 slides in from the left
      tl.fromTo(layout4Ref.current, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });
       
      // Layout 4 scrolls out to the left
      tl.to(layout4Ref.current, { x: -200, opacity: 0, duration: 1 });

      // Layout 5 slides in from the left
        tl.fromTo(layout5Ref.current, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });
        // Layout 5 scrolls out to the left
        tl.to(layout5Ref.current, { x: -200, opacity: 0, duration: 1 });
        // Layout 6 slides in from the left
        tl.fromTo(layout6Ref.current, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });
        // Layout 6 scrolls out to the left
        tl.to(layout6Ref.current, { x: -200, opacity: 0, duration: 1 });
        // Layout 7 slides in from the left
        tl.fromTo(layout7Ref.current, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });


    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <ScrollSection
      id="sectionneun"
      ref={containerRef}
    >
      {/* Layout 1 */}
      <SplitPanel
        ref={layout1Ref}
        left={
          <>
        <h2>Wie wird Leberkrebs diagnostiziert?
                               <img 
                    src={Line} 
                    alt="Decorative line" 
                    className="mt-4 mb-6"
                    />
        </h2>

       
        </>
        }
        right={
          <p>Die Diagnostik soll klären, wie weit die Erkrankung fortgeschritten ist. </p>
        }
       />


        {/* Layout 8 */}
        <CenterPanel ref={layout8Ref} >

               <p>1. Sind Tumore in der Leber vorhanden? Wenn ja, wie viele?</p>
            <img src="/src/images/LT1.png" alt="Layout 1"  />

        </CenterPanel>
       

      {/* Layout 2 */}
      <SplitPanel
        ref={layout2Ref}
        className="absolute inset-0 w-full flex pt-50"
        left={
        <p> Zum Auffinden von Lebertumoren  können verschiedene bildgebende Verfahren eingesetzt werden, darunter:</p>
        }
        right={
          <>
        <img src="/src/images/Ultrasound.png" alt="Layout 2"  />
        <p>Ultraschall</p>
        </>
        }
      />

      {/* Layout 3 */}
      <CenterPanel ref={layout3Ref}>
        <img src="/src/images/CT.png" alt="Layout 3" className="max-w" />
        <p>CT</p>
      </CenterPanel>

      {/* Layout 4 */}
      <CenterPanel ref={layout4Ref}>
        <img src="/src/images/MRI.png" alt="Layout 4" className="max-w" />
        <p>MRT</p>
      </CenterPanel>

        {/* Layout 5 */}
        <CenterPanel ref={layout5Ref} >

          <p>2. Wo genau befinden sich die Tumore?</p>
            <img src="/src/images/LT2.png" alt="Layout 1" />
        </CenterPanel>
        {/* Layout 6 */}
        <CenterPanel ref={layout6Ref} >
          <p>3. Wie groß sind die Tumore?</p>
            <img src="/src/images/LT3.png" alt="Layout 1"  />
        </CenterPanel>
        {/* Layout 7 */}
        
        <CenterPanel ref={layout7Ref} >
               <p>4. Was ist der genaue Typ?</p>
            <img src="/src/images/LT4.png" alt="Layout 1"  />

        </CenterPanel>

    </ScrollSection>
  );
};

export default Sectionneun;
