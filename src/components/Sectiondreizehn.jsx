import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Sectiondreizehn = () => {
  const containerRef = useRef(null);
  const layout1Ref = useRef(null);
  const layout2Ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states
      gsap.set(layout2Ref.current, { opacity: 0, x: -200 });
      gsap.set(".step", { opacity: 0, y: 30 });

      // Timeline for pinned scroll animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%",
          scrub: true,
          pin: true,
        },
      });

      // Layout 1 exits
      tl.to(layout1Ref.current, { x: -200, opacity: 0, duration: 1 });

      // Layout 2 enters
      tl.to(layout2Ref.current, { opacity: 1, x: 0, duration: 0.6 });

      // STEP 1
      tl.to(".step-1", { opacity: 1, y: 0, duration: 0.5 });

      // STEP 2 TEXT
      tl.to(".step-2-text", { opacity: 1, y: 0, duration: 0.5 });

      // STEP 2 IMAGES
      tl.to(".step-2-images", { opacity: 1, y: 0, duration: 0.5, stagger: 0.2 });

      // STEP 3 TEXT
      tl.to(".step-3-text", { opacity: 1, y: 0, duration: 0.5 });

      // STEP 3 IMAGE
      tl.to(".step-3-image", { opacity: 1, y: 0, duration: 0.5 });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="sectionneun"
      ref={containerRef}
      className="relative h-screen overflow-hidden"
    >
      {/* LAYOUT 1 */}
      <div
        ref={layout1Ref}
        className="absolute inset-0 grid grid-cols-2 gap-8 pt-50"
      >
        <div className="flex flex-col m-20">
          <h2>Prognose von Leberkrebs</h2>
        </div>
        <div className="flex flex-col m-20">
          <div>
            <p>Das hängt vom Stadium des Krebses und dem Zustand der Leber ab.</p>
            <p>5 Jahres Überlebensrate:</p>
          </div>
          <div className="flex flex-col m-20">
            <h2>18%</h2>
            <img
              src="src/images/manandwoman.png"
              alt="manandwoman"
              className="w-32 h-auto"
            />
          </div>
        </div>
      </div>

      {/* LAYOUT 2 */}
      <div
        ref={layout2Ref}
        className="absolute inset-0 grid grid-cols-2 pt-50"
      >
        {/* STEP 1 */}
        <div className="grid grid-cols-2 m-20 step step-1">
          <p>Tumor entfernt:</p>
          <img
            src="/src/images/smiley.png"
            alt="smiley"
            className="w-1/2"
          />
        </div>

        <div className="grid m-20">
          {/* STEP 2 TEXT */}
          <p className="step step-2-text">
            Stadium I Tumore (einzelne Tumore, ohne Befall der Blutgefäße oder
            Lymphknoten und ohne Fernmetastasen)
          </p>

          {/* STEP 2 IMAGES */}
          <div className="grid grid-cols-2 step step-2-images">
            <div className="flex flex-row">
              <p>54%</p>
              <img
                src="/src/images/frau.png"
                alt="woman"
                className="w-16 h-16"
              />
            </div>
            <div className="flex flex-row">
              <p>62%</p>
              <img
                src="/src/images/mann.png"
                alt="man"
                className="w-16 h-16"
              />
            </div>
          </div>

          {/* STEP 3 TEXT */}
          <p className="step step-3-text">
            Stadium IV Tumore (Lymphknotenbefall oder Fernmetastasen)
          </p>

          {/* STEP 3 IMAGE */}
          <div className="flex flex-row step step-3-image">
            <p>2%</p>
            <img
              src="/src/images/manandwoman.png"
              alt="statistic"
              className="w-12 h-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectiondreizehn;
