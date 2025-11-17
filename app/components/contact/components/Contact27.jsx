"use client";

import React from "react";

export function Contact27() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28" style={{background: "black"}}>
      <div className="container">
        <div className="mr-auto mb-12 flex max-w-lg flex-col justify-start text-left md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Locations</p>
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">
            Find our engineering teams across key renewable energy markets
          </h2>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 items-center gap-x-12 gap-y-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col items-start justify-start text-left">
            <div className="mb-6 w-full md:mb-8">
              <a href="#" className="w-full justify-self-end">
                <img
                  src="https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-map-image.svg"
                  alt="Relume placeholder map image"
                  className="size-full h-[320px] object-cover md:h-[384px]"
                />
              </a>
            </div>
            <h3 className="heading-h4 mb-3 font-bold lg:mb-4">
              3816 Stineman Ct Suite #203, Long Beach, CA 90808, United States
            </h3>
            <p className="text-center">Headquarters</p>
          </div>
          <div className="flex flex-col items-start justify-start text-left">
            <div className="mb-6 w-full md:mb-8">
              <a href="#" className="w-full justify-self-end">
                <img
                  src="https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-map-image.svg"
                  alt="Relume placeholder map image"
                  className="size-full h-[320px] object-cover md:h-[384px]"
                />
              </a>
            </div>
            <h3 className="heading-h4 mb-3 font-bold lg:mb-4">
              SCO-10, 2nd Floor, Market Place – 1, Vatika India Next, Sector 83,
              Gurugram-122004, Haryana, India
            </h3>
            <p className="text-center">Regional Office</p>
          </div>
        </div>
      </div>
    </section>
  );
}
