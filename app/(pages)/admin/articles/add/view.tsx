"use client";
import { AppTopNavbar } from "@/comps";
import React, { useState } from "react";
import { MdPreview, MdPublish, MdSwitchLeft } from "react-icons/md";
import PreviewComp from "./preview";
import WriteComp from "./write";

export default function View() {
  const [showDoc, setShowDoc] = useState<"WRITE" | "PREVIEW">("WRITE");
  const [docContent, setDocContent] = useState<{
    title: string;
    subtitle: string;
    content: string;
  }>({
    title: "",
    subtitle: "",
    content: "",
  });

  return (
    <>
      <AppTopNavbar
        title={"Write an article "}
        icons={[
          <MdPublish />,
          <MdPreview />,
          <MdSwitchLeft
            onClick={() => {
              showDoc === "PREVIEW"
                ? setShowDoc("WRITE")
                : setShowDoc("PREVIEW");
            }}
          />,
        ]}
      />
      {showDoc === "PREVIEW" ? (
        <PreviewComp
          title={docContent?.title}
          subtitle={docContent?.subtitle}
          markdown={docContent?.content}
        />
      ) : (
        <WriteComp />
      )}
    </>
  );
}
