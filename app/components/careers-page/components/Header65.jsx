"use client";

import React from "react";

export function Header65() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container max-w-lg text-center">
        <p className="mb-3 font-semibold text-white md:mb-4">Careers</p>
        <h1 className="heading-h1 mb-5 font-bold text-white md:mb-6">
          Build the Future of Clean Energy
        </h1>
        <p className="text-medium text-white">
          Join our team of innovators, engineers, and problem-solvers who are
          transforming organic waste into renewable natural gas. Make an impact
          while building your career.
        </p>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-neutral-darkest/50" />
      </div>
    </section>
  );
}
