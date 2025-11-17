"use client";

import { Card } from "@/components/ui/card";
import React, { Fragment } from "react";
import { BiSolidStar } from "react-icons/bi";

export function Testimonial32() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div className="static md:sticky md:top-[30%]">
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">Team voices</h2>
            <p className="text-medium">
              Hear from our employees about their experience working at
              Biogaseng.
            </p>
          </div>
          <div>
            <Card className="sticky mb-8 p-8" style={{ top: "30%" }}>
              <Fragment>
                <div className="mb-6 flex items-center">
                  <BiSolidStar className="mr-1 size-6" />
                  <BiSolidStar className="mr-1 size-6" />
                  <BiSolidStar className="mr-1 size-6" />
                  <BiSolidStar className="mr-1 size-6" />
                  <BiSolidStar className="mr-1 size-6" />
                </div>
                <blockquote className="text-medium mb-5 md:mb-6">
                  "Working at Biogaseng means being at the forefront of clean
                  energy innovation. Every project makes a real environmental
                  impact."
                </blockquote>
                <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Testimonial avatar 1"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">Sarah Chen</p>
                    <p>Senior Process engineer</p>
                  </div>
                </div>
              </Fragment>
            </Card>
            <Card className="sticky mb-8 p-8" style={{ top: "32%" }}>
              <Fragment>
                <div className="mb-6 flex items-center">
                  <BiSolidStar className="mr-1 size-6" />
                  <BiSolidStar className="mr-1 size-6" />
                  <BiSolidStar className="mr-1 size-6" />
                  <BiSolidStar className="mr-1 size-6" />
                  <BiSolidStar className="mr-1 size-6" />
                </div>
                <blockquote className="text-medium mb-5 md:mb-6">
                  "Working at Biogaseng means being at the forefront of clean
                  energy innovation. Every project makes a real environmental
                  impact."
                </blockquote>
                <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Testimonial avatar 2"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">Sarah Chen</p>
                    <p>Senior Process engineer</p>
                  </div>
                </div>
              </Fragment>
            </Card>
            <Card className="sticky mb-8 p-8" style={{ top: "34%" }}>
              <Fragment>
                <div className="mb-6 flex items-center">
                  <BiSolidStar className="mr-1 size-6" />
                  <BiSolidStar className="mr-1 size-6" />
                  <BiSolidStar className="mr-1 size-6" />
                  <BiSolidStar className="mr-1 size-6" />
                  <BiSolidStar className="mr-1 size-6" />
                </div>
                <blockquote className="text-medium mb-5 md:mb-6">
                  "Working at Biogaseng means being at the forefront of clean
                  energy innovation. Every project makes a real environmental
                  impact."
                </blockquote>
                <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Testimonial avatar 3"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">Sarah Chen</p>
                    <p>Senior Process engineer</p>
                  </div>
                </div>
              </Fragment>
            </Card>
            <Card className="sticky mb-8 p-8" style={{ top: "36%" }}>
              <Fragment>
                <div className="mb-6 flex items-center">
                  <BiSolidStar className="mr-1 size-6" />
                  <BiSolidStar className="mr-1 size-6" />
                  <BiSolidStar className="mr-1 size-6" />
                  <BiSolidStar className="mr-1 size-6" />
                  <BiSolidStar className="mr-1 size-6" />
                </div>
                <blockquote className="text-medium mb-5 md:mb-6">
                  "Working at Biogaseng means being at the forefront of clean
                  energy innovation. Every project makes a real environmental
                  impact."
                </blockquote>
                <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Testimonial avatar 4"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">Sarah Chen</p>
                    <p>Senior Process engineer</p>
                  </div>
                </div>
              </Fragment>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
