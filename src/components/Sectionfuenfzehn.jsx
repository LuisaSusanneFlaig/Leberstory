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
      gsap.set(layout2Ref.current, { opacity: 0, x: 200 });
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
      tl.to(layout1Ref.current, { x: -200, opacity: 0, duration: 1 });

      // Layout 2 enters
      tl.to(layout2Ref.current, { opacity: 1, x: 0, duration: 0.8 });

      // Animate steps sequentially
      tl.to(".step-1", { opacity: 1, y: 0, duration: 0.6 });
      tl.to(".step-2", { opacity: 1, y: 0, duration: 0.6 });
      tl.to(".step-3", { opacity: 1, y: 0, duration: 0.6 });
      tl.to(".step-4", { opacity: 1, y: 0, duration: 0.6 });
      tl.to(".step-5", { opacity: 1, y: 0, duration: 0.6 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Layout 1 */}
      <div ref={layout1Ref} className="absolute grid grid-cols-2 pt-50">
          <div className="flex flex-col m-20">
        <h2>Das Ergebnis von Thomas's Geschichte</h2>
        <p>Thomas entscheidet sich für die chirurgische Entfernung der Tumore.
          Nachuntersuchungen haben ergeben, dass der Krebs weg ist.
        </p>
        </div>
          <div className="flex flex-col m-20">
        <img src="/src/images/Curative2.png" alt="curative2" />
        </div>
      </div>

{/* Layout 2 */}
<div ref={layout2Ref} className="absolute inset-0 flex items-center p-20 gap-16">
  {/* Steps 1-4 on the left */}
  <div className="flex-1 flex flex-col justify-start gap-8">
    <div className="step step-1 self-start">
      <p>Gesündere Lebensweise jetzt durch:</p>
    </div>

    <div className="step step-2 flex items-center gap-4 self-start">
      <img src="/src/images/Smoking.png" alt="Aufhören zu rauchen" className="w-12 h-12" />
      <p>Aufhören zu rauchen</p>
    </div>

    <div className="step step-3 flex items-center gap-4 self-start">
      <img src="/src/images/Alcohol.png" alt="Weniger Alkohol konsumieren" className="w-12 h-12" />
      <p>Weniger Alkohol konsumieren</p>
    </div>

    <div className="step step-4 flex items-center gap-4 self-start">
      <img src="/src/images/sport.png" alt="Regelmäßig Sport treiben" className="w-12 h-12" />
      <p>Regelmäßig Sport treiben</p>
    </div>
  </div>

  {/* Step 5 on the right */}
  <div className="step step-5 flex-1 flex justify-center items-center">
    <img src="/src/images/Thomas_healthy.png" alt="Thomas" className="max-w-full h-auto" />
  </div>
</div>


    </section>
  );
};

export default Sectionfuenfzehn;
