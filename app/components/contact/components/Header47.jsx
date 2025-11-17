"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Header47() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row md:gap-12 lg:gap-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Get in Touch</p>
            <h1 className="heading-h1 font-bold">Let's Talk</h1>
          </div>
          <div className="w-full max-w-lg">
            <p className="text-medium">
              We’d love to learn about your project goals and challenges.
              Whether it’s a new build or optimization, our engineers will
              outline the steps to deliver a safe, efficient RNG solution. 
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Start your project">Start your project</Button>
              <Button title="Schedule a Call" variant="secondary">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
