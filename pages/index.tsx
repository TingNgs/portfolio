import { attributes, react as HomeContent } from '../content/home.md';


const Home = () =>{
  const { title, cats } = attributes;
  return <article>
  <h1>{title}</h1>
  <HomeContent />
  <ul>
    {cats.map((cat:{ name:string, description:string }, k:number) => (
      <li key={k}>
        <h2>{cat.name}</h2>
        <p>{cat.description}</p>
      </li>
    ))}
  </ul>
</article>
}

export default Home;
