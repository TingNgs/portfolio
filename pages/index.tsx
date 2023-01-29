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
      <section
        id="home"
        className="flex text-center justify-center flex-col h-screen"
      >
        <h1>{home.title}</h1>
        <p>{home.description}</p>
      </section>
      <section id="about">
        <h2>{about.title}</h2>
        <p>{about.description}</p>
        <div className="flex">
          <div>
            <h3>{about.content.title}</h3>
            <p>{about.content.content}</p>
          </div>
          <div>
            <h3>{about.skill.title}</h3>
            <div>
              {about.skill.skills.map((skill, index) => (
                <span key={index}>{skill.title}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="projects">
        <h2>{projects.title}</h2>
        <p>{projects.description}</p>
        <div>
          {projects.projects.map((project) => (
            <div key={project.id}>
              <p>{project.title}</p>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="experiences">
        <h2>{experiences.title}</h2>
        <div>
          {experiences.experiences.map((experience, index) => (
            <div key={index}>
              <h5>{experience.title}</h5>
              <p>{experience.date}</p>
              <p>{experience.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
