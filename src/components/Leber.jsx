import React from "react";
import ModelLeber from "./Models/ModelLeber";

const Leber = () => {
  return (
    <section id="leber" className="relative h-screen overflow-hidden">
        <div className="flex flex-col gap-7 p-20">
            <h2>Was ist Leberkrebs?</h2>
        </div>
            <div className="hero-3d-layout">
            <ModelLeber/>
            </div>
    </section>
    
  )
}
export default Leber;