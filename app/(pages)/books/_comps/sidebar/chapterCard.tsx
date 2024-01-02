import { AppClerk, AppStyles, trpc } from "@/lib";
import styled from "styled-components";
import { Text } from "@/comps";
import React, { memo, useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { TopicCard } from "./topicCard";
import { useSession } from "@clerk/nextjs";

export const ChapterCard = memo(function ChapterCard(props: {
  book_id: string;
  activeChapterId?: string;
  activeTopicId?: string;
  setShowSheet: (value: React.SetStateAction<boolean>) => void;
}) {
  const { session } = useSession();
  const userRole = AppClerk.getUserRole(session);
  const [activeChapterId, setActiveChapterId] = useState(props.activeChapterId);

  const { isLoading, data: chapters } = trpc.book_chapter.get_all.useQuery(
    { book_id: props.book_id }
    // { enabled: false }
  );
  const { isLoading: isLoadingTopics, data: topics } =
    trpc.book_chapter_topics.get_by_book.useQuery(
      { book_id: props.book_id }
      // { enabled: false }
    );

  if (isLoading) return <Wrapper>Loading chapters...</Wrapper>;
  if (!chapters) return <div>No chapters</div>;
  if (chapters) {
    if (isLoadingTopics) return <Wrapper>Loading topics...</Wrapper>;
    if (topics) {
      const chaptersFormatted = chapters.map((chapter, i) => {
        return {
          ...chapter,
          topics: topics.filter((topic) => topic.chapter_id === chapter.id),
        };
      });
      return (
        <>
          <Wrapper>
            <div className="chapter_title">
              <Text variant={"B4"}>Content</Text>
            </div>
          </Wrapper>
          {chaptersFormatted.map((val, index) => {
            return (
              <Wrapper key={index}>
                <div
                  className="chapter_title"
                  onClick={() => setActiveChapterId(val.id)}
                >
                  <Text variant={"B4"}>{val.title}</Text>
                  {activeChapterId === val.id ? (
                    <MdArrowDropDown size={25} />
                  ) : (
                    <MdArrowDropUp size={25} />
                  )}
                </div>
                {activeChapterId === val.id && (
                  <TopicCard
                    book_id={props.book_id}
                    chapter_id={val.id}
                    topics={val.topics}
                    activeTopicId={props.activeTopicId}
                  />
                )}
              </Wrapper>
            );
          })}

          {userRole === "ADMIN" && (
            <Footer
              className={"trigger_text"}
              onClick={() => props.setShowSheet(true)}
            >
              <Text variant={"B5"} className="title">
                Add Chapter
              </Text>
            </Footer>
          )}
        </>
      );
    } else {
      return <Wrapper>No topics</Wrapper>;
    }
  } else {
    return <Wrapper>No chapters</Wrapper>;
  }
});
const Wrapper = styled.div`
  border-bottom: solid 1px ${AppStyles.colors.grey1};
  .chapter_title {
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
  }

  .add_div {
    background-color: ${AppStyles.colors.background3};
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const Footer = styled.div`
  padding: 10px;
  text-decoration: underline;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${AppStyles.colors.background3};
`;
