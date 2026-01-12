import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Sectionneun = () => {
  const containerRef = useRef(null);

  // Individual refs for each layout
  const layout1Ref = useRef(null);
  const layout2Ref = useRef(null);
  const layout3Ref = useRef(null);
  const layout4Ref = useRef(null);
  const layout5Ref = useRef(null);
  const layout6Ref = useRef(null);
  const layout7Ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial opacity for all layouts except the first
      gsap.set([layout2Ref.current, layout3Ref.current, layout4Ref.current, layout5Ref.current, layout6Ref.current, layout7Ref.current  ], { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=400%",
          scrub: true,
          pin: true,
        },
      });

      // Layout 1 scrolls out to the left
      tl.to(layout1Ref.current, { x: -200, opacity: 0, duration: 1 });

      // Layout 2 slides in from the left
      tl.fromTo(layout2Ref.current, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });

      // Layout 2 scrolls out to the left
      tl.to(layout2Ref.current, { x: -200, opacity: 0, duration: 1 });

      // Layout 3 slides in from the left
      tl.fromTo(layout3Ref.current, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });

      // Layout 3 scrolls out to the left
      tl.to(layout3Ref.current, { x: -200, opacity: 0, duration: 1 });

      // Layout 4 slides in from the left
      tl.fromTo(layout4Ref.current, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });
       
      // Layout 4 scrolls out to the left
      tl.to(layout4Ref.current, { x: -200, opacity: 0, duration: 1 });

      // Layout 5 slides in from the left
        tl.fromTo(layout5Ref.current, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });
        // Layout 5 scrolls out to the left
        tl.to(layout5Ref.current, { x: -200, opacity: 0, duration: 1 });
        // Layout 6 slides in from the left
        tl.fromTo(layout6Ref.current, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });
        // Layout 6 scrolls out to the left
        tl.to(layout6Ref.current, { x: -200, opacity: 0, duration: 1 });
        // Layout 7 slides in from the left
        tl.fromTo(layout7Ref.current, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });


    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="sectionneun"
      ref={containerRef}
      className="relative h-screen overflow-hidden"
    >
      {/* Layout 1 */}
      <div
        ref={layout1Ref}
        className="absolute inset-0  w-full flex pt-50"
      >
        <div className="flex flex-col m-20">
        <h2>Wie wird Leberkrebs diagnostiziert?</h2>
        </div>
        <div className="flex flex-col m-20">
        <p>1. Sind Tumore in der Leber vorhanden? Wenn ja, wie viele?</p>
        <img src="/src/images/LT1.png" alt="Layout 1"  />
        </div>
      </div>

      {/* Layout 2 */}
      <div
        ref={layout2Ref}
        className="absolute inset-0 w-full flex pt-50"
      >
        <div className=" w-1/2 flex flex-col m-20">
        <p> Zum Auffinden von Lebertumoren  können verschiedene bildgebende Verfahren eingesetzt werden, darunter:</p>
        </div>
        <div className=" w-1/2 flex flex-col m-20 items-center">
        <img src="/src/images/Ultrasound.png" alt="Layout 2" className="w-1/2" />
        <p>Ultraschall</p>
        </div>
      </div>

      {/* Layout 3 */}
      <div
        ref={layout3Ref}
        className="absolute inset-0 flex flex-col items-center justify-center space-y-2 pt-50"
      >
        <img src="/src/images/CT.png" alt="Layout 3" className="max-w" />
        <p>CT</p>
      </div>

      {/* Layout 4 */}
      <div
        ref={layout4Ref}
        className="absolute inset-0 flex flex-col items-center justify-center space-y-2 pt-50"
      >
        <img src="/src/images/MRI.png" alt="Layout 4" className="max-w" />
        <p>MRT</p>
      </div>

        {/* Layout 5 */}
        <div ref={layout5Ref} className="absolute flex items-center justify-center inset-0 w-full flex pt-50">
          <div className="flex flex-col items-center">
          <p>2. Wo genau befinden sich die Tumore?</p>
            <img src="/src/images/LT2.png" alt="Layout 1" />
        </div>
        </div>
        {/* Layout 6 */}
        <div ref={layout6Ref} className="absolute flex items-center justify-center inset-0 w-full flex pt-50">
        <div className="flex flex-col items-center">
          <p>3. Wie groß sind die Tumore?</p>
            <img src="/src/images/LT3.png" alt="Layout 1"  />
        </div>
        </div>
        {/* Layout 7 */}
        <div ref={layout7Ref} className="absolute flex items-center justify-center inset-0 w-full flex pt-50">
        <div className="flex flex-col items-center">
               <p>4. Was ist der genaue Typ?</p>
            <img src="/src/images/LT4.png" alt="Layout 1"  />
        </div>
        </div>

    </section>
  );
};

export default Sectionneun;
