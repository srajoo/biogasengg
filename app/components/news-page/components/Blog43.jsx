"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";

export function Blog43() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-start gap-y-8 md:mb-18 md:grid-cols-[1fr_max-content] md:items-end md:justify-between md:gap-x-12 md:gap-y-4 lg:mb-20 lg:gap-x-20">
          <div className="md:mr-12 lg:mr-0">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Stories</p>
              <h2 className="heading-h2 mb-3 font-bold md:mb-4">
                Industry News
              </h2>
              <p className="text-medium">
                Latest developments shaping the renewable natural gas sector
              </p>
            </div>
          </div>
          <div className="hidden md:flex">
            <Button title="View all" variant="secondary">
              View all
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <Card>
            <a href="#" className="w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-[3/2] size-full object-cover"
                />
              </div>
            </a>
            <div className="px-5 py-6 md:p-6">
              <a href="#" className="text-small mb-2 flex font-semibold">
                Source: U.S. Congress
              </a>
              <a href="#" className="mb-2 block max-w-full">
                <h5 className="heading-h5 font-bold">
                  Agricultural Environmental Stewardship Act Introduced
                </h5>
              </a>
              <p>
                Bipartisan legislation aims to extend Section 48 investment tax
                credit for qualified biogas properties, supporting continued
                growth in agricultural RNG projects.
              </p>
              <div className="mt-4 flex items-center">
                <div className="mr-4 shrink-0">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder avatar"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h6 className="text-small font-semibold">5 min read</h6>
                  <div className="flex items-center">
                    <p className="text-small">1/7/2025</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <a href="#" className="w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-[3/2] size-full object-cover"
                />
              </div>
            </a>
            <div className="px-5 py-6 md:p-6">
              <a href="#" className="text-small mb-2 flex font-semibold">
                Source: Greenlane Renewables
              </a>
              <a href="#" className="mb-2 block max-w-full">
                <h5 className="heading-h5 font-bold">
                  Brightmark Delivers First Gas at 10 Midwest RNG Projects
                </h5>
              </a>
              <p>
                Major milestone as Brightmark RNG Holdings completes
                commissioning of renewable natural gas facilities across the
                Midwest, marking significant capacity expansion.
              </p>
              <div className="mt-4 flex items-center">
                <div className="mr-4 shrink-0">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder avatar"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h6 className="text-small font-semibold">4 min read</h6>
                  <div className="flex items-center">
                    <p className="text-small">12/14/2024</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <a href="#" className="w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-[3/2] size-full object-cover"
                />
              </div>
            </a>
            <div className="px-5 py-6 md:p-6">
              <a href="#" className="text-small mb-2 flex font-semibold">
                Source: Coalition for Renewable Natural Gas
              </a>
              <a href="#" className="mb-2 block max-w-full">
                <h5 className="heading-h5 font-bold">
                  RNG Contributed $7.2 Billion to US GDP in 2024
                </h5>
              </a>
              <p>
                Coalition for Renewable Natural Gas announces record economic
                impact as renewable natural gas sector demonstrates
                unprecedented growth and contribution to American economy.
              </p>
              <div className="mt-4 flex items-center">
                <div className="mr-4 shrink-0">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder avatar"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h6 className="text-small font-semibold">15 Jan 2025</h6>
                  <div className="flex items-center">
                    <p className="text-small">7 min read</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="md:hidden">
          <Button title="Read more" variant="secondary" className="mt-10">
            Read more
          </Button>
        </div>
      </div>
    </section>
  );
}
