import React, { useLayoutEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const svgs = [
  { src: "/src/images/Prevention.png", text: "Impfung gegen Hepatitis" },
  { src: "/src/images/Alcohol.png", text: "Alkoholkonsum einschränken" },
  { src: "/src/images/Wheight.png", text: "Gewicht in einem gesunden Bereich halten" },
  { src: "/src/images/Smoking.png", text: "Aufhören zu rauchen" },
];

const Sectionvierzehn = () => {
  const sectionRef = useRef(null);
  const introRef = useRef(null);
  const svgRefs = useRef([]);
  svgRefs.current = [];

  const addToRefs = useCallback((el) => {
    if (el && !svgRefs.current.includes(el)) {
      svgRefs.current.push(el);
    }
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states
      gsap.set(introRef.current, { x: 0, opacity: 1 });
      gsap.set(svgRefs.current, { x: 120, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=400%",
          scrub: true,
          pin: true,
        },
      });

      // 1️⃣ Slide intro content out to the left
      tl.to(introRef.current, {
        xPercent: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      });

      // 2️⃣ Animate SVGs in from the right
      tl.to(
        svgRefs.current,
        {
          x: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.3"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="sectionvierzehn"
      className="relative h-screen overflow-hidden"
    >
      {/* INTRO CONTENT */}
      <div ref={introRef} className="absolute grid grid-cols-2 pt-50">
      <div className="flex flex-col m-20">
        <h2>
          Wie kann ich Leberkrebs vorbeugen?
        </h2>
        </div>
        <div className="flex flex-col m-20">
          <p>Einige Risikofaktoren für Leberkrebs sind vermeidbar:</p>
          <ul className="list-disc m-10">
            <li>Hepatitis B</li>
            <li>Alkoholkonsum</li>
            <li>Übergewicht</li>
            <li>Rauchen</li>
          </ul>
        </div>
      </div>

      {/* SVG GRID */}
      <div className="absolute inset-0 flex items-center justify-center p-20">
        <div className="grid grid-cols-2 gap-8">
          {svgs.map((item, idx) => (
            <div
              key={idx}
              ref={addToRefs}
              className="flex flex-col items-center text-center"
            >
              <div className="h-32 w-full flex items-center justify-center">
                <img src={item.src} alt={item.text} className="max-h-full max-w-full object-contain" />
              </div>
              <p className="mt-4">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectionvierzehn;
