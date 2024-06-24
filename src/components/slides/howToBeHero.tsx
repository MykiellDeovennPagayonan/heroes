import { FC } from 'react';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';

const HowToBeHero: FC = () => {
  return (
    <div className="flex flex-col w-screen items-center justify-center h-screen bg-neutral-100 text-black bg-grid-black/[0.05]">
      <TextGenerateEffect words={words} className='text-5xl font-bold'/>
      <InfiniteMovingCards
        items={answers}
        direction="right"
        speed="slow"
        className='mt-12'
        />
    </div>
  );
};

export default HowToBeHero;

const words = "How can I be a hero too?"

const answers = [
  {
    quote:
      "Helping Others in Need",
  },
  {
    quote:
      "Being Brave in Challenging Situations",
  },
  {
    quote:
      "Standing Up Against Injustice",
  },
  {
    quote:
      "Being Honest and Trustworthy",
  },
  {
    quote:
      "Practicing Selflessness",
  },
  {
    quote:
      "Being Resilient",
  },
  {
    quote:
      "Supporting and Uplifting Others",
  },
];