import { AppStyles, ICustomStyles } from "@/lib";
import React from "react";
import { CSSProperties } from "styled-components";
import ChapterCard from "./chapterCard";
import { ChapterList } from "./chapterList";
import { trpc } from "@/_trpc";

const s: ICustomStyles = {
  wrapper: {
    minHeight: "100vh",
    maxHeight: "100vh",
    width: "30%",
    backgroundColor: AppStyles.colors.backgroundLight,
    borderTop: `solid 1px ${AppStyles.colors.grey1}`,
    overflowY: "auto",
    scrollBehavior: "smooth",
  },
  addDiv: {
    backgroundColor: AppStyles.colors.background3,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  text: {
    fontSize: "12px",
    padding: "10px",
    cursor: "pointer",
  },
  triggerText: {
    fontSize: "12px",
    padding: "10px",
    textDecoration: "underline",
    cursor: "pointer",
  },
};

export function Sidebar(props: { book_id: string }) {
  const { isLoading, data: chapters } = trpc.book_chapter.get_all.useQuery({
    book_id: props.book_id,
  });
  const { isLoading: isLoadingChapter, data: topics } =
    trpc.book_chapter_topics.get_by_book.useQuery({
      book_id: props.book_id,
    });

  if (isLoadingChapter) return <div>Loading...</div>;
  const chaptersFormatted = chapters.map((chapter, i) => {
    return {
      ...chapter,
      topics: topics.filter(
        (topic, topic_index) => topic.chapter_id === chapter.id
      ),
    };
  });
  if (isLoading) return <div>Loading...</div>;
  if (chapters.length) {
    return <div>No chapter available</div>;
  }
  const addChapter = () => {};
  return (
    <div style={s.wrapper}>
      {chaptersFormatted.length ? (
        chaptersFormatted.map((v, i) => <ChapterCard chapter={v} key={i} />)
      ) : (
        <div style={s.addDiv}>
          <p style={s.text}>No chapter available</p>
          <p style={s.triggerText} onClick={addChapter}>
            Add Chapter
          </p>
        </div>
      )}
    </div>
  );
}
