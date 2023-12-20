import React from "react";
import { AddTopicClient } from "./client";

export function AddTopicPage(props: {
  onClose: VoidFunction;
  book_id: string;
  chapter_id: string;
}) {
  return <AddTopicClient />;
}
