"use client";
import { MetaHeader } from "../../comps/global/meta";

import { ClientOnly } from "../../comps/wrapper/client";
import BlogComp from ".";
import { AppTopNavbar } from "@/comps";

interface PropTypes {
  slug: string;
  frontmatter: {
    [key: string]: string;
  };
}

export default function BlogsPage() {
  return (
    <ClientOnly>
      <AppTopNavbar title={"Blogs"} icons={[]} />
      <MetaHeader title={"Blogs | Software Engineering"} />
      <BlogComp />
    </ClientOnly>
  );
}
