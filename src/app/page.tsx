"use client"
import Image from "next/image";
import { AnimatePresence, motion } from 'framer-motion';
import OpeningSlide from "@/components/slides/openingSlide";
import IndividualHeroes from "@/components/slides/individualHeroes";
import QualitiesOfHeroes from "@/components/slides/qualitiesOfHeroes";
import Slide3 from "@/components/slides/slide3";
import { useState } from "react";

const slides = [<OpeningSlide key="slide1" />, <QualitiesOfHeroes key="slide4" />, <IndividualHeroes key="slide2" />,<Slide3 key="slide3" />]

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          className="absolute w-full h-full"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ duration: 0.5 }}
        >
          {slides[currentIndex]}
        </motion.div>
      </AnimatePresence>
      <button
        onClick={nextSlide}
        className="absolute bottom-4 right-4 bg-gray-800 text-white p-2 rounded"
      >
        Next →
      </button>
    </div>
  );
}
