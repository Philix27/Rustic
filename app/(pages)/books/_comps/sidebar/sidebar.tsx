import { AppClerk } from "@/lib";
import React, { useState } from "react";
import { ChapterCard } from "./chapterCard";
import { AppModal } from "@/comps";
import { AddChapterModal } from "../addChapterModal";
import styled from "styled-components";
import { useSession } from "@clerk/nextjs";

export function Sidebar(props: {
  book_id: string;
  activeChapterId?: string;
  activeTopicId?: string;
}) {
  const [showSheet, setShowSheet] = useState(false);
  const { session } = useSession();
  const userRole = AppClerk.getUserRole(session);

  return (
    <Wrapper>
      <ChapterCard
        book_id={props.book_id}
        activeTopicId={props.activeTopicId}
        activeChapterId={props.activeChapterId}
        setShowSheet={setShowSheet}
      />
      {userRole === "ADMIN" && (
        <AppModal isMounted={showSheet}>
          <AddChapterModal
            onClose={() => setShowSheet(false)}
            book_id={props.book_id}
          />
        </AppModal>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* min-height: 100vh; */
  max-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.colors.backgroundLight};
  /* border-top: solid 1px ${(props) => props.theme.colors.grey1}; */
  overflow-y: auto;
  scroll-behavior: smooth;

  .add_sec {
    background-color: ${(props) => props.theme.colors.background3};
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
