import { attributes } from "../../content/config.md";

interface ConfigData {
  title: string;
}

const Header = ({ data = attributes }: { data?: ConfigData }) => {
  const { title } = data;

  return (
    <header className="sticky top-0 z-10 bg-white h-20 w-100% flex align-middle justify-between p-5">
      <div className="">{title}</div>

      <div className=" flex gap-2">
        <a href={`#home`}>Home</a>
        <a href={`#about`}>About</a>
        <a href={`#projects`}>Projects</a>
        <a href={`#experiences`}>Experiences</a>
      </div>
    </header>
  );
};

export default Header;
