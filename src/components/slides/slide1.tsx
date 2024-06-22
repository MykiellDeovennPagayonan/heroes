import { FC } from 'react';
import { CardStack } from "../ui/card-stack";
import { cn } from "@/lib/utils";

const Slide1: FC = () => {
  return (
    <div className="flex w-screen items-center justify-center h-screen bg-blue-500 text-white">
      <CardStack items={CARDS} />
    </div>
  );
};

export default Slide1;

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
        Must be like <Highlight>ME</Highlight>
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