"use client";

import * as React from "react";

import Logo from "./logos/logo";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utlis";

const mobileNavLinks = [
  "Get the app",
  "Account",
  "Sync",
  "Publish",
  "Pricing",
  "Plugins",
];

const NavLinks = [
  "Download",
  "Pricing",
  "Sync",
  "Publish",
  "Community",
  "Account",
];

const mobileLearnMoreLinks = [
  "Help",
  "Blog",
  "Manifesto",
  "Discord",
  "Changelog",
  "Roadmap",
  "Merch store",
  "Report a bug",
];

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const toggleMobileNav = () => {
    setIsOpen(!isOpen);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className="bg-primary fixed top-0 left-0 right-0 z-40">
      <div
        className={cn(
          "container mobile-header flex items-center justify-between md:justify-normal transition-[height] duration-200",
          { scrolled }
        )}
      >
        <div className="w-full flex items-center justify-between z-40">
          <div className="flex items-center">
            <Link
              href={"#"}
              className="hover:text-accent-400 transition-colors"
            >
              <Logo />
            </Link>
            <div className="hidden md:flex ml-3.5">
              {NavLinks.slice(0, -2).map((link, index) => (
                <ul key={index}>
                  <li>
                    <Link
                      href={"#"}
                      className="font-medium align-middle text-muted-foreground py-2 px-3 hover:text-accent-400"
                    >
                      {link}
                    </Link>
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <div className="hidden md:flex">
            {NavLinks.slice(-2).map((link, index) => (
              <ul key={index}>
                <li>
                  <Link
                    href={"#"}
                    className="align-middle font-medium text-muted-foreground py-2 px-3 hover:text-accent-400"
                  >
                    {link}
                  </Link>
                </li>
              </ul>
            ))}
          </div>
        </div>

        <div className="md:hidden z-40 cursor-pointer">
          {isOpen ? (
            <X
              className="text-muted-foreground"
              size={28}
              onClick={toggleMobileNav}
            />
          ) : (
            <Menu
              className="text-muted-foreground"
              size={28}
              onClick={toggleMobileNav}
            />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="bg-background mobile-nav-content fixed top-0 left-0 right-0 bottom-0 overflow-y-auto overscroll-contain block md:hidden z-30">
          <div className="container py-4">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {mobileNavLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={"#"}
                    className={cn(
                      "block text-lg font-medium p-3 w-full bg-secondary rounded transition-all hover:text-accent-400",
                      {
                        "bg-accent-600 text-foreground hover:text-foreground hover:bg-accent-500":
                          index === 0,
                      }
                    )}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <span className="text-sm text-muted-foreground">Learn more</span>
              <ul className="pt-3.5 grid grid-cols-2 gap-2">
                {mobileLearnMoreLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={"#"}
                      className="flex bg-secondary rounded p-3 font-medium text-sm hover:text-accent-400 transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
