import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const svgs = [
  { src: "/src/images/svga.svg", text: "Abnehmen ohne Anstrengung" },
  { src: "/src/images/svgb.svg", text: "Appetitlosigkeit" },
  { src: "/src/images/svgh.svg", text: "Erhöhte Temperatur" },
  { src: "/src/images/svgd.svg", text: "Schmerzen im Oberbauch" },
  { src: "/src/images/svgj.svg", text: "Schwäche und Müdigkeit" },
  { src: "/src/images/svgf.svg", text: "Schwellungen des Bauches" },
  { src: "/src/images/svgi.svg", text: "Gelbe Hautverfärbung" },
];

const Sectionzwoelf = () => {
  const containerRef = useRef(null);
  const initialRef = useRef(null);
  const remainingRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial positions
      gsap.set(initialRef.current, { opacity: 1, x: 0 });
      gsap.set(remainingRef.current, { opacity: 0, x: 100 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%",
          scrub: true,
          pin: true,
        },
      });

      // Animate initial content out
      tl.to(initialRef.current, { opacity: 0, x: -200, duration: 1 });

      // Animate remaining content in
      tl.to(remainingRef.current, { opacity: 1, x: 0, duration: 1 }, "<");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="sectionzwoelf"
      ref={containerRef}
      className="relative h-screen overflow-hidden"
    >
      {/* Initial content */}
      <div
        ref={initialRef}
        className="absolute inset-0 flex  justify-center pt-50"
      >
        <div className="grid grid-cols-2 m-20">
          <div>
            <h2>
              Palliative Behandlung für Leberkrebs
            </h2>
          </div>

          <div className="flex flex-col ">
            <p>
              Wenn keine Aussicht auf Heilung besteht, kann eine palliative
              Therapie das Wachstum des Tumors verlangsamen und die Symptome
              lindern.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {svgs.slice(0, 3).map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <img src={item.src} alt={item.text} className="max-w-xs" />
                  <p className="mt-2">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Remaining content */}
      <div
        ref={remainingRef}
        className="absolute inset-0 flex flex-col pt-50"
      >
        <div className="flex flex-row   m-20">         
             <div className="w-1/2 flex flex-col ">
            <p>Spezielle Chemotherapien verlangsamen das Tumorwachstum.</p>
            <p>Schmerzmittel und kalorienreiches Essen reduzieren die Symptome.</p>
          </div>
          <div className="w-1/2 flex flex-row ">
            {svgs.slice(3, 6).map((item, idx) => (
              <div key={idx + 3} className="flex flex-col items-center text-center">
                <img src={item.src} alt={item.text} className="max-w-xs" />
                <p className="mt-2">{item.text}</p>
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
};

export default Sectionzwoelf;
