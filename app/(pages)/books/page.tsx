"use client";
import { ClientOnly } from "@/comps";
import BooksListView from "./view";

interface PropTypes {
  slug: string;
  frontmatter: {
    [key: string]: string;
  };
}
export default function ProjectsPage() {
  return (
    <ClientOnly>
      <BooksListView />
    </ClientOnly>
  );
}
