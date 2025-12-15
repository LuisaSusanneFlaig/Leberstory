import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Definition = () => {
  const triggerRef = useRef(null);
  const headlineRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=100%",
          scrub: true,
          pin: true,
        },
      });

      // Text raus
      tl.to([headlineRef.current, textRef.current], {
        opacity: 0,
        x: (i) => (i === 0 ? -100 : 100),
        duration: 1,
      });

      // Bild rein (horizontal)
      tl.fromTo(
        imageRef.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 1 },
        "<"
      );
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="definition"
      ref={triggerRef}
      className="relative h-screen overflow-hidden"
    >
      {/* Zweispaltiger Text */}
      <div className="relative z-10 flex flex-col md:flex-row gap-8 px-4 md:px-16 h-full items-center">
        <h2
          ref={headlineRef}
          className="text-xl font-medium md:w-1/2"
        >
          Wie findet man zurück ins Leben?
        </h2>

        <p
          ref={textRef}
          className="text-lg md:text-xl md:w-1/2"
        >
          Thomas ist ein 52-jähriger Mann, bei dem bei einer
          Routineuntersuchung Leberkrebs diagnostiziert wurde...
        </p>
      </div>

      {/* Bild */}
      <div
        ref={imageRef}
        className="absolute inset-0 flex items-center justify-center opacity-0"
      >
        <img
          src="/src/images/Thomas_ill.png"
          alt="Thomas"
          className="w-2/3 max-w-xl"
        />
      </div>
    </section>
  );
};

export default Definition;
