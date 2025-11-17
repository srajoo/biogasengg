"use client";

import React from "react";

export function Layout466() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container">
        <div className="grid grid-cols-1 gap-x-12 gap-y-5 md:grid-cols-2 lg:gap-x-20">
          <div className="md:mt-80">
            <p className="mb-3 font-semibold text-white md:mb-4">Commitment</p>
            <h2 className=" font-bold text-white" style={{fontSize: '35px'}}>Our Mission</h2>
          </div>
          <div className="glass-card">
          <div className="mx-[7.5%] glass-card-sub">
            <p className="text-medium mb-6 text-white md:mb-8">
              To accelerate the global transition to renewable energy by
              delivering innovative, reliable, and cost-effective renewable
              natural gas solutions that transform waste into valuable clean
              energy resources.
            </p>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2 sm:grid-cols-2">
              <div>
                <h6 className="heading-h6 mb-3 font-bold text-white md:mb-4">
                  Our Vision
                </h6>
                <p className="text-white">
                  To be the world's leading renewable natural gas EPC partner,
                  creating a sustainable future where every organic waste stream
                  becomes a source of clean energy and environmental benefit.
                </p>
              </div>
              <div>
                <h6 className="heading-h6 mb-3 font-bold text-white md:mb-4">
                  Our Values
                </h6>
                <p className="text-white">
                  Innovation in every solution Integrity in all partnerships
                  Excellence in execution Sustainability in impact
                </p>
              </div>
            </div>
          </div>
          </div>
          
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/images/about/3.jpeg"
          className="absolute inset-0 size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-neutral-darkest/50" />
      </div>
    </section>
  );
}
