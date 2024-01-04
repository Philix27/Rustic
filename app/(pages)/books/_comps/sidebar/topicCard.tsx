import React, { useState } from "react";
import { AppClerk, AppStyles, trpc } from "@/lib";
import { AppModal, AppToasterController, Text } from "@/comps";
import Link from "next/link";
import { styled } from "styled-components";
import { useSession } from "@clerk/nextjs";
import { AddBookTopicModal } from "../addTopicModal";
import { MdDelete } from "react-icons/md";

export function TopicCard(props: {
  chapter_id: string;
  book_id: string;
  activeTopicId?: string;
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

  const deleteTopic = trpc.book_chapter_topics.delete.useMutation();
  const handleDelete = (topic_id: string) => {
    deleteTopic.mutateAsync({ topic_id: topic_id }).then((msg) => {
      AppToasterController("Deleted successfully");
    });
  };
  return (
    <Wrapper>
      {props.topics.map((val, index) => (
        <TopicTitle is_active={props.activeTopicId === val.id} key={index}>
          {/* <Link href={`/books/${props.book_id}/${val.id}`}> */}
          <Link
            href={{
              pathname: `/books/${props.book_id}/${val.id}`,
              query: { chapter_id: props.chapter_id },
            }}
          >
            <Text variant={"B5"} className="title">
              {val.title}
            </Text>
          </Link>
          {userRole === "ADMIN" ? (
            <MdDelete onClick={() => handleDelete(val.id)} />
          ) : (
            <div></div>
          )}
        </TopicTitle>
      ))}
      {userRole === "ADMIN" && (
        <TopicTitle onClick={() => setShowSheet(true)}>
          <Text variant={"B5"} className="title">
            Add Topic
          </Text>
        </TopicTitle>
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
`;

const TopicTitle = styled.div<{ is_active?: boolean }>`
  background-color: ${(props) =>
    props.is_active ? AppStyles.colors.primary : AppStyles.colors.background3};
  padding: 10px 25px;
  padding-right: 20px;
  border-bottom: solid 1px ${AppStyles.colors.grey1};
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
  }
  .title {
    cursor: pointer;
  }
  &:hover {
    color: ${AppStyles.colors.primary};
    /* border-bottom: solid 1px ${AppStyles.colors.secondary}; */
    background-color: ${AppStyles.colors.primary};
    .title {
      color: ${AppStyles.colors.primary};
    }
  }
`;
