"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
// Types
interface Testimonial {
  id: number;
  name: string;
  company: string;
  body: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  isActive: boolean;
}

// Constants
const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Ayowole O,",
    company: "Audiocare",
    body: "I'm truly impressed by the dedication the team at ReCreaX showed during this project. They managed to build an incredible platform that showcases my business, within a tight deadline. Their hard work and expertise really made a difference!",
  },
  {
    id: 2,
    name: "Dr. Bode Oguntoke",
    company: "DBO",
    body: "ReCreaX delivered excellent performance, managing the project end-to-end with strong communication, leadership, and problem-solving skills. Their proactive and adaptable approach was key to the project's success. I highly recommend them for a job well done.",
  },
  {
    id: 3,
    name: "Reetika Matha",
    company: "Healthtech Founder",
    body: "I really appreciate the effort the team at ReCreaX put into the GHIH project. Within a short time frame, they developed my Web App that allows elderly users connect easily with volunteers and companions.",
  },
  {
    id: 4,
    name: "Emmanuel Adedayo",
    company: "Agrotech Founder",
    body: "Working with ReCreaX has been a rewarding experience. It gave me the support, resources, and collaborative space to turn my idea—the QRL Management Solution—into a real product. I was empowered to think creatively, refine my vision, and address real challenges faced by poultry farmers and small businesses in Nigeria.",
  },
];

// Components
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  isActive,
}) => (
  <motion.div
    initial={{ opacity: 0, x: 1000 }}
    animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 1000 }}
    exit={{ opacity: 0, x: -1000 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className={`w-full ${isActive ? "block" : "hidden"}`}
  >
    <div className="bg-white border-1 flex flex-col gap-6 sm:gap-12 rounded-lg shadow-[4px_9px_35px_8px_rgba(151,_163,_57,_0.3)] m-4 sm:m-10 transition-shadow duration-300 p-4 sm:p-8">
      <p className="text-[#65605c] text-base sm:text-lg mb-4 sm:mb-6 font-plus-jakarta-sans">
        &quot;{testimonial.body}&quot;
      </p>
      <div className="flex flex-col items-start gap-2 sm:gap-3">
        <span className="font-semibold text-xl sm:text-2xl text-gray-800 font-tomato">
          {testimonial.name}
        </span>
        <span className="text-[#2a2829] text-sm sm:text-base font-normal font-plus-jakarta-sans">
          {testimonial.company}
        </span>
      </div>
    </div>
  </motion.div>
);

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Memoize the visible dots calculation
  const visibleDots = useMemo(() => {
    const totalDots = TESTIMONIALS.length;
    const halfWindow = 2;
    const windowStart = Math.max(
      0,
      Math.min(activeIndex - halfWindow, totalDots - 5)
    );
    const windowEnd = Math.min(totalDots, windowStart + 5);

    return Array.from(
      { length: windowEnd - windowStart },
      (_, i) => windowStart + i
    );
  }, [activeIndex]);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between w-full bg-white gap-6 sm:gap-8 md:gap-16 py-6 sm:py-10 md:py-20 px-4 sm:px-8 md:px-16 lg:px-32 min-h-[600px] ">
      <h2 className="flex flex-row sm:flex-col gap-4 sm:gap-6 items-center sm:items-start justify-center whitespace-nowrap text-black text-center font-semibold text-xl sm:text-2xl md:text-4xl w-fit font-tomato">
        <Image
          unoptimized={true}
          src="/images/Works-star.png"
          alt="works-1"
          width={24}
          height={24}
          className="w-6 h-6 sm:w-8 sm:h-8"
        />
        What Our Clients Say
      </h2>

      <div className="flex flex-col items-start justify-center gap-6 sm:gap-8 w-full max-w-3xl">
        {/* Navigation Dots */}
        <div className="flex items-center gap-1 sm:gap-2">
          {visibleDots.map((index) => (
            <motion.div
              key={index}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-6 sm:w-8 bg-[#97A339]"
                  : "w-1.5 sm:w-2 bg-[#DBDBD8]"
              }`}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.2 }}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>

        {/* Testimonial Cards */}
        <AnimatePresence mode="wait">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              isActive={index === activeIndex}
            />
          ))}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-3 sm:gap-[10px] w-full">
          <button
            onClick={handlePrevious}
            className="bg-[#12233d] text-white py-[7px] px-[10px] rounded-[8px] sm:py-2 sm:px-3  hover:bg-[#38547b] transition-colors cursor-pointer"
            aria-label="Previous testimonial"
          >
            <HiArrowLongLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-white fill-white text-white bor" />
          </button>

          <button
            onClick={handleNext}
            className="bg-[#12233d] text-white py-[7px] px-[10px] rounded-[8px] sm:py-2 sm:px-3  hover:bg-[#38547b] transition-colors cursor-pointer"
            aria-label="Next testimonial"
          >
            <HiArrowLongRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-white fill-white text-white bor" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
