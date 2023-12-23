"use client";
import React from "react";
import TopicsClient from "./client";

export default function TopicsPage(props: {
  params: { topic_id: string; book_id: string };
}) {
  console.log(props.params.book_id, "book_id");
  console.log(props.params.topic_id, "topic_id");
  return (
    <TopicsClient
      book_id={props.params.book_id}
      topic_id={props.params.topic_id}
      chapter_id={""}
    />
  );
}
