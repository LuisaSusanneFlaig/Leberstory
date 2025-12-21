import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Sectionelf = () => {
   const containerRef = useRef(null);

  // Individual refs for each layout
  const layout1Ref = useRef(null);
  const layout2Ref = useRef(null);
  const layout3Ref = useRef(null);


  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial opacity for all layouts except the first
      gsap.set([layout2Ref.current, layout3Ref.current ], { opacity: 0 });

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
      tl.fromTo(layout2Ref.current, { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });

      // Layout 2 scrolls out to the left
      tl.to(layout2Ref.current, { x: -200, opacity: 0, duration: 1 });

      // Layout 3 slides in from the left
      tl.fromTo(layout3Ref.current, { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });



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
        className="absolute inset-0  w-full flex p-20"
      >
        <div className="flex flex-col">
        <h2>Heilende Behandlung für Leberkrebs</h2>
        </div>
        <div className="flex flex-col">
        <p>Bei chirurgischen Eingriffen werden Teile der Leber, die Tumore enthalten, entfernt.</p>
        <img src="/src/images/Curative2.png" alt="Layout 1"  />
        </div>
      </div>

      {/* Layout 2 */}
      <div
        ref={layout2Ref}
        className="absolute inset-0 w-full flex pt-50"
      >
          <div className=" w-1/3flex flex-col pl-20">
        <p>Tumore können auch mit einer Ablation behandelt werden.</p>
        <p>Dabei wird eine Nadel in den Tumor eingeführt, durch die Hitze oder Mikrowellen geleitet werden, um den Tumor zu zerstören.</p>
        </div>
        <div className=" w-2/3 flex flex-col pr-10">
        <img src="/src/images/Curative3.png" alt="Layout 3" className="max-w" />
        </div>
      </div>

      {/* Layout 3 */}
      <div
        ref={layout3Ref}
        className="absolute inset-0 w-full flex pt-50"
      >
        <div className=" w-1/3flex flex-col pl-20">
        <p>Darüber hinaus können winzige, mit radioaktivem Material gefüllte Kügelchen in die Lebergefäße eingebracht werden.</p>
        <p>Der Tumor wird lokal von innen bestrahlt, was zum Absterben der Tumorzellen führt.</p>
        </div>
        <div className=" w-2/3 flex flex-col pr-10">
        <img src="/src/images/Curative4.png" alt="Layout 3" className="max-w" />
        </div>
      </div>

    </section>
  );
}   
export default Sectionelf;