import { PropsWithChildren } from "react";
import { ConfigData } from "@/interface";
import Cursor from "./Cursor";
import Header from "./Header";
import { attributes } from "../../content/config.md";

const PageWrapper = ({
  children,
  data = attributes,
}: PropsWithChildren<{ data?: ConfigData }>) => {
  return (
    <>
      <Header data={data} />
      {children}
      <Cursor />
    </>
  );
};

export default PageWrapper;
