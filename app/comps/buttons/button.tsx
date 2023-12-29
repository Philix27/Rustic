import { AppStyles } from "@/lib";
import React, { ReactNode } from "react";
import styled from "styled-components";

export function AppButton(props: {
  status?: "Default" | "Loading";
  children: ReactNode;
  onClick: () => void;
}) {
  if (props.status === "Loading") {
    return <Button isDisabled>{props.children}</Button>;
  }
  return (
    <Button isDisabled={false} onClick={props.onClick}>
      {props.children}
    </Button>
  );
}

const Button = styled.button<{ isDisabled: boolean }>`
  padding: 8px 20px;
  background-color: ${AppStyles.colors.backgroundLight};
  border: solid 1px ${AppStyles.colors.backgroundLight};
  border-radius: 5px;
  margin-top: 20px;
  color: ${AppStyles.colors.offWhite1};
  cursor: ${(props) => (props.isDisabled ? "disabled" : "pointer")};

  &:hover {
    background-color: ${AppStyles.colors.backgroundDark};
    border: solid 1px ${AppStyles.colors.grey1};
  }
`;
