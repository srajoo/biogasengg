"use client";

import { Card } from "@/components/ui/card";
import React from "react";

export function Layout353() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div className="static md:sticky md:top-[30%]">
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              Common Packages
            </h2>
          </div>
          <div>
            <Card className="mb-8border-none sticky p-8" style={{ top: "30%" }}>
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                />
              </div>
              <h3 className="heading-h5 mb-3 font-bold md:mb-4">
                Gas pretreatment and moisture control 
              </h3>
            </Card>
            <Card className="mb-8border-none sticky p-8" style={{ top: "32%" }}>
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                />
              </div>
              <h3 className="heading-h5 mb-3 font-bold md:mb-4">
                H₂S removal and carbon polishing
              </h3>
            </Card>
            <Card className="mb-8border-none sticky p-8" style={{ top: "34%" }}>
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                />
              </div>
              <h3 className="heading-h5 mb-3 font-bold md:mb-4">
                Compression and dehydration
              </h3>
            </Card>
            <Card className="mb-8border-none sticky p-8" style={{ top: "36%" }}>
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                />
              </div>
              <h3 className="heading-h5 mb-3 font-bold md:mb-4">
                CO₂ management and vent recovery 
              </h3>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
