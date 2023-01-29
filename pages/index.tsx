import Image from "next/image";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import SectionDescription from "@/components/SectionDescription";

import { attributes } from "../content/home.md";

export interface HomeData {
  home: { title: string; description: string };
  about: {
    title: string;
    description: string;
    content: { title: string; content: string };
    skill: { title: string; skills: { title: string }[] };
  };
  projects: {
    title: string;
    description: string;
    projects: { title: string; description: string; id: string }[];
  };
  experiences: {
    title: string;
    experiences: { title: string; date: string; description: string }[];
  };
}

const Home = ({ data = attributes }: { data?: HomeData }) => {
  const { home, about, projects, experiences } = data;
  return (
    <>
      <Section
        id="home"
        className="text-center justify-center flex-col h-screen"
      >
        <h1 className="text-5xl font-bold">{home.title}</h1>
        <SectionDescription className="text-2xl">
          {home.description}
        </SectionDescription>
      </Section>
      <Section id="about">
        <SectionTitle>{about.title}</SectionTitle>
        <SectionDescription>{about.description}</SectionDescription>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            <h3 className="text-2xl font-bold">{about.content.title}</h3>
            <p>{about.content.content}</p>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            <h3 className="text-2xl font-bold">{about.skill.title}</h3>
            <div className="flex flex-wrap gap-3">
              {about.skill.skills.map((skill, index) => (
                <span key={index} className="p-3 bg-gray-100 font-semibold">
                  {skill.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>
      <Section id="projects">
        <SectionTitle>{projects.title}</SectionTitle>
        <SectionDescription>{projects.description}</SectionDescription>
        <div className="flex flex-col gap-2 w-full">
          {projects.projects.map((project) => (
            <div key={project.id} className="flex flex-wrap gap-5 items-center">
              <div className="w-full md:w-[30rem]">
                <Image
                  width={480}
                  height={296}
                  src="/img/macbook-pro.png"
                  alt="macbook-mockup"
                />
              </div>
              <div className="w-full md:w-auto flex-1 h-auto">
                <h5 className="text-2xl">{project.title}</h5>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section id="experiences">
        <SectionTitle>{experiences.title}</SectionTitle>
        <div>
          {experiences.experiences.map((experience, index) => (
            <div key={index}>
              <h5>{experience.title}</h5>
              <p>{experience.date}</p>
              <p>{experience.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Home;
