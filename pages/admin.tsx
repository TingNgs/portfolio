import { useEffect } from "react";
import PagePreview from "@/previews/HomePreview";

const Admin = () => {
  useEffect(() => {
    (async () => {
      const CMS = (await import("netlify-cms-app")).default;
      CMS.init();
      CMS.registerPreviewStyle("/admin/main.css");
      CMS.registerPreviewTemplate("home", PagePreview);
    })();
  }, []);

  return <div />;
};

export default Admin;
