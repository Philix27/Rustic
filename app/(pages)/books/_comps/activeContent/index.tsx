import { MarkdownStyledComp, Landing, AppModal } from "@/comps";
import React, { useState } from "react";
import styled from "styled-components";
import { TopButton } from "./topButton";
import { AddBookTopicModal } from "../addTopicModal";
import { Navbar } from "./navbar";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
// import MDX from "@mdx-js/runtime";


export function ActiveContent(props: {
  isFirstPage: boolean;
  bannerTitle: string;
  subtitle: string;
  coverImage: string;
  content: string;
  editTopicId: string;
  book_id: string;
  activeChapterId?: string;
  activeTopicId?: string;
}) {
  const [showEditModal, setShowEditModal] = useState(false);
  const codeString = "(num) => num + 1";
  return (
    <Wrapper>
      {!props.editTopicId && (
        <Landing
          title={props.bannerTitle}
          imgUrl={props.coverImage}
          subtitle={props.subtitle}
          opacity={1}
        />
      )}
      <Navbar book_id={props.book_id} />
      <TopButton
        title={props.bannerTitle}
        onEditClick={() => setShowEditModal(true)}
      />
      <div className={"mdContentWrapper"}>
        <div className="mdWrapper">
          {/* <MDX>{props.content}</MDX> */}
          <MarkdownStyledComp markdown={props.content} />
        </div>
      </div>
      <AppModal isMounted={showEditModal}>
        <AddBookTopicModal
          onClose={() => setShowEditModal(false)}
          isEdit
          editTopicId={props.editTopicId}
          topicTitle={props.bannerTitle}
          topicContent={props.content}
        />
      </AppModal>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .mdContentWrapper {
    width: 90%;
    margin-bottom: 20px;
    .mdWrapper {
      width: 100%;

      /* display: flex; */
      /* justify-content: center; */
    }
  }
`;
