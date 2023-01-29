import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import SectionDescription from "@/components/SectionDescription";

import { attributes } from "../content/home.md";

export interface HomeData {
  home: { title: string; description: string; bg_color: string };
  about: {
    title: string;
    description: string;
    content: { title: string; content: string };
    skill: { title: string; skills: { title: string }[] };
  };
  projects: {
    title: string;
    description: string;
    projects: {
      title: string;
      description: string;
      id: string;
      thumbnail: string;
      tech: { title: string }[];
      button: { text: string; url: string };
    }[];
  };
  experiences: {
    title: string;
    experiences: {
      company: string;
      company_description: string;
      title: string;
      date_start: string;
      date_end: string;
      description: string;
    }[];
  };
}

const Home = ({ data = attributes }: { data?: HomeData }) => {
  const { home, about, projects, experiences } = data;
  return (
    <>
      <Section
        id="home"
        className={`text-center justify-center flex-col h-screen`}
        style={{ backgroundColor: home.bg_color, maxWidth: "100%" }}
      >
        <h1 className="text-5xl font-bold">{home.title}</h1>
        <SectionDescription className="text-2xl">
          {home.description}
        </SectionDescription>
      </Section>
      <Section id="about">
        <SectionTitle>{about.title}</SectionTitle>
        <SectionDescription>{about.description}</SectionDescription>
        <div className="flex flex-wrap gap-5">
          <div className="w-full md:w-1/3 flex-grow flex flex-col gap-5">
            <h3 className="text-2xl font-bold">{about.content.title}</h3>
            <ReactMarkdown>{about.content.content}</ReactMarkdown>
          </div>
          <div className="w-full md:w-1/3 flex-grow flex flex-col gap-5">
            <h3 className="text-2xl font-bold">{about.skill.title}</h3>
            <div className="flex flex-wrap gap-3">
              {about.skill.skills.map((skill, index) => (
                <span
                  key={index}
                  className="p-3 bg-gray-100 font-semibold rounded-md"
                >
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
        <div className="flex flex-col gap-10 w-full">
          {projects.projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-wrap gap-6 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-[30rem]">
                <Image
                  width={480}
                  height={296}
                  src={`/${project.thumbnail}` || "/img/macbook-pro.png"}
                  alt={`${project.title} image`}
                />
              </div>
              <div className="w-full md:w-auto flex-1 h-auto flex flex-col gap-5">
                <h5 className="text-2xl">{project.title}</h5>
                <ReactMarkdown>{project.description}</ReactMarkdown>
                <div className="flex gap-4 flex-wrap">
                  {project.tech.map((tech, index) => (
                    <div
                      key={index}
                      className="p-2 bg-gray-100 font-semibold rounded-md"
                    >
                      {tech.title}
                    </div>
                  ))}
                </div>
                <a
                  href={project.button.url}
                  target="_blank"
                  className="rounded-md p-2 w-fit hover:opacity-80 "
                  style={{ backgroundColor: home.bg_color }}
                  rel="noreferrer"
                >
                  {project.button.text}
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section id="experiences">
        <SectionTitle>{experiences.title}</SectionTitle>
        <div>
          {experiences.experiences.map((experience, index) => (
            <div key={index} className="border-b-2 pb-5 mb-5">
              <div>
                <span className="text-lg font-bold">{experience.company}</span>{" "}
                - <span>{experience.company_description}</span>
              </div>
              <div>
                <span className="text-2xl">{experience.title}</span>{" "}
                <span>
                  {experience.date_start} - {experience.date_end}
                </span>
              </div>

              <ReactMarkdown>{experience.description}</ReactMarkdown>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Home;
