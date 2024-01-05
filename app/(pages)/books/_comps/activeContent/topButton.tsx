import { IconButton, Text } from "@/comps";
import React from "react";
import { FaBookmark, FaComment } from "react-icons/fa";
import { MdFavorite, MdEdit } from "react-icons/md";
import styled from "styled-components";

export function TopButton(props: { title: string; onEditClick: VoidFunction }) {
  return (
    <Wrapper>
      <Text variant="B2">{props.title}</Text>
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
          <MdEdit onClick={props.onEditClick} />
        </IconButton>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  justify-content: space-between;
  padding: 10px 0;
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
  }
  .icons {
    display: flex;
  }
`;
