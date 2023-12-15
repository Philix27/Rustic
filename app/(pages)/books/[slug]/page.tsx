"use client";
import { AppWrapper, MarkdownStyledComp } from "@/comps";
import { Landing } from "../banner";
import { AppProjects } from "@/lib/docs/registryProject";

export default function ProjectsContentPage({
  params,
}: {
  params: { slug: string };
}) {
  const activeContent = AppProjects.filter(
    (v, index) => v.id === params.slug
  )[0];
  return (
    <AppWrapper title={"Topper"} subtitle={"Hello"}>
      <Landing
        title={activeContent.title}
        imgUrl={activeContent.cover_image}
        subtitle={activeContent.subtitle}
        opacity={1}
      />
      <MarkdownStyledComp>{activeContent.comp}</MarkdownStyledComp>
    </AppWrapper>
  );
}
