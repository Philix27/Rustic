"use client";
import { AppTopNavbar, ClientOnly } from "@/comps";
import ProjectsList from "./grid";

interface PropTypes {
  slug: string;
  frontmatter: {
    [key: string]: string;
  };
}
export default function ProjectsPage() {
  return (
    <ClientOnly>
      <AppTopNavbar title={"Books"} icons={[]} />
      <ProjectsList />
    </ClientOnly>
  );
}
