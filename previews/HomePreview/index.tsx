import React from "react";
import Home from "@/pages/index";

const HomePreview = ({ entry }: any) => {
  console.log(entry);
  const page = entry.toJS();

  return <Home {...page} />;
};
export default HomePreview;
