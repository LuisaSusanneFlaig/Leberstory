import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Deutschland = () => {
  const containerRef = useRef(null);

  const panel1Left = useRef(null);
  const panel1Right = useRef(null);

  const panel2Left = useRef(null);
  const panel2Right = useRef(null);

  const panel3 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          panel2Left.current,
          panel2Right.current,
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
      tl.to([panel1Left.current, panel1Right.current], {
        x: -100,
        opacity: 0,
        duration: 1,
      });

      /* PANEL 2 REIN */
      tl.fromTo(
        panel2Left.current,
        { x: "-100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 1 }
      );
      tl.fromTo(
        panel2Right.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 1 },
        "<"
      );

      /* PANEL 2 RAUS */
      tl.to([panel2Left.current, panel2Right.current], {
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
    <section id="deutschland" ref={containerRef} className="relative h-screen overflow-hidden">
      {/* PANEL 1 */}
      <div className="absolute inset-0 flex pt-50">
        <div
          ref={panel1Left}
          className="w-1/2 h-full flex justify-center m-20"
        >
          <p>In Deutschland werden jährlich etwa 8.790 neue Fälle von Leberkrebs diagnostiziert.</p>
        </div>
        <div
          ref={panel1Right}
          className="w-1/2 h-full flex  justify-center m-20 "
        >
          <p>
            In den letzten 35 Jahren hat sich die Zahl der Neuerkrankungen verdoppelt –
            ein klarer Handlungsbedarf für Prävention und Früherkennung.
          </p>
        </div>
      </div>

      {/* PANEL 2 */}
      <div className="absolute inset-0 flex pt-50">
        <div
          ref={panel2Left}
          className="w-1/2 h-full flex  justify-center m-20"
        >
          <p>Auffällig ist dabei das Geschlechterverhältnis: Männer sind dreimal häufiger betroffen als Frauen.</p>
        </div>
        <div
          ref={panel2Right}
          className="w-1/2 h-full flex items-center justify-center"
        >
          <img
            src="/src/images/img1.png"
            alt="Statistik"
            className="max-w-full max-h-full"
          />
        </div>
      </div>

      {/* PANEL 3 */}
      <div
        ref={panel3}
        className=" absolute inset-0 flex  justify-center pt-50"
      >
        <p className="m-20">
         Das durchschnittliche Alter bei der Erstdiagnose von Leberkrebs unterscheidet sich leicht zwischen den Geschlechtern. Bei Männern liegt das Durchschnittsalter der Diagnose bei 69,9 Jahren, während es bei Frauen mit 72,1 Jahren geringfügig höher ist.
        </p>
      </div>
    </section>
  );
};

export default Deutschland;
