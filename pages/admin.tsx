import { useEffect } from "react";
import PagePreview from "@/previews/HomePreview";

const Admin = () => {
  console.log("here is admin");
  useEffect(() => {
    (async () => {
      const CMS = (await import("netlify-cms-app")).default;
      CMS.init();

      CMS.registerPreviewTemplate("home", PagePreview);
    })();
  }, []);

  return <div />;
};

export default Admin;
