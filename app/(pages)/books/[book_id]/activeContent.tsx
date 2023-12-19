import { MarkdownStyledComp, Landing } from "@/comps";
import { ICustomStyles } from "@/lib";
import React from "react";

const s: ICustomStyles = {
  container: {
    maxHeight: "100vh",
    minHeight: "calc(100vh - 40px)",
  },
  contentWrapper: { display: "flex", maxHeight: "100vh", overflowY: "auto" },
  innerContentWrapper: { width: "100%", maxHeight: "100vh", overflowY: "auto" },
  mdWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  mdContentWrapper: {
    width: "100%",
  },
};

export default function ActiveContent(props: {
  isFirstPage: boolean;
  bannerTitle: string;
  subtitle: string;
  cover_image: string;
  content: string;
}) {
  return (
    <div style={s.innerContentWrapper}>
      <Landing
        title={props.bannerTitle}
        imgUrl={props.cover_image}
        subtitle={props.subtitle}
        opacity={1}
      />
      <div style={s.mdContentWrapper}>
        <div style={s.mdWrapper}>
          <MarkdownStyledComp>{props.content}</MarkdownStyledComp>
        </div>
      </div>
    </div>
  );
}
