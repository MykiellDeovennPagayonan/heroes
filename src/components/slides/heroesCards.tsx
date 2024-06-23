// components/Slide1.tsx
import { FC } from 'react';
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const HeroesCards: FC = () => {
  return (
    <div className="flex w-screen items-center justify-center h-screen bg-blue-200 text-white text-3xl">
      <StickyScroll content={content} />
    </div>
  );
};

export default HeroesCards;

const content = [
  {
    title: "Dr. Anthony Fauci",
    description:
      `Given his persistent dedication to public health and his critical
part in coordinating and disseminating responses to infectious
disease epidemics, Dr. Anthony Fauci has become a hero in today's
culture. Since taking over as head of the National Institute of Allergy
and Infectious Diseases (NIAID) in 1984, Dr. Fauci has been at the
vanguard of many health emergencies, such as the COVID-19
pandemic, HIV/AIDS, SARS, H1N1, and Ebola. His scientific expertise
and his ability to explain complicated medical concepts to the
general people in an understandable way have made him a reliable
source of information during uncertain times. Dr. Fauci has
continuously promoted evidence-based strategies during these
crises, stressing the value of research, immunizations, and
preventative actions to protect the public's health`,
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/Fauci.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="hero image"
        />
      </div>
    ),
    link: "/fauci"
  },
  {
    title: "Tim Berners-Lee",
    description:
      `Tim Berners-Lee is a hero in modern society as the inventor of
the World Wide Web, fundamentally transforming how we access
and share information. In 1989, while working at CERN, Berners-Lee
proposed a system that would allow documents to be linked across
different computers, leading to the creation of the first web browser
and server, and effectively launching the World Wide Web in 1991. His
visionary work has democratized access to information,
revolutionizing education, communication, and commerce, and
enabling a globally interconnected world. By making the Web's
foundational technologies royalty-free, Berners-Lee ensured that the
Web remained an open platform for innovation and collaboration.

Beyond his technical achievements, Berners-Lee has been a
staunch advocate for internet freedom and the protection of user
privacy. As the founder of the World Wide Web Consortium (W3C)
and the Web Foundation, he continues to champion the principles of
an open and accessible internet. His work has empowered billions of
people around the world, fostering unprecedented social and
economic development. Berners-Lee's enduring legacy lies in his
commitment to keeping the web a universal and open resource,
striving to bridge the digital divide and ensure that the benefits of the
internet are shared equitably across all societies.
`,
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/images/Tim.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="hero image"
        />
      </div>
    ),
  },
  {
    title: "Sam Altman",
    description:
      `Sam Altman is a significant figure in the technology and
entrepreneurial world, known for his leadership in innovation and his
contributions to the development of artificial intelligence. As the
former president of Y Combinator, Altman played a crucial role in
fostering startup culture, helping to launch and guide numerous
successful companies that have shaped the tech landscape. His work
at Y Combinator has empowered entrepreneurs by providing them
with the resources and mentorship needed to turn innovative ideas
into impactful businesses.

In recent years, Altman has made notable strides in the field of
artificial intelligence as the CEO of OpenAI. Under his leadership,
OpenAI has advanced the development and ethical implementation
of AI technologies, striving to ensure that the benefits of AI are widely
and equitably distributed. Altman's commitment to balancing
technological progress with societal well-being highlights his role as
a forward-thinking leader in the tech industry. His efforts in
promoting responsible AI development and fostering innovation
have positioned him as a key figure in shaping the future of
technology and its role in society.
`,
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/Altman.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="hero image"
        />
      </div>
    ),
  },
  {
    title: "Katherine Johnson",
    description:
      `Katherine Johnson is celebrated as a hero for her remarkable
contributions to the field of space exploration and her role in
breaking racial and gender barriers in science and mathematics. As a
brilliant mathematician at NASA, Johnson's work was crucial in
calculating the trajectories for several key missions, including the first
American in space, Alan Shepard, and the historic Apollo 11 moon
landing. Her exceptional computational skills and attention to detail
ensured the success and safety of these missions, earning her a place
among the pioneering figures in the space race.
Johnson's legacy extends beyond her technical achievements;
she is a symbol of resilience and perseverance in the face of
discrimination. Working during a time of segregation and limited
opportunities for African American women, Johnson's success
challenged societal norms and inspired future generations of women
and minorities to pursue careers in STEM fields. Her story, brought to
broader public awareness through the book and film "Hidden
Figures," highlights the critical contributions of unsung heroes and
underscores the importance of diversity and inclusion in scientific
advancement.`,
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/Johnson.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="hero image"
        />
      </div>
    ),
  },
  {
    title: "Malala Yousafzai",
    description:
      `Malala Yousafzai is a global symbol of courage and an advocate
for girls' education, rising to prominence after surviving a Taliban
assassination attempt for her activism. At the age of 15, Malala was
targeted for her outspoken campaign for the right of girls to receive
an education in her native Pakistan. Her miraculous survival and
unwavering determination transformed her into an international
advocate for education and women's rights. In 2014, she became the
youngest-ever Nobel Prize laureate, recognized for her efforts to
ensure that every child has access to schooling.
Malala's impact extends far beyond her personal story; she has
mobilized millions to support educational initiatives through the
Malala Fund, which champions the cause of free, safe, and quality
education for girls globally. Her speeches and writings continue to
inspire action and policy changes, addressing issues of gender
inequality and education accessibility. Malala's resilience and
advocacy work have empowered countless young women worldwide
to pursue their dreams and have emphasized the transformative
power of education in building a more just and equitable society`,
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/Malala.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="hero image"
        />
      </div>
    ),
  },
];