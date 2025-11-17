"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Portfolio12() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <header className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">
            6+ Projects Delivered
          </h2>
          <p className="text-medium">15.6 MMscfd Total Capacity</p>
        </header>
        <div className="columns-1 after:block md:columns-2 md:gap-x-8 lg:columns-3">
          <article className="mb-8 break-inside-avoid">
            <div className="mb-5 md:mb-6">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full rounded-image object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <h3 className="heading-h5 mb-2 font-bold">
              <a href="#">Central Valley Dairy Consortium</a>
            </h3>
            <p>
              Centralized anaerobic digestion facility processing waste from 12
              dairy farms
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <Badge>
                <a href="#">Dairy</a>
              </Badge>
              <Badge>
                <a href="#">EPC</a>
              </Badge>
              <Badge>
                <a href="#">Operational</a>
              </Badge>
            </div>
            <Button
              title="View project"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              className="mt-5 md:mt-6"
            >
              <a href="#">View project</a>
            </Button>
          </article>
          <article className="mb-8 break-inside-avoid">
            <div className="mb-5 md:mb-6">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full rounded-image object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <h3 className="heading-h5 mb-2 font-bold">
              <a href="#">European Biogas Network</a>
            </h3>
            <p>
              Modular skid system converting manure biogas to pipeline quality
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <Badge>
                <a href="#">Dairy</a>
              </Badge>
              <Badge>
                <a href="#">Modular design</a>
              </Badge>
              <Badge>
                <a href="#">Interconnects</a>
              </Badge>
            </div>
            <Button
              title="View project"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              className="mt-5 md:mt-6"
            >
              <a href="#">View project</a>
            </Button>
          </article>
          <article className="mb-8 break-inside-avoid">
            <div className="mb-5 md:mb-6">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="w-full rounded-image object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <h3 className="heading-h5 mb-2 font-bold">
              <a href="#">Metro Landfill Gas Recovery</a>
            </h3>
            <p>
              Complete gas collection and upgrading system for 500-acre
              municipal landfill
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <Badge>
                <a href="#">Landfills</a>
              </Badge>
              <Badge>
                <a href="#">Engineering + Skids</a>
              </Badge>
              <Badge>
                <a href="#">Operational</a>
              </Badge>
            </div>
            <Button
              title="View project"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              className="mt-5 md:mt-6"
            >
              <a href="#">View project</a>
            </Button>
          </article>
          <article className="mb-8 break-inside-avoid">
            <div className="mb-5 md:mb-6">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full rounded-image object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <h3 className="heading-h5 mb-2 font-bold">
              <a href="#">Industrial Food Waste Processing</a>
            </h3>
            <p>
              1.2 MW capacity system with complete balance-of-plant design and
              full commissioning
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <Badge>
                <a href="#">Landfill</a>
              </Badge>
              <Badge>
                <a href="#">Gas cleanup</a>
              </Badge>
              <Badge>
                <a href="#">Compression</a>
              </Badge>
            </div>
            <Button
              title="See all projects"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              className="mt-5 md:mt-6"
            >
              <a href="#">See all projects</a>
            </Button>
          </article>
          <article className="mb-8 break-inside-avoid">
            <div className="mb-5 md:mb-6">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full rounded-image object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <h3 className="heading-h5 mb-2 font-bold">
              <a href="#">Municipal WWTP Biogas Upgrade</a>
            </h3>
            <p>
              Biogas upgrading system for 50 MGD municipal wastewater treatment
              plant
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <Badge>
                <a href="#">Wastewater</a>
              </Badge>
              <Badge>
                <a href="#">EPC</a>
              </Badge>
              <Badge>
                <a href="#">Operational</a>
              </Badge>
            </div>
            <Button
              title="View project"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              className="mt-5 md:mt-6"
            >
              <a href="#">View project</a>
            </Button>
          </article>
          <article className="mb-8 break-inside-avoid">
            <div className="mb-5 md:mb-6">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full rounded-image object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <h3 className="heading-h5 mb-2 font-bold">
              <a href="#">Regional Landfill Expansion</a>
            </h3>
            <p>
              Integrated controls and instrumentation for biosolids processing
              optimization
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <Badge>
                <a href="#">Wastewater</a>
              </Badge>
              <Badge>
                <a href="#">Controls</a>
              </Badge>
              <Badge>
                <a href="#">Civil work</a>
              </Badge>
            </div>
            <Button
              title="View project"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              className="mt-5 md:mt-6"
            >
              <a href="#">View project</a>
            </Button>
          </article>
        </div>
        <footer className="mt-8 flex justify-center md:mt-18 lg:mt-20">
          <Button title="See all" variant="secondary">
            See all
          </Button>
        </footer>
      </div>
    </section>
  );
}
