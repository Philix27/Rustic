"use client";
import { AppTopNavbar } from "@/comps";
import { useState } from "react";
import { MdViewSidebar } from "react-icons/md";
import { trpc } from "@/_trpc";
import styled from "styled-components";
import { Sidebar, ActiveContent } from "../_comps";

export default function BookClient(props: {
  book_id: string;
  chapter_id: string;
  topic_id: string;
}) {
  const [showSidebar, setShowSidebar] = useState(true);

  const { isLoading, data: book } = trpc.books.get_by_id.useQuery({
    book_id: props.book_id,
  });

  if (isLoading) return <div>Loading...</div>;
  if (!book) return <div>No books available</div>;
  return (
    <Wrapper>
      {showSidebar && (
        <Sidebar
          book_id={book.id}
          chapter_id={props.chapter_id}
          topic_id={props.topic_id}
        />
      )}
      <div className={"content_wrapper"}>
        <AppTopNavbar
          title={book.title}
          icons={[
            <MdViewSidebar
              key={1}
              onClick={() => setShowSidebar((prev) => !prev)}
            />,
          ]}
        />
        <ActiveContent
            isFirstPage={true}
            bannerTitle={book.title}
            subtitle={""}
            cover_image={book.img_url}
            content={book.desc}
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
    flex-direction: column;
    max-height: 100vh;
    overflow-y: auto;
  }
`;
