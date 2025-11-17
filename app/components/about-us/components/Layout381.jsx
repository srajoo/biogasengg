"use client";

import { Card } from "@/components/ui/card";
import React from "react";

export function Layout381() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Disciplines</p>
          <h1 className=" mb-5 font-bold md:mb-6" style={{fontSize:"36px"}}>
            All disciplines under one roof
          </h1>
          <p className="text-medium">
            Our integrated team eliminates coordination gaps and keeps quality
            aligned.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8">
            <Card className="flex flex-col sm:col-span-2 sm:row-span-2">
              <div className="flex w-full flex-col items-center justify-center self-start">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 2"
                />
              </div>
              <div className="block flex-1 p-6 sm:flex sm:flex-col sm:justify-center md:p-8 lg:p-12">
                <div>
                  <p className="mb-2 font-semibold">Process</p>
                  <h2 className="heading-h3 mb-5 font-bold md:mb-6">
                    Process engineering
                  </h2>
                  <p>
                    Optimization of gas treatment and energy recovery workflows.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="flex flex-col sm:col-span-2 sm:grid sm:auto-cols-fr sm:grid-cols-2">
              <div className="flex size-full flex-col items-center justify-center self-start">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-bento-portrait2.svg"
                  alt="Relume placeholder image 1"
                />
              </div>
              <div className="block flex-col justify-center p-6 sm:flex">
                <div>
                  <p className="mb-2 font-semibold">Mechanical</p>
                  <h2 className="heading-h5 mb-2 font-bold">
                    Mechanical design and fabrication
                  </h2>
                  <p>Pressure vessels, piping, and equipment selection.</p>
                </div>
              </div>
            </Card>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 grid-rows-[auto_auto] gap-6 md:gap-8">
            <Card className="flex flex-col">
              <div className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-6">
                <div>
                  <div className="mb-3 md:mb-4">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                      alt="Relume logo 1"
                      className="size-12"
                    />
                  </div>
                  <h3 className="heading-h5 mb-2 font-bold">
                    Civil and structural
                  </h3>
                  <p>Foundation and structural support systems.</p>
                </div>
              </div>
            </Card>
            <Card className="flex flex-col">
              <div className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-6">
                <div>
                  <div className="mb-3 md:mb-4">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                      alt="Relume logo 2"
                      className="size-12"
                    />
                  </div>
                  <h3 className="heading-h5 mb-2 font-bold">
                    Civil and structural
                  </h3>
                  <p>Foundation and structural support systems.</p>
                </div>
              </div>
            </Card>
            <Card className="flex flex-col sm:col-span-2 sm:row-span-2">
              <div className="flex w-full flex-col items-center justify-center self-start">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 2"
                />
              </div>
              <div className="block flex-1 p-6 sm:flex sm:flex-col sm:justify-center md:p-8 lg:p-12">
                <div>
                  <p className="mb-2 font-semibold">Safety</p>
                  <h2 className="heading-h3 mb-5 font-bold md:mb-6">
                    Safety and constructability aligned throughout
                  </h2>
                  <p>
                    Every design is practical, buildable, and code-compliant
                    from day one.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
