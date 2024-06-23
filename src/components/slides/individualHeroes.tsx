import { FC } from 'react';
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { Spotlight } from '../ui/spotlight';
import { cn } from "@/lib/utils";

const IndividualHeroes: FC = () => {
  return (
    <div className="flex flex-col w-screen items-center justify-center h-screen bg-neutral-950 bg-dot-white/[0.1] text-white text-3xl">
      <Spotlight
        className="top-20 lg:-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <h3 className='mb-16'>
        <TypewriterEffectSmooth words={words} />
      </h3>
      <div className='flex flex-row'>
        <AnimatedTooltip items={people} />
      </div>
    </div>
  );
};

export default IndividualHeroes;

const people = [
  {
    id: 1,
    name: "Dr. Anthony Fauci",
    designation: "Doctor",
    image:
      "/images/Fauci.png",
  },
  {
    id: 2,
    name: "Tim Berners-Lee",
    designation: "Inventor of the World Wide Web",
    image:
      "/images/Tim.jpg",
  },
  {
    id: 3,
    name: "Sam Altman",
    designation: "A guy",
    image:
      "/images/Altman.jpeg",
  },
  {
    id: 4,
    name: "Katherine Johnson",
    designation: "Mathematician",
    image:
      "/images/Johnson.jpg",
  },
  {
    id: 5,
    name: "Malala Yousafzai",
    designation: "Global symbol",
    image:
      "/images/Malala.jpg",
  }
];

const words = [
  {
    text: "Our",
    className: "text-white",
  },
  {
    text: "modern",
    className: "text-white",
  },
  {
    text: "Heroes",
    className: "text-blue-500 dark:text-blue-500",
  },
];
