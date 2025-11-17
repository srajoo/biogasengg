"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Blog64() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:mb-20 lg:grid-cols-2 lg:gap-x-20">
          <div className="flex flex-col md:items-end md:justify-between">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Stories</p>
              <h1 className="heading-h2 mb-5 font-bold md:mb-6">
                From Our Team
              </h1>
              <p className="text-medium">
                Expert insights and technical knowledge from BGE Energy
                professionals
              </p>
              <div className="mt-6 md:mt-8">
                <Button title="View all" variant="secondary">
                  View all
                </Button>
              </div>
            </div>
          </div>
          <div className="grid auto-cols-fr items-start gap-12 md:gap-y-16">
            <div className="flex flex-col items-start gap-x-8 gap-y-6 md:flex-row md:gap-y-4">
              <a className="w-full shrink-0 grow basis-2/5 overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-square size-full rounded-image object-cover"
                />
              </a>
              <div className="flex w-full flex-col justify-center">
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">By: Sarah Chen</Badge>
                  <p className="text-small inline font-semibold">8 min read</p>
                </div>
                <a href="#" className="mb-2">
                  <h3 className="heading-h5 font-bold">
                    Optimizing RNG Production: Lessons from Our Latest Dairy
                    Project
                  </h3>
                </a>
                <p className="line-clamp-2">
                  Our engineering team shares key insights from designing and
                  commissioning a 2.5 MW RNG facility that exceeded production
                  targets by 18%.
                </p>
                <div className="mt-5 md:mt-6">
                  <Button
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Read more
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-x-8 gap-y-6 md:flex-row md:gap-y-4">
              <a className="w-full shrink-0 grow basis-2/5 overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-square size-full rounded-image object-cover"
                />
              </a>
              <div className="flex w-full flex-col justify-center">
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">By: Michael Rodriguez</Badge>
                  <p className="text-small inline font-semibold">6 min read</p>
                </div>
                <a href="#" className="mb-2">
                  <h3 className="heading-h5 font-bold">
                    The Future of Landfill Gas: Beyond Traditional Collection
                  </h3>
                </a>
                <p className="line-clamp-2">
                  Exploring innovative approaches to maximize gas capture
                  efficiency and extend the productive life of landfill gas
                  projects.
                </p>
                <div className="mt-5 md:mt-6">
                  <Button
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Read more
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-x-8 gap-y-6 md:flex-row md:gap-y-4">
              <a className="w-full shrink-0 grow basis-2/5 overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-square size-full rounded-image object-cover"
                />
              </a>
              <div className="flex w-full flex-col justify-center">
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">By: Jennifer Park</Badge>
                  <p className="text-small inline font-semibold">5 min read</p>
                </div>
                <a href="#" className="mb-2">
                  <h3 className="heading-h5 font-bold">
                    Skid Manufacturing Excellence: Quality Control Best
                    Practices
                  </h3>
                </a>
                <p className="line-clamp-2">
                  How our manufacturing team ensures every skid meets the
                  highest standards for reliability and performance in the
                  field.
                </p>
                <div className="mt-5 md:mt-6">
                  <Button
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Read more
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
