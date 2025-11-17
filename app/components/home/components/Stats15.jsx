"use client";

import React from "react";

export function Stats15() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container">
        <div className="grid grid-cols-1 items-center gap-y-12 lg:grid-cols-2 lg:gap-x-[4.75rem]">
          <div>
            <h2 className="heading-h2 mb-5 font-bold text-white md:mb-6">
              Proven Track Record
            </h2>
            <p className="text-medium text-white">
              Our expertise spans decades and continents, delivering sustainable
              energy solutions that make a real impact.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-y-8 py-2 md:grid-cols-2 md:gap-x-8 md:gap-y-12">
            <div className="border-l-2 border-white pl-8">
              <p className="mb-2 text-[3.5rem] leading-[1.3] font-bold text-white md:text-[4rem] lg:text-[5rem]">
                150+
              </p>
              <h3 className="heading-h6 font-bold text-white">
                Projects delivered
              </h3>
            </div>
            <div className="border-l-2 border-white pl-8">
              <p className="mb-2 text-[3.5rem] leading-[1.3] font-bold text-white md:text-[4rem] lg:text-[5rem]">
                $2.5B
              </p>
              <h3 className="heading-h6 font-bold text-white">
                EPC project volume
              </h3>
            </div>
            <div className="border-l-2 border-white pl-8">
              <p className="mb-2 text-[3.5rem] leading-[1.3] font-bold text-white md:text-[4rem] lg:text-[5rem]">
                25+
              </p>
              <h3 className="heading-h6 font-bold text-white">
                Years of experience
              </h3>
            </div>
            <div className="border-l-2 border-white pl-8">
              <p className="mb-2 text-[3.5rem] leading-[1.3] font-bold text-white md:text-[4rem] lg:text-[5rem]">
                500MW
              </p>
              <h3 className="heading-h6 font-bold text-white">
                Megawatts capacity
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/images/home/13.jpeg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-neutral-darkest/50" />
      </div>
    </section>
  );
}
