import { FC } from 'react';
import { FlipWords } from "../ui/flip-words";
import { motion } from "framer-motion";
import { Highlighted } from "../ui/hero-highlight";
import { BackgroundBeams } from '../ui/background-beams';

const OpeningSlide: FC = () => {
  return (
    <div className="flex flex-col w-screen items-center justify-center h-screen bg-neutral-950">
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-xl px-4 md:text-2xl lg:text-3xl font-bold text-neutral-300 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        What defines a {" "}
        <Highlighted className="text-black dark:text-white">
          HERO?
        </Highlighted>
      </motion.h1>
      <h2 className='flex flex-col text-center my-12 text-7xl font-bold text-white'>
        <>A Hero is</>
        <FlipWords className="text-center text-green-400" words={words} />
      </h2>
      <BackgroundBeams />
    </div>
  );
};

export default OpeningSlide;

const words = ["Selfless", "Empathic", "Couragous", "Fearless", "Integrous"];