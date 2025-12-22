import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const svgs = [
  { src: "/src/images/Prevention.png", text: "Impfung gegen Hepatitis"},
  { src: "/src/images/Alcohol.png", text: "Alkoholkonsum einschränken" },
  { src: "/src/images/Wheight.png", text: "Gewicht in einsem gesunden Bereich halten" },
  { src: "/src/images/Smoking.png", text: "Aufhören zu rauchen " },
];


const Sectionvierzehn = () => {
     const containerRef = useRef(null);
  const h2Ref = useRef(null);
  const initialTextRef = useRef(null);
  const svgRefs = useRef([]);
  svgRefs.current = [];

  const addToRefs = (el) => {
    if (el && !svgRefs.current.includes(el)) {
      svgRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    // Set initial states
    gsap.set(svgRefs.current, { opacity: 0, x: 100 }); // SVGs start off to the right
    gsap.set([h2Ref.current, initialTextRef.current], { x: 0, opacity: 1 }); // initial text starts normally

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=400%",
        scrub: true,
        pin: true,
      },
    });

    // Move initial text out to the left
    tl.to([h2Ref.current, initialTextRef.current], {
      opacity: 0,
      x: -200, // move further left for clear exit
      duration: 1,
    });

    // Move SVGs in from the right with stagger
    tl.to(svgRefs.current, {
      opacity: 1,
      x: 0, // come to original position
      duration: 0.5,
      stagger: 0.2,
    });
  }, containerRef);

  return () => ctx.revert();
}, []);
  return (
    <section
      id="sectionacht"
      ref={containerRef}
      className="relative h-screen overflow-hidden"
    >
      {/* Initial content */}
      <div className="absolute inset-0 flex  justify-center pt-100">
        <h2 ref={h2Ref} className="mb-8 text-3xl font-bold ">
          Wie kann ich Leberkrebs vorbeugen?
        </h2>
        <div ref={initialTextRef} className="flex-col space-y-4  max-w-2xl">
          <p>
           Einige Risikofaktoren für Leberkrebs sind vermeidbar:
          </p>
          <p>
            Hepatitis B, Alkoholkonsum, Übergewicht, Rauchen.
          </p>
        </div>
      </div>

      {/* SVG grid content */}
      <div className="absolute inset-0 flex items-center justify-center p-20">
        <div className="grid grid-cols-3 gap-8">
          {svgs.slice(0, 3).map((item, idx) => (
            <div key={idx} ref={addToRefs} className="flex flex-col items-center text-center">
              <img src={item.src} alt={`SVG ${idx + 1}`} className="max-w-xs" />
              <p className="mt-2">{item.text}</p>
            </div>
          ))}
          <div className="col-span-3 grid grid-cols-2 gap-8">
            {svgs.slice(3).map((item, idx) => (
              <div key={idx + 3} ref={addToRefs} className="flex flex-col items-center text-center">
                <img src={item.src} alt={`SVG ${idx + 4}`} className="max-w-xs" />
                <p className="mt-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Sectionvierzehn;

