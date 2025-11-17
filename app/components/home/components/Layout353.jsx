"use client";

import { Card } from "@/components/ui/card";
import React from "react";

export function Layout353() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
        <div className="static md:sticky md:top-[30%] glass-card">
          <div className="static md:sticky md:top-[30%] glass-card-sub">
            <p className="mb-3 font-semibold md:mb-4">Capabilities</p>
            <h2 className=" mb-5 font-bold md:mb-6" style={{fontSize: "36px"}}>
              What sets us apart in the field
            </h2>
            <p className="text-medium">
              We design, fabricate, and construct complete balance-of-plant
              (BOP) systems — including gas cleanup, compression, interconnects,
              and modular skids — that turn waste gas into clean, usable
              energy.
            </p>
          </div>
        </div>
          <div>
            <Card className="mb-8border-none sticky p-8" style={{ top: "30%" }}>
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                  style={{background:'white'}}
                />
              </div>
              <h3 className="heading-h5 mb-3 font-bold md:mb-4">
                Full in-house engineering
              </h3>
              <p>
                Complete technical expertise across all critical disciplines
              </p>
            </Card>
            <Card className="mb-8border-none sticky p-8" style={{ top: "32%" }}>
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                  style={{background:'white'}}
                />
              </div>
              <h3 className="heading-h5 mb-3 font-bold md:mb-4">
                Modular skid design
              </h3>
              <p>
                Innovative fabrication techniques to minimize field installation
                time
              </p>
            </Card>
            <Card className="mb-8border-none sticky p-8" style={{ top: "34%" }}>
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                  style={{background:'white'}}
                />
              </div>
              <h3 className="heading-h5 mb-3 font-bold md:mb-4">
                Complete EPC delivery
              </h3>
              <p>
                Seamless project management from initial concept to final
                commissioning
              </p>
            </Card>
            <Card className="mb-8border-none sticky p-8" style={{ top: "36%" }}>
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                  style={{background:'white'}}
                />
              </div>
              <h3 className="heading-h5 mb-3 font-bold md:mb-4">
                Proven experience
              </h3>
              <p>
                Successful projects across North America and international
                markets
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
