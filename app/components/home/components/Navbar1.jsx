"use client";

import { useMediaQuery } from "@/hooks/use-media-query"
import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import { RxChevronDown } from "react-icons/rx";

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const openOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(true);
  };
  const closeOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(false);
  };
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
  return {
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
    animateDropdownMenu,
    animateDropdownMenuIcon,
  };
};

export function Navbar1() {
  const useActive = useRelume();
  return (
    <section className="z-[999] flex w-full items-center border-b border-scheme-border bg-white lg:min-h-18 lg:px-[5%]">
      <div className="size-full lg:flex lg:items-center lg:justify-between">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <a href="#">
            <img
              src="/logo_main_B.jpg"
              width={100}
              alt="Logo image"
            />
          </a>
          <button
            className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
            onClick={useActive.toggleMobileMenu}
          >
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-neutral-darkest"
              animate={useActive.animateMobileMenuButtonSpan}
              variants={{
                open: { translateY: 8, transition: { delay: 0.1 } },
                rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
                closed: {
                  translateY: 0,
                  rotate: 0,
                  transition: { duration: 0.2 },
                },
              }}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-neutral-darkest"
              animate={useActive.animateMobileMenu}
              variants={{
                open: { width: 0, transition: { duration: 0.1 } },
                closed: {
                  width: "1.5rem",
                  transition: { delay: 0.3, duration: 0.2 },
                },
              }}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-neutral-darkest"
              animate={useActive.animateMobileMenuButtonSpan}
              variants={{
                open: { translateY: -8, transition: { delay: 0.1 } },
                rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
                closed: {
                  translateY: 0,
                  rotate: 0,
                  transition: { duration: 0.2 },
                },
              }}
            />
          </button>
        </div>
        <motion.div
          variants={{
            open: { height: "var(--height-open, 100dvh)" },
            close: { height: "var(--height-closed, 0)" },
          }}
          initial="close"
          exit="close"
          animate={useActive.animateMobileMenu}
          transition={{ duration: 0.4 }}
          className="overflow-hidden px-[5%] lg:flex lg:items-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
          style={{color: 'black'}}
        >
          <a
            href="/about"
            className="text-regular block py-3 first:pt-7 lg:px-4 lg:py-2 first:lg:pt-2"
          >
            About us
          </a>
          <div
            onMouseEnter={useActive.openOnDesktopDropdownMenu}
            onMouseLeave={useActive.closeOnDesktopDropdownMenu}
          >
            <button
              className="text-regular flex w-full items-center justify-between gap-2 py-3 text-left lg:flex-none lg:justify-start lg:px-4 lg:py-2"
              onClick={useActive.openOnMobileDropdownMenu}
            >
              <span>Services</span>
              <motion.span
                variants={{ rotated: { rotate: 180 }, initial: { rotate: 0 } }}
                animate={useActive.animateDropdownMenuIcon}
                transition={{ duration: 0.3 }}
              >
                <RxChevronDown />
              </motion.span>
            </button>
            <AnimatePresence>
              <motion.nav
                variants={{
                  open: {
                    visibility: "visible",
                    opacity: "var(--opacity-open, 100%)",
                    display: "block",
                    y: 0,
                  },
                  close: {
                    visibility: "hidden",
                    opacity: "var(--opacity-close, 0)",
                    display: "none",
                    y: "var(--y-close, 0%)",
                  },
                }}
                animate={useActive.animateDropdownMenu}
                initial="close"
                exit="close"
                transition={{ duration: 0.2 }}
                className="bg-scheme-background lg:absolute lg:z-50 lg:border lg:border-scheme-border lg:p-2 lg:[--y-close:25%]"
              >
                <a
                  href="/services/engineering"
                  className="text-regular block py-3 pl-[5%] lg:px-4 lg:py-2"
                >
                  Engineering
                </a>
                <a
                  href="/services/skids"
                  className="text-regular block py-3 pl-[5%] lg:px-4 lg:py-2"
                >
                  Skids
                </a>
                <a
                  href="/services/epc"
                  className="text-regular block py-3 pl-[5%] lg:px-4 lg:py-2"
                >
                  EPC
                </a>
                <a
                  href="/services/om"
                  className="text-regular block py-3 pl-[5%] lg:px-4 lg:py-2"
                >
                  O&M
                </a>
              </motion.nav>
            </AnimatePresence>
          </div>
          <a
            href="/projects"
            className="text-regular block py-3 first:pt-7 lg:px-4 lg:py-2 first:lg:pt-2"
          >
            Projects
          </a>
          <div
            onMouseEnter={useActive.openOnDesktopDropdownMenu}
            onMouseLeave={useActive.closeOnDesktopDropdownMenu}
          >
            <button
              className="text-regular flex w-full items-center justify-between gap-2 py-3 text-left lg:flex-none lg:justify-start lg:px-4 lg:py-2"
              onClick={useActive.openOnMobileDropdownMenu}
            >
              <span>Markets</span>
              <motion.span
                variants={{ rotated: { rotate: 180 }, initial: { rotate: 0 } }}
                animate={useActive.animateDropdownMenuIcon}
                transition={{ duration: 0.3 }}
              >
                <RxChevronDown />
              </motion.span>
            </button>
            <AnimatePresence>
              <motion.nav
                variants={{
                  open: {
                    visibility: "visible",
                    opacity: "var(--opacity-open, 100%)",
                    display: "block",
                    y: 0,
                  },
                  close: {
                    visibility: "hidden",
                    opacity: "var(--opacity-close, 0)",
                    display: "none",
                    y: "var(--y-close, 0%)",
                  },
                }}
                animate={useActive.animateDropdownMenu}
                initial="close"
                exit="close"
                transition={{ duration: 0.2 }}
                className="bg-scheme-background lg:absolute lg:z-50 lg:border lg:border-scheme-border lg:p-2 lg:[--y-close:25%]"
              >
                <a
                  href="/markets/dairy"
                  className="text-regular block py-3 pl-[5%] lg:px-4 lg:py-2"
                >
                  Diary
                </a>
                <a
                  href="/markets/landfills"
                  className="text-regular block py-3 pl-[5%] lg:px-4 lg:py-2"
                >
                  Landfills
                </a>
                <a
                  href="/markets/wastewater"
                  className="text-regular block py-3 pl-[5%] lg:px-4 lg:py-2"
                >
                  Wastewater
                </a>
                
              </motion.nav>
            </AnimatePresence>
          </div>
          <a
            href="/news"
            className="text-regular block py-3 first:pt-7 lg:px-4 lg:py-2 first:lg:pt-2"
          >
            News
          </a>
          <a
            href="/careers"
            className="text-regular block py-3 first:pt-7 lg:px-4 lg:py-2 first:lg:pt-2"
          >
            Careers
          </a>
          <a
            href="/contact"
            className="text-regular block py-3 first:pt-7 lg:px-4 lg:py-2 first:lg:pt-2"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}
