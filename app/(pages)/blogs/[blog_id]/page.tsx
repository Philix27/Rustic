"use client";
import { AppBlogs } from "@/lib";
import {
  AppTopNavbar,
  AppWrapper,
  ClientOnly,
  Landing,
  MarkdownStyledComp,
} from "@/comps";

export default function Page({ params }: { params: { blog_id: string } }) {
  const activeContent = AppBlogs.filter(
    (v, index) => v.id === params.blog_id
  )[0];

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
        <MarkdownStyledComp markdown={activeContent.comp} />
      </AppWrapper>
    </ClientOnly>
  );
}
