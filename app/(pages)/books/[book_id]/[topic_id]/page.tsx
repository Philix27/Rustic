"use client";
import React from "react";
import TopicsClient from "./client";
import { useSearchParams } from "next/navigation";

export default function TopicsPage(props: {
  params: { topic_id: string; book_id: string };
}) {
  const searchParams = useSearchParams();

  const chapter_id = searchParams.get("chapter_id") ?? "1";
  return (
    <TopicsClient
      book_id={props.params.book_id}
      topic_id={props.params.topic_id}
      chapter_id={chapter_id}
    />
  );
}
