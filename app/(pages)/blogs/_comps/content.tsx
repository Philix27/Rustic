import { useRouter } from "next/router";
import { AppBlogs } from "@/lib";
import { AppWrapper, Landing, MarkdownStyledComp } from "@/comps";

export default function BlogContentPage() {
  const router = useRouter();
  const activeContent = AppBlogs.filter(
    (v, index) => v.id === router.query.slug
  )[0];
  return (
    <AppWrapper>
      <Landing
        title={activeContent.title}
        imgUrl={activeContent.cover_image}
        subtitle={activeContent.subtitle}
        opacity={0.5}
      />
      <MarkdownStyledComp markdown={activeContent.comp} />
    </AppWrapper>
  );
}
