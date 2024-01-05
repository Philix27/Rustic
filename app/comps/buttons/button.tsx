import React, { ReactNode } from "react";
import styled from "styled-components";

export function AppButton(props: {
  status?: "Default" | "Loading";
  children: ReactNode;
  onClick: () => void;
}) {
  if (props.status === "Loading") {
    return (
      <Button isDisabled onClick={props.onClick}>
        {props.children}
      </Button>
    );
  }
  return (
    <Button isDisabled={false} onClick={props.onClick}>
      {props.children}
    </Button>
  );
}

const Button = styled.button<{ isDisabled: boolean }>`
  padding: 8px 20px;
  background-color: ${(props) => props.theme.colors.backgroundLight};
  border: solid 1px ${(props) => props.theme.colors.backgroundLight};
  border-radius: 5px;
  margin-top: 20px;
  color: ${(props) => props.theme.colors.offWhite1};
  cursor: ${(props) => (props.isDisabled ? "disabled" : "pointer")};

  &:hover {
    background-color: ${(props) => props.theme.colors.backgroundDark};
    border: solid 1px ${(props) => props.theme.colors.grey1};
  }
`;
