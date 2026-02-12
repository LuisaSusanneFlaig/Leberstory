import React from "react";
import ModelOrgane from "./Models/ModelOrgane";
import Line from '/src/images/Line.svg'; 

const Organe = () => {
  return (
    <section id="organe" className="relative h-screen overflow-hidden">
        <div className="flex flex-col gap-7">
            <h2>Die Leber: ein besonderes Organ
                <img 
                src={Line} 
                alt="Decorative line" 
                className="mt-4 mb-6"
                />
            </h2>
        </div>
            <div className="hero-3d-layout">
            <ModelOrgane/>
            </div>
    </section>
    )
}
export default Organe;