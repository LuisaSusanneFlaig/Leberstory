import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Sectionfuenfzehn = () => {
const containerRef = useRef(null);
  const layout1Ref = useRef(null);
  const layout2Ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // Initial states
      gsap.set(layout2Ref.current, { opacity: 0, x: -200 });
      gsap.set(".step", { opacity: 0, y: 30 });

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
      tl.to(layout1Ref.current, {
        x: -200,
        opacity: 0,
        duration: 1,
      });

      // Layout 2 enters (container only)
      tl.to(layout2Ref.current, {
        opacity: 1,
        x: 0,
        duration: 0.6,
      });

      // STEP 1 — text + smiley
      tl.to(".step-1", {
        opacity: 1,
        y: 0,
        duration: 0.5,
      });

      // STEP 2 — Stadium I text + woman/man images
      tl.to(".step-2", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2,
      });

      // STEP 3 — Stadium IV text + image
      tl.to(".step-3", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2,
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="sectionneun"
      ref={containerRef}
      className="relative h-screen overflow-hidden"
    >
      {/* LAYOUT 1 */}
      <div
        ref={layout1Ref}
        className="absolute inset-0 w-full flex p-20"
      >
        <div className="h-full flex-col items-center justify-center p-20">
          <h2>Das Ergebnis von Thomas's Geschichte</h2>
        </div>

        <div className="h-full flex-row items-center justify-center p-20">
          <p>
           Thomas entscheidet sich für die chirurgische Entfernung der Tumore.
          </p>
          <p>Nachuntersuchungen haben ergeben, dass der Krebs weg ist.</p>

          <div className="h-full flex-col justify-center p-20">
            <img
              src="src/images/Curative2.png"
              alt="curative2"
            />
          </div>
        </div>
      </div>

      {/* LAYOUT 2 */}
      <div
        ref={layout2Ref}
        className="absolute inset-0 grid grid-cols-2 gap-8 items-center"
      >
        {/* STEP 1 */}
        <div className="grid grid-cols-2 items-center gap-4 step step-1">
          <p>Gesündere Lebensweise jetzt durch:</p>
          <img src="/src/images/Smoking.png" alt="smiley healthy" />
          <p>Aufhören zu rauchen</p>
        <img src="/src/images/Alcohol.png" alt="smiley healthy" />
          <p>Weniger Alkohol konsumieren</p>
        <img src="/src/images/sport.png" alt="smiley healthy" />
          <p>Regelmäßig Sport treiben</p>
        </div>


        <div className="grid gap-6">

          {/* STEP 2 IMAGES */}
          <div className="grid grid-cols-2 gap-8 items-center step step-2">
            <div className="flex flex-col items-center">
            </div>

            <div className="flex flex-col items-center">
            </div>
          </div>

          {/* STEP 3 IMAGE */}
          <div className="flex items-center gap-4 step step-3">
            <img
              src="/src/images/Thomas_healthy.png"
              alt="Thomas"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Sectionfuenfzehn;