import { useEffect } from "react";
import HomePreview from "@/previews/HomePreview";
import ConfigPreview from "@/previews/ConfigPreview";

const Admin = () => {
  useEffect(() => {
    (async () => {
      const CMS = (await import("netlify-cms-app")).default;
      CMS.init();
      CMS.registerPreviewStyle("/admin/main.css");
      CMS.registerPreviewTemplate("config", ConfigPreview);
      CMS.registerPreviewTemplate("home", HomePreview);
    })();
  }, []);

  return <div />;
};

export default Admin;
