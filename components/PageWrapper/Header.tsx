import { ConfigData } from "@/interface";

const Header = ({ data }: { data: ConfigData }) => {
  const { title } = data;

  return (
    <header className="fixed w-full top-0 z-10 bg-white h-20 flex items-center justify-between p-5">
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
