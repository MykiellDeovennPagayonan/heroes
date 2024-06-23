import { FC } from 'react';
import { CardStack } from "../ui/card-stack";
import { cn } from "@/lib/utils";

const QualitiesOfHeroes: FC = () => {
  return (
    <div className="flex flex-col w-screen items-center justify-center h-screen bg-neutral-950 text-white bg-grid-white/[0.05]">
      <CardStack items={CARDS} />
    </div>
  );
};

export default QualitiesOfHeroes;

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};


const CARDS = [
  {
    id: 0,
    name: "Dale",
    designation: "Senior Software Engineer",
    content: (
      <p>
        They must be blazingly <Highlight> HOT </Highlight>
      </p>
    ),
  },
  {
    id: 1,
    name: "Sam",
    designation: "Senior Shitposter",
    content: (
      <p>
        <Highlight> Empathy, selflessness, and integrity </Highlight> are crucial qualities of heroism for me, embodying the best of humanity. Integrating these traits into my work as a Software Engineering student will make me a better engineer and person, aiming to bring a more human touch to the technical world.
      </p>
    ),
  },
  {
    id: 2,
    name: "Mykiell",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        Must love
        <Highlight>BURGERS</Highlight>
      </p>
    ),
  },
];

const content = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];