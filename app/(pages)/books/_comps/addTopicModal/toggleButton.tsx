import { AppStyles } from "@/lib";
import React from "react";
import { styled } from "styled-components";

export function ToggleButton(props: {
  showDoc: "WRITE" | "PREVIEW";
  setShowDoc: React.Dispatch<React.SetStateAction<"WRITE" | "PREVIEW">>;
}) {
  return (
    <Wrapper>
      <div className="content">
        <Button
          is_active={props.showDoc === "WRITE"}
          className={"button"}
          onClick={() => props.setShowDoc("WRITE")}
        >
          Write
        </Button>
        <div className="spacer"></div>
        <Button
          is_active={props.showDoc === "PREVIEW"}
          className={"button"}
          onClick={() => props.setShowDoc("PREVIEW")}
        >
          Preview
        </Button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
    border-radius: 8px;
    background-color: ${AppStyles.colors.backgroundLight};
    border: solid 1px ${AppStyles.colors.backgroundLight};

    .spacer {
      width: 10px;
    }
  }
`;

const Button = styled.div<{ is_active: boolean }>`
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${(props) =>
    props.is_active
      ? AppStyles.colors.backgroundDark
      : AppStyles.colors.backgroundLight};
`;
