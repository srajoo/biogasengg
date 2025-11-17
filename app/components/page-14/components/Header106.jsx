"use client";

import { motion, useScroll, useTransform } from "motion/react";
import React from "react";

const useAnimationSection = () => {
  const { scrollYProgress } = useScroll();

  const containerMotion = {
    y: useTransform(scrollYProgress, [0, 1], ["0%", "5%"]),
    scale: useTransform(scrollYProgress, [0, 1], [1, 0]),
    opacity: useTransform(scrollYProgress, [0, 1], [1, 0]),
  };

  const imageMotions = [
    {
      x: useTransform(scrollYProgress, [0, 1], ["0vw", "45vw"]),
      y: useTransform(scrollYProgress, [0, 1], ["0%", "110%"]),
    },
    {
      x: useTransform(scrollYProgress, [0, 1], ["0vw", "30vw"]),
      y: useTransform(scrollYProgress, [0, 1], ["0%", "80%"]),
    },
    { x: undefined, y: useTransform(scrollYProgress, [0, 1], ["0%", "70%"]) },
    {
      x: useTransform(scrollYProgress, [0, 1], ["0vw", "-30vw"]),
      y: useTransform(scrollYProgress, [0, 1], ["0%", "90%"]),
    },
    {
      x: useTransform(scrollYProgress, [0, 1], ["0vw", "-45vw"]),
      y: useTransform(scrollYProgress, [0, 1], ["0%", "120%"]),
    },
  ];

  return { containerMotion, imageMotions };
};

export function Header106() {
  const animationProps = useAnimationSection();
  return (
    <section>
      <div className="relative h-[110vh] md:h-[500vh]">
        <div className="sticky top-0 min-h-screen overflow-hidden">
          <div className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container max-w-lg">
              <div className="relative z-20 text-center">
                <h1 className="heading-h1 mb-5 font-bold md:mb-6">
                  Operations & Maintenance Support 
                </h1>
                <p className="text-medium">
                  We help clients achieve long-term reliability through operator
                  training, commissioning support, and ongoing technical
                  assistance. 
                </p>
              </div>
            </div>
          </div>
          <motion.div
            style={animationProps.containerMotion}
            className="absolute inset-0 z-10 flex origin-bottom items-end justify-center"
          >
            <motion.div
              style={animationProps.imageMotions[0]}
              className="absolute w-full max-w-[9rem] sm:max-w-[15rem] lg:max-w-xs top-[65%] left-[-25%] sm:top-[45%] md:left-[-20%] lg:top-[12%] lg:left-[-10%]"
            >
              <img
                className="size-full rounded-image"
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
              />
            </motion.div>
            <motion.div
              style={animationProps.imageMotions[1]}
              className="absolute w-full max-w-[9rem] sm:max-w-[15rem] lg:max-w-xs bottom-[5%] left-[-8%] md:left-[5%] lg:bottom-[10%]"
            >
              <img
                className="size-full rounded-image"
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 2"
              />
            </motion.div>
            <motion.div
              style={animationProps.imageMotions[2]}
              className="absolute w-full max-w-[9rem] sm:max-w-[15rem] lg:max-w-xs bottom-[0%]"
            >
              <img
                className="size-full rounded-image"
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 3"
              />
            </motion.div>
            <motion.div
              style={animationProps.imageMotions[3]}
              className="absolute w-full max-w-[9rem] sm:max-w-[15rem] lg:max-w-xs right-[-5%] bottom-[4%] sm:bottom-[7%] md:right-[8%] lg:right-[10%] lg:bottom-[15%]"
            >
              <img
                className="size-full rounded-image"
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 4"
              />
            </motion.div>
            <motion.div
              style={animationProps.imageMotions[4]}
              className="absolute w-full max-w-[9rem] sm:max-w-[15rem] lg:max-w-xs top-[65%] right-[-30%] sm:top-[45%] sm:right-[-15%] lg:top-[5%] lg:right-[-8%]"
            >
              <img
                className="size-full rounded-image"
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 5"
              />
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute inset-0 -z-10 mt-[100vh]" />
      </div>
    </section>
  );
}
