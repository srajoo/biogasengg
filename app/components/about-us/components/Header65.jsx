"use client";

import React from "react";

export function Header65() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container max-w-lg text-center">
        <h1 className=" mb-5 font-bold text-white md:mb-6" style={{fontSize: '35px'}}>
          Pioneering the Future of Renewable Energy
        </h1>
        <p className="text-medium text-white">
          Biogas Engineering (BGE) is a full-scope engineering, procurement, and
          construction (EPC) company specializing in renewable natural gas (RNG)
          and biogas facilities. We design, fabricate, and construct complete
          balance-of-plant (BOP) systems — including gas cleanup, compression,
          interconnects, and modular skids — that turn waste gas into clean,
          usable energy.
        </p>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/images/home/3.jpeg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-neutral-darkest/50" />
      </div>
    </section>
  );
}
