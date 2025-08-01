"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

import { PiBuilding } from "react-icons/pi";
import { FaRegAddressCard } from "react-icons/fa";
// import { MdWeb } from "react-icons/md";
// import { IoMailUnreadOutline } from "react-icons/io5";

// import { BsNewspaper } from "react-icons/bs";

// import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

import { ChevronDown, Menu, X } from "lucide-react";
import NewsModal from "@/components/homecomps/blogpage/NewsModal";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav className=" sticky top-0 left-0 right-0 z-50 w-full py-0 px-0 sm:py-4 sm:p-8   bg-white">
      <div className="flex px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-5 bg-white h-fit w-full  items-center justify-between">
        <Link href="/">
          <Image
            unoptimized={true}
            src="/Logo.svg"
            alt="logo"
            width={120}
            height={75}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-1 md:gap-2">
          <Link
            className="px-1 sm:px-2 text-xs sm:text-sm font-plus-jakarta-sans text-gray-950"
            href="/"
          >
            Home
          </Link>
          <Link
            className="px-1 sm:px-2 text-xs sm:text-sm font-plus-jakarta-sans text-gray-950"
            href="/studio"
          >
            Studio
          </Link>
          <Link
            className="px-1 sm:px-2 text-xs sm:text-sm font-plus-jakarta-sans text-gray-950"
            href="/case-studies"
          >
            Case Studies
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="focus-visible:outline-none">
              <div className="flex items-center h-fit gap-1 md:gap-2">
                <p className="font-medium font-plus-jakarta-sans text-xs sm:text-sm text-gray-950">
                  Company
                </p>
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 pt-1" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[280px] sm:w-[320px] md:w-[360px]">
              <DropdownMenuItem className="flex flex-row gap-3 items-center justify-start ">
                <Link
                  href="/about-us"
                  className="flex flex-row gap-3 items-center justify-start "
                >
                  <div className=" bg-blue-100 text-clickable-text w-8 h-8 p-1 flex items-center justify-center  rounded-full">
                    <PiBuilding className="w-5 h-5 text-[#003267]" />
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-start">
                    <p className="text-sm font-medium font-plus-jakarta-sans text-gray-950">
                      About Us
                    </p>
                    <p className="text-xs whitespace-nowrap font-plus-jakarta-sans text-[#65605c]">
                      Learn who we are and what we do
                    </p>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="/contact-us"
                  className="flex flex-row gap-3 items-center justify-start "
                >
                  <div className=" bg-blue-100 text-clickable-text w-8 h-8 p-1 flex items-center justify-center  rounded-full">
                    <FaRegAddressCard className="w-5 h-5 text-[#003267]" />
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-start">
                    <p className="text-sm font-medium font-plus-jakarta-sans text-gray-950">
                      Contact Us
                    </p>
                    <p className="text-xs whitespace-nowrap font-plus-jakarta-sans text-[#65605c]">
                      Get in touch with the ReCreaX team
                    </p>
                  </div>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            {/* <DropdownMenuTrigger className="focus-visible:outline-none">
              <div className="flex items-center h-fit gap-1 md:gap-2">
                <p className="font-medium font-plus-jakarta-sans text-xs sm:text-sm text-gray-950">
                  Resources
                </p>
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 pt-1" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[280px] sm:w-[320px] md:w-[360px]">
         
              <DropdownMenuItem>
                <Link
                  href="/blog"
                  className="flex flex-row gap-3 items-center justify-start "
                >
                  <div className=" bg-blue-100 text-clickable-text w-8 h-8 p-1 flex items-center justify-center  rounded-full">
                    <MdWeb className="w-5 h-5 text-[#003267]" />
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-start">
                    <p className="text-sm font-medium font-plus-jakarta-sans text-gray-950">
                      Blog
                    </p>
                    <p className="text-xs whitespace-nowrap font-plus-jakarta-sans text-[#65605c]">
                      Weekly insights to help you build smarter
                    </p>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div
                  onClick={() => setIsModalOpen(true)}
                  className="flex flex-row gap-3 items-center justify-start "
                >
                  <div className=" bg-blue-100 text-clickable-text w-8 h-8 p-1 flex items-center justify-center  rounded-full">
                    <IoMailUnreadOutline className="w-5 h-5 text-[#003267]" />
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-start">
                    <p className="text-sm font-medium font-plus-jakarta-sans text-gray-950">
                      Newsletter
                    </p>
                    <p className="text-xs whitespace-nowrap font-plus-jakarta-sans text-[#65605c]">
                      Get curated founder tips in your inbox
                    </p>
                  </div>
                </div>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <Link
                  href="/playbooks"
                  className="flex flex-row gap-3 items-center justify-start "
                >
                  <div className=" bg-blue-100 text-clickable-text w-8 h-8 p-1 flex items-center justify-center  rounded-full">
                    <PiBookOpenTextLight className="w-5 h-5 text-[#003267]" />
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-start">
                    <p className="text-sm font-medium font-plus-jakarta-sans text-gray-950">
                      Playbooks
                    </p>
                    <p className="text-xs whitespace-nowrap font-plus-jakarta-sans text-[#65605c]">
                      Step-by-step guides for product execution
                    </p>
                  </div>
                </Link>
              </DropdownMenuItem> 
            </DropdownMenuContent> */}
          </DropdownMenu> 
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden p-2 cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute top-[74px] left-0 right-0 bg-blue-50 shadow-lg rounded-lg w-full p-4 sm:hidden">
            <div className="flex flex-col bg-light gap-4">
              <Link
                className="font-medium font-plus-jakarta-sans text-sm text-gray-950"
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                className="font-medium font-plus-jakarta-sans text-sm text-gray-950"
                href="/studio"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Studio
              </Link>
              <Link
                className="font-medium font-plus-jakarta-sans text-sm text-gray-950"
                href="/case-studies"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Case Studies
              </Link>

              {/* Mobile Company Dropdown */}
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="focus-visible:outline-none py-0 no-underline cursor-pointer">
                    <p className="font-medium font-plus-jakarta-sans text-sm text-gray-950">
                      Company
                    </p>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="p-4 bg-white rounded-lg flex flex-col gap-2">
                      <Link
                        href="/about-us"
                        className="flex flex-row gap-3 items-center justify-start   "
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className=" bg-blue-100 text-clickable-text w-8 h-8 p-1 flex items-center justify-center  rounded-full">
                          <PiBuilding className="w-5 h-5 text-[#003267]" />
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-start">
                          <p className="text-sm font-medium font-plus-jakarta-sans text-gray-950">
                            About Us
                          </p>
                          <p className="text-xs whitespace-nowrap font-plus-jakarta-sans text-[#65605c]">
                            Learn who we are and what we do
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/contact-us"
                        className="flex flex-row gap-3 items-center justify-start   "
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className=" bg-blue-100 text-clickable-text w-8 h-8 p-1 flex items-center justify-center  rounded-full">
                          <FaRegAddressCard className="w-5 h-5 text-[#003267]" />
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-start">
                          <p className="text-sm font-medium font-plus-jakarta-sans text-gray-950">
                            Contact Us
                          </p>
                          <p className="text-xs whitespace-nowrap font-plus-jakarta-sans text-[#65605c]">
                            Get in touch with the ReCreaX team
                          </p>
                        </div>
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Mobile Resources Dropdown */}
              {/* <Accordion type="single" collapsible>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="focus-visible:outline-none py-0">
                      <p className="font-medium font-plus-jakarta-sans text-sm text-gray-950">
                        Resources
                      </p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="p-4 bg-white rounded-lg flex flex-col gap-2">
                         <Link
                          href="/case-studies"
                          className="flex flex-row gap-3 items-center justify-start "
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className=" bg-blue-100 text-clickable-text w-8 h-8 p-1 flex items-center justify-center  rounded-full">
                            <BsNewspaper className="w-5 h-5 text-[#003267]" />
                          </div>
                          <div className="flex flex-col gap-1 items-start justify-start">
                            <p className="text-sm font-medium font-plus-jakarta-sans text-gray-950">
                              Case Studies
                            </p>
                            <p className="text-xs whitespace-nowrap font-plus-jakarta-sans text-[#65605c]">
                              See how founders launched and scaled with ReCreaX
                            </p>
                          </div>
                        </Link> 
                        <Link
                          href="/blog"
                          className="flex flex-row gap-3 items-center justify-start "
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className=" bg-blue-100 text-clickable-text w-8 h-8 p-1 flex items-center justify-center  rounded-full">
                            <MdWeb className="w-5 h-5 text-[#003267]" />
                          </div>
                          <div className="flex flex-col gap-1 items-start justify-start">
                            <p className="text-sm font-medium font-plus-jakarta-sans text-gray-950">
                              Blog
                            </p>
                            <p className="text-xs whitespace-nowrap font-plus-jakarta-sans text-[#65605c]">
                              Weekly insights to help you build smarter
                            </p>
                          </div>
                        </Link>
                        <p
                          className="flex flex-row gap-3 items-center justify-start "
                          onClick={() => setIsModalOpen(true)}
                        >
                          <div className=" bg-blue-100 text-clickable-text w-8 h-8 p-1 flex items-center justify-center  rounded-full">
                            <IoMailUnreadOutline className="w-5 h-5 text-[#003267]" />
                          </div>
                          <div className="flex flex-col gap-1 items-start justify-start">
                            <p className="text-sm font-medium font-plus-jakarta-sans text-gray-950">
                              Newsletter
                            </p>
                            <p className="text-xs whitespace-nowrap font-plus-jakarta-sans text-[#65605c]">
                              Get curated founder tips in your inbox
                            </p>
                          </div>
                        </p>
                         <Link
                          href="/playbooks"
                          className="flex flex-row gap-3 items-center justify-start "
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className=" bg-blue-100 text-clickable-text w-8 h-8 p-1 flex items-center justify-center  rounded-full">
                            <PiBookOpenTextLight className="w-5 h-5 text-[#003267]" />
                          </div>
                          <div className="flex flex-col gap-1 items-start justify-start">
                            <p className="text-sm font-medium font-plus-jakarta-sans text-gray-950">
                              Playbooks
                            </p>
                            <p className="text-xs whitespace-nowrap font-plus-jakarta-sans text-[#65605c]">
                              Step-by-step guides for product execution
                            </p>
                          </div>
                        </Link> 
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion> */}

              <Button
                onClick={() =>
                  window.open(
                    "https://calendly.com/rasheed-ogunbakinde-recreax/30min",
                    "_blank"
                  )
                }
                className="bg-[#12233d] text-sm font-medium rounded-lg py-[12px] px-4 hover:bg-[#12233d]/80 text-white w-full cursor-pointer"
              >
                Book a Free 1:1 Session
              </Button>
            </div>
          </div> 
        )}

        {/* Desktop Button */}
        <Button
          onClick={() =>
            window.open(
              "https://calendly.com/rasheed-ogunbakinde-recreax/30min",
              "_blank"
            )
          }
          className="hidden items-center justify-center sm:flex bg-[#12233d] rounded-lg py-[8px] sm:py-[10px] px-2 sm:px-3 hover:bg-[#12233d]/80 text-white text-xs sm:text-sm cursor-pointer"
        >
          Book a Free 1:1 Session
        </Button>
      </div>
      {isModalOpen && (
        <NewsModal open={isModalOpen} onOpenChange={setIsModalOpen} />
      )}
    </nav>
  );
}

export default Header;
