"use client";

import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

export function Contact14() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Connect</p>
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">
            Let's talk renewable solutions
          </h2>
          <p className="text-medium">
            Transform waste into energy with our expert engineering team
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-[0.5fr_1fr] md:gap-x-20 md:gap-y-16">
          <div className="grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-10">
            <div>
              <div className="mb-3 md:mb-4">
                <BiEnvelope className="size-8" />
              </div>
              <h3 className="heading-h6 mb-2 font-bold">Email</h3>
              <p className="mb-2">Reach out for project inquiries</p>
              <a className="underline" href="#">
                hello@relume.io
              </a>
            </div>
            <div>
              <div className="mb-3 md:mb-4">
                <BiPhone className="size-8" />
              </div>
              <h3 className="heading-h6 mb-2 font-bold">Phone</h3>
              <a className="underline" href="#">
                +1 562-986-5656
              </a>
            </div>
            <div>
              <div className="mb-3 md:mb-4">
                <BiMap className="size-8" />
              </div>
              <h3 className="heading-h6 mb-2 font-bold">Office</h3>
              <p className="mb-2">
                3816 Stineman Ct Suite #203, Long Beach, CA 90808 USA
              </p>
            </div>
          </div>
          <a href="#" className="justify-self-end md:w-[321.6px] lg:w-auto">
            <img
              src="/images/home/map.png"
              alt="Relume placeholder map image"
              className="size-full h-[400px] object-cover md:h-[516px]"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
