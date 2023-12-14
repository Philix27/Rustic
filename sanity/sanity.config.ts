import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaRegistry } from "./schema";

const sanityConfig = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: "production",
  title: "Rustic Guide",
  apiVersion: "2023-12-02",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemaRegistry },
  // plugins: [
  // codeInput(),
  // ],
});

export default sanityConfig;
