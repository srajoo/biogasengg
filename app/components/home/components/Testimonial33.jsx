"use client";

import { Card } from "@/components/ui/card";
import { useMediaQuery } from "@/hooks/use-media-query"
import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";
import { BiSolidStar } from "react-icons/bi";

const useAnimation = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const isMobile = useMediaQuery("(max-width: 767px)");

  const leftCardsMobile = useTransform(
    scrollYProgress,
    [0, 1],
    ["20vh", "-70vh"],
  );
  const leftCardsDesktop = useTransform(
    scrollYProgress,
    [0, 1],
    ["-10rem", "5rem"],
  );
  const rightCardsMobile = useTransform(
    scrollYProgress,
    [0, 1],
    ["20vh", "-70vh"],
  );
  const rightCardsDesktop = useTransform(
    scrollYProgress,
    [0, 1],
    ["10rem", "-5rem"],
  );

  const leftCards = isMobile ? leftCardsMobile : leftCardsDesktop;
  const rightCards = isMobile ? rightCardsMobile : rightCardsDesktop;

  return {
    sectionRef,
    leftCards,
    rightCards,
  };
};

export function Testimonial33() {
  const animationState = useAnimation();
  return (
    <section
      ref={animationState.sectionRef}
      className="overflow-hidden px-[5%] py-12 md:py-16 lg:py-20"
    >
      <Card className="container grid min-h-svh auto-cols-fr grid-cols-1 lg:h-[90vh] lg:min-h-[auto] lg:grid-cols-[0.75fr_1fr] lg:overflow-visible">
        <div className="flex flex-col justify-center p-8 md:p-12">
          <div>
            <h2 className=" mb-5 font-bold md:mb-6" style={{fontSize:"40px"}}>
              What Our Clients Say
            </h2>
            <p className="text-medium">
              Discover how our biogas solutions have transformed operations for
              our clients across dairy farms, food processing plants, and
              industrial facilities.
            </p>
          </div>
        </div>
        <div className="grid h-screen auto-cols-fr grid-cols-1 content-center items-center gap-4 overflow-hidden border-t border-scheme-border px-4 md:h-[70vh] md:grid-cols-2 md:px-8 lg:h-auto lg:border-none lg:pr-12 lg:pl-0">
          <motion.div
            className="grid size-full columns-2 auto-cols-fr grid-cols-1 gap-4 self-center"
            style={{ y: animationState.leftCards }}
          >
            <div className="grid size-full auto-cols-fr grid-cols-1 content-center gap-x-6 gap-y-4">
              <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <div className="mb-6 flex">
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                  </div>
                  <blockquote className="text-medium">
                    "The modular approach saved us months in the field. Their
                    team knew exactly what they were doing."
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 1"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mr-4 md:mb-0"
                  />
                  <div>
                    <p className="font-semibold">Sarah Whitmore</p>
                    <p>Project director, dairy cooperative</p>
                  </div>
                </div>
              </Card>
              <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <div className="mb-6 flex">
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                  </div>
                  <blockquote className="text-medium">
                    "We needed a partner who could handle the full scope. Biogas
                    Engineering delivered without compromise."
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 2"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mr-4 md:mb-0"
                  />
                  <div>
                    <p className="font-semibold">James Rodriguez</p>
                    <p>Engineering lead, wastewater authority</p>
                  </div>
                </div>
              </Card>
              <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <div className="mb-6 flex">
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                  </div>
                  <blockquote className="text-medium">
                    "We've worked with plenty of EPC firms. Biogas Engineering
                    is the one we call back."
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 3"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mr-4 md:mb-0"
                  />
                  <div>
                    <p className="font-semibold">Thomas Wright</p>
                    <p>Director, landfill gas division</p>
                  </div>
                </div>
              </Card>
              <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <div className="mb-6 flex">
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                  </div>
                  <blockquote className="text-medium">
                    "The system runs clean, the support is solid, and the
                    economics work. Everything they promised."
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 4"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mr-4 md:mb-0"
                  />
                  <div>
                    <p className="font-semibold">Kenji Tanaka</p>
                    <p>Plant engineer, international facility</p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
          <motion.div
            className="grid size-full auto-cols-fr grid-cols-1 gap-4"
            style={{ y: animationState.rightCards }}
          >
            <div className="grid size-full auto-cols-fr grid-cols-1 content-center gap-4">
              <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <div className="mb-6 flex">
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                  </div>
                  <blockquote className="text-medium">
                    "They showed up on time, understood our constraints, and
                    handed us a system that runs like clockwork."
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 5"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mr-4 md:mb-0"
                  />
                  <div>
                    <p className="font-semibold">Marcus Chen</p>
                    <p>Operations manager, landfill facility</p>
                  </div>
                </div>
              </Card>
              <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <div className="mb-6 flex">
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                  </div>
                  <blockquote className="text-medium">
                    "Code compliance wasn't an afterthought—it was built into
                    every phase. That's the difference."
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 6"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mr-4 md:mb-0"
                  />
                  <div>
                    <p className="font-semibold">David Larsson</p>
                    <p>Compliance officer, municipal utility</p>
                  </div>
                </div>
              </Card>
              <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <div className="mb-6 flex">
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                  </div>
                  <blockquote className="text-medium">
                    "Their documentation and training made the handoff seamless.
                    We felt prepared from day one."
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 7"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mr-4 md:mb-0"
                  />
                  <div>
                    <p className="font-semibold">Patricia Okonkwo</p>
                    <p>Facility manager, RNG plant</p>
                  </div>
                </div>
              </Card>
              <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <div className="mb-6 flex">
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                  </div>
                  <blockquote className="text-medium">
                    "From design review to startup, they kept us informed and in
                    control. That's how you build trust."
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 8"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mr-4 md:mb-0"
                  />
                  <div>
                    <p className="font-semibold">Rebecca Stone</p>
                    <p>Project owner, dairy digester</p>
                  </div>
                </div>
              </Card>
              <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
                <div className="mb-5 md:mb-6">
                  <div className="mb-6 flex">
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                    <BiSolidStar className="mr-1 size-6" />
                  </div>
                  <blockquote className="text-medium">
                    "They treated our project like it was their own. That kind
                    of ownership matters when things get real."
                  </blockquote>
                </div>
                <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 9"
                    className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mr-4 md:mb-0"
                  />
                  <div>
                    <p className="font-semibold">Elena Vasquez</p>
                    <p>VP operations, energy company</p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </Card>
    </section>
  );
}
