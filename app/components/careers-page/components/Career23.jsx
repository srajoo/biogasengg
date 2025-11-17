"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { LuMapPin } from "react-icons/lu";
import { MdAccessTime } from "react-icons/md";

export function Career23() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Hiring</p>
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">Open positions</h2>
          <p className="text-medium">
            We're looking for engineers and builders ready to move the needle on
            renewable energy.
          </p>
        </div>
        <div className="grid items-start gap-y-6 md:grid-cols-2 md:gap-8">
          <Card className="p-6 md:p-8">
            <div className="mb-3 flex items-start justify-between gap-4 md:mb-4">
              <a href="#">
                <h3 className="heading-h5 font-bold">
                  Senior Process Engineer
                </h3>
              </a>
              <Badge>Engineering</Badge>
            </div>
            <p className="mb-5 md:mb-6">
              Lead process design for biogas upgrading systems and RNG
              facilities.
            </p>
            <div className="flex flex-wrap gap-y-3">
              <div className="mr-6 flex items-center">
                <div className="mr-3 flex-none">
                  <LuMapPin className="flex size-6 flex-col items-center justify-center" />
                </div>
                <span className="text-medium">Houston,</span>
              </div>
              <div className="mr-6 flex items-center">
                <div className="mr-3 flex-none">
                  <MdAccessTime className="flex size-6 flex-col items-center justify-center" />
                </div>
                <span className="text-medium">5+ years</span>
              </div>
            </div>
            <div className="mt-6 md:mt-8">
              <Button
                title="Apply now"
                variant="secondary"
                size="sm"
                asChild={true}
              >
                <a href="#">Apply now</a>
              </Button>
            </div>
          </Card>
          <Card className="p-6 md:p-8">
            <div className="mb-3 flex items-start justify-between gap-4 md:mb-4">
              <a href="#">
                <h3 className="heading-h5 font-bold">Project Manager - EPC</h3>
              </a>
              <Badge>Project Management</Badge>
            </div>
            <p className="mb-5 md:mb-6">
              Manage large-scale RNG EPC projects from design through
              commissioning.
            </p>
            <div className="flex flex-wrap gap-y-3">
              <div className="mr-6 flex items-center">
                <div className="mr-3 flex-none">
                  <LuMapPin className="flex size-6 flex-col items-center justify-center" />
                </div>
                <span className="text-medium">Denver</span>
              </div>
              <div className="mr-6 flex items-center">
                <div className="mr-3 flex-none">
                  <MdAccessTime className="flex size-6 flex-col items-center justify-center" />
                </div>
                <span className="text-medium">7+ years</span>
              </div>
            </div>
            <div className="mt-6 md:mt-8">
              <Button
                title="Apply now"
                variant="secondary"
                size="sm"
                asChild={true}
              >
                <a href="#">Apply now</a>
              </Button>
            </div>
          </Card>
          <Card className="p-6 md:p-8">
            <div className="mb-3 flex items-start justify-between gap-4 md:mb-4">
              <a href="#">
                <h3 className="heading-h5 font-bold">
                  Field Service Technician
                </h3>
              </a>
              <Badge>Operations</Badge>
            </div>
            <p className="mb-5 md:mb-6">
              Provide on-site maintenance and troubleshooting for RNG
              facilities.
            </p>
            <div className="flex flex-wrap gap-y-3">
              <div className="mr-6 flex items-center">
                <div className="mr-3 flex-none">
                  <LuMapPin className="flex size-6 flex-col items-center justify-center" />
                </div>
                <span className="text-medium">Multiple Locations</span>
              </div>
              <div className="mr-6 flex items-center">
                <div className="mr-3 flex-none">
                  <MdAccessTime className="flex size-6 flex-col items-center justify-center" />
                </div>
                <span className="text-medium">3+ years</span>
              </div>
            </div>
            <div className="mt-6 md:mt-8">
              <Button
                title="Apply now"
                variant="secondary"
                size="sm"
                asChild={true}
              >
                <a href="#">Apply now</a>
              </Button>
            </div>
          </Card>
          <Card className="p-6 md:p-8">
            <div className="mb-3 flex items-start justify-between gap-4 md:mb-4">
              <a href="#">
                <h3 className="heading-h5 font-bold">
                  Business Development Manager
                </h3>
              </a>
              <Badge>Sales</Badge>
            </div>
            <p className="mb-5 md:mb-6">
              Develop new market opportunities and client relationships
            </p>
            <div className="flex flex-wrap gap-y-3">
              <div className="mr-6 flex items-center">
                <div className="mr-3 flex-none">
                  <LuMapPin className="flex size-6 flex-col items-center justify-center" />
                </div>
                <span className="text-medium">Remote/Travel</span>
              </div>
              <div className="mr-6 flex items-center">
                <div className="mr-3 flex-none">
                  <MdAccessTime className="flex size-6 flex-col items-center justify-center" />
                </div>
                <span className="text-medium">5+ years</span>
              </div>
            </div>
            <div className="mt-6 md:mt-8">
              <Button
                title="Apply now"
                variant="secondary"
                size="sm"
                asChild={true}
              >
                <a href="#">Apply now</a>
              </Button>
            </div>
          </Card>
          <Card className="p-6 md:p-8">
            <div className="mb-3 flex items-start justify-between gap-4 md:mb-4">
              <a href="#">
                <h3 className="heading-h5 font-bold">
                  Skid Manufacturing Supervisor
                </h3>
              </a>
              <Badge>Manufacturing</Badge>
            </div>
            <p className="mb-5 md:mb-6">
              Oversee production of custom skid-mounted gas processing
              equipment.
            </p>
            <div className="flex flex-wrap gap-y-3">
              <div className="mr-6 flex items-center">
                <div className="mr-3 flex-none">
                  <LuMapPin className="flex size-6 flex-col items-center justify-center" />
                </div>
                <span className="text-medium">Phoenix</span>
              </div>
              <div className="mr-6 flex items-center">
                <div className="mr-3 flex-none">
                  <MdAccessTime className="flex size-6 flex-col items-center justify-center" />
                </div>
                <span className="text-medium">4+ years</span>
              </div>
            </div>
            <div className="mt-6 md:mt-8">
              <Button
                title="Apply now"
                variant="secondary"
                size="sm"
                asChild={true}
              >
                <a href="#">Apply now</a>
              </Button>
            </div>
          </Card>
          <Card className="p-6 md:p-8">
            <div className="mb-3 flex items-start justify-between gap-4 md:mb-4">
              <a href="#">
                <h3 className="heading-h5 font-bold">Environmental Engineer</h3>
              </a>
              <Badge>Engineering</Badge>
            </div>
            <p className="mb-5 md:mb-6">
              Support permitting, compliance, and environmental impact
              assessments.
            </p>
            <div className="flex flex-wrap gap-y-3">
              <div className="mr-6 flex items-center">
                <div className="mr-3 flex-none">
                  <LuMapPin className="flex size-6 flex-col items-center justify-center" />
                </div>
                <span className="text-medium">Sacramento</span>
              </div>
              <div className="mr-6 flex items-center">
                <div className="mr-3 flex-none">
                  <MdAccessTime className="flex size-6 flex-col items-center justify-center" />
                </div>
                <span className="text-medium">3+ years</span>
              </div>
            </div>
            <div className="mt-6 md:mt-8">
              <Button
                title="Apply now"
                variant="secondary"
                size="sm"
                asChild={true}
              >
                <a href="#">Apply now</a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
