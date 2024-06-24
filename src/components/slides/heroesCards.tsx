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
    title: "Nelson Mandela",
    description:
      `Nelson Mandela was a South African anti-apartheid revolutionary and political leader who served as President of South Africa from 1994 to 1999. Born in 1918, Mandela played a crucial role in the fight against the apartheid system, a regime of racial segregation and discrimination against non-white South Africans. He spent 27 years in prison for his activism before being released in 1990, going on to negotiate an end to apartheid and becoming the country's first democratically elected president.
Mandela is considered a modern hero for his unwavering commitment to justice, equality, and reconciliation. Despite facing decades of persecution and imprisonment, he emerged without bitterness, advocating for peace and unity in a deeply divided nation. His leadership in dismantling apartheid and promoting a multiracial democracy in South Africa, coupled with his message of forgiveness and national reconciliation, inspired people worldwide. Mandela's life exemplifies the power of perseverance, moral courage, and the ability to bring about significant social change through nonviolent means, making him an enduring symbol of hope and human rights.`,
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/Mandela.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="hero image"
        />
      </div>
    ),
    link: "/mandela"
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
    link: "/tim"
  },
  {
    title: "Jimmy Donaldson (MrBeast)",
    description:
      `MrBeast, whose real name is
Jimmy Donaldson, has become a
modern-day hero through his
philanthropic efforts and
innovative approach to content
creation on YouTube. He gained
fame for his attention-grabbing
and often whimsical videos,
which range from massive
challenges and stunts to acts of
extreme generosity. What sets
MrBeast apart is his
commitment to giving back to
communities and individuals in
need.

One of MrBeast's most notable
initiatives is his focus on charitable giving. He has conducted
numerous fundraising campaigns where he donates large sums of
money to people experiencing hardship, small businesses, and
charitable organizations. These efforts have helped raise awareness
about various social issues and inspired his audience to participate in
acts of kindness and generosity.

Moreover, MrBeast's creativity in content creation has captured the
imagination of millions of viewers worldwide. His ability to turn
entertaining challenges into meaningful opportunities for positive
impact has earned him a dedicated following and widespread
admiration. Through his videos, MrBeast continues to demonstrate
the power of using influence and creativity for good, making him a
hero in the eyes of many.
`,
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/Jimmy.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="hero image"
        />
      </div>
    ),
    link: "/jimmy"
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
    link: "/johnson"
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
    link: "/malala"
  },
];