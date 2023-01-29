import { attributes } from "../content/home.md";

export interface HomeData {
  title: string;
  cats: { name: string; description: string }[];
}

const Home = ({ data = attributes }: { data?: HomeData }) => {
  console.log(data);
  const { title, cats } = data;
  return (
    <article>
      <h1 className="text-cyan-700">{title}</h1>

      <ul>
        {cats.map((cat: { name: string; description: string }, k: number) => (
          <li key={k}>
            <h2>{cat.name}</h2>
            <p>{cat.description}</p>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Home;
