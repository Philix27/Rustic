"use client";
import { AppBlogs } from "@/lib/docs";
import { AppTopNavbar, AppWrapper, ClientOnly } from "@/comps";
import { MarkdownStyledComp } from "@/comps/markdown";
import { Landing } from "../../books/banner";

export default function Page({ params }: { params: { blog_id: string } }) {
  const activeContent = AppBlogs.filter(
    (v, index) => v.id === params.blog_id
  )[0];
  console.log(params.blog_id, "SLUGGY");
  return (
    <ClientOnly>
      <AppTopNavbar title={activeContent.title} icons={[]} />
      <AppWrapper>
        <Landing
          title={activeContent.title}
          imgUrl={activeContent.cover_image}
          subtitle={activeContent.subtitle}
          opacity={0.5}
        />
        <MarkdownStyledComp>{activeContent.comp}</MarkdownStyledComp>
      </AppWrapper>
    </ClientOnly>
  );
}
