import React, { useState } from "react";
import { AppClerk, AppStyles } from "@/lib";
import { AppModal, Text } from "@/comps";
import Link from "next/link";
import { styled } from "styled-components";
import { useSession } from "@clerk/nextjs";
import { AddTopicModal } from "@/(pages)/quiz/_comps";
import { AddBookTopicModal } from "../addTopicModal";

export function TopicCard(props: {
  chapter_id: string;
  book_id: string;
  topics: {
    id: string;
    title: string;
    content: string;
    video_url: string;
    created_at: Date;
    updated_at: Date;
    book_id: string;
    chapter_id: string;
  }[];
}) {
  const { session } = useSession();
  const userRole = AppClerk.getUserRole(session);
  const [showSheet, setShowSheet] = useState(false);
  return (
    <Wrapper>
      {props.topics.map((val, index) => (
        <Link href={`/books/${props.book_id}/${val.id}`} key={index}>
          <div className="topic_title">
            <Text variant={"B5"} className="title">
              {val.title}
            </Text>
          </div>
        </Link>
      ))}
      {userRole === "ADMIN" && (
        <div className="topic_title" onClick={() => setShowSheet(true)}>
          <Text variant={"B5"} className="title">
            Add Topic
          </Text>
        </div>
      )}
      <AppModal isMounted={showSheet}>
        <AddBookTopicModal
          onClose={() => setShowSheet(false)}
          book_id={props.book_id}
          chapter_id={props.chapter_id}
        />
      </AppModal>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0px;
  .topic_title {
    background-color: ${AppStyles.colors.background3};
    padding: 10px;
    padding-right: 20px;
    border-bottom: solid 1px ${AppStyles.colors.grey1};
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      opacity: 0.5;
      cursor: pointer;
      .title {
        color: white;
      }
    }
  }
`;
