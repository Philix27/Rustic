import React from "react";
import styled from "styled-components";
import Text from "./comps/Text";

export default function Sidebar() {
  return (
    <Wrapper>
      <TopBar>
        <div>
          <Text variants="BarTitle">Tutorial</Text>
        </div>
        <div>
          <Text variants="BarTitle">MCQ</Text>
        </div>
        <div>
          <Text variants="BarTitle">Video</Text>
        </div>
        <div>
          <Text variants="BarTitle">Blog</Text>
        </div>
      </TopBar>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 400px;
  border-right: solid 0.1px gray;
  height: 100%;
`;
const TopBar = styled.div`
  width: 100%;
  height: 35px;
  background-color: #303030;
  /* padding: 0 20px; */
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    height: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    align-content: center;
    text-align: center;
    border-bottom: solid 2px #303030;
    &:hover {
      border-bottom: solid 2px white;
      p {
        color: white;
      }
    }
  }
`;
