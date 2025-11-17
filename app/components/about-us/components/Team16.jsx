"use client";

import React from "react";
import { BiLogoDribbble, BiLogoLinkedinSquare } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export function Team16() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 items-start md:grid-flow-row md:gap-x-12 lg:gap-x-20">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Leadership</p>
          <h2 className=" mb-5 font-bold md:mb-6" style={{fontSize:"35px"}}>
            The team building renewable gas systems
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 lg:gap-16">
          <div className="grid grid-cols-1 items-start gap-5 sm:gap-y-6 md:grid-cols-2 md:gap-x-8">
            <div className="w-full overflow-hidden">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="aspect-square size-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="mb-3 md:mb-4">
                <h5 className="text-large font-semibold">Sarah Chen</h5>
                <h6 className="text-medium">Chief Executive Officer</h6>
              </div>
              <p>20+ years driving renewable energy innovation and strategy</p>
              <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-start">
                <a href="#">
                  <BiLogoLinkedinSquare className="size-6" />
                </a>
               
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-5 sm:gap-y-6 md:grid-cols-2 md:gap-x-8">
            <div className="w-full overflow-hidden">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="aspect-square size-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="mb-3 md:mb-4">
                <h5 className="text-large font-semibold">Michael Rodriguez</h5>
                <h6 className="text-medium">Chief Technology Officer</h6>
              </div>
              <p>15+ years of RNG systems design and technical leadership</p>
              <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-start">
                <a href="#">
                  <BiLogoLinkedinSquare className="size-6" />
                </a>
                
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-5 sm:gap-y-6 md:grid-cols-2 md:gap-x-8">
            <div className="w-full overflow-hidden">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="aspect-square size-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="mb-3 md:mb-4">
                <h5 className="text-large font-semibold">Jennifer Park</h5>
                <h6 className="text-medium">VP of Operations</h6>
              </div>
              <p>Deep EPC project delivery and field execution expertise</p>
              <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-start">
                <a href="#">
                  <BiLogoLinkedinSquare className="size-6" />
                </a>
                
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-5 sm:gap-y-6 md:grid-cols-2 md:gap-x-8">
            <div className="w-full overflow-hidden">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="aspect-square size-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="mb-3 md:mb-4">
                <h5 className="text-large font-semibold">David Thompson</h5>
                <h6 className="text-medium">VP of Engineering</h6>
              </div>
              <p>18+ years guiding 200+ RNG projects from concept to startup</p>
              <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-start">
                <a href="#">
                  <BiLogoLinkedinSquare className="size-6" />
                </a>
               
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 w-full max-w-md md:mt-20 lg:mt-24" />
      </div>
    </section>
  );
}
