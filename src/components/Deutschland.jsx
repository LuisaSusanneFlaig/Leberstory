import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ScrollSection from './Layout/ScrollSection.jsx';
import SplitPanel from './Layout/SplitPanel.jsx';
import CenterPanel from './Layout/CenterPanel.jsx';

gsap.registerPlugin(ScrollTrigger);

const Deutschland = () => {
  const containerRef = useRef(null);

  const panel1= useRef(null);


  const panel2 = useRef(null);


  const panel3 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          panel2.current,
          panel3.current,
        ],
        { opacity: 0 }
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=400%",
          scrub: true,
          pin: true,
        },
      });

      /* PANEL 1 RAUS */
      tl.to([panel1.current], {
        x: -100,
        opacity: 0,
        duration: 1,
      });

      /* PANEL 2 REIN */
      tl.fromTo(
        panel2.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 1 }
      );


      /* PANEL 2 RAUS */
      tl.to([panel2.current], {
        x: -100,
        opacity: 0,
        duration: 1,
      });

      /* PANEL 3 REIN */
      tl.fromTo(
        panel3.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 1 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <ScrollSection id="deutschland" ref={containerRef}>
      {/* PANEL 1 */}
      <SplitPanel
        ref={panel1}
        left={
          <p>
            In Deutschland werden jährlich etwa 8.790 neue Fälle von Leberkrebs diagnostiziert.
          </p>
        }
        right={
          <p>
            In den letzten 35 Jahren hat sich die Zahl der Neuerkrankungen verdoppelt –
            ein klarer Handlungsbedarf für Prävention und Früherkennung.
          </p>
        }
      />

      {/* PANEL 2 */}
      <SplitPanel
        ref={panel2}
        left={
          <p>
            Auffällig ist dabei das Geschlechterverhältnis: Männer sind dreimal häufiger betroffen als Frauen.
          </p>
        }
        right={
          <img
            src="/src/images/img1.png"
            alt="Statistik"
            className="max-w-full max-h-full"
          />
        }
      />

      {/* PANEL 3 */}
      <CenterPanel ref={panel3}>
        <p>
          Das durchschnittliche Alter bei der Erstdiagnose von Leberkrebs
          unterscheidet sich leicht zwischen den Geschlechtern. Bei Männern
          liegt das Durchschnittsalter der Diagnose bei 69,9 Jahren, während
          es bei Frauen mit 72,1 Jahren geringfügig höher ist.
        </p>
      </CenterPanel>
    </ScrollSection>
  );
};

export default Deutschland;
