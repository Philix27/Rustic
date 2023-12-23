import { AppStyles, ICustomStyles } from "@/lib";
import React, { useState } from "react";
import { ChapterCard } from "./chapterCard";
import { trpc } from "@/_trpc";
import { AppModal } from "@/comps";
import { AddChapterModal } from "../addChapterModal";
import styled from "styled-components";

const s: ICustomStyles = {
  text: {
    fontSize: "12px",
    padding: "10px",
    cursor: "pointer",
  },
};

export function Sidebar(props: { book_id: string }) {
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
  if (isLoadingChapter) return <div>Loading...</div>;
  const chaptersFormatted = chapters.map((chapter, i) => {
    return {
      ...chapter,
      topics: topics.filter(
        (topic, topic_index) => topic.chapter_id === chapter.id
      ),
    };
  });
  if (isLoading) return <div style={s.wrapper}>Loading...</div>;
  // if (!chapters.length) {
  //   return (
  //     <div style={s.wrapper}>
  //       <div style={s.addDiv}>
  //         <p style={s.triggerText} onClick={openAddChapterModal}>
  //           Add Chapter
  //         </p>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <Wrapper>
      {chaptersFormatted.length &&
        chaptersFormatted.map((v, i) => (
          <ChapterCard chapter={v} key={i} book_id={props.book_id} />
        ))}

      <div className={"add_sec"}>
        <p style={s.triggerText} onClick={openAddChapterModal}>
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
  }
`;
