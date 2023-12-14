"use client";
import { AppWrapper } from "../../comps/wrapper/wrapper";
import { MetaHeader } from "../../comps/global/meta";

import { ClientOnly } from "../../comps/cleint";
import BlogComp from ".";

interface PropTypes {
  slug: string;
  frontmatter: {
    [key: string]: string;
  };
}

export default function BlogsPage() {
  return (
    <ClientOnly>
      <AppWrapper title={"Blogs and Articles"} subtitle={"Blogs"}>
        <MetaHeader title={"Blogs | Software Engineering"} />
        <BlogComp />
      </AppWrapper>
    </ClientOnly>
  );
}
