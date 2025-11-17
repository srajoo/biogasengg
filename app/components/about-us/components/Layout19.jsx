"use client";

import React from "react";

export function Layout19() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
        <div className="glass-card">
          <div className="glass-card-sub">
            <p className="mb-3 font-semibold md:mb-4">Our Story</p>
            <h2 className="mb-5 font-bold md:mb-6" style={{fontSize: '35px'}}>
              Core principle: do what we say we’ll do, and do it well.
            </h2>
            <p className="text-medium mb-5 md:mb-6">
              Biogas Engineering was founded in 2016 with a single goal: make
              renewable gas projects more reliable, buildable, and replicable.
              What began with landfill gas-to-energy experience has grown into a
              company delivering RNG balance-of-plant systems across multiple
              waste feedstocks — landfill, dairy, and wastewater.
            </p>
          </div>
          </div>
          <div>
            <img
              src="/images/about/1.jpeg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
