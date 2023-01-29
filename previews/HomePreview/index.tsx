import React from "react";
import Home from "@/pages/index";
import PageWrapper from "@/components/PageWrapper";

const HomePreview = ({ entry }: any) => {
  console.log(entry);
  const page = entry.toJS();

  return (
    <PageWrapper>
      <Home {...page} />
    </PageWrapper>
  );
};
export default HomePreview;
