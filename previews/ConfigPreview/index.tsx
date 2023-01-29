import React from "react";
import Home from "@/pages/index";
import PageWrapper from "@/components/PageWrapper";

const ConfigPreview = ({ entry }: any) => {
  const page = entry.toJS();

  return (
    <PageWrapper {...page}>
      <Home />
    </PageWrapper>
  );
};
export default ConfigPreview;
