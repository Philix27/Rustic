"use client";
import { AppTopNavbar } from "@/comps";
import React, { useState } from "react";
import { MdPreview, MdPublish, MdSwitchLeft } from "react-icons/md";
import { PreviewComp, WriteComp } from "./_comps";

export function AddTopicClient() {
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
          <MdPublish key={1} />,
          <MdPreview key={2} />,
          <MdSwitchLeft
            key={3}
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
        <WriteComp docContent={docContent} setDocContent={setDocContent} />
      )}
    </>
  );
}
