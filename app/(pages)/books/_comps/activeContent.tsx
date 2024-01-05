import {
  MarkdownStyledComp,
  Landing,
  AppModal,
  Text,
  IconButton,
} from "@/comps";
import React, { useState } from "react";
import { MdEdit, MdFavorite } from "react-icons/md";
import styled from "styled-components";
import { AddBookTopicModal } from "./addTopicModal";
import { FaBookmark, FaComment } from "react-icons/fa";

export function ActiveContent(props: {
  isFirstPage: boolean;
  bannerTitle: string;
  subtitle: string;
  coverImage: string;
  content: string;
  editTopicId: string;
}) {
  const [showEditModal, setShowEditModal] = useState(false);
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

      <div className="utilities">
        <Text variant="B1">{props.bannerTitle}</Text>
        <div className="icons">
          <IconButton>
            <MdFavorite />
          </IconButton>
          <IconButton>
            <FaBookmark />
          </IconButton>
          <IconButton>
            <FaComment />
          </IconButton>
          <IconButton>
            <MdEdit onClick={() => setShowEditModal(true)} />
          </IconButton>
        </div>
      </div>
      
      <div className={"mdContentWrapper"}>
        <div className="mdWrapper">
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
  max-height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .utilities {
    display: flex;
    align-items: center;
    width: 80%;
    justify-content: space-between;
    padding: 10px 0;
    .icons {
      display: flex;
    }
  }
  .mdContentWrapper {
    width: 90%;
    .mdWrapper {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;
