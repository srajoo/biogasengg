"use client";

import React from "react";
import { BiLogoLinkedinSquare } from "react-icons/bi";

export function Footer3() {
  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20 bg-white" style={{color: 'black'}}>
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[4vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4 lg:pb-20">
          <div>
            <div className="mb-6 md:mb-8">
              <a href="#">
                <img
                  src="/logo_main_B.jpg"
                  width='50%'
                  alt="Logo image"
                  className="inline-block"
                />
              </a>
            </div>
            <div className="mb-6 md:mb-8">
              <p className="text-small mb-1 font-semibold">Address</p>
              <p className="text-small mb-5 md:mb-6">
                3816 Stineman Ct Suite #203, Long Beach, CA 90808 USA
              </p>
              <p className="text-small mb-1 font-semibold">Contact</p>
              <a
                href="tel:1800 123 4567"
                className="text-small block underline"
              >
                +1 562-986-5656
              </a>
              <a
                href="mailto:info@relume.io"
                className="text-small block underline"
              >
                info@relume.io
              </a>
            </div>
            <div className="grid grid-flow-col grid-cols-[max-content] items-start justify-start gap-x-3">
              <a href="#">
                <BiLogoLinkedinSquare className="size-6" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-8 md:gap-y-4">
            <ul>
              <li className="text-small py-2 font-semibold">
                <a href="#">Services</a>
              </li>
              <li className="text-small py-2 font-semibold">
                <a href="#">Engineering</a>
              </li>
              <li className="text-small py-2 font-semibold">
                <a href="#">Skids</a>
              </li>
              <li className="text-small py-2 font-semibold">
                <a href="#">EPC</a>
              </li>
              <li className="text-small py-2 font-semibold">
                <a href="#">O&M</a>
              </li>
            </ul>
            <ul>
              <li className="text-small py-2 font-semibold">
                <a href="#">Markets</a>
              </li>
              <li className="text-small py-2 font-semibold">
                <a href="#">Diary</a>
              </li>
              <li className="text-small py-2 font-semibold">
                <a href="#">Landfills</a>
              </li>
              <li className="text-small py-2 font-semibold">
                <a href="#">Wastewater</a>
              </li>
              <li className="text-small py-2 font-semibold">
                <a href="#">Internationals</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-px w-full bg-scheme-border" />
        <div className="text-small flex flex-col-reverse items-start justify-between pt-6 pb-4 md:flex-row md:items-center md:pt-8 md:pb-0">
          <p className="mt-8 md:mt-0">© 2024 Relume. All rights reserved.</p>
          <ul className="text-small grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 md:grid-flow-col md:gap-x-6 md:gap-y-0" />
        </div>
      </div>
    </footer>
  );
}
