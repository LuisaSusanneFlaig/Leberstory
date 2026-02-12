import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Line from '/src/images/Line.svg';
import ScrollSection from './Layout/ScrollSection.jsx';
import SplitPanel from "./Layout/SplitPanel.jsx";

gsap.registerPlugin(ScrollTrigger);

const Sectionfuenfzehn = () => {
  const containerRef = useRef(null);
  const layout1Ref = useRef(null);
  const layout2Ref = useRef(null);
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);
  const step4Ref = useRef(null);
  const step5Ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states
      gsap.set(layout2Ref.current, { opacity: 0, x: 200 });
      gsap.set(step1Ref.current, { opacity: 0, x: 30 });
      gsap.set(step2Ref.current, { opacity: 0, x: 30 });
      gsap.set(step3Ref.current, { opacity: 0, x: 30 });
      gsap.set(step4Ref.current, { opacity: 0, x: 30 });
      gsap.set(step5Ref.current, { opacity: 0, x: 30 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=400%",
          scrub: true,
          pin: true,
        },
      });

      // Layout 1 exits
      tl.to(layout1Ref.current, { x: -200, opacity: 0, duration: 1 });

      // Layout 2 enters
      tl.to(layout2Ref.current, { opacity: 1, x: 0, duration: 0.8 });

      // Animate steps sequentially
      tl.to(step1Ref.current, { opacity: 1, x: 0, duration: 0.6 });
      tl.to(step2Ref.current, { opacity: 1, x: 0, duration: 0.6 });
      tl.to(step3Ref.current, { opacity: 1, x: 0, duration: 0.6 });
      tl.to(step4Ref.current, { opacity: 1, x: 0, duration: 0.6 });
      tl.to(step5Ref.current, { opacity: 1, x: 0, duration: 0.6 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <ScrollSection
      id="sectionfuenfzehn"
      ref={containerRef}
    >
      {/* Layout 1 */}
      <SplitPanel ref={layout1Ref} left={

        <h2>Das Ergebnis von Thomas's Geschichte
                                                                                       <img 
                                                                            src={Line} 
                                                                            alt="Decorative line" 
                                                                            className="mt-4 mb-6"
                                                                            />
        </h2>
        } right={
       
 <p>Thomas entscheidet sich für die chirurgische Entfernung der Tumore.
          Nachuntersuchungen haben ergeben, dass der Krebs weg ist.
        </p>
        }
      />
{/* Layout 2 */}
<SplitPanel ref={layout2Ref} 
left={

    <>
      <p ref={step1Ref}>Gesündere Lebensweise jetzt durch:    
        <div ref={step2Ref} className="flex items-center gap-4 ">
      <img src="/src/images/Smoking.png" alt="Aufhören zu rauchen" className="w-12 h-12" />
      <p>Aufhören zu rauchen</p>
    </div>

    <div ref={step3Ref} className="flex items-center gap-4 ">
      <img src="/src/images/Alcohol.png" alt="Weniger Alkohol konsumieren" className="w-12 h-12" />
      <p>Weniger Alkohol konsumieren</p>
    </div>

    <div ref={step4Ref} className=" flex items-center gap-4 ">
      <img src="/src/images/sport.png" alt="Regelmäßig Sport treiben" className="w-12 h-12" />
      <p>Regelmäßig Sport treiben</p>
    </div></p>

    </>
  } 
  right={

    <img ref={step5Ref} src="/src/images/Thomas_healthy.png" alt="Thomas" className="max-w-full h-auto" />
        }
      />  

    </ScrollSection>
  );
};

export default Sectionfuenfzehn;
