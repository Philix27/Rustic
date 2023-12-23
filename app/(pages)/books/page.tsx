"use client";
import { ClientOnly } from "@/comps";
import BooksListView from "./client";

interface PropTypes {
  slug: string;
  frontmatter: {
    [key: string]: string;
  };
}
export default function BooksPage() {
  return (
    <ClientOnly>
      <BooksListView />
    </ClientOnly>
  );
}
