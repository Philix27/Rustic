import { AppStyles } from "@/lib";
import React, { useState } from "react";
import { ChapterCard } from "./chapterCard";
import { trpc } from "@/_trpc";
import { AppModal } from "@/comps";
import { AddChapterModal } from "../addChapterModal";
import styled from "styled-components";

export function Sidebar(props: {
  book_id: string;
  chapter_id: string;
  topic_id: string;
}) {
  const [showSheet, setShowSheet] = useState(false);

  const { isLoading, data: chapters } = trpc.book_chapter.get_all.useQuery({
    book_id: props.book_id,
  });

  const { isLoading: isLoadingChapter, data: topics } =
    trpc.book_chapter_topics.get_by_book.useQuery({
      book_id: props.book_id,
    });
  const openAddChapterModal = () => {
    setShowSheet(true);
  };

  const chaptersFormatted = chapters.map((chapter, i) => {
    return {
      ...chapter,
      topics: topics.filter(
        (topic, topic_index) => topic.chapter_id === chapter.id
      ),
    };
  });

  if (isLoadingChapter) return <Wrapper>Chapter Loading...</Wrapper>;
  if (!chapters) return <div>No chapters</div>;
  if (isLoading) return <Wrapper>Loading...</Wrapper>;

  return (
    <Wrapper>
      {chaptersFormatted.length &&
        chaptersFormatted.map((v, i) => (
          <ChapterCard
            chapter={v}
            key={i}
            book_id={props.book_id}
            chapter_id={props.chapter_id}
            topic_id={props.topic_id}
          />
        ))}
      <div className={"add_sec"}>
        <p className="trigger_text" onClick={openAddChapterModal}>
          Add Chapter
        </p>
      </div>
      <AppModal isMounted={showSheet}>
        <AddChapterModal
          onClose={() => setShowSheet(false)}
          book_id={props.book_id}
        />
      </AppModal>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  max-height: 100vh;
  width: 400px;
  background-color: ${AppStyles.colors.backgroundLight};
  border-top: solid 1px ${AppStyles.colors.grey1};
  overflow-y: auto;
  scroll-behavior: smooth;

  .add_sec {
    background-color: ${AppStyles.colors.background3};
    display: flex;
    align-items: center;
    flex-direction: column;
    p {
      font-size: 12px;
      padding: 10px;
      text-decoration: underline;
      cursor: pointer;
    }
    .trigger_text {
      font-size: 12px;
      padding: 10px;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
