import { ConfigData } from "@/interface";
import Link from "../Link";

const LINK_LIST = [
  { text: "Home", url: "#home" },
  { text: "About", url: "#about" },
  { text: "Projects", url: "#projects" },
  { text: "Experiences", url: "#experiences" },
];

const Header = ({ data }: { data: ConfigData }) => {
  const { title } = data;

  return (
    <header className="fixed w-full top-0 z-10 bg-white h-20 flex items-center justify-between p-5">
      <div className="">{title}</div>

      <div className=" flex gap-2">
        {LINK_LIST.map(({ text, url }) => (
          <Link key={text} text={text} href={url} color={data.primary_color} />
        ))}
      </div>
    </header>
  );
};

export default Header;
