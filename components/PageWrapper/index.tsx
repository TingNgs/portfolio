import { PropsWithChildren } from "react";
import Cursor from "./Cursor";
import Header from "./Header";

const PageWrapper = ({ children }: PropsWithChildren<{}>) => {
  return (
    <>
      <Header />
      {children}
      <Cursor />
    </>
  );
};

export default PageWrapper;
