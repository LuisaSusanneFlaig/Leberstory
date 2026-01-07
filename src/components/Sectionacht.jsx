import React, { useLayoutEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const svgs = [
  { src: "/src/images/svga.svg", text: "Abnehmen ohne Anstrengung" },
  { src: "/src/images/svgb.svg", text: "Appetitlosigkeit" },
  { src: "/src/images/svgc.svg", text: "Erhöhte Temperatur" },
  { src: "/src/images/svgd.svg", text: "Schmerzen im Oberbauch" },
  { src: "/src/images/svge.svg", text: "Schwäche und Müdigkeit" },
  { src: "/src/images/svgf.svg", text: "Schwellungen des Bauches" },
  { src: "/src/images/svgg.svg", text: "Gelbe Hautverfärbung" },
];

const Sectionacht = () => {
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
      gsap.set(svgRefs.current, { opacity: 0, x: 120 });
      gsap.set(introRef.current, { x: 0 });

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
        duration: 1,
        ease: "power2.inOut",
      });

      // 2️⃣ Animate SVG cards in from the right
      tl.to(
        svgRefs.current,
        {
          opacity: 1,
          x: 0,
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
      id="sectionacht"
      className="relative h-screen overflow-hidden"
    >
      {/* INTRO CONTENT */}
      <div
        ref={introRef}
        className="absolute inset-0 flex justify-center pt-20"
      >
        <h2 className="w-1/2 m-20">
          Wie macht sich Leberkrebs bemerkbar?
        </h2>
        <div className="w-1/2 m-20">
          <p>
            Da die Leber nicht schmerzempfindlich ist, verursacht Leberkrebs
            in der Regel zunächst keine Symptome.
          </p>
          <p>
            Im fortgeschrittenen Stadium äußert sich Leberkrebs auf
            verschiedene Weise.
          </p>
        </div>
      </div>

      {/* SVG GRID */}
      <div className="absolute inset-0 flex items-center justify-center p-20">
        <div className="grid grid-cols-3 gap-8">
          {/* FIRST ROW */}
          {svgs.slice(0, 3).map((item, idx) => (
            <div
              key={idx}
              ref={addToRefs}
              className="flex flex-col items-center text-center"
            >
              {/* ICON SLOT */}
              <div className="h-32 w-full flex items-center justify-center">
                <img
                  src={item.src}
                  alt={item.text}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* TEXT */}
              <p className="mt-4">{item.text}</p>
            </div>
          ))}

          {/* SECOND ROW */}
          <div className="col-span-3 grid grid-cols-4 gap-8">
            {svgs.slice(3).map((item, idx) => (
              <div
                key={idx + 3}
                ref={addToRefs}
                className="flex flex-col items-center text-center"
              >
                <div className="h-32 w-full flex items-center justify-center">
                  <img
                    src={item.src}
                    alt={item.text}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <p className="mt-4">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectionacht;
