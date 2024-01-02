"use client";
import { AppTopNavbar } from "@/comps";
import React, { useState } from "react";
import { MdPreview, MdPublish, MdSwitchLeft } from "react-icons/md";
import {
  PreviewComp,
  WriteComp,
  ToggleButton,
} from "../../_comps/addTopicModal";
import { trpc } from "@/lib";

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

  // <MdSwitchLeft
  //   key={3}
  //   onClick={() => {
  //     showDoc === "PREVIEW"
  //       ? setShowDoc("WRITE")
  //       : setShowDoc("PREVIEW");
  //   }}
  // />,

  return (
    <>
      <AppTopNavbar
        title={isLoading ? "Write an article " : data.title}
        icons={[]}
      />
    </>
  );
}
