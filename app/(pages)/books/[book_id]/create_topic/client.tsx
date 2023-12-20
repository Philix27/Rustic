"use client";
import { AppTopNavbar } from "@/comps";
import React, { useState } from "react";
import { MdPreview, MdPublish, MdSwitchLeft } from "react-icons/md";
import { PreviewComp, WriteComp, ToggleButton } from "./_comps";
import { trpc } from "@/_trpc";

export function AddTopicClient(props: { book_id: string }) {
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

  const { data, isLoading } = trpc.books.get_by_id.useQuery({
    book_id: props.book_id,
  });

  return (
    <>
      <AppTopNavbar
        title={isLoading ? "Write an article " : data.title}
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
      <ToggleButton showDoc={showDoc} setShowDoc={setShowDoc} />
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
