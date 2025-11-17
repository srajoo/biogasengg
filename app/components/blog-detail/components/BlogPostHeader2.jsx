"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";
import { RxChevronLeft } from "react-icons/rx";

export function BlogPostHeader2() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 flex flex-col items-start justify-start md:mb-18 lg:mb-20">
          <Button
            title="All posts"
            variant="link"
            size="link"
            iconLeft={<RxChevronLeft />}
            className="mb-8 md:mb-10 lg:mb-12"
            asChild={true}
          >
            <a>All posts</a>
          </Button>
          <div className="mb-4 flex w-full items-center justify-start">
            <Badge className="mr-4">Engineering</Badge>
            <p className="text-small inline font-semibold">8 min read</p>
          </div>
          <h1 className="heading-h2 font-bold">
            Optimizing RNG Production: Lessons from Our Latest Dairy Project
          </h1>
        </div>
        <div className="mx-auto mb-8 w-full overflow-hidden md:mb-12 lg:mb-8">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
            className="aspect-[5/2] size-full rounded-image object-cover"
            alt="Relume placeholder image"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-between md:flex-row">
          <div className="mb-4 flex items-center sm:mb-8 md:mb-0">
            <div className="mr-8 md:mr-10 lg:mr-12">
              <p className="mb-2">Written by</p>
              <p className="font-medium">Sarah Chen</p>
            </div>
            <div className="mr-8 md:mr-10 lg:mr-12">
              <p className="mb-2">Published on</p>
              <p className="font-medium">January 13, 2024</p>
            </div>
          </div>
          <div className="grid grid-flow-col grid-cols-[max-content] items-start gap-2" />
        </div>
      </div>
    </section>
  );
}
