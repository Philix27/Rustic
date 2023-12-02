import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";


const sanityConfig = defineConfig({
  projectId: "",
  dataset: "production",
  title: "Rustic Guide",
  apiVersion: "2023-12-02",
  basePath: "/admin",
  plugins: [deskTool()],
});

export default sanityConfig;
