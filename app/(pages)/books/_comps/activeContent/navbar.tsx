import React, { useState } from "react";
import { Sidebar } from "../sidebar";
import styled from "styled-components";
import { IconButton, Text } from "@/comps";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export function Navbar(props: { book_id: string }) {
  const [showNav, setShowNav] = useState(false);

  return (
    <Wrapper>
      <div className="top" onClick={() => setShowNav((prev) => !prev)}>
        <Text variant="B4">Chapters</Text>
        {showNav ? (
          <IconButton size={20} iconSize={12}>
            <FaArrowDown />
          </IconButton>
        ) : (
          <IconButton size={20} iconSize={12}>
            <FaArrowUp />
          </IconButton>
        )}
      </div>
      {showNav && (
        <div className="nav">
          <Sidebar book_id={props.book_id} />
        </div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  .top {
    background-color: ${(props) => props.theme.colors.backgroundLight};
    padding: 5px 20px;
    border-bottom: solid 1px ${(props) => props.theme.colors.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    display: none;
    width: 100%;
    @media ${(props) => props.theme.breakpoints.sm} {
      display: flex;
    }
  }
  .nav {
    min-height: 40vh;
    height: 40vh;
    overflow-y: scroll;
    /* margin-top: 20px; */
    display: none;
    @media ${(props) => props.theme.breakpoints.sm} {
      display: block;
    }
  }
`;
