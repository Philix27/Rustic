"use client";
import { AppBlogs } from "@/lib/docs";
import { AppTopNavbar, AppWrapper, ClientOnly } from "@/comps";
import { MarkdownStyledComp } from "@/comps/markdown";
import { Landing } from "../../books/banner";

export default function Page({ params }: { params: { slug: string } }) {
  const activeContent = AppBlogs.filter((v, index) => v.id === params.slug)[0];
  console.log(params.slug, "SLUGGY");
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
