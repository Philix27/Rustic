"use client";
import { AppTopNavbar } from "@/comps";
import { useState } from "react";
import { trpc } from "@/lib";
import styled from "styled-components";
import { ActiveContent, Sidebar } from "../../_comps";

export default function TopicsClient(props: {
  book_id: string;
  chapter_id: string;
  topic_id: string;
}) {
  const { isLoading, data: book } = trpc.books.get_by_id.useQuery({
    book_id: props.book_id,
  });
  const { isLoading: isTopicLoading, data: topicsData } =
    trpc.book_chapter_topics.get_by_id.useQuery({ topic_id: props.topic_id });

  if (isTopicLoading) return <div>Topic Loading...</div>;
  if (isLoading) return <div>Book Loading...</div>;
  if (!book) return <div>No books available</div>;
  if (!topicsData.id) return <div>No Topic available</div>;
  return (
    <Wrapper>
      <div className={"sidebar"}>
        <Sidebar
          book_id={book.id}
          activeTopicId={props.topic_id}
          activeChapterId={props.chapter_id}
        />
      </div>
      <div className={"content_wrapper"}>
        <AppTopNavbar title={book.title} icons={[]} />
        <ActiveContent
          isFirstPage={true}
          bannerTitle={topicsData.title}
          subtitle={""}
          coverImage={topicsData.video_url}
          content={topicsData.content}
          editTopicId={props.topic_id}
        />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-height: 100vh;
  height: 100vh;
  display: flex;
  .sidebar {
    width: 300px;
    max-height: 100vh;
    min-height: calc(100vh - 40px);
  }
  .content_wrapper {
    width: calc(100% - 300px);
    flex-direction: column;
    max-height: 100vh;
    overflow-y: auto;
  }
`;
