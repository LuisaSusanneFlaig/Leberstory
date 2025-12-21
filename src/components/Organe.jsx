import React from "react";
import ModelOrgane from "./Models/ModelOrgane";

const Organe = () => {
  return (
    <section id="leber" className="relative overflow-hidden">
        <div className="flex flex-col gap-7">
            <h2>Die Leber: ein besonderes Organ</h2>
        </div>
            <div className="hero-3d-layout">
            <ModelOrgane/>
            </div>
    </section>
    )
}
export default Organe;