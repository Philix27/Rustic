import React from "react";
import { AddTopicClient } from "./client";

export default function AddTopicPage({
  params,
}: {
  params: { book_id: string };
}) {
  return <AddTopicClient book_id={params.book_id} />;
}
