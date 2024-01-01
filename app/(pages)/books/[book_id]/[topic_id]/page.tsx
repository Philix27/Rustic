"use client";
import React from "react";
import TopicsClient from "./client";

export default function TopicsPage(props: {
  params: { topic_id: string; book_id: string };
}) {
  return (
    <TopicsClient
      book_id={props.params.book_id}
      topic_id={props.params.topic_id}
      chapter_id={""}
    />
  );
}
