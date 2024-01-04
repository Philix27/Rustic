import { MarkdownStyledComp, Landing, AppModal } from "@/comps";
import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import styled from "styled-components";
import { AddBookTopicModal } from "./addTopicModal";

export function ActiveContent(props: {
  isFirstPage: boolean;
  bannerTitle: string;
  subtitle: string
  coverImage: string;
  content: string;
  editTopicId: string;
}) {
  const [showEditModal, setShowEditModal] = useState(false);
  return (
    <Wrapper>
      <Landing
        title={props.bannerTitle}
        imgUrl={props.coverImage}
        subtitle={props.subtitle}
        opacity={1}
      />
      <div>
        <MdEdit onClick={() => setShowEditModal(true)} />
      </div>
      <div className={"mdContentWrapper"}>
        <div className="mdWrapper">
          <MarkdownStyledComp>{props.content}</MarkdownStyledComp>
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
  max-height: 100vh;
  overflow-y: auto;

  .mdContentWrapper {
    width: 100%;
    .mdWrapper {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;
