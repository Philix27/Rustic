"use client";
import { AppTopNavbar } from "@/comps";
import { useState } from "react";
import { MdViewSidebar } from "react-icons/md";
import { trpc } from "@/_trpc";
import styled from "styled-components";
import { ActiveContent, Sidebar } from "../../_comps";

export default function TopicsClient(props: {
  book_id: string;
  topic_id: string;
}) {
  const [showSidebar, setShowSidebar] = useState(true);

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
      <AppTopNavbar
        title={book.title}
        icons={[
          <MdViewSidebar
            key={1}
            onClick={() => setShowSidebar((prev) => !prev)}
          />,
        ]}
      />
      <div className={"content_wrapper"}>
        {showSidebar && <Sidebar book_id={book.id} />}
        <ActiveContent
          isFirstPage={true}
          bannerTitle={topicsData.title}
          subtitle={""}
          cover_image={topicsData.video_url}
          content={topicsData.content}
        />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-height: 100vh;
  min-height: calc(100vh - 40px);
  .content_wrapper {
    display: flex;
    max-height: 100vh;
    overflow-y: auto;
  }
`;
